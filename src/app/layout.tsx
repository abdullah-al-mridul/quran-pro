import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Quran Player Dashboard',
  description: 'Premium Audio Experience',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Noto+Sans+Arabic:wght@400;700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      </head>
      <body className="bg-background-dark text-slate-300 font-display h-screen overflow-hidden flex flex-col">
        {children}
      </body>
    </html>
  );
}
