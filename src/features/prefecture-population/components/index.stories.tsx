import { ComponentMeta } from "@storybook/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { PrefecturePopulationPage } from ".";
import { queryClient } from "../../../lib/react-query";

export default {
  component: PrefecturePopulationPage,
} as ComponentMeta<typeof PrefecturePopulationPage>;

export const Default = {
  render: () => {
    return (
      <QueryClientProvider client={queryClient}>
        <PrefecturePopulationPage />
      </QueryClientProvider>
    );
  },
};
