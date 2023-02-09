import Header from "../../../components/header/Header";
import { usePrefectureCheckboxes } from "../hooks/usePrefectureCheckboxes";
import PrefectureCheckboxes from "./prefecture-checkboxes/PrefectureCheckboxes";

export const PrefecturePopulationPage = () => {
  const { isLoading, prefectureCheckboxes, toggle } = usePrefectureCheckboxes();

  return (
    <>
      <Header />
      <PrefectureCheckboxes
        prefectureCheckboxes={prefectureCheckboxes}
        toggle={toggle}
      />
    </>
  );
};
