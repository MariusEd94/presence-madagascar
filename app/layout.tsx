import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PRESENCE MADAGASCAR",
  description:
    "PRESENCE MADAGASCAR est une association suisse active à Madagascar à la récupération des enfants les plus vulnérables",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-theme="bourdon">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav>
          <div className="navbar shadow-sm font-bold text-3xl">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />{" "}
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <Link href="/">A Propos</Link>
                  </li>
                  <li>
                    <Link href="">Nos projets</Link>
                    <ul className="p-2">
                      <li>
                        <Link href="/ecole">Ecoles</Link>
                      </li>
                      <li>
                        <Link href="/centre">Centre d'accueil</Link>
                      </li>
                      <li>
                        <Link href="/fa">Familles d'accueil</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/article">Actualités</Link>
                  </li>
                  <li>
                    <Link href="/historique">Historiques</Link>
                  </li>

                  <li>
                    <Link href="/fondateur">Fondateur</Link>
                  </li>
                </ul>
              </div>
              <Link href="/" className="btn btn-ghost text-xl x">
                <Image
                  src="/images/home/logo.jpg"
                  alt="logo presence madagascar"
                  width={82}
                  height={40}
                />
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-lg text-gray-600">
                <li>
                  <Link href="/">A Propos</Link>
                </li>
                <li>
                  <details>
                    <summary>Nos projets</summary>
                    <ul className="p-2">
                      <li>
                        <Link href="/ecole">Ecoles</Link>
                      </li>
                      <li>
                        <Link href="/centre">Centre d'accueil</Link>
                      </li>
                      <li>
                        <Link href="/fa">Familles d'accueil</Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <Link href="/article">Actualités</Link>
                </li>
                <li>
                  <Link href="/historique">Historiques</Link>
                </li>

                <li>
                  <Link href="/fondateur">Fondateur</Link>
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              <Link href="/don" className="btn btn-success">
                SOUTENIR NOTRE MISSION
              </Link>
            </div>
          </div>
        </nav>

        <main>{children}</main>

        <footer>
          <div className="p-8 bg-gray-200">
            <div className="grid md:grid-cols-3 lg:grid-cols-3">
              <div>
                <div className="text text-md text-warning text-center mx-auto">
                  A propos
                </div>
                <div className="mx-auto text text-center text-md ">
                  Nous sommes une association Suisse active à Madagascar depuis
                  2005 à la récupération sociale d’enfants et d’adolescents
                  vulnérables.
                </div>
                <div></div>
              </div>
              <div>
                <div className="text text-md text-warning text-center mx-auto">
                  Contact
                </div>
                <div className="mx-auto text text-center text-md ">
                  Bertrand Gallay <br />
                  Tel: 0041 79 689 06 50 <br />
                  Email: bertrand.gallay@gmail.com <br />
                  Pierre Morard <br />
                  Tel: 0041 78 655 00 31 <br />
                  Email: morardpierre@hotmail.com <br />
                  Facebook: Présence Madagascar <br />
                </div>
              </div>
              <div>
                <div className="mx-auto text text-center text-md ">
                  © Copyright Présence Madagascar. All Rights Reserved <br />
                  Website designed by Marius Edrich
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
