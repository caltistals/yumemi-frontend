import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { queryClient } from "../lib/react-query";

type Props = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: Props) => {
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
