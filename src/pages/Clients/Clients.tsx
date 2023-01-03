import { useQuery } from "@apollo/client";
import { FC } from "react";
import Spinner from "../../components/Spinner/Spinner";
import ClientsList from "../../containers/Tables/ClientsTable/ClientsList";
import { GET_CLIENTS } from "../../queries/clients";

const Clients: FC = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  return (
    <div>
      {loading && <Spinner />}
      {error && <div>Oops! Something went wrong.</div>}
      {!loading && !error && <ClientsList data={data} />}
    </div>
  );
};

export default Clients;
