function Login(){
    return(
        <div className="Login">
    <h1> Login|Create new Account|Reset your Password</h1>
    <label>User Name:
        <br/>
        <input type="text" />
      </label>
      <br/>
      <label>Password:
        <br/>
        <input type="Password" />
      </label>
      <br/>
      <button>Login</button>
    </div>
    )
}
export default Login;