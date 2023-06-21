// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Change Of Pace';
export const SITE_DESCRIPTION = '気分転換の遊び場';

export const MENU_TYPE_LIST = ['nav', 'anchor'] as const;

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

export const RSS_LINKS = {
  all: '/rss.xml',
  [CATEGORY_LIST[0]]: `/rss/${CATEGORY_LIST[0]}.xml`,
  [CATEGORY_LIST[1]]: `/rss/${CATEGORY_LIST[1]}.xml`,
  [CATEGORY_LIST[2]]: `/rss/${CATEGORY_LIST[2]}.xml`,
  [CATEGORY_LIST[3]]: `/rss/${CATEGORY_LIST[3]}.xml`,
  [CATEGORY_LIST[4]]: `/rss/${CATEGORY_LIST[4]}.xml`,
} as const;

export const TAG_ICON_CLASS_MAP = {
  androidStudio: 'i-logos:android-icon',
  // anyenv: '',
  // aspida: '',
  autoprefixer: 'i-logos:autoprefixer',
  aws: 'i-logos:aws',
  // buildable: '',
  // closeTo2: '',
  cloudFront: 'i-logos:aws-cloudfront',
  css: 'i-logos:css-3',
  // devChallenges: '',
  // developersSummit: '',
  docker: 'i-logos:docker-icon',
  docusaurus: 'i-logos:docusaurus',
  esLint: 'i-logos:eslint',
  expo: 'i-logos:expo-icon',
  firebase: 'i-logos:firebase',
  githubActions: 'i-logos:github-actions',
  github: 'i-logos:github-icon',
  gitlabCi: 'i-logos:gitlab',
  gitlab: 'i-logos:gitlab',
  git: 'i-logos:git-icon',
  // googleAppsScript: '',
  homeBrew: 'i-logos:homebrew',
  // hp: '',
  html: 'i-logos:html-5',
  javascript: 'i-logos:javascript',
  jekyll: 'i-logos:jekyll',
  // jigsawLikePuzzle: '',
  // jsconfJp: '',
  laravel: 'i-logos:laravel',
  materialUi: 'i-logos:material-ui',
  netlify: 'i-logos:netlify-icon',
  'node.js': 'i-logos:nodejs-icon-alt',
  notion: 'i-logos:notion-icon',
  php: 'i-logos:php',
  prettier: 'i-logos:prettier',
  rails: 'i-logos:rails',
  reactQuery: 'i-logos:react-query-icon',
  // reactNative: '',
  react: 'i-logos:react',
  ruby: 'i-logos:ruby',
  s3: 'i-logos:aws-s3',
  slack: 'i-logos:slack-icon',
  // socialite: '',
  swagger: 'i-logos:swagger',
  // til: '',
  typescript: 'i-logos:typescript-icon',
  vite: 'i-logos:vitejs',
  // volta: '',
  vscode: 'i-logos:visual-studio-code',
  // web1week: '',
  windowsTerminal: 'i-logos:microsoft-windows-icon',
  windows: 'i-logos:microsoft-windows-icon',
  // wsl: '',
  // zod: '',
  // サーバレス: '',
  // シェル: '',
  テクニカルライティング: 'i-system-uicons:write',
  // ブログ: '',
  リンク集: 'i-teenyicons:link-outline',
  // ローコード: '',
  振り返り: 'i-teenyicons:attachment-outline',
  // 脱出ゲーム: '',
  // 開発環境: '',
};

export const TAG_ICON_CLASS = 'i-system-uicons:tag' as const;

export const TAG_ICON_CLASS_LIST = [
  ...Object.values(TAG_ICON_CLASS_MAP),
  TAG_ICON_CLASS,
];

export const ACCOUNT_LINKS = {
  portfolio: 'https://h-yoshikawa44.com',
  github: 'https://github.com/h-yoshikawa44',
  twitter: 'https://twitter.com/yoshi44_lion',
} as const;
