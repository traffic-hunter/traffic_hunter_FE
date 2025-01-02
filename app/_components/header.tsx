import Link from "next/link";
import Image from "next/image";
import SearchBar from "./seachBar";
import Logout from "./logout";
import HamburgerMenu from "./hamburger";
import { auth } from "@/auth";

export default async function Header() {

    const session = await auth();

    return (
        <header className="p-2">
            <div className="flex items-center justify-between h-12">
                <Link href="/" className='ml-2'>
                    <Image
                        className="dark:invert"
                        src="/next.svg"
                        alt="Next.js Logo"
                        width={60}
                        height={60}
                    />
                </Link>
                <SearchBar />
                <div className='flex items-center'>
                    <span>{session?.user?.name}님 반갑습니다.</span>
                    <div className="flex relative items-center justify-center rounded-full overflow-hidden border border-gray-300 w-12 h-12 cursor-pointer">
                        <Image
                            src={session?.user?.image || ''}
                            alt="profile image"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <Logout />
                </div>
            </div>
            <div className="flex items-center">
                <HamburgerMenu />
                <span>{'Home > Dashboard > Traffic-Hunter APM'}</span>
            </div>
        </header>
    );
};