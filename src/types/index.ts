export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface ClientsData {
  clients: Client[];
}

export enum ProjectStatus {
  "new" = "Not Started",
  "progress" = "In Progress",
  "completed" = "Completed",
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: ProjectStatus;
  client: Client;
}

export interface ProjectsData {
  projects: Project[];
}
