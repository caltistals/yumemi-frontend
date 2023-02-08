export type Prefecture = {
  prefCode: number;
  prefName: string;
};

export type PrefectureCheckbox = Prefecture & {
  isChecked: boolean;
};
