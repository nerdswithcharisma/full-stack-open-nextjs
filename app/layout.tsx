import AuthSessionProvider from './components/SessionProvider';
import Nav from './components/Nav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthSessionProvider>
          <>
            <Nav />
            {children}
          </>
        </AuthSessionProvider>
      </body>
    </html>
  );
}
