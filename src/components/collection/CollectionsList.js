import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Fab,
  IconButton,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";

const CollectionsList = ({
  collections,
  handleCreateNewCollection,
  currCollection,
  onCollectionClick,
}) => {
  return (
    <>
      <Box>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h5">Collections</Typography>
          <Fab size="small" color="primary" onClick={handleCreateNewCollection}>
            <AddIcon />
          </Fab>
        </Stack>
        <List>
          {collections.map((collection) => (
            <ListItemButton
              key={collection.id}
              onClick={() => onCollectionClick(collection)}
              selected={collection.id === currCollection?.id}
            >
              <Typography>{collection.name}</Typography>
            </ListItemButton>
          ))}
        </List>
      </Box>
    </>
  );
};

export default CollectionsList;
