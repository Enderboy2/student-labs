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
      </div>

      <Authentication />
    </header>
  );
}

export default Navbar;
