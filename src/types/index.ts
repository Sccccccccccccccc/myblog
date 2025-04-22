export * from './article'

// 随机标题
export interface IrandomTitle {
    id?: number | string,
    title_en: string,
    title_zh: string,
    usage_count?: number
}

// 首页数据结构
export interface IHome {
    loading: boolean, // 加载中状态
    articleList: any, // TODO: 文章详情
    randomTitle: IrandomTitle, // 随机标题
    articleDetail: any, // TODO: 文章详情
}