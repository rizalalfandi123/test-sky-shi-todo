import Dialog from "@mui/material/Dialog";
import ErrorIcon from "@mui/icons-material/ErrorOutlineOutlined";
import Typography from "@mui/material/Typography";

import { useNotification } from "@/utils";
import { NotificationConatiner } from "./notification.styled";

export const Notification = () => {
  const data = useNotification((state) => state.data);

  const onClose = useNotification((state) => state.handleCloseNotification);

  return (
    <Dialog data-cy="modal-information" open={Boolean(data)} onClose={onClose} fullWidth>
      <NotificationConatiner>
        <ErrorIcon data-cy="modal-information-icon" color="success" />

        <Typography data-cy="modal-information-title">{data?.message}</Typography>
      </NotificationConatiner>
    </Dialog>
  );
};
