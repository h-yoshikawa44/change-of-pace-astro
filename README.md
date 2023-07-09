# Change Of Pace
気分転換の遊び場  
（技術のことから雑談ネタまでいろいろ書いてる個人ブログ）

2023/07に Jekyll より移行したもの。

## 技術構成
- TypeScript：5.0.4
- Node.js：18.15.0
- Astro：2.7.4
- UnoCSS：0.53.4

## 環境構築
（必要に応じて Git Hooks の権限設定）
```bash
chmod a+x .githooks/prepare-commit-msg
```

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

## 開発にあたり特に inspire されたサイト
- [hiroppy's site](https://hiroppy.me/blog)
- [Zenn](https://zenn.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
