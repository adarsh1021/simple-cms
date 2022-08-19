import CollectionView from "./CollectionsView";
import { useEffect, useState } from "react";
import collectionService from "../../services/collection";
import CreateCollectionDialog from "./CreateCollectionDialog";

const Collections = ({ project }) => {
  const [collections, setCollections] = useState([]);
  const [currCollection, setCurrCollection] = useState(null);
  const [createNewCollectionDialogOpen, setCreateNewCollectionDialogOpen] =
    useState(false);

  useEffect(() => {
    if (project) loadAllCollections();
  }, [project]);

  const handleCreateCollection = async (data) => {
    if (project) {
      await collectionService.create({ ...data, project_id: project.id });
      loadAllCollections();
      setCreateNewCollectionDialogOpen(false);
    }
  };

  const loadAllCollections = async () => {
    const { data, err } = await collectionService.list(project.id);
    setCollections(data);
  };

  const onCollectionClick = (collection) => {
    setCurrCollection(collection);
  };

  return (
    <>
      <CollectionView
        collections={collections}
        handleCreateNewCollection={() => setCreateNewCollectionDialogOpen(true)}
        currCollection={currCollection}
        onCollectionClick={onCollectionClick}
      />
      <CreateCollectionDialog
        open={createNewCollectionDialogOpen}
        handleClose={() => setCreateNewCollectionDialogOpen(false)}
        handleCreateCollection={handleCreateCollection}
      />
    </>
  );
};

export default Collections;
