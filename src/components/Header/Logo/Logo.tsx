import { FC } from "react";
import { Link } from "react-router-dom";
import { StyledLogo } from "./Logo.styles";

const Logo: FC = () => (
  <StyledLogo>
    <Link to="/">Logo</Link>
  </StyledLogo>
);

export default Logo;
