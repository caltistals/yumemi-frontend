import { resasClient } from "../../../lib/axios";
import { PopulationData } from "../types";

export const getPopulations = (
  prefCode: number
): Promise<{
  data: {
    result: {
      data: {
        data: PopulationData[];
      }[];
    };
  };
}> => {
  return resasClient.get("/population/composition/perYear", {
    params: {
      prefCode: prefCode,
      cityCode: "-",
    },
  });
};
