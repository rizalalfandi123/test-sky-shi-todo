import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import { CloseButton, Content, SubmitButton, Title } from "../create-activity/create-activity.styled";
import ActivityForm, { IActivityForm } from "@/forms/activity";
import { useState } from "react";
import { apiKey, queryClient, useEditActivity } from "@/utils";
import { TActivity } from "@/components/activity-card";

export const EditActivity = () => {
  const { idGroup = "", idActivity = "" } = useParams();

  const location = useLocation();

  const navigate = useNavigate();

  const routeState = location.state["initialFormValues"] as TActivity;

  const { mutateAsync: editActivity, isLoading: loadingEdit } = useEditActivity();

  const form = useState<IActivityForm>({priority: routeState.priority, title: routeState.title});

  const onClose = () => {
    navigate(-1);
  };

  const handleEditActivity = async () => {
    await editActivity({
      ...routeState,
      priority: form[0].priority,
      title: form[0].title,
      id: Number(idActivity)
    });

    queryClient.invalidateQueries([apiKey.activityGroups, { id: idGroup }]);

    onClose();
  };

  return (
    <Dialog open onClose={onClose} fullWidth>
      <Title>
        Edit Item
        <CloseButton onClick={onClose}>
          <CloseIcon />
        </CloseButton>
      </Title>
      <Content dividers>
        <ActivityForm formState={form} />
      </Content>

      <DialogActions>
        <SubmitButton variant="contained" onClick={handleEditActivity} loading={loadingEdit}>
          Submit
        </SubmitButton>
      </DialogActions>
    </Dialog>
  );
};
