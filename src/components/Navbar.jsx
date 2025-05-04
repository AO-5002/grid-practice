import { Menu } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center">
        <Logo />
        <Menu color="white" size={40} />
      </nav>
    </>
  );
}
