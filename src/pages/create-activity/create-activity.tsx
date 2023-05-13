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

  return (
    <Dialog open onClose={onClose} fullWidth>
      <Title>
        Tambah List Item
        <CloseButton>
          <CloseIcon />
        </CloseButton>
      </Title>
      <Content dividers>
        <ActivityForm formState={form} />
      </Content>

      <DialogActions>
        <SubmitButton variant="contained" onClick={handleCreateActivity}>
          Submit
        </SubmitButton>
      </DialogActions>
    </Dialog>
  );
};
