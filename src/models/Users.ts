interface UserData {
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
}