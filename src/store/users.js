import { action } from "easy-peasy";

const users = {
  user: null,

  addUser: action((state, user) => {
    state.user = user;
  }),

  removeUser: action((state, user) => {
    state.user = null;
  }),
};

export default users;
