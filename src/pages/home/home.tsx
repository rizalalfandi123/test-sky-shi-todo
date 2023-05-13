import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

import {
  apiKey,
  queryClient,
  useActivityGroupQuery,
  formatDate,
  useDeleteAlert,
  apiEndpoints,
  useNotification,
  IListActivityGroupResponse,
} from "@/utils";
import ActivityGroupCard from "@/components/activity-group-card";
import { useNavigate } from "react-router-dom";
import { HomeTitle } from "./home-title";


export const Home = () => {
  const navigate = useNavigate();

  // TODO: Open alert delete
  const handleOpenAlertDelete = useDeleteAlert((state) => state.handleOpenAlertDelete);

  // TODO: Fetching list
  const { data: activitiesGroup = { data: [] }, isLoading: loadingFetch } = useActivityGroupQuery();

  // TODO: Handle open notification after delete
  const handleOpenNotification = useNotification((state) => state.handleOpenNotification);

  // TODO: Handle click detail
  const handleClickDetail = (id: string) => () => navigate(`/detail/${id}`);

  // TODO: Handle click delete button
  const handleClickDelete = (activity: IListActivityGroupResponse["data"][number]) => () => {
    handleOpenAlertDelete({
      message: "Apakah anda yakin menghapus List Item",
      dataName: activity.title,
      deleteUrl: `${apiEndpoints.activityGroups}/${activity.id}`,
      actionAfterDelete: () => {
        queryClient.invalidateQueries([apiKey.activityGroups]);

        handleOpenNotification({ message: "Activity berhasil dihapus" });
      },
    });
  };

  return (
    <Stack alignItems="center">
      <HomeTitle />

      {loadingFetch ? (
        <div>Loading</div>
      ) : activitiesGroup.data.length <= 0 ? (
        <img src="/empty-activity.svg" alt="empty-activity" width={541} height={413} />
      ) : (
        <Grid container direction="row" spacing={2}>
          {activitiesGroup.data.map((activity) => {
            return (
              <Grid item xs={12} sm={4} md={3} key={activity.id}>
                <ActivityGroupCard
                  createdAt={formatDate(activity.created_at)}
                  onClick={handleClickDetail(`${activity.id}`)}
                  onClickDelete={handleClickDelete(activity)}
                  title={activity.title}
                />
              </Grid>
            );
          })}
        </Grid>
      )}
    </Stack>
  );
};
