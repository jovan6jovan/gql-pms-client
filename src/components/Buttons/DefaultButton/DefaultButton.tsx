import { FC, ReactNode } from "react";
import { DefaultBtn } from "./DefaultButton.styles";

interface Props extends React.HTMLAttributes<HTMLElement> {
  onClick: () => void;
  icon: ReactNode;
  text?: string;
}

const DefaultButton: FC<Props> = ({ onClick, icon, text }) => {
  return (
    <DefaultBtn onClick={onClick}>
      <div>
        {icon}
        {text}
      </div>
    </DefaultBtn>
  );
};

export default DefaultButton;
