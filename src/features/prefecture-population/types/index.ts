export type Prefecture = {
  prefCode: number;
  prefName: string;
};

export type PrefectureCheckbox = Prefecture & {
  isChecked: boolean;
};

export type PopulationData = { year: number; value: number };

export type PrefecturePopulation = Prefecture & {
  populations: PopulationData[];
};
