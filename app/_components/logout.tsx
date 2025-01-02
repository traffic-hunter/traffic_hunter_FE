'use client'

import { signOut } from "next-auth/react"

export default function Logout() {

    const handleLogout = async () => {
        await signOut();
    }

    return (<button onClick={handleLogout}>로그아웃</button>)
}