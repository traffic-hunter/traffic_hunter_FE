import Image from 'next/image';
import HamburgerMenu from './_components/hamburger';
import SearchBar from './_components/seachBar';

export default function Home() {
  return (
    <>
      <header className="p-2">
        <div className="flex items-center justify-between h-12">
          <div>
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js Logo"
              width={80}
              height={80}
            />
          </div>
          <SearchBar />
          <div>
            <div className="flex relative items-center justify-center rounded-full overflow-hidden border border-gray-300 w-12 h-12">
              <Image
                src="/next.svg"
                alt="profile image"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <HamburgerMenu />
          <span>{'Home > Dashboard > Traffic-Hunter APM'}</span>
        </div>
      </header>
      <main className="grid grid-rows-2 grid-cols-3 gap-4 items-center sm:items-start w-full h-screen bg-red-200 p-4">
        {/* <Chart title="CPU Usage" />
        <Chart title="Memory Usage" />
        <Chart title="Thread" />
        <Chart title="Web-Server Thread Pool" />
        <Chart title="Web-Server Request" />
        <Chart title="DBCP" /> */}
      </main>
    </>
  );
}
