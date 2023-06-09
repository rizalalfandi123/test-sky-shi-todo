import { Dispatch, useEffect, useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import EditIcon from "@mui/icons-material/EditOutlined";
import SwapIcon from "@mui/icons-material/SwapVertOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeftOutlined";

import { useLocation, useNavigate, useParams } from "react-router-dom";

import { PageTitle, AddButton } from "@/components/styled";
import { IActivityListState, TUseActivityListAction, useDetailActivityGroupQuery, useEditActivityGroup } from "@/utils";
import { BackButton, EditButton, SwapButton, inputStyle } from "./detail-activity-group-title.styled";
import { ActivitySortMenu } from "./activity-sort-menu";

interface DetailActivityGroupTitleProps {
  listState: [IActivityListState, Dispatch<TUseActivityListAction>];
}

export const DetailActivityGroupTitle = ({ listState }: DetailActivityGroupTitleProps) => {
  const { id = "" } = useParams();

  const navigate = useNavigate();

  const location = useLocation();

  const { data = { title: "" }, isLoading: loadingGetDetail } = useDetailActivityGroupQuery(id);

  const { mutateAsync: editActivityGroup } = useEditActivityGroup(id);

  // TODO: Conditional between edit and only display title
  const [isEditTitle, setIsEditTitle] = useState<boolean>(false);

  // TODO: Store input value when change title
  const [valueTitle, setValueTitle] = useState<string>(data.title);

  // TODO: Sync input value between state and api response
  useEffect(() => {
    if (!loadingGetDetail) {
      setValueTitle(data.title);
    }
  }, [data.title]);

  const [sortMenuAnchorEl, setSortMenuAnchorEl] = useState<null | HTMLElement>(null);

  const handleClickSort = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSortMenuAnchorEl(event.currentTarget);
  };
  const handleCloseSort = () => {
    setSortMenuAnchorEl(null);
  };

  const toggleClickEditTitle = () => {
    setIsEditTitle((prev) => !prev);
  };

  const handleEditActivityGroup = () => {
    editActivityGroup({ title: valueTitle });
    setIsEditTitle(false);
  };

  const handleClickCreateActivity = () => {
    navigate(`/create-activity/${id}`, { state: { backgroundLocation: location } });
  };

  return (
    <>
      <Stack direction="row" justifyContent="space-between" width="100%" margin="43px 0 55px" gap="18px">
        <Stack direction="row" gap="18px">
          <BackButton onClick={() => navigate(-1)} data-cy="todo-back-button">
            <ChevronLeftIcon />
          </BackButton>

          {isEditTitle ? (
            <TextField
              value={valueTitle}
              variant="standard"
              autoFocus
              onChange={(e) => setValueTitle(e.target.value)}
              onBlur={handleEditActivityGroup}
              InputProps={{
                sx: inputStyle,
              }}
            />
          ) : (
            <PageTitle data-cy="todo-title" onClick={toggleClickEditTitle}>{valueTitle}</PageTitle>
          )}

          <EditButton data-cy="todo-title-edit-button" onClick={isEditTitle ? handleEditActivityGroup : toggleClickEditTitle}>
            <EditIcon />
          </EditButton>
        </Stack>

        <Stack direction="row" gap="18px">
          <SwapButton data-cy="todo-sort-button" onClick={handleClickSort}>
            <SwapIcon />
          </SwapButton>

          <AddButton data-cy="todo-add-button" variant="contained" startIcon={<AddIcon />} onClick={handleClickCreateActivity}>
            Tambah
          </AddButton>
        </Stack>
      </Stack>

      <ActivitySortMenu
        open={Boolean(sortMenuAnchorEl)}
        anchorEl={sortMenuAnchorEl}
        onClose={handleCloseSort}
        listState={listState}
      />
    </>
  );
};
