// OGP キャッシュデータを差分がわかりやすいように sort するスクリプト
// ファイル名: 降順 > リンク URL: 昇順

import { writeFileSync, readFileSync } from 'node:fs';

const postYearList = ['2018', '2019', '2020', '2021', '2022', '2023', '2024'];

/**
 * オブジェクトの中身をキーをもとに並び替えしたものを返す
 * @param {any} obj オブジェクト
 * @param {'asc' | 'desc'} sortType キーの並び替え順
 */
const sortObjectFromKey = (obj, sortType = 'asc') => {
  let keyList = Object.keys(obj).sort();

  if (sortType === 'desc') {
    keyList = keyList.reverse();
  }

  return keyList.reduce((prev, current) => {
    prev[current] = {
      ...prev[current],
      ...obj[current],
    };

    return prev;
  }, {});
};

for (const year of postYearList) {
  const generatedFilePath = `./generated/ogp/${year}.json`;

  const ogp = JSON.parse(readFileSync(generatedFilePath, 'utf8'));
  const fileNameList = Object.keys(ogp).sort().reverse();
  const sortOgp = fileNameList.reduce((prev, current) => {
    const ogUrlObj = sortObjectFromKey(ogp[current]);

    prev[current] = {
      ...prev[current],
      ...ogUrlObj,
    };
    return prev;
  }, {});

  writeFileSync(generatedFilePath, JSON.stringify(sortOgp, null, 2));
}
