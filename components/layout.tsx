import Head from 'next/head';
import { NavBar } from './nav-bar.components';

export const Layout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Book Library CRUD</title>
        <meta name="description" content="CRUD book library" />
      </Head>
      <div className="min-h-screen min-w-screen flex flex-col">
        <NavBar />
        <main className="flex-grow">{children}</main>
      </div>
    </>
  );
};
