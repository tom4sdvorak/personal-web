import { Box, Divider, Typography } from "@mui/material";
import Rectangle from "../components/Rectangle";
import projects from '../data/projects.json';
import type { Project } from "../types/Project";
import ProjectCard from "../components/ProjectCard";


function ProjectsPage() {
  const myProjects: Project[] = projects as Project[];
  return (
    <Rectangle className="projects-page">
      <Typography variant="h3">Projects</Typography>
      <Divider variant="middle" />
      <Box>
        {myProjects.map((project) => (
          <>
            <ProjectCard 
              key={project.id} 
              {...project} 
            />
            <Divider sx={{ bgcolor: "primary.main" }}></Divider>
          </>
        ))}
      </Box>
    </Rectangle>
  );
}
export default ProjectsPage;