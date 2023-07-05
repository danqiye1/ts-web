import { User } from './models/Users';

const user1 = new User({
  name: "Derp",
  age: 20
})

user1.save()

User.fetch("1")
  .then(user => {
    user.set({name: "Derpina", age: 19})
      .save();
  })
