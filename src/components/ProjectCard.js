import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useRouter } from "next/router";
const ProjectCard = ({ project }) => {
  const router = useRouter();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => router.push(`/project/${project.id}`)}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {project.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default ProjectCard;
