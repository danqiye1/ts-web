import axios, { AxiosResponse } from 'axios';

interface UserData {
  readonly id?: number, // id is only available if user is saved to db
  readonly name: string,
  readonly age: number
}

// Function type alias
type Callback = () => void;

export class User {
  private readonly events: { [key: string]: Callback[] } = {}

  constructor(
    private readonly userdata: UserData
  ) {}

  get(propName: string): (string | number) {
    return this.userdata[propName];
  }

  set(updateData: UserData): User {
    return new User({...updateData});
  }

  /**
   * Function to register a event
   * @param event 
   * @param callback 
   */
  on(event: string, callback: Callback) : void {
    const handlers = this.events[event] || [];
    handlers.push(callback);
    this.events[event] = handlers
  }

  /**
   * Event Triggers
   * @param event
   */
  trigger(event: string): void {
    const handlers = this.events[event];

    if (handlers) {
      handlers.forEach(callback => callback())
    }
  }

  /**
   * Fetch a user based on the id
   * @param userid 
   * @returns 
   */
  static async fetch(userid: string) : Promise<User> {
    return axios.get(`http://localhost:3000/users/${userid}`)
      .then((response: AxiosResponse): User => {
        return new User(response.data);
      });
  }

  /**
   * Save User to DB
   */
  save(): void {
    const id = this.get('id')
    if (id) {
      axios.put(`http://locahost:3000/users/${id}`, this.userdata);
    } else {
      axios.post(`http://localhost:3000/users/${id}`, this.userdata);
    }
  }
}