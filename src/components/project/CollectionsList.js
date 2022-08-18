import AddIcon from "@mui/icons-material/Add";
import { Box, Fab, IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";
import CreateCollectionDialog from "./CreateCollectionDialog";

const CollectionsList = () => {
  const [createNewCollectionDialogOpen, setCreateNewCollectionDialogOpen] =
    useState(false);

  const handleCreateCollection = () => {
    // project.create({ ...data, created_by: userContext.user.id });
  };
  return (
    <>
      <Box>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h5">Collections</Typography>
          <Fab
            size="small"
            color="primary"
            onClick={() => setCreateNewCollectionDialogOpen(true)}
          >
            <AddIcon />
          </Fab>
        </Stack>
      </Box>
      <CreateCollectionDialog
        open={createNewCollectionDialogOpen}
        handleClose={() => setCreateNewCollectionDialogOpen(false)}
        handleCreateCollection={handleCreateCollection}
      />
    </>
  );
};

export default CollectionsList;
