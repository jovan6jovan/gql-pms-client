import { useQuery } from "@apollo/client";
import { FC } from "react";
import { RiEdit2Fill } from "react-icons/ri";
import { useParams } from "react-router-dom";
import EditProjectModal from "../../components/Modals/EditProjectModal/EditProjectModal";
import Spinner from "../../components/Spinner/Spinner";
import useModal from "../../hooks/useModal";
import { GET_PROJECT } from "../../queries/projects";

const Project: FC = () => {
  const { id } = useParams();
  const { isShowing, handleToggle } = useModal();
  const { error, loading, data } = useQuery(GET_PROJECT, { variables: { id } });

  return (
    <>
      {loading && <Spinner />}
      {error && <div>Oops! Something went wrong.</div>}
      {!loading && !error && (
        <div>
          Name of this project is {data.project.name}, and it belongs to{" "}
          {data.project.client.name}
          <p>Project's status: {data.project.status}</p>
          <button onClick={() => handleToggle(true)}>
            <RiEdit2Fill /> Edit this project
          </button>
          <EditProjectModal
            isShowing={isShowing}
            handleToggle={handleToggle}
            project={data.project}
          />
        </div>
      )}
    </>
  );
};

export default Project;
