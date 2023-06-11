export default function Login() {
  return (
    <div className="Login">
      <div className="card">
        <h1>login</h1>
        <input placeholder="Username" type="text" />
        <input placeholder="Password" type="password" />
        <button>Access</button>
      </div>
      <div className="wrong">Login or password is wrong!</div>
    </div>
  );
}
