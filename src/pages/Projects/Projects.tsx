import { useQuery } from "@apollo/client";
import { FC } from "react";
import Spinner from "../../components/Spinner/Spinner";
import ProjectsList from "../../containers/Tables/ProjectsTable/ProjectsList";
import { GET_PROJECTS } from "../../queries/projects";

const Projects: FC = () => {
  const { error, loading, data } = useQuery(GET_PROJECTS);

  return (
    <>
      {loading && <Spinner />}
      {error && <div>Oops! Something went wrong.</div>}
      {!loading && !error && <ProjectsList data={data} />}
    </>
  );
};

export default Projects;
