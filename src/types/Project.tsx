export type Project = {
  id: number;
  title: string;
  imagePath: string;
  description: string;
  technologies: string[];
  gitHubUrl?: string;
  link?: string; 
};