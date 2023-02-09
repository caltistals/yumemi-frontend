import { resasClient } from "../../../lib/axios";
import { Prefecture } from "../types";

export const getPrefectures = (): Promise<{
  data: { result: Prefecture[] };
}> => {
  return resasClient.get("/prefectures");
};
