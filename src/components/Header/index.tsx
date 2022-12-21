import { headsetIcon } from "../../assets/svg_icons";
import './index.scss'
import { headerTitle } from "../../assets/svg_icons";

export default function Header() {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="/">
        {headerTitle}
      </a>
      <button>
        {headsetIcon}
      </button>
    </nav>
  );
}
