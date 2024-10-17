import './globals.css';

export const metadata = {
  title: 'Anime',
  description: 'Watch anime',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  );
}
