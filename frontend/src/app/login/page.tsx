import AuthenticationPages from "../sections/AuthenticationPages/AuthenticationPages";
import Link from "next/link";

function Login() {
  return (
    <AuthenticationPages>
      <form className="flex flex-col items-center gap-4" action="">
        <h3>Login</h3>
        <div className="w-full max-w-xs form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="Email"
            className="w-full max-w-xs input input-bordered input-secondary"
          />
        </div>
        <div className="w-full max-w-xs form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            className="w-full max-w-xs input input-bordered input-secondary"
          />
        </div>
        <div className="flex flex-col gap-3">
          <Link href="/register">Don't have an account?</Link>
          <button className="btn btn-secondary">Login</button>
        </div>
      </form>
    </AuthenticationPages>
  );
}

export default Login;
