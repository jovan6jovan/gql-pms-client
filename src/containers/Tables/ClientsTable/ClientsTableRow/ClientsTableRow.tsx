import { useMutation } from "@apollo/client";
import { FC } from "react";
import { RiDeleteBin7Fill } from "react-icons/ri";
import DefaultButton from "../../../../components/Buttons/DefaultButton/DefaultButton";
import { DELETE_CLIENT } from "../../../../mutations/clients";
import { GET_CLIENTS } from "../../../../queries/clients";
import { GET_PROJECTS } from "../../../../queries/projects";
import { Client } from "../../../../types";

interface Props {
  client: Client;
}

const ClientsTableRow: FC<Props> = ({ client }) => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
  });

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <DefaultButton onClick={deleteClient} icon={<RiDeleteBin7Fill />} />
      </td>
    </tr>
  );
};

export default ClientsTableRow;
