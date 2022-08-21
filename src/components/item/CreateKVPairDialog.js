import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const CreateKVPairDialog = ({
  open,
  handleClose,
  handleCreateKVPair,
  defaults = null,
}) => {
  const [key, setKey] = useState("");
  const [type, setType] = useState("text");
  const [value, setValue] = useState("");
  const [slug, setSlug] = useState("");

  useEffect(() => {
    if (defaults?.key) setKey(defaults.key);
    if (defaults?.type) setType(defaults.type);
    if (defaults?.value) setValue(defaults.value);

    return () => {
      setKey("");
      setType("");
      setValue("");
    };
  }, [defaults]);

  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      <DialogTitle>Create Key-Value Pair</DialogTitle>
      <DialogContent>
        <DialogContentText>Create a new Key-Value Pair</DialogContentText>
        <TextField
          value={key}
          disabled={defaults !== null}
          onChange={(e) => setKey(e.target.value)}
          autoFocus
          margin="dense"
          id="key"
          label="Key"
          type="text"
          fullWidth
          variant="standard"
        />
        <FormControl sx={{ mt: "1rem" }} fullWidth>
          <InputLabel id="select-type-label">Type</InputLabel>
          <Select
            labelId="select-type-label"
            id="select-type"
            value={type}
            label="Type"
            onChange={(e) => setType(e.target.value)}
          >
            <MenuItem value="text">Text</MenuItem>
            {/* <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem> */}
          </Select>
        </FormControl>
        <TextField
          value={value}
          onChange={(e) => setValue(e.target.value)}
          margin="dense"
          id="value"
          label="Value"
          type="text"
          fullWidth
          variant="standard"
        />
        {/*
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
        /> */}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          variant="contained"
          onClick={() => handleCreateKVPair({ key, type, value })}
        >
          {defaults ? "Edit" : "Create"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateKVPairDialog;
