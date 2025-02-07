import { defineStore } from "pinia";
import { session, local } from '@/utils/storage'

export interface IUser {
    name: string,
    avatar: string,
    id: number,
    token: string,
    role: string,
    nickname: string,
}

export const useUserStore = defineStore('user', {
        state: (): IUser => ({
            name: '',
            avatar: '',
            id: 0,
            token: '',
            role: '',
            nickname: '',
        }),
        getters: {},
})