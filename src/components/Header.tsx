import { headsetIcon } from "../assets/svg_icons";

export default function Header(props: {title: string}) {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="#">{props.title}</a>
      <button>
        {headsetIcon}
      </button>
    </nav>
  );
}
