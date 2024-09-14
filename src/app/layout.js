import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Chelsea+Market&display=swap" rel="stylesheet" />    
        <link href="https://fonts.googleapis.com/css2?family=Caveat&family=Raleway&display=swap" rel="stylesheet" />    
        <link rel="stylesheet" href="fontawesome/all.css" />
        <link rel="stylesheet" href="fontawesome/fontawesome.css" />
        <link rel="stylesheet" href="style.css" />
        <title>Nafiz's Tetris</title>
    </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <audio id="fourlines" src="/audio/fourlines.wav"></audio>
        <audio id="oneline" src="/audio/oneline.wav"></audio>
        <audio id="gameover" src="/audio/gameover.wav"></audio>
        <span className="hidden hidethis">.</span>
        <span className="hidden2 hidethis">.</span>
        <script src="/piece.js"></script>
        <script src="/board.js"></script>
        <script src="/script.js"></script>
      </body>
    </html>
  );
}
