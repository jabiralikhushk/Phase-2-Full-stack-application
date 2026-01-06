import './globals.css';

export const metadata = {
  title: 'Bonsai App',
  description: 'A modern full-stack todo application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='antialiased'>{children}</body>
    </html>
  );
}