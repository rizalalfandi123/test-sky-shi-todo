export type TActivityPriority = "high" | "very-high" | "normal" | "very-low" | "low";

interface IPriorityOption {
  value: TActivityPriority;
  color: string;
  label: string;
}

export const priorityOptions: IPriorityOption[] = [
  {
    color: "#ED4C5C",
    value: "very-high",
    label: "Very High",
  },
  {
    color: "#F8A541",
    value: "high",
    label: "High",
  },
  {
    color: "#00A790",
    value: "normal",
    label: "Medium",
  },
  {
    color: "#428BC1",
    value: "low",
    label: "Low",
  },
  {
    color: "#8942C1",
    value: "very-low",
    label: "Very Low",
  },
];
