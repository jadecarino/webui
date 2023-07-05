/*
 * Copyright contributors to the Galasa project
 */
import '../styles/global.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}