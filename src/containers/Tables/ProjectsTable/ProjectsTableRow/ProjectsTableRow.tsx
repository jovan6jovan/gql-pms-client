import { useMutation } from "@apollo/client";
import { FC } from "react";
import { Link } from "react-router-dom";
import DeleteButton from "../../../../components/Buttons/DeleteButton/DeleteButton";
import { DELETE_PROJECT } from "../../../../mutations/projects";
import { GET_PROJECTS } from "../../../../queries/projects";
import { Project, ProjectsData } from "../../../../types";

interface Props {
  project: Project;
}

const ProjectsTableRow: FC<Props> = ({ project }) => {
  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: project.id },
    update(cache, { data: { deleteProject } }) {
      const { projects } = cache.readQuery({
        query: GET_PROJECTS,
      }) as ProjectsData;
      cache.writeQuery({
        query: GET_PROJECTS,
        data: {
          projects: projects.filter(
            (project: Project) => project.id !== deleteProject.id
          ),
        },
      });
    },
  });

  return (
    <tr>
      <Link to={`/project/${project.id}`}>
        <td>{project.name}</td>
      </Link>
      <td>{project.description}</td>
      <td>{project.status}</td>
      <td>
        <DeleteButton onClick={deleteProject} />
      </td>
    </tr>
  );
};

export default ProjectsTableRow;
