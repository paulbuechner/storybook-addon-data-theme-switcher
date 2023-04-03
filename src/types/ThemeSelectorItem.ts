import type React from "react";

export interface ThemeSelectorItem {
  id: string;
  title: string;
  onClick: () => void;
  value: string;
  right?: React.ReactNode;
  active: boolean;
}
