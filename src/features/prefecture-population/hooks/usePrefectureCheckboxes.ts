import { useEffect, useState } from "react";
import { PrefectureCheckbox } from "../types";
import { useQueryPrefectures } from "./useQueryPrefectures";

export const usePrefectureCheckboxes = () => {
  const { isLoading, data: prefectures } = useQueryPrefectures();
  const [prefectureCheckboxes, setPrefectureCheckboxes] = useState<
    PrefectureCheckbox[]
  >([]);

  useEffect(() => {
    if (prefectures?.data.result) {
      const checkboxes: PrefectureCheckbox[] = prefectures.data.result.map(
        (prefecture) => ({
          ...prefecture,
          isChecked: false,
        })
      );
      setPrefectureCheckboxes(checkboxes);
    } else {
      setPrefectureCheckboxes([]);
    }
  }, [prefectures]);

  const toggle = (prefCode: number) => {
    setPrefectureCheckboxes((prev) =>
      prev.map((prefectureCheckbox) => {
        if (prefectureCheckbox.prefCode !== prefCode) {
          return prefectureCheckbox;
        }
        return {
          ...prefectureCheckbox,
          isChecked: !prefectureCheckbox.isChecked,
        };
      })
    );
  };

  return { isLoading, prefectureCheckboxes, toggle };
};
