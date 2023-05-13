import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem, { MenuItemProps } from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import CheckIcon from "@mui/icons-material/Check";
import { AscDateIcon, DescDateIcon, AscIcon, DescIcon, SwapIcon } from "@/components/custom-icons";
import { Dispatch, Fragment, ReactNode } from "react";
import { IActivityListState, TActivitySort, TUseActivityListAction } from "@/utils";

interface IMenuItem extends MenuItemProps {
  icon: ReactNode;
  label: TActivitySort;
}

interface IActivitySortMenuProps extends MenuProps {
  listState: [IActivityListState, Dispatch<TUseActivityListAction>];
}

export const ActivitySortMenu = (props: IActivitySortMenuProps) => {
  const { listState, ...menuProps } = props;

  const [list, dispatchList] = listState;

  const handleClickSortItem = (newValue: TActivitySort) => {
    dispatchList({ type: newValue });
    dispatchList({ type: "SET_ACTIVE_SORT", payload: newValue });
  };

  const menus: IMenuItem[] = [
    {
      icon: <AscDateIcon />,
      label: "Terbaru",
    },
    {
      icon: <DescDateIcon />,
      label: "Terlama",
    },
    {
      icon: <AscIcon sx={{ color: "white" }} />,
      label: "A - Z",
    },
    {
      icon: <DescIcon sx={{ color: "white" }} />,
      label: "Z-A",
    },
    {
      icon: <SwapIcon sx={{ color: "white" }} />,
      label: "Belum Selesai",
    },
  ];

  return (
    <Menu
      {...menuProps}
      PaperProps={{
        sx: { width: "235px" },
      }}
    >
      <MenuList>
        {menus.map(({ icon, label, onClick, ...menuItemProps }, index) => {
          return (
            <Fragment key={index}>
              <MenuItem
                data-cy="sort-selection"

                onClick={(e) => {
                  handleClickSortItem(label);
                  if (menuProps.onClose) {
                    menuProps.onClose(e, "backdropClick");
                  }
                }}
                {...menuItemProps}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText>{label}</ListItemText>

                {list.activeSort === label && (
                  <ListItemIcon>
                    <CheckIcon />
                  </ListItemIcon>
                )}
              </MenuItem>

              {index !== menus.length - 1 && <Divider />}
            </Fragment>
          );
        })}
      </MenuList>
    </Menu>
  );
};
