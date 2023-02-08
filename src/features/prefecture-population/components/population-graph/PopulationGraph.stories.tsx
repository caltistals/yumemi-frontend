import { ComponentMeta } from "@storybook/react";
import PopulationGraph from "./PopulationGraph";

export default {
  component: PopulationGraph,
} as ComponentMeta<typeof PopulationGraph>;

const populationData = [
  {
    prefName: "東京都",
    prefCode: 1,
    populations: [
      {
        year: 1980,
        value: 12817,
      },
      {
        year: 1985,
        value: 12707,
      },
      {
        year: 1990,
        value: 12571,
      },
      {
        year: 1995,
        value: 12602,
      },
      {
        year: 2000,
        value: 12199,
      },
      {
        year: 2005,
        value: 11518,
      },
      {
        year: 2010,
        value: 10888,
      },
      {
        year: 2015,
        value: 10133,
      },
      {
        year: 2020,
        value: 9302,
      },
      {
        year: 2025,
        value: 8431,
      },
      {
        year: 2030,
        value: 7610,
      },
      {
        year: 2035,
        value: 6816,
      },
      {
        year: 2040,
        value: 6048,
      },
      {
        year: 2045,
        value: 5324,
      },
    ],
  },
  {
    prefName: "大阪府",
    prefCode: 2,
    populations: [
      {
        year: 1980,
        value: 1281,
      },
      {
        year: 1985,
        value: 1270,
      },
      {
        year: 1990,
        value: 1257,
      },
      {
        year: 1995,
        value: 1260,
      },
      {
        year: 2000,
        value: 1219,
      },
      {
        year: 2005,
        value: 1151,
      },
      {
        year: 2010,
        value: 1088,
      },
      {
        year: 2015,
        value: 1013,
      },
      {
        year: 2020,
        value: 930,
      },
      {
        year: 2025,
        value: 843,
      },
      {
        year: 2030,
        value: 761,
      },
      {
        year: 2035,
        value: 681,
      },
      {
        year: 2040,
        value: 604,
      },
      {
        year: 2045,
        value: 532,
      },
    ],
  },
];

export const Default = {
  render: () => {
    return <PopulationGraph populationData={populationData} />;
  },
};
