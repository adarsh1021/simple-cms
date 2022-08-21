import { Container, Paper, Typography } from "@mui/material";
import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import useSimpleCMSCollection from "../../hooks/useSimpleCMSCollection";

const RealtimeNews = () => {
  const { collection, items } = useSimpleCMSCollection(
    supabaseClient,
    "launch-week-5"
  );
  return (
    <Container maxWidth="sm" sx={{ my: 4 }}>
      <Typography variant="h2" fontWeight="bold">
        {collection.title}
      </Typography>
      <Typography sx={{ mt: 2 }} variant="h4" color="textSecondary">
        {collection.description}
      </Typography>

      {items
        .sort((a, b) =>
          new Date(a.created_at) < new Date(b.created_at) ? 1 : -1
        )
        .map((item) => (
          <Paper sx={{ my: 4, p: 2 }} key={item.id}>
            <Typography variant="h3">{item.data.heading}</Typography>
            <Typography variant="body1">{item.data.body}</Typography>
          </Paper>
        ))}
    </Container>
  );
};

export default RealtimeNews;
