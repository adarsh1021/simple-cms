import { useUser } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import CreateProjectDialog from "../../components/CreateProjectDialog";
import BaseLayout from "../../layouts/BaseLayout";
import project from "../../services/project";
import DashboardView from "./DashBoardView";

const Dashboard = () => {
  const userContext = useUser();

  const [projects, setProjects] = useState([]);
  const [createProjectDialogOpen, setCreateProjectDialogOpen] = useState(false);

  useEffect(() => {
    loadAllProjects();
  }, []);

  const createProject = (data) => {
    project.create({ ...data, created_by: userContext.user.id });
  };

  const loadAllProjects = async () => {
    const { data, err } = await project.list();
    setProjects(data);
  };

  return (
    <BaseLayout>
      <DashboardView
        projects={projects}
        createNewProject={() => setCreateProjectDialogOpen(true)}
      />
      <CreateProjectDialog
        open={createProjectDialogOpen}
        handleClose={() => setCreateProjectDialogOpen(false)}
        handleCreateProject={createProject}
      />
    </BaseLayout>
  );
};

export default Dashboard;
