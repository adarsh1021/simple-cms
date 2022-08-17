import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const CreateProjectDialog = ({ open, handleClose, handleCreateProject }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      <DialogTitle>Create Project</DialogTitle>
      <DialogContent>
        <DialogContentText>Create a new Project</DialogContentText>
        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          variant="contained"
          onClick={() => handleCreateProject({ title, description })}
        >
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateProjectDialog;
