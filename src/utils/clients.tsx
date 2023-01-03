import { Client, ClientsData } from "../types";

export const generateClientsDataList = (data: ClientsData) =>
  data.clients.map((client: Client) => (
    <ul key={client.id}>
      <li>Name: {client.name}</li>
      <li>Email: {client.email}</li>
      <li>Phone: {client.phone}</li>
    </ul>
  ));
