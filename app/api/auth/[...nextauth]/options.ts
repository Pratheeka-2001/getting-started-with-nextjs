import { NextAuthOptions } from "next-auth";
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
    pages:{
        signIn: '/',
        signOut: '/'
    },
    providers: [
        GitHubProvider({
            clientId: process.env.GitHub_ID as string,
            clientSecret: process.env.GitHub_Secret as string,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: 'Username:',
                    type: "text",
                    placeholder: "your-cool-username"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "your-secret-password"
                }
            },
            async authorize(credentials) {
                //This is where youu need to retrieve user data to verify
                const user = {id: "07", name: "sakshi", password: "best"}
                
                if(credentials?.username === user.name && credentials?.password === user.password) {
                    return user;
                } else {
                    return null;
                }
            }
        })
    ],
}