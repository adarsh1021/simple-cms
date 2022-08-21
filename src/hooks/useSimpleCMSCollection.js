import { useEffect, useRef, useState } from "react";

const useSimpleCMSCollection = (supabaseClient, collectionSlug) => {
  const [collection, setCollection] = useState(null);
  const [items, setItems] = useState([]);

  const isSubscribed = useRef(false);

  useEffect(() => {
    loadCollectionBySlug();
  }, []);

  useEffect(() => {
    if (collection) {
      loadItemsForCollection();

      // This is a hack for React >= v18 in Strict mode
      // ensures to always call on the last  mount and
      // correctly remove subscription on unmount
      let subscription = null;
      const timer = setTimeout(() => (subscription = subscribeToTable()), 1000);

      function subscribeToTable() {
        return supabaseClient
          .from(`item:collection_id=eq.${collection.id}`)
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
    }
  }, [collection]);

  // Helpers
  const loadCollectionBySlug = async () => {
    if (collectionSlug) {
      const { data, err } = await supabaseClient
        .from("collection")
        .select()
        .eq("slug", collectionSlug);

      setCollection(data[0]);
    }
  };

  const loadItemsForCollection = async () => {
    if (collection) {
      const { data, err } = await supabaseClient
        .from("item")
        .select()
        .eq("collection_id", collection.id);

      setItems(data);
    }
  };

  const handleItemRealtimeUpdate = (payload) => {
    if (payload.eventType === "INSERT") {
      setItems((currItems) => [...currItems, payload.new]);
    } else if (payload.eventType === "DELETE") {
      setItems((currItems) =>
        currItems.filter((item) => item.id === payload.old.id)
      );
    } else if (payload.eventType === "UPDATE") {
      setItems((currItems) =>
        currItems.map((item) =>
          item.id === payload.new.id ? payload.new : item
        )
      );
    }
  };

  return { collection, items };
};

export default useSimpleCMSCollection;
