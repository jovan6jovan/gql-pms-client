import { useMutation, useQuery } from "@apollo/client";
import { FC, FormEvent, useState } from "react";
import ReactDOM from "react-dom";
import { ADD_PROJECT } from "../../../mutations/projects";
import { GET_CLIENTS } from "../../../queries/clients";
import { GET_PROJECTS } from "../../../queries/projects";
import { Client, ProjectsData, ProjectStatus } from "../../../types";
import "../Modal.css";

interface Props {
  isShowing: boolean;
  handleToggle: (shouldOpen: boolean) => void;
}

const AddProjectModal: FC<Props> = ({ isShowing, handleToggle }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(ProjectStatus.new);
  const [clientId, setClientId] = useState("");
  const { loading, error, data } = useQuery(GET_CLIENTS);

  const [addProject] = useMutation(ADD_PROJECT, {
    variables: { name, description, status, clientId },
    update(cache, { data: { addProject } }) {
      const { projects } = cache.readQuery({
        query: GET_PROJECTS,
      }) as ProjectsData;

      cache.writeQuery({
        query: GET_PROJECTS,
        data: { projects: [...projects, addProject] },
      });
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addProject();

    setName("");
    setDescription("");
    setStatus(ProjectStatus.new);
    setClientId("");

    handleToggle(false);
  };

  if (loading) {
    return <></>;
  }

  if (error) {
    return <p>Oops! Something went wrong</p>;
  }

  return !loading && !error && isShowing
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
                <textarea
                  className="input"
                  name="description"
                  id="description"
                  placeholder="description"
                  rows={7}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <select
                  name="status"
                  id="status"
                  className="form-select"
                  value={status}
                  onChange={(e) => setStatus(e.target.value as ProjectStatus)}
                >
                  <option value="">Select status</option>
                  <option value="new">{ProjectStatus.new}</option>
                  <option value="progress">{ProjectStatus.progress}</option>
                  <option value="completed">{ProjectStatus.completed}</option>
                </select>
                <select
                  id="clientId"
                  className="form-select"
                  value={clientId}
                  onChange={(e) => setClientId(e.target.value)}
                >
                  <option value="">Select Client</option>
                  {data.clients.map((client: Client) => (
                    <option key={client.id} value={client.id}>
                      {client.name}
                    </option>
                  ))}
                </select>
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

export default AddProjectModal;
