import { PrefectureCheckbox } from "../../types";
import PrefectureCheckBoxess from "./PrefectureCheckBoxes.module.css";

type Props = {
  prefectureCheckboxes: PrefectureCheckbox[];
  toggle: (prefCode: number) => void;
};

const PrefectureCheckboxes = ({ prefectureCheckboxes, toggle }: Props) => {
  return (
    <div className={PrefectureCheckBoxess.checkboxes}>
      {prefectureCheckboxes.map((prefectureCheckbox) => (
        <label
          key={prefectureCheckbox.prefCode}
          className={PrefectureCheckBoxess.checkbox}
        >
          <input
            type="checkbox"
            onChange={() => toggle(prefectureCheckbox.prefCode)}
            checked={prefectureCheckbox.isChecked}
          />
          <span className={PrefectureCheckBoxess.checkboxLabel}>
            {prefectureCheckbox.prefName}
          </span>
        </label>
      ))}
    </div>
  );
};

export default PrefectureCheckboxes;
