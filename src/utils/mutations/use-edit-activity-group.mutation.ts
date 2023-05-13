import type { UseMutationOptions, UseMutationResult } from "react-query";

import axios from "axios";
import { useMutation } from "react-query";
import { apiEndpoints } from "..";

export interface IEditActivityGroupResponse {
  created_at: string;
  updated_at: string;
  id: number;
  title: string;
  email: string;
}

export interface IEditActivityGroupBodyRequest {
  title: string;
}

type TUseEditActivityGroupOptions = Omit<
  UseMutationOptions<IEditActivityGroupResponse, unknown, IEditActivityGroupBodyRequest>,
  "mutationFn"
>;

type TUseEditActivityGroup = (
  id: string,
  options?: TUseEditActivityGroupOptions
) => UseMutationResult<IEditActivityGroupResponse, unknown, IEditActivityGroupBodyRequest>;

export const useEditActivityGroup: TUseEditActivityGroup = (id, options = {}) => {
  return useMutation<IEditActivityGroupResponse, unknown, IEditActivityGroupBodyRequest>({
    mutationFn: async (bodyRequest) => {
      const res = await axios.patch<IEditActivityGroupResponse>(`${apiEndpoints.activityGroups}/${id}`, bodyRequest);
      return res.data;
    },
    ...options,
  });
};
