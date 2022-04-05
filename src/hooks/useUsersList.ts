import { useEffect, useState } from "react";
import { IUsersList } from "../types";

export function useUsersList() {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>();
  const [data, setData] = useState<IUsersList>();

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        const resp = await fetch(
          "https://jsonplaceholder.typicode.com/users"
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
