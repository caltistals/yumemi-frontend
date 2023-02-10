import { PrefecturePopulation } from "../types";
import Highcharts from "highcharts";

export const useHighCharts = (populationData: PrefecturePopulation[]) => {
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
    tooltip: {
      headerFormat: "",
      useHTML: true,
      formatter() {
        const value = this.y
          ? Highcharts.numberFormat(this.y, 0, "", ",")
          : this.y;
        return `
          <div style="margin-bottom: 5px">${this.x as number}年</div>
          <div>${this.series.name}</div>
          <div>
            <span style="font-size: 1rem; color: ${
              this.color as string
            }">${value}</span>
            <span>人</span>
          </div>`;
      },
    },
  };

  return { Highcharts, options };
};
