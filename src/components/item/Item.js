import { Button, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CreateItemDialog from "./CreateItemDialog";
import ItemsList from "./ItemsList";

import itemService from "../../services/item";
import ItemContentView from "./ItemContentView";
import CreateKVPairDialog from "./CreateKVPairDialog";

const Item = ({ collection }) => {
  const [items, setItems] = useState([]);
  const [currItem, setCurrItem] = useState(null);
  const [createItemDialogOpen, setCreateItemDialogOpen] = useState(false);
  const [createKVPairDialogOpen, setCreateKVPairDialogOpen] = useState(false);

  useEffect(() => {
    if (collection) {
      loadAllItems();
    }
  }, [collection]);

  const loadAllItems = async () => {
    const { data, err } = await itemService.list(collection.id);
    setItems(data);
  };

  const handleCreateItem = async (item) => {
    if (collection) {
      await itemService.create({
        ...item,
        collection_id: collection.id,
        metadata: {},
        data: {},
      });
      loadAllItems();
      setCreateItemDialogOpen(false);
    }
  };

  const onItemClick = (item) => {
    setCurrItem(item);
  };

  const handleCreateKVPair = () => {};

  return (
    <>
      <Grid container spacing={2}>
        <Grid item lg={12}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h5">Items</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setCreateItemDialogOpen(true)}
            >
              New Item
            </Button>
          </Stack>
        </Grid>
        <Grid item lg={2}>
          <ItemsList
            items={items}
            onItemClick={onItemClick}
            currItem={currItem}
          />
        </Grid>
        <Grid item lg={10}>
          {currItem && (
            <ItemContentView
              item={currItem}
              onClickCreateKVPair={() => setCreateKVPairDialogOpen(true)}
            />
          )}
        </Grid>
      </Grid>
      <CreateItemDialog
        open={createItemDialogOpen}
        handleClose={() => setCreateItemDialogOpen(false)}
        handleCreateItem={handleCreateItem}
      />
      <CreateKVPairDialog
        open={createKVPairDialogOpen}
        handleClose={() => setCreateKVPairDialogOpen(false)}
        handleCreateKVPair={handleCreateKVPair}
      />
    </>
  );
};

export default Item;
