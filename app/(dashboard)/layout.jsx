import Footer from "@/layout/Footer";
import "../../styles/globals.css";
import Header from "@/layout/Header";


export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
