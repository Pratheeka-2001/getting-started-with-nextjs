import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import UserCard from '../(components)/UserCard';
import Link from "next/link";

const serverPage = async() => {
    const session = await getServerSession(options);

  return (
    <>
    <div>Server Page</div>
    {
        session ? (
            <UserCard user={session?.user} pagetype={"Server"}/>
        ) : (
            <div>
                <h1>Please LogIn</h1>
                <Link href='api/auth/signin/'>Sign In</Link>
            </div>
        )
    }
    </>
  )
}

export default serverPage