import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';

export interface UserData {
  readonly id?: number, // id is only available if user is saved to db
  readonly name: string,
  readonly age: number
}

// Function type alias
type Callback = () => void;

const rootURL = "http://localhost:3000/users/";

export class User {
  private readonly events: Eventing = new Eventing();
  private readonly sync: Sync<UserData> = new Sync<UserData>(rootURL);
  private readonly attributes: Attributes<UserData>;

  constructor(userdata: UserData) {
    this.attributes = new Attributes<UserData>(userdata);
  }
}