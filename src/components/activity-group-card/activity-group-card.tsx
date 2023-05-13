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
    <ActivityGroupCardContainer>
      <ActivityGroupCardTitle role="button" onClick={onClick}>
        {title}
      </ActivityGroupCardTitle>

      <ActivityGroupCardFooter>
        <ActivityGroupCardDate>{createdAt}</ActivityGroupCardDate>

        <ActivityGroupCardButtonDelete onClick={onClickDelete}>
          <DeleteIcon />
        </ActivityGroupCardButtonDelete>
      </ActivityGroupCardFooter>
    </ActivityGroupCardContainer>
  );
};
