
import Footer from "@/layout/Footer";
import "../../styles/globals.css";
import Header from "@/layout/Header";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="p-4">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
