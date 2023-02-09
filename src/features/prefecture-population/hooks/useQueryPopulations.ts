import { useQueries } from "@tanstack/react-query";
import { getPopulations } from "../api/getPopulations";
import { PopulationData, Prefecture, PrefecturePopulation } from "../types";

export const useQueryPopulations = (prefectures: Prefecture[]) => {
  return useQueries({
    queries: prefectures.map((prefecture) => {
      return {
        queryKey: ["populations", prefecture.prefCode],
        queryFn: () => getPopulations(prefecture.prefCode),
        select: (populations: {
          data: {
            result: {
              data: {
                data: PopulationData[];
              }[];
            };
          };
        }): PrefecturePopulation => ({
          ...prefecture,
          populations: populations.data.result.data.at(0)?.data ?? [],
        }),
      };
    }),
  });
};
