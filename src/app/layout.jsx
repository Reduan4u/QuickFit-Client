import { Roboto, } from 'next/font/google'
import "./globals.css";
import AuthProvider from "@/components/Provider/AuthProvider";
import { Bounce, Flip, Slide, ToastContainer } from "react-toastify";
// const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ['400','500',  '700',  '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "QuickFit",
  description: "Stay Healthy, Stay Fit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={roboto.className}>
        <div className="">
          <AuthProvider>{children}</AuthProvider>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Bounce}
          />
        </div>
      </body>
    </html>
  );
}
