import HighchartsReact from "highcharts-react-official";
import { useHighCharts } from "../../hooks/useHighCharts";
import { PrefecturePopulation } from "../../types";
import PopulationGraphs from "./PopulationGraph.module.css";

type Props = {
  populationData: PrefecturePopulation[];
};

const PopulationGraph = ({ populationData }: Props) => {
  const { Highcharts, options } = useHighCharts(populationData);

  return (
    <section>
      <h2 className={PopulationGraphs.title}>総人口推移グラフ</h2>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </section>
  );
};

export default PopulationGraph;
