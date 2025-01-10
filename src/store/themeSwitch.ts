import { defineStore } from "pinia";


// 这里使用了vueuse
import { useDark, useToggle } from "@vueuse/core";
import { local } from "@/utils/storage";

const isDarkTheme = useDark({
    storageKey: "darkThemeKey",
    // 暗黑class类名
    valueDark: "dark",
    // 高亮class类名
    valueLight: "light",
});
const toggle = useToggle(isDarkTheme);

export const useThemeSwitchStore = defineStore("themeSwitch", {
    state: () => {
        return {
            theme: isDarkTheme.value,
        }
    },
    getters: {
        // 获取当前整体主题 黑夜/白天
        mainTheme() {
          return isDarkTheme.value;
        },
      },
    actions: {
        // 切换主题
        switchMainTheme() {
          toggle();
          this.theme = isDarkTheme.value;
            local.set("mainTheme", this.theme ? "dark" : "light");
        },

    },

})