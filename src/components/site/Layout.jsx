import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingActions from "./FloatingActions";

export default function Layout() {
  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      <Navbar />
      <main className="pb-20 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}