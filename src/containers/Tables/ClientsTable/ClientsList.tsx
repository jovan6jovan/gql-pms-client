import { FC } from "react";
import { RiUserAddLine } from "react-icons/ri";
import AddClientModal from "../../../components/Modals/AddClientModal/AddClientModal";
import useModal from "../../../hooks/useModal";
import { Client, ClientsData } from "../../../types";
import { SharedTableContainer } from "../SharedTableContainer/SharedTableContainer";
import ClientsTableRow from "./ClientsTableRow/ClientsTableRow";

interface Props {
  data: ClientsData;
}

const ClientsList: FC<Props> = ({ data }) => {
  const { isShowing, handleToggle } = useModal();

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
      <button onClick={() => handleToggle(true)}>
        <RiUserAddLine /> Add new client
      </button>
      <AddClientModal isShowing={isShowing} handleToggle={handleToggle} />
    </SharedTableContainer>
  );
};

export default ClientsList;
