import React, { useCallback, useMemo, useState } from "react";
import type { ElementType } from "react";
import { useGlobals } from "storybook/manager-api";
import {
  ToggleButton,
  TooltipLinkList,
  WithTooltip,
} from "storybook/internal/components";
import * as Icon from "@storybook/icons";

import { DATA_THEME_KEY, TOOL_ID } from "@/constants";
import { getConfig, getSelectedTheme, getSelectedThemeName } from "@/utils";
import { ColorIcon } from "@/components";
import type {
  ThemeConfig,
  ThemeGlobals,
  ThemeSelectorItem,
  UpdateThemeGlobalsFn,
} from "@/types";

export const DataThemeSelector = () => {
  const [selected, setSelected] = useState<string | undefined>(undefined);
  const [isOpen, setIsOpen] = useState(false);

  const [{ dataTheme, dataThemes: themes }, updateThemeGlobals] =
    useGlobals() as unknown as [ThemeGlobals, UpdateThemeGlobalsFn];

  const themeConfig: ThemeConfig = useMemo(
    () => ({ default: dataTheme, ...themes }),
    [dataTheme, themes]
  );

  const change = useCallback(
    (newSelected: string) => {
      setSelected(newSelected);

      const { list, onChange } = getConfig(themeConfig);
      const selectedTheme = getSelectedTheme(list, newSelected);
      updateThemeGlobals({
        [DATA_THEME_KEY]: selectedTheme?.dataTheme ?? "none",
      });

      if (typeof onChange === "function") {
        onChange(selectedTheme);
      }
    },
    [themeConfig, updateThemeGlobals]
  );

  const { items, selectedTheme } = useMemo(() => {
    const { clearable, list, default: defaultTheme } = getConfig(themeConfig);
    const selectedThemeName = getSelectedThemeName(
      list,
      defaultTheme,
      selected
    );

    const selectorItems: ThemeSelectorItem[] = [];

    if (selectedThemeName !== "none" && clearable) {
      selectorItems.push({
        id: "none",
        title: "Clear data-theme",
        onClick: () => change("none"),
        value: "none",
        active: false,
      });
    }

    if (list.length) {
      for (const { dataTheme, color, name } of list) {
        const id = name ?? dataTheme;
        selectorItems.push({
          id,
          title: id,
          onClick: () => change(id),
          value: id,
          right: <ColorIcon background={color ?? "transparent"} />,
          active: name === selectedThemeName,
        });
      }
    }

    return {
      items: selectorItems,
      selectedTheme: getSelectedTheme(list, selectedThemeName),
    };
  }, [themeConfig, selected, change]);

  const iconKey = themeConfig.toolbar?.icon ?? "PaintBrushIcon";

  const ThemeConfigIcon = useMemo(
    () =>
      Icon[
        // eslint-disable-next-line import/namespace
        iconKey as keyof typeof Icon
      ] as never as ElementType,
    [iconKey]
  );

  return themeConfig.list && themeConfig.list.length > 0 ? (
    <WithTooltip
      key={TOOL_ID}
      placement="top"
      trigger="click"
      closeOnOutsideClick
      onVisibleChange={setIsOpen}
      tooltip={({ onHide }) => (
        <TooltipLinkList
          links={items.map((item) => ({
            ...item,
            onClick: () => {
              item.onClick();
              onHide();
            },
          }))}
        />
      )}
    >
      <ToggleButton
        variant="ghost"
        pressed={selectedTheme !== undefined}
        key={TOOL_ID}
        ariaLabel="Change data-theme attribute"
        tooltip={themeConfig.toolbar?.title ?? "Change data-theme attribute"}
        disableAllTooltips={isOpen}
      >
        <ThemeConfigIcon />
        {selectedTheme ? ` ${selectedTheme.name}` : null}
      </ToggleButton>
    </WithTooltip>
  ) : null;
};
