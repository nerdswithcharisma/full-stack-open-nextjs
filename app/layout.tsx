import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">home</Link>
          {' | '}
          <Link href="/notes">notes</Link>
          {' | '}
          <Link href="/notes/new">create note</Link>
          {' | '}
          <Link href="/users">users</Link>
        </nav>
        <br />
        <nav>
          <Link href="/blogs">blog</Link>
          {' | '}
          <Link href="/blogs/new">create post</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
