import Link from 'next/link';

export const NavBar = () => {
  return (
    <>
      <div className="px-10 py-4 bg-gray-900 text-white shadow-md shadow-gray-500">
        <div className="flex gap-10 justify-between max-w-6xl mx-auto">
          <div className="">
            <Link href="/">React Query Book Library</Link>
          </div>
          <div className="">
            <Link href="/create-book">+ Add new book</Link>
          </div>
        </div>
      </div>
    </>
  );
};
