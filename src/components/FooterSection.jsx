import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";
import Logo from "./Logo";
import MailComponent from "./MailComponent";

export default function FooterSection() {
  return (
    <>
      <footer className="bg-secondary md:col-start-1 md:col-end-5 lg:col-end-9 xl:col-end-13">
        <div className="xl:col-start-2 xl:col-end-12">
          <div className="mx-8 grid grid-cols-1 lg:grid-cols-2  text-white mt-8 ">
            <div className="flex flex-col items-start gap-12 col-start-1">
              <Logo />
              <p>FAQs</p>
              <p>Contact Us</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>
            <div className="col-start-1 mt-12 mb-12 lg:col-start-2">
              <MailComponent />
            </div>
            <div className="flex flex-row gap-8 mb-12 lg:mt-12 col-start-1">
              <Instagram size={32} />
              <Facebook size={32} />
              <Twitter size={32} />
              <Linkedin size={32} />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
