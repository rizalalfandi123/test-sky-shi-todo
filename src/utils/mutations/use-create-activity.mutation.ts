import type { UseMutationOptions, UseMutationResult } from "react-query";

import axios from "axios";
import { useMutation } from "react-query";
import { apiEndpoints } from "..";

export interface ICreateActivityResponse {
  is_active: boolean;
  created_at: string;
  updated_at: string;
  id: number;
  title: string;
  activity_group_id: string;
  priority: string;
}

export interface ICreateActivityBodyRequest {
  title: string;
  activity_group_id: string;
  priority: string;
}

type TUseCreateActivityOptions = Omit<
  UseMutationOptions<ICreateActivityResponse, unknown, ICreateActivityBodyRequest>,
  "mutationFn"
>;

type TUseCreateActivity = (
  options?: TUseCreateActivityOptions
) => UseMutationResult<ICreateActivityResponse, unknown, ICreateActivityBodyRequest>;

const email = import.meta.env.VITE_API_EMAIL;

export const useCreateActivity: TUseCreateActivity = (options = {}) => {
  return useMutation<ICreateActivityResponse, unknown, ICreateActivityBodyRequest>({
    mutationFn: async (bodyRequest) =>
      (await axios.post<ICreateActivityResponse>(apiEndpoints.todoItem, { ...bodyRequest, email, is_active: true})).data,
    ...options,
  });
};
