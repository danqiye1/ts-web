import { Eventing } from './Eventing';

export interface UserData {
  readonly id?: number, // id is only available if user is saved to db
  readonly name: string,
  readonly age: number
}

// Function type alias
type Callback = () => void;

export class User {

  private readonly events: Eventing = new Eventing()

  constructor(
    private readonly userdata: UserData
  ) {}

  get(propName: string): (string | number) {
    return this.userdata[propName];
  }

  set(updateData: UserData): User {
    return new User({...updateData});
  }
}