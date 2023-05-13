import Stack from "@mui/material/Stack";
import { CheckboxProps } from "@mui/material/Checkbox";
import CircularProgress from "@mui/material/CircularProgress";

import {
  apiEndpoints,
  apiKey,
  queryClient,
  useActivityList,
  useDeleteAlert,
  useDetailActivityGroupQuery,
  useEditActivity,
} from "@/utils";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import ActivityCard, { TActivity } from "@/components/activity-card";
import { DetailActivityGroupTitle } from "./detail-activity-group-title";

export const DetailActivityGroup = () => {
  const { id = "" } = useParams();

  const { data = { title: "", todo_items: [] }, isLoading: loadingList } = useDetailActivityGroupQuery(id);

  const [listState, dispatchListState] = useActivityList({ list: data.todo_items, activeSort: "Terbaru" });

  const navigate = useNavigate();

  const location = useLocation();

  const { mutateAsync: editActivity } = useEditActivity();

  // TODO: Open alert delete
  const handleOpenAlertDelete = useDeleteAlert((state) => state.handleOpenAlertDelete);

  useEffect(() => {
    if (!loadingList) {
      dispatchListState({ type: "SET_LIST", payload: data.todo_items });
    }
  }, [data.todo_items]);

  const handleClickEdit = async (activity: TActivity) => {
    navigate(`/edit-activity/${id}/${activity.id}`, {
      state: {
        backgroundLocation: location,
        initialFormValues: activity,
      },
    });
  };

  const handleChangeCheckbox: (activity: TActivity) => CheckboxProps["onChange"] = (activity) => async (_e, newValue) => {
    const newActivity = {
      ...activity,
      is_active: newValue ? 1 : 0,
    };

    dispatchListState({
      type: "SET_LIST",
      payload: listState.list.map((item) => {
        if (item.id === activity.id) {
          return newActivity;
        }

        return item;
      }),
    });

    await editActivity(newActivity);
  };

  const handleClickDelete = async (activity: TActivity) => {
    handleOpenAlertDelete({
      message: "Apakah anda yakin menghapus item",
      dataName: activity.title,
      deleteUrl: `${apiEndpoints.todoItem}/${activity.id}`,
      actionAfterDelete: () => {
        queryClient.invalidateQueries([apiKey.activityGroups, { id }]);
      },
    });
  };

  return (
    <Stack alignItems="center">
      <DetailActivityGroupTitle listState={[listState, dispatchListState]} />

      {loadingList ? (
        <CircularProgress/>
      ) : listState.list.length <= 0 ? (
        <img data-cy="todo-empty-state" src="/empty-activity-list.svg" alt="empty-activity-list" width={541} height={413} />
      ) : (
        <Stack spacing="10px" width="100%">
          {listState.list.map((activity, index) => {
            return (
              <ActivityCard
                activity={activity}
                key={index}
                onClickEdit={() => handleClickEdit(activity)}
                onChangeCheckbox={handleChangeCheckbox(activity)}
                onClickDelete={() => handleClickDelete(activity)}
              />
            );
          })}
        </Stack>
      )}
    </Stack>
  );
};
