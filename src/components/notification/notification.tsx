import Dialog from "@mui/material/Dialog";
import ErrorIcon from "@mui/icons-material/ErrorOutlineOutlined";
import Typography from "@mui/material/Typography";

import { useNotification } from "@/utils";
import { NotificationConatiner } from "./notification.styled";

export const Notification = () => {
  const data = useNotification((state) => state.data);

  const onClose = useNotification((state) => state.handleCloseNotification);

  return (
    <Dialog open={Boolean(data)} onClose={onClose} fullWidth>
      <NotificationConatiner>
        <ErrorIcon color="success" />

        <Typography>{data?.message}</Typography>
      </NotificationConatiner>
    </Dialog>
  );
};
