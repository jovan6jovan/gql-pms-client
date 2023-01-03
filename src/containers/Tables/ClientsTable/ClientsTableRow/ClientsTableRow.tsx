import { useMutation } from "@apollo/client";
import { FC } from "react";
import DeleteButton from "../../../../components/Buttons/DeleteButton/DeleteButton";
import { DELETE_CLIENT } from "../../../../mutations/clients";
import { GET_CLIENTS } from "../../../../queries/clients";
import { Client, ClientsData } from "../../../../types";

interface Props {
  client: Client;
}

const ClientsTableRow: FC<Props> = ({ client }) => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    update(cache, { data: { deleteClient } }) {
      const { clients } = cache.readQuery({
        query: GET_CLIENTS,
      }) as ClientsData;
      cache.writeQuery({
        query: GET_CLIENTS,
        data: {
          clients: clients.filter(
            (client: Client) => client.id !== deleteClient.id
          ),
        },
      });
    },
  });

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <DeleteButton onClick={deleteClient} />
      </td>
    </tr>
  );
};

export default ClientsTableRow;
