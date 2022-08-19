import { Box, Paper, Stack, Typography, Button } from "@mui/material";

const ItemContentView = ({ item, onClickCreateKVPair }) => {
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
    </Paper>
  );
};

export default ItemContentView;
