import { headsetIcon } from '../../utils/svg_icons';
import './index.scss';
import { headerTitle } from '../../utils/svg_icons';

export default function Header() {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="/">
        {headerTitle}
      </a>
      <button>{headsetIcon}</button>
    </nav>
  );
}
