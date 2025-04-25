export interface IArticleData {
    id: number | string; // 文章id
    category_id: number | string; // 分类id
    article_cover: string;  // 封面
    article_title: string; // 标题
    article_content: string; // 内容
    article_type: number | string; // 类型
    is_top: number | string; // 是否置顶
    is_delete: number | string; // 是否删除
    is_recommend: number | string; // 是否推荐

    user_id: number | string; // 用户id

    status: number | string; // 状态
    create_time: string; // 创建时间
    update_time: string; // 更新时间
}