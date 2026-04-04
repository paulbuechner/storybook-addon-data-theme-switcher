import type React from "react";

export interface ThemeSelectorItem {
  id: string;
  title: string;
  onClick: () => void;
  value: string;
  left?: React.ReactNode;
  active: boolean;
}
