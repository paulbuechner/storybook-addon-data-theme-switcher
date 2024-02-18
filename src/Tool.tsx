import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useGlobals } from "@storybook/manager-api";
import {
  IconButton,
  Icons,
  TooltipLinkList,
  WithTooltip,
} from "@storybook/components";
import memoize from "memoizerific";

import { DATA_THEME_KEY, TOOL_ID } from "@/constants";
import { getConfig, getSelectedTheme, getSelectedThemeName } from "@/utils";
import { ColorIcon } from "@/components";
import type {
  Theme,
  ThemeConfig,
  ThemeGlobals,
  ThemeSelectorItem,
  UpdateThemeGlobalsFn,
} from "@/types";

interface ThemeToolState {
  selected: string | undefined;
  expanded: boolean;
}

const createThemeSelectorItem = memoize(1000)(
  (
    id: string,
    title: string,
    color: string,
    hasSwatch: boolean,
    change: (arg: { selected: string; expanded: boolean }) => void,
    active: boolean
  ): ThemeSelectorItem => ({
    id,
    title,
    onClick: () => {
      change({ selected: id, expanded: false });
    },
    value: id,
    right: hasSwatch ? <ColorIcon background={color} /> : undefined,
    active,
  })
);

const getDisplayableState = memoize(10)((
  props: ThemeConfig,
  state: ThemeToolState,
  change: (arg: { selected: string; expanded: boolean }) => void
) => {
  const { clearable, list, default: defaultTheme } = getConfig(props);

  const selectedThemeName = getSelectedThemeName(
    list,
    defaultTheme,
    state.selected
  );

  let availableThemeSelectorItems: ThemeSelectorItem[] = [];
  let selectedTheme: Theme | undefined;

  if (selectedThemeName !== "none" && clearable) {
    availableThemeSelectorItems.push(
      createThemeSelectorItem(
        "none",
        "Clear data-theme",
        "transparent",
        false,
        change,
        false
      )
    );
  }

  if (list.length) {
    availableThemeSelectorItems = [
      ...availableThemeSelectorItems,
      ...list.map(({ dataTheme, color, name }) =>
        createThemeSelectorItem(
          name ?? dataTheme,
          name ?? dataTheme,
          color ?? "transparent",
          true,
          change,
          name === selectedThemeName
        )
      ),
    ];
    selectedTheme = getSelectedTheme(list, selectedThemeName);
  }

  return {
    items: availableThemeSelectorItems,
    selectedTheme,
  };
});

export const DataThemeSelector = () => {
  const [themeConfig, setThemeConfig] = useState<ThemeConfig>({
    list: [],
  });

  const [themeToolState, setThemeToolState] = useState<ThemeToolState>({
    selected: undefined,
    expanded: false,
  });

  const [{ dataTheme, dataThemes: themes }, updateThemeGlobals] =
    useGlobals() as [ThemeGlobals, UpdateThemeGlobalsFn];

  useEffect(() => {
    setThemeConfig({ default: dataTheme, ...themes });
  }, [dataTheme, themes, setThemeConfig]);

  // Handle item click and update the global state
  const change = useCallback(
    (args: { selected: string; expanded: boolean }) => {
      setThemeToolState(args);

      const { list } = getConfig(themeConfig);
      const selectedTheme = getSelectedTheme(list, args.selected);
      updateThemeGlobals({
        [DATA_THEME_KEY]: selectedTheme?.dataTheme ?? "none",
      });

      const { onChange } = getConfig(themeConfig);
      if (typeof onChange === "function") {
        onChange(selectedTheme);
      }
    },
    [themeConfig, updateThemeGlobals]
  );

  const { items, selectedTheme } = useMemo(
    () => getDisplayableState(themeConfig, themeToolState, change),
    [themeConfig, themeToolState, change]
  );

  return themeConfig.list && themeConfig.list.length > 0 ? (
    <WithTooltip
      key={TOOL_ID}
      placement="top"
      trigger="click"
      visible={themeToolState.expanded}
      tooltip={<TooltipLinkList links={items} />}
    >
      <IconButton
        active={selectedTheme !== undefined}
        key={TOOL_ID}
        placeholder={selectedTheme?.name ?? "none"}
        title="Change data-theme attribute"
        onClick={() =>
          setThemeToolState((prevState) => ({
            ...prevState,
            expanded: !prevState.expanded,
          }))
        }
      >
        <Icons icon="paintbrush" />
      </IconButton>
    </WithTooltip>
  ) : null;
};
