/**
 * slug から年フォルダ部分を削除したもの抽出
 * @param slug
 * @returns 抽出した slug
 */
export const extractPostSlug = (slug: string) => slug.replace(/^\d{4}\//, "");
