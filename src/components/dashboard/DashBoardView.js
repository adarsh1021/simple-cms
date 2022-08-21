import { Box, Button, Container, Grid, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ProjectCard from "../ProjectCard";

const DashboardView = ({ projects, createNewProject }) => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          my: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h3">Projects</Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={createNewProject}
        >
          Create Project
        </Button>
      </Box>
      <Grid container spacing={2}>
        {projects.map((project) => (
          <Grid key={project.id} item sm={4}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DashboardView;
