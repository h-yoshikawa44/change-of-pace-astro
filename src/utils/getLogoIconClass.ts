import { TAG_ICON_CLASS_MAP, TAG_ICON_CLASS } from '@/consts';
import { toCamelCase } from './toCamelCase';

/**
 * タグ名をもとにアイコンのクラス名を返す
 * @param tag タグ名
 * @returns
 */
export const getLogoIconClass = (tag: string) => {
  // 定数キーだと型が合わないので string 型に変換する
  const iconClass = (TAG_ICON_CLASS_MAP as { [key: string]: string })[
    toCamelCase(tag)
  ];

  if (iconClass) {
    return iconClass;
  }
  return TAG_ICON_CLASS;
};
