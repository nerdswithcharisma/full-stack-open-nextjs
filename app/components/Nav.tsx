'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';

const Nav = () => {
  const { data: session } = useSession();
  return (
    <>
      <nav>
        <Link href="/">home</Link>
        {' | '}
        <Link href="/notes">notes</Link>
        {' | '}
        {session ? (
          <>
            <Link href="/notes/new">create note</Link> {' | '}
          </>
        ) : null}

        <Link href="/users">users</Link>
        {' | '}
        <Link href="/blogs">blog posts</Link>
        {' | '}
        {session ? (
          <>
            <Link href="/blogs/new">create post</Link> {' | '}
          </>
        ) : null}
        {session ? <Link href="/logout">logout</Link> : null}
        {!session ? (
          <>
            <Link href="/login">login</Link> {' | '}{' '}
            <Link href="/register">register</Link>{' '}
          </>
        ) : null}
      </nav>
    </>
  );
};
export default Nav;
