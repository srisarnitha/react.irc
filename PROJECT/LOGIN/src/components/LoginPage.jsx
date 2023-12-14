function LoginPage() {
  return (
    <div>
      <div class="container">
        <h2>LOGIN TO FLY HIGH!!</h2>
        <label for="uname"><b>USERNAME</b></label>
        <input type="text" placeholder="Enter Username" id="un" name="uname" required>
          </input>

        <label for="psw"><b>PASSWORD</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required>
        </input>
        <button type="submit">LOGIN</button>
        <p > <b>DON'T HAVE AN ACCOUNT TO FLY?</b><center><a href="url"><b>SIGN UP</b></a></center></p>
    </div>
    </div>
  )
}

export default LoginPage