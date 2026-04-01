import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
<section className="bg-black">
    <footer className="max-w-7xl mx-auto footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
<nav>
    <h1 className="font-extrabold text-4xl mb-3.5">DigiTools</h1>
    <p>
      Premium digital tools for creators,<br/> professionals, and businesses. Work smarter<br/> with our suite of powerful tools.
    </p>
</nav>
  <nav>
    <h6 className="footer-title">Product</h6>
    <a className="link link-hover">Features</a>
    <a className="link link-hover">Pricing</a>
    <a className="link link-hover">Templates</a>
    <a className="link link-hover">Integrations</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About</a>
    <a className="link link-hover">Blog</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Press</a>
  </nav>
  <nav>
    <h6 className="footer-title">Resources</h6>
    <a className="link link-hover">Documentation</a>
    <a className="link link-hover">Help Center</a>
    <a className="link link-hover">Community</a>
    <a className="link link-hover">Contact</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
      <a className="text-2xl p-2 bg-white text-black rounded-full">
        <AiFillInstagram />
      </a >
      <a className="text-2xl p-2 bg-white text-black rounded-full">
        <FaFacebookSquare />
      </a>
      <a className="text-2xl p-2 bg-white text-black rounded-full">
        <FaXTwitter />
      </a>
    </div>
  </nav>
</footer>
<hr />
<footer className="max-w-7xl mx-auto footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
  <aside className="grid-flow-col items-center">
    <p>Copyright © {new Date().getFullYear()}  Digitools. All rights reserved.</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a>
      Privacy Policy 
    </a>
    <a> Terms of Service</a>
    <a> Cookies</a>
  </nav>
</footer>
</section>
    );
};

export default Footer;