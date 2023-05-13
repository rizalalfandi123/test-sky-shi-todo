import { IPaginationResponse } from "@/types";
import type { UseQueryOptions, UseQueryResult } from "react-query";

import { useQuery } from "react-query";
import { apiEndpoints, apiKey } from "..";
import axios from "axios";

export interface IListActivityGroupResponse extends IPaginationResponse {
  data: {
    id: number;
    title: string;
    created_at: string;
  }[];
}

export type TUseActivityGroupQueryOptions = Omit<UseQueryOptions<IListActivityGroupResponse>, "queryKey" | "queryFn">;

type TUseActivityGroupQuery = (options?: TUseActivityGroupQueryOptions) => UseQueryResult<IListActivityGroupResponse>;

const email = import.meta.env.VITE_API_EMAIL;

export const useActivityGroupQuery: TUseActivityGroupQuery = (options = {}) => {
  return useQuery<IListActivityGroupResponse>({
    queryKey: [apiKey.activityGroups],
    queryFn: async () => {
      const response = await axios.get<IListActivityGroupResponse>(`${apiEndpoints.activityGroups}?email=${email}`);

      return response.data;
    },

    ...options,
  });
};
