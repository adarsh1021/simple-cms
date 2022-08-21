import { Button, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import CreateItemDialog from "./CreateItemDialog";
import ItemsList from "./ItemsList";
// import { supabase } from "../../utils/supabaseClient";
import itemService from "../../services/item";
import ItemContentView from "./ItemContentView";
import CreateKVPairDialog from "./CreateKVPairDialog";
import { supabaseClient } from "@supabase/auth-helpers-nextjs";

const Item = ({ collection }) => {
  const [items, setItems] = useState([]);
  const [currItem, setCurrItem] = useState(null);
  const [createItemDialogOpen, setCreateItemDialogOpen] = useState(false);
  const [createKVPairDialogOpen, setCreateKVPairDialogOpen] = useState(false);
  const [editKVPairDefaults, setEditKVPairDefaults] = useState(null);

  const isSubscribed = useRef(false);

  useEffect(() => {
    if (collection) {
      loadAllItems();
    }

    // This is a hack for React >= v18 in Strict mode
    // ensures to always call on the last  mount and
    // correctly remove subscription on unmount
    let subscription = null;
    const timer = setTimeout(() => (subscription = subscribeToTable()), 1000);

    function subscribeToTable() {
      return supabaseClient
        .from("item")
        .on("*", (payload) => {
          handleItemRealtimeUpdate(payload);
        })
        .subscribe((msg) => {
          if (msg === "SUBSCRIBED") {
            isSubscribed.current = true;
          }
        });
    }

    return () => {
      if (!subscription) {
        return clearTimeout(timer);
      }

      supabaseClient.removeSubscription(subscription);
      isSubscribed.current = false;
    };
  }, [collection]);

  const handleItemRealtimeUpdate = (data) => {
    const newItem = data.new;
    if (newItem.id === currItem?.id) {
      setCurrItem(newItem);
    }
  };

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
      setEditKVPairDefaults(null);
    }
  };

  const onItemClick = (item) => {
    setCurrItem(item);
  };

  const handleCreateKVPair = async ({ key, value, type }) => {
    const metadata = currItem.metadata || {};
    const data = currItem.data || {};
    metadata[key] = { type: type };
    data[key] = value;
    await itemService.update(currItem.id, metadata, data);
    setCreateKVPairDialogOpen(false);
    setEditKVPairDefaults(null);
  };

  const onClickEditKVPair = (key) => {
    setEditKVPairDefaults({
      key,
      type: currItem.metadata[key]?.type,
      data: currItem.data[key],
    });
    setCreateKVPairDialogOpen(true);
  };

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
              onClickEditKVPair={onClickEditKVPair}
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
        handleClose={() => {
          setCreateKVPairDialogOpen(false);
          setEditKVPairDefaults(null);
        }}
        handleCreateKVPair={handleCreateKVPair}
        defaults={editKVPairDefaults}
      />
    </>
  );
};

export default Item;
