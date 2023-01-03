import { FC } from "react";
import { RiAddCircleFill } from "react-icons/ri";
import AddProjectModal from "../../../components/Modals/AddProjectModal/AddProjectModal";
import useModal from "../../../hooks/useModal";
import { ProjectsData } from "../../../types";
import { SharedTableContainer } from "../SharedTableContainer/SharedTableContainer";
import ProjectsTableRow from "./ProjectsTableRow/ProjectsTableRow";

interface Props {
  data: ProjectsData;
}

const ProjectsList: FC<Props> = ({ data }) => {
  const { isShowing, handleToggle } = useModal();

  return data.projects.length ? (
    <SharedTableContainer>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.projects.map((project) => (
            <ProjectsTableRow key={project.id} project={project} />
          ))}
        </tbody>
      </table>
      <button onClick={() => handleToggle(true)}>
        <RiAddCircleFill /> Add new project
      </button>
      <AddProjectModal isShowing={isShowing} handleToggle={handleToggle} />
    </SharedTableContainer>
  ) : (
    <></>
  );
};

export default ProjectsList;
