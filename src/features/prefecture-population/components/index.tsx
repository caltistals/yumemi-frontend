import { usePrefecturePopulations } from "../hooks/usePrefecturePopulations";
import { usePrefectureCheckboxes } from "../hooks/usePrefectureCheckboxes";
import PopulationGraph from "./population-graph/PopulationGraph";
import PrefectureCheckboxes from "./prefecture-checkboxes/PrefectureCheckboxes";
import Layout from "../../../components/layout/Layout";

export const PrefecturePopulationPage = () => {
  const { prefectureCheckboxes, toggle } = usePrefectureCheckboxes();
  const { populationData } = usePrefecturePopulations(prefectureCheckboxes);

  return (
    <Layout>
      <PrefectureCheckboxes
        prefectureCheckboxes={prefectureCheckboxes}
        toggle={toggle}
      />
      <PopulationGraph populationData={populationData()} />
    </Layout>
  );
};
