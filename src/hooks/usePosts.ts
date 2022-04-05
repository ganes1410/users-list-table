import { useState, useEffect } from "react";
import { IPost } from "../types";

export function usePosts() {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>();
  const [data, setData] = useState<IPost[]>();

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        const resp = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        ).then((res) => res.json());
        setData(resp);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);
  return { data, isLoading, error };
}
