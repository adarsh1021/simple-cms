import { Box, Button, Container, Grid, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ProjectCard from "../../components/ProjectCard";

const DashboardView = ({ projects, createNewProject }) => {
  return (
    <Container maxWidth="lg">
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
          <Grid item sm={4}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DashboardView;
