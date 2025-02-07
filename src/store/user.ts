import { defineStore } from "pinia";
import { session, local } from '@/utils/storage'
import avartar from "@/assets/img/faye.png"

export interface IUser {
    name: string,
    avatar: string,
    id: number,
    token: string,
    role: string,
    nickname: string,
    signature: string,
}

export const useUserStore = defineStore('user', {
        state: (): IUser => ({
            name: 'zzj',
            avatar: avartar,
            id: 0,
            token: '',
            role: '',
            nickname: 'Sc ccccccc',
            signature: "I've been here all alone.",
        }),
        getters: {},
        actions: {
            // 获取用户信息
        }
})