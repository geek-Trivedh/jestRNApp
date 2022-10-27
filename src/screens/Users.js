class Users {
  static all() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1').then(res =>
      res.json(),
    );
  }
}
export default Users;
