import './index.scss';

export default function Header() {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="/">
        <img src="/assets/icons/title.svg"/>
      </a>
      <button>
        <img src="/assets/icons/headset.svg"/>
      </button>
    </nav>
  );
}
