import { User } from './models/Users';

User.fetch("1")
  .then(user => console.log(user))