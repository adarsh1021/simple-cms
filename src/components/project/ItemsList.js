import AddIcon from "@mui/icons-material/Add";
import { Box, Fab, IconButton, Stack, Typography } from "@mui/material";

const ItemsList = () => {
  return (
    <Box>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h5">Items</Typography>
        <Fab size="small" color="primary">
          <AddIcon />
        </Fab>
      </Stack>
    </Box>
  );
};

export default ItemsList;
