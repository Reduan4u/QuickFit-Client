import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/Provider/AuthProvider";
import { Bounce, Flip, Slide, ToastContainer } from "react-toastify";
const inter = Inter({ subsets: ["latin"] });
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "QuickFit",
  description: "Stay Healthy, Stay Fit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
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
