import { signOut } from "next-auth/react"

export default function Logout(){

    return (
        <form action={async () => {
            "use server"
            await signOut();
        }}>
            <button type="submit">로그아웃</button>
        </form>)
}