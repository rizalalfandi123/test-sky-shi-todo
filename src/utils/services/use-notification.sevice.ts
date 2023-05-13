import { create } from "zustand";

export type TNotification = {
  message: string;
} | null;

interface INotificationState {
  data: TNotification;
  handleOpenNotification: (notificationData: TNotification) => void;

  handleCloseNotification: () => void;
}

const initialState: TNotification = null;

export const useNotification = create<INotificationState>()((set) => ({
  data: initialState,
  handleCloseNotification: () => {
    set({ data: null });
  },
  handleOpenNotification: (notificationData) => {
    set({ data: notificationData });
  },
}));
