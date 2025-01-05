/**
 * id（旧 slug） から年フォルダ部分を削除したもの抽出
 * @param slug
 * @returns 抽出した id
 */
export const extractPostId = (id: string) => id.replace(/^\d{4}\//, '');
