export default function Login() {
  return (
    <div className="login">
      <h3>Log In:</h3>
      <form>
        <table>
          <tr>
            <td>
              <label for="userName">Username: </label>
            </td>
            <td>
              <input type="text" id="userName" required />
            </td>
          </tr>
          <tr>
            <td>
              <label for="password">Password: </label>
            </td>
            <td>
              <input type="password" id="password" required />
            </td>
          </tr>            
        </table>
      </form>
    </div>
  )
}