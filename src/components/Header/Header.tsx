import { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/clients">Clients</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
