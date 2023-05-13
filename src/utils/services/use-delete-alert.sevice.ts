import { create } from "zustand";

export type TDeleteAlertData = {
  dataName: string;
  message: string;
  deleteUrl: string;
  actionAfterDelete?: () => void;
} | null;

interface IDeleteAlertState {
  data: TDeleteAlertData;
  handleOpenAlertDelete: (alertData: TDeleteAlertData) => void;

  handleCloseAlertDelete: () => void;
}

const initialState: TDeleteAlertData = null;

export const useDeleteAlert = create<IDeleteAlertState>()((set) => ({
  data: initialState,
  handleCloseAlertDelete: () => {
    set({ data: null });
  },
  handleOpenAlertDelete: (alertData) => {
    set({ data: alertData });
  },
}));
