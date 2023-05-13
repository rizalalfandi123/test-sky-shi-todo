export type TActivityPriority = "high" | "very-high" | "normal" | "very-low" | "low";

interface IPriorityOption {
  value: TActivityPriority;
  color: string;
  label: string;
  testData: string
}

export const priorityOptions: IPriorityOption[] = [
  {
    color: "#ED4C5C",
    value: "very-high",
    label: "Very High",
    testData: "modal-add-priority-very-high"
  },
  {
    color: "#F8A541",
    value: "high",
    label: "High",
    testData: "modal-add-priority-high"
  },
  {
    color: "#00A790",
    value: "normal",
    label: "Medium",
    testData: "modal-add-priority-medium"
  },
  {
    color: "#428BC1",
    value: "low",
    label: "Low",
    testData: "modal-add-priority-low"
  },
  {
    color: "#8942C1",
    value: "very-low",
    label: "Very Low",
    testData: "modal-add-priority-very-low"
  },
];
