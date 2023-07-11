import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function AuthenticationPages({ children }: Props) {
  return (
    <section className="md:grid md:grid-cols-2 full-height-except-navbar">
      <div className="max-md:hidden">Logo</div>
      <div>{children}</div>
    </section>
  );
}

export default AuthenticationPages;
