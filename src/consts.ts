// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Change Of Pace';
export const SITE_DESCRIPTION = '気分転換の遊び場';

export const CATEGORY_LIST = [
  'develop',
  'tool-and-service',
  'qualification',
  'event',
  'free',
] as const;

export const CATEGORY_MAP = {
  [CATEGORY_LIST[0]]: '開発関連技術',
  [CATEGORY_LIST[1]]: 'ツール・サービス',
  [CATEGORY_LIST[2]]: '資格勉強',
  [CATEGORY_LIST[3]]: 'イベント',
  [CATEGORY_LIST[4]]: '雑談',
} as const;

export const PAGE_SIZE = 10;

export const ACCOUNT_LINKS = {
  portfolio: 'https://h-yoshikawa44.com',
  github: 'https://github.com/h-yoshikawa44',
  twitter: 'https://twitter.com/yoshi44_lion',
};
