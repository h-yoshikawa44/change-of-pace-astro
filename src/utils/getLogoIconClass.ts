import { TAG_ICON_CLASS_MAP, TAG_ICON_CLASS } from '@/consts';
import { toCamelCase } from './toCamelCase';

/**
 * タグ名をもとにアイコンのクラス名を返す
 * @param tag タグ名
 * @returns
 */
export const getLogoIconClass = (tag: string) => {
  const iconClass = TAG_ICON_CLASS_MAP[toCamelCase(tag)];

  if (iconClass) {
    return iconClass;
  }
  return TAG_ICON_CLASS;
};
