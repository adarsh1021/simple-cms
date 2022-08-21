import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Fab,
  IconButton,
  Stack,
  Typography,
  List,
  ListItemButton,
} from "@mui/material";

const ItemsList = ({ items, onItemClick, currItem }) => {
  return (
    <List>
      {items.map((item) => (
        <ListItemButton
          key={item.id}
          onClick={() => onItemClick(item)}
          selected={item.id === currItem?.id}
        >
          <Typography>{item.name}</Typography>
        </ListItemButton>
      ))}
    </List>
  );
};

export default ItemsList;
