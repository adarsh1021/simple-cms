import { Grid, Typography, Box } from "@mui/material";
import Item from "../item/Item";
import CollectionsList from "./CollectionsList";

const CollectionView = ({
  collections,
  handleCreateNewCollection,
  onCollectionClick,
  currCollection,
}) => {
  return (
    <Grid container spacing={6}>
      <Grid item lg={3}>
        <CollectionsList
          collections={collections}
          handleCreateNewCollection={handleCreateNewCollection}
          onCollectionClick={onCollectionClick}
          currCollection={currCollection}
        />
      </Grid>
      <Grid item lg={9}>
        {currCollection && (
          <>
            <Box>
              <Typography variant="h4">{currCollection.name}</Typography>
              <Typography variant="subheading">
                {currCollection.slug}
              </Typography>
            </Box>
            <Item collection={currCollection} />
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default CollectionView;
