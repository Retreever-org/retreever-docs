import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import GitHubLogo from "../../public/github.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-(--dark-2) border-b border-(--dark-border) backdrop-blur sticky top-0 z-50">
      <div className="mx-auto max-w-screen-2xl px-4 py-2 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 select-none">
          <img
            src="/retreever-plain-light-logo.svg"
            alt="Retreever"
            className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link
            to="/docs"
            className="text-(--text-light) hover:text-(--rt-blue-1) transition-colors font-medium tracking-wide"
          >
            Docs
          </Link>

          <a
            href="https://github.com/Retreever-org"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-80 hover:opacity-100 transition-opacity flex items-center"
          >
            <img
              src={GitHubLogo}
              alt="GitHub"
              className="h-6 w-6"
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-(--text-light)"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-(--dark-border) bg-(--dark-1) px-4 pb-3 text-sm">
          <Link
            to="/docs"
            className="block py-2 text-(--text-light) hover:text-(--rt-blue-1) transition-colors"
            onClick={() => setOpen(false)}
          >
            Docs
          </Link>

          <a
            href="https://github.com/Retreever-org"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 text-(--text-light) hover:text-(--rt-blue-1) transition-colors items-center gap-2"
            onClick={() => setOpen(false)}
          >
            <img src={GitHubLogo} className="h-5 w-5" />
            GitHub
          </a>
        </div>
      )}
    </nav>
  );
}
