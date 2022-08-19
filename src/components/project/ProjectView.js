import { Container } from "@mui/material";
import Collections from "../collection/Collections";

const ProjectView = ({ project }) => {
  return (
    <Container maxWidth="xl">
      {project && <Collections project={project} />}
    </Container>
  );
};

export default ProjectView;
