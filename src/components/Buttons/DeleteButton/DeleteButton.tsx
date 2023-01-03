import { FC } from "react";
import { DeleteBtn } from "./DeleteButton.styles";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../../../mutations/clients";
import { Client, ClientsData } from "../../../types";
import { GET_CLIENTS } from "../../../queries/clients";

interface Props extends React.HTMLAttributes<HTMLElement> {
  onClick: () => void;
}

const DeleteButton: FC<Props> = ({ onClick }) => {
  return (
    <DeleteBtn onClick={onClick}>
      <RiDeleteBin7Fill />
    </DeleteBtn>
  );
};

export default DeleteButton;
