import Link from "next/link";
import { getServerSession } from "next-auth";
import LoginForm from "./(components)/LoginForm";

export default async function Home(){

  return (
    <>
    <Link href="/api/auth/signin">Login</Link>
    <h1>Home</h1>
    <LoginForm/>
    <Link href='api/auth/signout'>SignOut</Link>
    </>
  );
}
