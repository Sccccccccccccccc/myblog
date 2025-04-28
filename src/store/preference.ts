import { defineStore } from "pinia";
import { session, local } from '@/utils/storage'

export const usePreferenceStore = defineStore('home', {
    state: () => {
        return {

          config: { // 用户偏好设置
            backgroundColor: '#fff'
          },

          isShowDrawer: false, // 抽屉显示状态

        }
      },
    getters: {
        // 获取当前用户偏好设置
        userPreference() {
            return local.get("preferenceConfig")
        }
    },
    actions: {

        // 设置抽屉显示状态
        setShowDrawer(val: boolean) {
            this.isShowDrawer = val;
            console.log('设置抽屉显示状态', this.isShowDrawer);
        },

        setConfig() {
            local.set('config', this.config)
        }

    }
})