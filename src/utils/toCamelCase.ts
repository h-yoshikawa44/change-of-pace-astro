/**
 * スペースを含む文字列をキャメルケースに変換する
 * （スペースを含まない場合は、引数をそのまま返す）
 * @param str 文字列
 * @returns キャメルケースに変換された文字列
 */
export const toCamelCase = (str: string) => {
  if (!str.includes(' ')) return str;

  const lowerCase = str.toLocaleLowerCase();
  return lowerCase
    .split(' ')
    .map((word, index) => {
      if (index === 0) return word;
      return word.charAt(0).toLocaleUpperCase() + word.slice(1);
    })
    .join('');
};
