import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProjectView from "../../components/project/ProjectView";
import BaseLayout from "../../layouts/BaseLayout";
import projectService from "../../services/project";

const Project = () => {
  const router = useRouter();
  const { projectId } = router.query;

  const [project, setProject] = useState(null);

  useEffect(() => {
    if (projectId) loadProject();
  }, [projectId]);

  const loadProject = async () => {
    const { data, err } = await projectService.get(projectId);
    setProject(data);
  };

  return (
    <BaseLayout>
      <ProjectView project={project} />
    </BaseLayout>
  );
};

export default Project;
