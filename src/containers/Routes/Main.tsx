import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Clients from "../../pages/Clients/Clients";
import Landing from "../../pages/Landing/Landing";
import NotFound from "../../pages/NotFound/NotFound";
import Project from "../../pages/Project/Project";
import Projects from "../../pages/Projects/Projects";

const Main: FC = () => (
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/project/:id" element={<Project />} />
    <Route path="/clients" element={<Clients />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
export default Main;
