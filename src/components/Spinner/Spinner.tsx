import { FC } from "react";
import { StyledSpinner, StyledSpinnerRoot } from "./Spinner.styles";

const Spinner: FC = () => (
  <StyledSpinnerRoot>
    <StyledSpinner viewBox="0 0 50 50">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="4"
      />
    </StyledSpinner>
  </StyledSpinnerRoot>
);

export default Spinner;
