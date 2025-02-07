import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main>
        <Navbar />
        <Footer />
      </body>
    </html>
  );
}
