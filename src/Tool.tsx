import React, { useCallback, useMemo, useState } from "react";
import type { ElementType } from "react";
import { useGlobals } from "storybook/manager-api";
import {
  ActionList,
  PopoverProvider,
  ToggleButton,
} from "storybook/internal/components";
import { styled } from "storybook/theming";
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

const MenuButton = styled(ActionList.Button)(({ theme }) => ({
  width: "100%",
  fontWeight: theme.typography.weight.regular,
  color: theme.color.defaultText,
  justifyContent: "flex-start",
}));

const MenuText = styled(ActionList.Text)({
  flexGrow: 0,
});

const ThemeMenu = ({
  items,
  onHide,
}: {
  items: ThemeSelectorItem[];
  onHide: () => void;
}) => (
  <ActionList style={{ minWidth: 180 }}>
    {items.map((item) => (
      <ActionList.Item key={item.id} active={item.active}>
        <MenuButton
          ariaLabel={false}
          onClick={() => {
            item.onClick();
            onHide();
          }}
        >
          {item.left && <ActionList.Icon>{item.left}</ActionList.Icon>}
          <MenuText>{item.title}</MenuText>
        </MenuButton>
      </ActionList.Item>
    ))}
  </ActionList>
);

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
        left: <Icon.UndoIcon />,
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
          left: <ColorIcon background={color ?? "transparent"} />,
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
    <PopoverProvider
      ariaLabel="Theme selector"
      placement="top-start"
      padding={0}
      onVisibleChange={setIsOpen}
      popover={({ onHide }) => <ThemeMenu items={items} onHide={onHide} />}
    >
      <ToggleButton
        pressed={selectedTheme !== undefined}
        key={TOOL_ID}
        ariaLabel="Change data-theme attribute"
        tooltip={themeConfig.toolbar?.title ?? "Change data-theme attribute"}
        disableAllTooltips={isOpen}
      >
        <ThemeConfigIcon />
        {selectedTheme ? ` ${selectedTheme.name}` : null}
      </ToggleButton>
    </PopoverProvider>
  ) : null;
};
