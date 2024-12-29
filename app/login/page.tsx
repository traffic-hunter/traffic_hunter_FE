
import { signIn } from "@/auth"
 
export default function Signin() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github", {redirectTo : '/'})
      }}
    >
      <button type="submit">Signin with GitHub</button>
    </form>
  )
} 