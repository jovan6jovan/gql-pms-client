import { FC } from "react";
import { Link } from "react-router-dom";
import { StyledNavigation } from "./Navigation.styles";

const Navigation: FC = () => (
  <StyledNavigation>
    <ul>
      <li>
        <Link to="/clients">Clients</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
    </ul>
  </StyledNavigation>
);

export default Navigation;
