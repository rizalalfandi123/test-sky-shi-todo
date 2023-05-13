import type { UseMutationOptions, UseMutationResult } from "react-query";

import axios from "axios";
import { useMutation } from "react-query";
import { apiEndpoints } from "..";

export interface ICreateActivityGroupResponse {
  created_at: string;
  updated_at: string;
  id: number;
  title: string;
  email: string;
}

export interface ICreateActivityGroupBodyRequest {
  title: string;
}

type TUseCreateActivityGroupOptions = Omit<
  UseMutationOptions<ICreateActivityGroupResponse, unknown, ICreateActivityGroupBodyRequest>,
  "mutationFn"
>;

type TUseCreateActivityGroup = (
  options?: TUseCreateActivityGroupOptions
) => UseMutationResult<ICreateActivityGroupResponse, unknown, ICreateActivityGroupBodyRequest>;

const email = import.meta.env.VITE_API_EMAIL;

export const useCreateActivityGroup: TUseCreateActivityGroup = (options = {}) => {
  return useMutation<ICreateActivityGroupResponse, unknown, ICreateActivityGroupBodyRequest>({
    mutationFn: async (bodyRequest) =>
      (await axios.post<ICreateActivityGroupResponse>(apiEndpoints.activityGroups, { ...bodyRequest, email })).data,
    ...options,
  });
};
