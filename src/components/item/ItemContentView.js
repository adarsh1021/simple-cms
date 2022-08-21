import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Paper,
  Stack,
  Typography,
  Button,
  Grid,
  IconButton,
} from "@mui/material";

const ItemContentView = ({ item, onClickCreateKVPair, onClickEditKVPair }) => {
  return (
    <Paper sx={{ p: "1rem" }} elevation={6}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Box>
          <Typography variant="h5">{item.name}</Typography>
          <Typography variant="subtitle">{item.slug}</Typography>
        </Box>
        <Button
          variant="contained"
          color="secondary"
          onClick={onClickCreateKVPair}
        >
          Create Key-Value Pair
        </Button>
      </Stack>

      {Object.keys(item.data).map((key) => (
        <Grid
          key={key}
          container
          spacing={1}
          sx={{ mt: 2, alignItems: "center" }}
        >
          <Grid item lg={1}>
            <Stack direction="row">
              <IconButton onClick={() => onClickEditKVPair(key)}>
                <EditIcon />
              </IconButton>
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </Stack>
          </Grid>
          <Grid item lg={4}>
            {key}
          </Grid>
          <Grid item lg={2}>
            {item.metadata[key].type}
          </Grid>
          <Grid item lg={5}>
            {item.data[key]}
          </Grid>
        </Grid>
      ))}
    </Paper>
  );
};

export default ItemContentView;
