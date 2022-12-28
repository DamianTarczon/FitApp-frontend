import './index.scss';

export default function Header() {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="/">
        <img src="/assets/icons/title.svg" alt="title"/>
      </a>
      <button>
        <img src="/assets/icons/headset.svg" alt="headset"/>
      </button>
    </nav>
  );
}
