import { AuthenticationPages } from "../sections";
import Link from "next/link";

function Register() {
  return (
    <AuthenticationPages>
      <form className="flex flex-col items-center gap-4" action="">
        <h3>Register</h3>
        <div className="w-full max-w-xs form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="Email"
            className="w-full max-w-xs input input-bordered input-primary"
          />
        </div>
        <div className="w-full max-w-xs form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            className="w-full max-w-xs input input-bordered input-primary"
          />
        </div>
        <div className="w-full max-w-xs form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full max-w-xs input input-bordered input-primary"
          />
        </div>
        <div className="flex flex-col gap-3">
          <Link href="/login">Already have an account?</Link>
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </AuthenticationPages>
  );
}

export default Register;
