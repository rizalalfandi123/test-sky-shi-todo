import { useDeleteAlert, useDeleteMutation } from "@/utils";
import Dialog from "@mui/material/Dialog";
import Stack from "@mui/material/Stack";
import { DeleteAlertButton, DeleteAlertContainer, DeleteAlertMessage, buttonCancelStyle } from "./delete-alert.styled";

export const DeleteAlert = () => {
  const data = useDeleteAlert((state) => state.data);

  const onClose = useDeleteAlert((state) => state.handleCloseAlertDelete);

  const { isLoading, mutateAsync: deleteData } = useDeleteMutation();

  const handleClickDelete = async () => {
    if (data) {
      await deleteData(data.deleteUrl);

      if (data.actionAfterDelete) {
        data.actionAfterDelete();
      }
    }

    onClose();
  };

  return (
    <Dialog open={Boolean(data)} onClose={onClose}>
      <DeleteAlertContainer data-cy="modal-delete" alignItems="center" justifyContent="space-between">
        <img data-cy="modal-delete-icon" src="/delete-alert.svg" alt="delete-alert-icon" width={84} height={84} />

        <DeleteAlertMessage as="div">
          {data?.message} "{<b>{data?.dataName}</b>}" ?
        </DeleteAlertMessage>

        <Stack gap="20px" direction="row">
          <DeleteAlertButton
            data-cy="modal-delete-cancel-button"
            size="large"
            variant="contained"
            sx={buttonCancelStyle}
            onClick={onClose}
          >
            Batal
          </DeleteAlertButton>

          <DeleteAlertButton
            data-cy="modal-delete-confirm-button"
            size="large"
            variant="contained"
            color="error"
            loading={isLoading}
            onClick={handleClickDelete}
          >
            Hapus
          </DeleteAlertButton>
        </Stack>
      </DeleteAlertContainer>
    </Dialog>
  );
};
