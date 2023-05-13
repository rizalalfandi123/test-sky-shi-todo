import type { UseQueryOptions, UseQueryResult } from "react-query";

import { useQuery } from "react-query";
import { TActivityPriority, apiEndpoints, apiKey } from "..";
import axios from "axios";

export interface IDetailActivityGroupResponse {
  id: number;
  title: string;
  created_at: string;
  todo_items: {
    id: number;
    title: string;
    activity_group_id: number;
    is_active: number;
    priority: TActivityPriority;
  }[];
}

export type TUseDetailActivityGroupQueryOptions = Omit<UseQueryOptions<IDetailActivityGroupResponse>, "queryKey" | "queryFn">;

type TUseDetailActivityGroupQuery = (
  id: string,
  options?: TUseDetailActivityGroupQueryOptions
) => UseQueryResult<IDetailActivityGroupResponse>;

export const useDetailActivityGroupQuery: TUseDetailActivityGroupQuery = (id, options = {}) => {
  return useQuery<IDetailActivityGroupResponse>({
    queryKey: [apiKey.activityGroups, { id }],
    queryFn: async () => {
      const response = await axios.get<IDetailActivityGroupResponse>(`${apiEndpoints.activityGroups}/${id}`);

      return response.data;
    },

    ...options,
  });
};
