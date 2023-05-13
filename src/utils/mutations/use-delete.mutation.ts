import type { UseMutationOptions, UseMutationResult } from "react-query";

import axios from "axios";
import { useMutation } from "react-query";

type TUseDeleteOptions = Omit<UseMutationOptions<unknown, unknown, string>, "mutationFn">;

type TUseDelete = (options?: TUseDeleteOptions) => UseMutationResult<unknown, unknown, string>;

export const useDeleteMutation: TUseDelete = (options = {}) => {
  return useMutation<unknown, unknown, string>({
    mutationFn: async (url) => {
      const response = await axios.delete<unknown>(url);

      return response.data;
    },
    ...options,
  });
};
