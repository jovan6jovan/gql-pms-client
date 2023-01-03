import { useMutation } from "@apollo/client";
import { FC, FormEvent, useState } from "react";
import ReactDOM from "react-dom";
import { ADD_CLIENT } from "../../../mutations/clients";
import { GET_CLIENTS } from "../../../queries/clients";
import { ClientsData } from "../../../types";
import "../Modal.css";

interface Props {
  isShowing: boolean;
  handleToggle: (shouldOpen: boolean) => void;
}

const AddClientModal: FC<Props> = ({ isShowing, handleToggle }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [addClient] = useMutation(ADD_CLIENT, {
    variables: { name, email, phone },
    update(cache, { data: { addClient } }) {
      const { clients } = cache.readQuery({
        query: GET_CLIENTS,
      }) as ClientsData;

      cache.writeQuery({
        query: GET_CLIENTS,
        data: { clients: [...clients, addClient] },
      });
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addClient();

    setName("");
    setEmail("");
    setPhone("");
    handleToggle(false);
  };

  return isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="close-button-wrapper">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => handleToggle(false)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form className="form" onSubmit={handleSubmit}>
                <input
                  className="input"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  className="input"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  className="input"
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <button className="submit-button" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </>,
        document.body
      )
    : null;
};

export default AddClientModal;
