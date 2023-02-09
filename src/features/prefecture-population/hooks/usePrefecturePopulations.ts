import { PrefectureCheckbox } from "../types";
import { useQueryPopulations } from "./useQueryPopulations";

export const usePrefecturePopulations = (
  prefectureCheckboxes: PrefectureCheckbox[]
) => {
  const results = useQueryPopulations(
    prefectureCheckboxes.filter(
      (prefectureCheckbox) => prefectureCheckbox.isChecked
    )
  );
  const isLoading = results.some((result) => result.isLoading);
  const populationData = () => results.flatMap((result) => result.data ?? []);

  return { isLoading, populationData };
};
