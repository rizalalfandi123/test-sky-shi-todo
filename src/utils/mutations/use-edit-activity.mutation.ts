import type { UseMutationOptions, UseMutationResult } from "react-query";

import axios from "axios";
import { useMutation } from "react-query";
import { apiEndpoints } from "..";
import { TActivity } from "@/components/activity-card";

export interface IEditActivityResponse {
  id: number;
  activity_group_id: number;
  title: string;
  is_active: 1 | 2;
  priority: string;
  created_at: string;
  updated_at: string;
}

export type TEditActivityBodyRequest = TActivity;


type TUseEditActivityOptions = Omit<UseMutationOptions<IEditActivityResponse, unknown, TEditActivityBodyRequest>, "mutationFn">;

type TUseEditActivity = (
  options?: TUseEditActivityOptions
) => UseMutationResult<IEditActivityResponse, unknown, TEditActivityBodyRequest>;

export const useEditActivity: TUseEditActivity = (options = {}) => {
  return useMutation<IEditActivityResponse, unknown, TEditActivityBodyRequest>({
    mutationFn: async ({ id, ...bodyRequest }) => {
      const response = await axios.patch<IEditActivityResponse>(`${apiEndpoints.todoItem}/${id}`, bodyRequest);

      return response.data;
    },
    ...options,
  });
};
