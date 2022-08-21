import { Container, Paper, Typography } from "@mui/material";
import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import useSimpleCMSCollection from "../../hooks/useSimpleCMSCollection";

const RealtimeNews = () => {
  const { collection, items } = useSimpleCMSCollection(
    supabaseClient,
    "news-feed"
  );
  return (
    <Container maxWidth="sm" sx={{ my: 4 }}>
      <Typography variant="h2" fontWeight="bold">
        Launch Week 5
      </Typography>
      <Typography sx={{ mt: 2 }} variant="h4" color="textSecondary">
        All the Supabase Launch Week 5 News in realtime!
      </Typography>

      {items
        .sort((a, b) =>
          new Date(a.created_at) < new Date(b.created_at) ? 1 : -1
        )
        .map((item) => (
          <Paper sx={{ my: 4, p: 2 }} key={item.id}>
            <Typography variant="h5">{item.data.heading}</Typography>
            <Typography variant="h3">{item.data.subheading}</Typography>
            <Typography variant="body1">{item.data.body}</Typography>
            {/* {item.name} */}
          </Paper>
        ))}
    </Container>
  );
};

export default RealtimeNews;
