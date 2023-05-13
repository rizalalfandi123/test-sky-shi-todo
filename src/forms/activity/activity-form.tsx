import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import DotIcon from "@mui/icons-material/FiberManualRecord";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Select from "@mui/material/Select";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { SetStateAction, FunctionComponent, Dispatch } from "react";
import { Label } from "./activity-form.styled";
import { TActivityPriority, priorityOptions } from "@/utils";

export interface IActivityForm {
  title: string;
  priority: TActivityPriority;
}

export interface IActivityFormProps {
  formState: [IActivityForm, Dispatch<SetStateAction<IActivityForm>>];
}

export type TActivityForm = FunctionComponent<IActivityFormProps>;

export const ActivityForm: TActivityForm = ({ formState }) => {
  const [form, setForm] = formState;

  return (
    <Stack spacing="58px">
      <FormControl variant="outlined">
        <Label shrink htmlFor="title" data-cy="modal-add-name-title">
          NAMA LIST ITEM
        </Label>

        <OutlinedInput
          placeholder="Tambahkan nama Activity"
          name="title"
          id="title"
          value={form.title}
          data-cy="modal-add-name-input"
          onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value }))}
        />
      </FormControl>

      <FormControl variant="outlined" sx={{ width: "240px" }}>
        <Label data-cy="modal-add-priority-title" shrink htmlFor="priority">
          PRIORITY
        </Label>

        <Select<TActivityPriority>
          value={form.priority}
          name="priority"
          id="priority"
          sx={{
            [`& .MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input`]: {
              display: "flex",
              alignItems: "center",
            },
          }}
          onChange={(e) => setForm((prev) => ({ ...prev, priority: e.target.value as TActivityPriority }))}
          displayEmpty
          IconComponent={(props) => {
            return (
              <IconButton sx={{ padding: 0 }} {...props} data-cy="modal-add-priority-dropdown">
                <ExpandMoreIcon />
              </IconButton>
            );
          }}
        >
          {priorityOptions.map((option, index) => {
            return (
              <MenuItem data-cy="modal-add-priority-item" value={option.value} key={index}>
                <ListItemIcon>
                  <DotIcon sx={{ color: option.color, marginRight: "19px" }} />
                </ListItemIcon>

                <ListItemText>{option.label}</ListItemText>
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Stack>
  );
};
