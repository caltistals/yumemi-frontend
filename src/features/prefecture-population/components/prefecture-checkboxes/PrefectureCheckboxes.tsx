import { PrefectureCheckbox } from "../../types";
import PrefectureCheckboxess from "./PrefectureCheckboxes.module.css";

type Props = {
  prefectureCheckboxes: PrefectureCheckbox[];
  toggle: (prefCode: number) => void;
};

const PrefectureCheckboxes = ({ prefectureCheckboxes, toggle }: Props) => {
  return (
    <section>
      <h2 className={PrefectureCheckboxess.title}>都道府県を選択</h2>
      <div className={PrefectureCheckboxess.checkboxes}>
        {prefectureCheckboxes &&
          prefectureCheckboxes.map((prefectureCheckbox) => (
            <label
              key={prefectureCheckbox.prefCode}
              className={PrefectureCheckboxess.checkbox}
            >
              <input
                type="checkbox"
                onChange={() => toggle(prefectureCheckbox.prefCode)}
                checked={prefectureCheckbox.isChecked}
              />
              <span className={PrefectureCheckboxess.checkboxLabel}>
                {prefectureCheckbox.prefName}
              </span>
            </label>
          ))}
      </div>
    </section>
  );
};

export default PrefectureCheckboxes;
