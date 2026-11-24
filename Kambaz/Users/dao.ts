import { v4 as uuidv4 } from "uuid";
// Operates on db.users directly (not a local copy) so other DAOs,
// such as the People table lookup, see users created or updated here.
export default function UsersDao(db) {
  const findAllUsers = () => db.users;
  const findUserById = (userId) => db.users.find((user) => user._id === userId);
  const findUserByUsername = (username) =>
    db.users.find((user) => user.username === username);
  const findUserByCredentials = (username, password) =>
    db.users.find(
      (user) => user.username === username && user.password === password,
    );
  const createUser = (user) => {
    const newUser = { ...user, _id: uuidv4() };
    db.users = [...db.users, newUser];
    return newUser;
  };
  const updateUser = (userId, userUpdates) => {
    db.users = db.users.map((u) =>
      u._id === userId ? { ...u, ...userUpdates, _id: userId } : u,
    );
    return findUserById(userId);
  };
  const deleteUser = (userId) => {
    db.users = db.users.filter((u) => u._id !== userId);
    db.enrollments = db.enrollments.filter((e) => e.user !== userId);
  };
  return {
    findAllUsers,
    findUserById,
    findUserByUsername,
    findUserByCredentials,
    createUser,
    updateUser,
    deleteUser,
  };
}
