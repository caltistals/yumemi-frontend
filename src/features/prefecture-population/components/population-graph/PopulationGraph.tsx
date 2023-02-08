import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { PrefecturePopulation } from "../../types";

type Props = {
  populationData: PrefecturePopulation[];
};

const PopulationGraph = ({ populationData }: Props) => {
  const series: Highcharts.SeriesOptionsType[] = [];
  const categories = populationData
    .at(0)
    ?.populations.map((d) => String(d.year));
  populationData.map((pData) => {
    const data = pData.populations.map((d) => d.value);
    series.push({
      type: "line",
      name: pData.prefName,
      data: data,
    });
  });

  const options: Highcharts.Options = {
    title: {
      text: "",
    },
    xAxis: {
      title: {
        text: "年度",
      },
      categories: categories,
    },
    yAxis: {
      title: {
        text: "総人口数",
      },
    },
    series:
      series.length === 0
        ? [{ type: "line", name: "都道府県名", data: [] }]
        : series,
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default PopulationGraph;
