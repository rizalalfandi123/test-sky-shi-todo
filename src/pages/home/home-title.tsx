import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";

import { apiKey, queryClient, useCreateActivityGroup } from "@/utils";
import { AddButton, PageTitle } from "@/components/styled";

const defaultActivityGroupTitle = "New Activity";

export const HomeTitle = () => {
  // TODO: create activity
  const { mutateAsync: createActivityGroup, isLoading: loadingCreate } = useCreateActivityGroup({
    onSuccess: () => {
      queryClient.invalidateQueries([apiKey.activityGroups]);
    },
  });

  // TODO: Handle create activity
  const handleAddActivityGroup = async () => {
    await createActivityGroup({ title: defaultActivityGroupTitle });
  };
  return (
    <Stack direction="row" justifyContent="space-between" width="100%" margin="43px 0 55px">
      <PageTitle variant="h1" data-cy="activity-title">
        Activity
      </PageTitle>

      <AddButton
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handleAddActivityGroup}
        loading={loadingCreate}
        size="large"
        data-cy="activity-add-button"
      >
        Tambah
      </AddButton>
    </Stack>
  );
};
