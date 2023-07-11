import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function AuthenticationPages({ children }: Props) {
  return (
    <div>
      <section className="md:grid md:grid-cols-2">
        <div className="max-md:hidden">Logo</div>
        <div>{children}</div>
      </section>
    </div>
  );
}

export default AuthenticationPages;
