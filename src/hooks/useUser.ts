import { useEffect, useState } from "react";
import { IUser } from "../types";

export function useUser(userId: number) {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>();
  const [data, setData] = useState<IUser>();

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        const resp = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        ).then((res) => res.json());
        setData(resp);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [userId]);
  return { data, isLoading, error };
}
