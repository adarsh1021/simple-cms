import { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";

const CreateItemDialog = ({ open, handleClose, handleCreateItem }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [slug, setSlug] = useState("");

  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      <DialogTitle>Create Item</DialogTitle>
      <DialogContent>
        <DialogContentText>Create a new Item</DialogContentText>
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoFocus
          margin="dense"
          id="title"
          label="Title"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          margin="dense"
          id="description"
          label="Description"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          autoFocus
          margin="dense"
          id="slug"
          label="Slug"
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          variant="contained"
          onClick={() => handleCreateItem({ name, description, slug })}
        >
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateItemDialog;
