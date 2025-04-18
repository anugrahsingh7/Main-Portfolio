
import "./globals.css";
import Cursor from "@/components/Cursor";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Anugrah singh logo-modified (1).png" />
        <title>Anugrah Singh - Professional Portfolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`relative w-full min-h-screen bg-black overflow-x-hidden`}>
       <Cursor/>
        <div className="fixed inset-0 -z-10">
          <img className="w-full h-full object-cover" src="/RedBG2.jpeg" alt="bg image" />
        </div>
        {children}
      </body>
    </html>
  );
}
