# Change Of Pace
気分転換の遊び場  
（技術のことから雑談ネタまでいろいろ書いてる個人ブログ）

2023/07に Jekyll より移行したもの。

## 技術構成
- TypeScript：5.9.2
- Node.js：22.15.0
- Astro：5.13.7
- UnoCSS：66.5.1

## 環境変数
テンプレファイルをコピーして、値を入れる
```
cp .env.example .env
```

- GOOGLE_ANALYTICS_TAG：`G-`から始まる ID
- GOOGLE_SITE_VERIFICATION
- PUBLIC_GOOGLE_ADSENSE_PUBLISHER_ID：`ca-`から始まる ID
- PUBLIC_GOOGLE_ADSENSE_SLOT

## 環境構築
ライブラリインストール
```bash
npm install
```

開発サーバ起動
```bash
npm run dev
```

## 静的ファイルとしての確認
ビルド
```bash
npm run build
```

プレビュー起動
```bash
npm run preview
```

## 開発にあたり、特に inspire されたサイト
- [Zenn](https://zenn.dev/)：全体構成
- [Tailwind CSS](https://tailwindcss.com/)：メニュー周り
- [hiroppy's site](https://hiroppy.me/blog)：全体構成、リンクカード
- [mamenaka](https://mamenaka.jp/)：Google Adsense スクリプトの遅延読み込み
