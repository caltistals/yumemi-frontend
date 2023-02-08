export type Prefecture = {
  prefCode: number;
  prefName: string;
};

export type PrefectureCheckbox = Prefecture & {
  isChecked: boolean;
};

export type PrefecturePopulation = Prefecture & {
  populations: { year: number; value: number }[];
};
