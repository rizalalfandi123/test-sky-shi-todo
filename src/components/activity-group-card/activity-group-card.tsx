import type { FunctionComponent } from "react";
import {
  ActivityGroupCardButtonDelete,
  ActivityGroupCardContainer,
  ActivityGroupCardDate,
  ActivityGroupCardFooter,
  ActivityGroupCardTitle,
} from "./activity-group-card.styled";

import DeleteIcon from "@mui/icons-material/DeleteOutlined";

interface IActivityGroupCardPorps {
  title: string;
  createdAt: string;
  onClickDelete: () => void;
  onClick: () => void;
}

type TActivityGroupCard = FunctionComponent<IActivityGroupCardPorps>;

export const ActivityGroupCard: TActivityGroupCard = (props) => {
  const { title, createdAt, onClickDelete, onClick } = props;

  return (
    <ActivityGroupCardContainer data-cy="activity-item">
      <ActivityGroupCardTitle data-cy="activity-item-title" variant="h4" onClick={onClick}>
        {title}
      </ActivityGroupCardTitle>

      <ActivityGroupCardFooter>
        <ActivityGroupCardDate data-cy="activity-item-date">{createdAt}</ActivityGroupCardDate>

        <ActivityGroupCardButtonDelete data-cy="activity-item-delete-button" onClick={onClickDelete}>
          <DeleteIcon />
        </ActivityGroupCardButtonDelete>
      </ActivityGroupCardFooter>
    </ActivityGroupCardContainer>
  );
};
