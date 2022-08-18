import { Container, Grid } from "@mui/material";
import CollectionsList from "./CollectionsList";
import ItemsList from "./itemsList";

const ProjectView = ({ project }) => {
  console.log(project);

  return (
    <Container maxWidth="xl">
      <Grid container spacing={4}>
        <Grid item lg={2}>
          <CollectionsList project={project} />
        </Grid>
        <Grid item lg={2}>
          <ItemsList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProjectView;
