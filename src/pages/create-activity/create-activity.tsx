import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";

import { useNavigate, useParams } from "react-router-dom";
import { CloseButton, Content, SubmitButton, Title } from "./create-activity.styled";
import ActivityForm, { IActivityForm } from "@/forms/activity";
import { useState } from "react";
import { apiKey, queryClient, useCreateActivity } from "@/utils";

export const CreateActivity = () => {
  const { id = "" } = useParams();

  const navigate = useNavigate();

  const { mutateAsync: createActivity } = useCreateActivity();

  const form = useState<IActivityForm>({ priority: "very-high", title: "" });

  const onClose = () => {
    navigate(-1);
  };

  const handleCreateActivity = async () => {
    await createActivity({
      activity_group_id: id,
      priority: form[0].priority,
      title: form[0].title,
    });

    queryClient.invalidateQueries([apiKey.activityGroups, { id }]);

    onClose();
  };

  const disabledSubmitButton = !Boolean(form[0].title)

  return (
    <Dialog data-cy="modal-add" open onClose={onClose} fullWidth >
      <Title data-cy="modal-add-title">
        Tambah List Item
        <CloseButton data-cy="modal-add-close-button" onClick={onClose}>
          <CloseIcon />
        </CloseButton>
      </Title>
      <Content dividers>
        <ActivityForm formState={form} />
      </Content>

      <DialogActions>
        <SubmitButton
          data-cy="modal-add-save-button"
          variant="contained"
          onClick={handleCreateActivity}
          disabled={disabledSubmitButton}
        >
          Submit
        </SubmitButton>
      </DialogActions>
    </Dialog>
  );
};
