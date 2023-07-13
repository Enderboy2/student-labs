import React from "react";
import Link from "next/link";
import Authentication from "./Authentication";

function Navbar() {
  return (
    <header className="!px-1 navbar sm:!px-10 bg-base-100">
      <div className="navbar-start">
        <Link href="/" className="text-xl no-underline normal-case">
          Student Labs
        </Link>
        <Link href="/client" className="text-xl no-underline normal-case">
          Client
        </Link>
        <Link href="/server" className="text-xl no-underline normal-case">
          Server
        </Link>
        <Link href="/api/auth/signout" className="text-xl no-underline normal-case">
          SignOut
        </Link>
      </div>

      <Authentication />
    </header>
  );
}

export default Navbar;
