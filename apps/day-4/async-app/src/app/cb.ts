import { users, posts } from './data';

export const getUser = (username, cb) => {
  setTimeout(() => {
    const user = users.find(u => u.name === username);
    if (!user) {
      cb('User not found!');
      return;
    }

    cb(null, user);
  }, 2000);
}