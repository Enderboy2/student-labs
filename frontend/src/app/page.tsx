import Image from "next/image";
import { Hero } from "./sections";
import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import UserCard from "./components/UserCard"
import { SessionProvider } from "next-auth/react";
import { Session } from 'next-auth'
interface Props {
  Session: Session | null
}

const Home: React.FC<Props> = async ({ Session } ) => {
  const session = await getServerSession(options)
  return (
    <>
      {session ? (
        <UserCard user={session?.user} pagetype={"Home"}/>
      ) : (
        <Hero />
      )}
    </>
  );
}

export default Home