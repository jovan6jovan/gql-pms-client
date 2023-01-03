import { useMutation, useQuery } from "@apollo/client";
import { FC, FormEvent, useState } from "react";
import ReactDOM from "react-dom";
import { UPDATE_PROJECT } from "../../../mutations/projects";
import { GET_CLIENTS } from "../../../queries/clients";
import { GET_PROJECT } from "../../../queries/projects";
import { Client, Project, ProjectStatus } from "../../../types";
import "../Modal.css";

interface Props {
  isShowing: boolean;
  handleToggle: (shouldOpen: boolean) => void;
  project: Project;
}

const EditProjectModal: FC<Props> = ({ isShowing, handleToggle, project }) => {
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  const [status, setStatus] = useState(project.status);
  const [clientId, setClientId] = useState(project.client.id);
  const { data } = useQuery(GET_CLIENTS);

  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: { id: project.id, name, description, status },
    update(cache, { data: { updateProject } }) {
      cache.writeQuery({
        query: GET_PROJECT,
        data: { project: updateProject },
      });
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateProject();

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

export default EditProjectModal;
