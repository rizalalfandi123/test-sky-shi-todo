import Stack from "@mui/material/Stack";
import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import DotIcon from "@mui/icons-material/FiberManualRecord";
import EditIcon from "@mui/icons-material/EditOutlined";
import DeleteIcon from "@mui/icons-material/DeleteOutline";
import IconButton from "@mui/material/IconButton";

import { ActivityCardContainer, ActivityCardTitle } from "./activity-card.styled";
import { IDetailActivityGroupResponse, priorityOptions } from "@/utils";

export type TActivity = IDetailActivityGroupResponse["todo_items"][number];

export interface IActivityCardProps {
  activity: TActivity;
  onClickEdit: () => void;
  onChangeCheckbox: CheckboxProps["onChange"];
  onClickDelete: () => void;
}

export const ActivityCard = (props: IActivityCardProps) => {
  const { activity, onChangeCheckbox, onClickEdit, onClickDelete } = props;

  const dotColor = priorityOptions.find((priority) => priority.value === activity.priority)?.color;

  return (
    <ActivityCardContainer data-cy="todo-item">
      <Stack direction="row" alignItems="center" spacing="8px">
        <Checkbox checked={activity.is_active === 1 ? true : false} onChange={onChangeCheckbox} />

        <DotIcon sx={{ color: dotColor }} />

        <ActivityCardTitle isActive={activity.is_active === 1}>{activity.title}</ActivityCardTitle>

        <IconButton data-cy="todo-item-edit-button" onClick={onClickEdit}>
          <EditIcon />
        </IconButton>
      </Stack>

      <IconButton data-cy="todo-item-delete-button" onClick={onClickDelete}>
        <DeleteIcon />
      </IconButton>
    </ActivityCardContainer>
  );
};
