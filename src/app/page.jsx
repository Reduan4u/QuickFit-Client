import Banner from "@/components/Home/banner/Banner";
import Footer from "@/components/Home/footer/Footer";
import Navbar from "@/components/Home/navbar/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div>

      <Link href="/about">      <button className="btn-primary">About</button>
      </Link>
      <Link href="/contact">      <button className="btn-secondary">Contact</button>
      </Link>
      <Banner></Banner>

    </div>
  );
}
