import { FC } from "react";
import { Client, ClientsData } from "../../../types";
import { SharedTableContainer } from "../SharedTableContainer/SharedTableContainer";
import ClientsTableRow from "./ClientsTableRow/ClientsTableRow";

interface Props {
  data: ClientsData;
}

const ClientsList: FC<Props> = ({ data }) => {
  return (
    <SharedTableContainer>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.clients.map((client: Client) => (
            <ClientsTableRow key={client.id} client={client} />
          ))}
        </tbody>
      </table>
    </SharedTableContainer>
  );
};

export default ClientsList;
