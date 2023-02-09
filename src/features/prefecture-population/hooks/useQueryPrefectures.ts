import { useQuery } from "@tanstack/react-query";
import { getPrefectures } from "../api/getPrefectures";

export const useQueryPrefectures = () => {
  return useQuery(["prefectures"], () => getPrefectures());
};
