import { ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { PrefectureCheckbox } from "../../types";
import PrefectureCheckboxes from "./PrefectureCheckboxes";

export default {
  component: PrefectureCheckboxes,
} as ComponentMeta<typeof PrefectureCheckboxes>;

export const Default = {
  render: () => {
    const [prefectureCheckboxes, setPrefectureCheckboxes] = useState<
      PrefectureCheckbox[]
    >([
      {
        prefCode: 1,
        prefName: "東京都",
        isChecked: false,
      },
      {
        prefCode: 2,
        prefName: "大阪府",
        isChecked: false,
      },
      {
        prefCode: 3,
        prefName: "東京都",
        isChecked: false,
      },
      {
        prefCode: 4,
        prefName: "大阪府",
        isChecked: false,
      },
      {
        prefCode: 5,
        prefName: "大阪府",
        isChecked: false,
      },
      {
        prefCode: 6,
        prefName: "大阪府",
        isChecked: false,
      },
    ]);

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
    return (
      <PrefectureCheckboxes
        prefectureCheckboxes={prefectureCheckboxes}
        toggle={toggle}
      />
    );
  },
};
