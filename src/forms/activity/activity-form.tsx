import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import DotIcon from "@mui/icons-material/FiberManualRecord";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Select from "@mui/material/Select";
import { Label } from "./activity-form.styled";
import { Dispatch } from "react";
import { SetStateAction } from "react";
import { FunctionComponent } from "react";
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
          data-cy="modal-add-priority-dropdown"
          sx={{
            [`& .MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input`]: {
              display: "flex",
              alignItems: "center",
            },
          }}
          slotProps={{
            input: {

            }
          }}
          onChange={(e) => setForm((prev) => ({ ...prev, priority: e.target.value as TActivityPriority }))}
          displayEmpty
        >
          {priorityOptions.map((option, index) => {
            return (
              <MenuItem data-cy={option.testData} value={option.value} key={index}>
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
