import Header from "../../../components/header/Header";
import { usePrefecturePopulations } from "../hooks/usePrefecturePopulations";
import { usePrefectureCheckboxes } from "../hooks/usePrefectureCheckboxes";
import PopulationGraph from "./population-graph/PopulationGraph";
import PrefectureCheckboxes from "./prefecture-checkboxes/PrefectureCheckboxes";

export const PrefecturePopulationPage = () => {
  const { prefectureCheckboxes, toggle } = usePrefectureCheckboxes();
  const { populationData } = usePrefecturePopulations(prefectureCheckboxes);

  return (
    <>
      <Header />
      <PrefectureCheckboxes
        prefectureCheckboxes={prefectureCheckboxes}
        toggle={toggle}
      />
      <PopulationGraph populationData={populationData()} />
    </>
  );
};
