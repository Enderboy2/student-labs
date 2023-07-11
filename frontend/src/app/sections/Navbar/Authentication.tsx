"use client";
import Link from "next/link";

function Authentication() {
  return (
    <div className="flex gap-3 navbar-end">
      <Link href="/register" className="btn btn-primary">
        Register
      </Link>
      <Link href="/login" className="btn btn-secondary btn-outline">
        Login
      </Link>
    </div>
  );
}

export default Authentication;
