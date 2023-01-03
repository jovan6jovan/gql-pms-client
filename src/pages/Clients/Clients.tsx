import { useQuery } from "@apollo/client";
import { FC } from "react";
import { RiUserAddLine } from "react-icons/ri";
import AddClientModal from "../../components/Modals/AddClientModal/AddClientModal";
import Spinner from "../../components/Spinner/Spinner";
import ClientsList from "../../containers/Tables/ClientsTable/ClientsList";
import useModal from "../../hooks/useModal";
import { GET_CLIENTS } from "../../queries/clients";

const Clients: FC = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);
  const { isShowing, handleToggle } = useModal();

  return (
    <div>
      {loading && <Spinner />}
      {error && <div>Oops! Something went wrong.</div>}
      {!loading && !error && <ClientsList data={data} />}
      <button onClick={() => handleToggle(isShowing)}>
        <RiUserAddLine /> Add new client
      </button>
      <AddClientModal
        isShowing={isShowing}
        handleToggle={() => handleToggle(isShowing)}
      />
    </div>
  );
};

export default Clients;
