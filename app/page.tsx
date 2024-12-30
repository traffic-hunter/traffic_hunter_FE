import Image from 'next/image';
import HamburgerMenu from './_components/hamburger';
import SearchBar from './_components/seachBar';
import Link from 'next/link';
import { data, options } from './_lib/data';
import Chart from './_components/chart';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function Home() {

  const session = await auth();

  if(!session) redirect('/api/auth/signin')
  return (
    <>
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
            <span>{session.user?.name}님 반갑습니다.</span>
            <div className="flex relative items-center justify-center rounded-full overflow-hidden border border-gray-300 w-12 h-12 cursor-pointer">
              <Image
                src={session?.user?.image || ''}
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
      <main className="grid grid-rows-2 grid-cols-3 gap-4 sm:items-start w-full p-4">
        <Chart title="CPU Usage" type="bar" data={data} options={options} />
        <Chart title="Memory Usage" type="bar" data={data} options={options} />
        <Chart title="Thread" type="bar" data={data} options={options} />
        <Chart
          title="Web-Server Thread Pool"
          type="bar"
          data={data}
          options={options}
        />
        <Chart
          title="Web-Server Request"
          type="bar"
          data={data}
          options={options}
        />
        <Chart title="DBCP" type="bar" data={data} options={options} />
      </main>
    </>
  );
}
