# CHANGELOG
Change Of Pace の機能の大まかな変化の記録。
記事投稿・更新は含まない。

## v4.0.2（2023-07-23）
### Fixed
- モバイル端末でもヘッダータイトルが改行されないようにした(#89)

## v4.0.1（2023-07-15）
### Fixed
- Google Adsense 広告が表示されない問題の解消(#81)
- Google Adsense 遅延読み込みによる Lighthouse のスコア改善(#83)
- 細かな修正(#85)
  - 上部広告の下余白を追加
  - アンカーリンクメニューからリンクを選択した際の改善
    - メニューが閉じるようにした
    - 移動先を固定ヘッダー分ずらすようにした
  - ヘッダーのタイトルが a 要素のみの時も block にした
  - 画面幅が狭いときの OG 表示崩れ修正

## v4.0.0（2023-07-09）
- Astro によるリプレース初リリース(#2, #78)

リプレース前より増えた主な機能
- ナビゲーションリンクがどこからも利用できるようにした
  - 追従サイドバー
  - メニュー
- 見出し一覧リンクをサイドバー（メニュー）に配置
- リンクカード
- コードブロックのタイトル表記
- コードブロックのコピーボタン
- カテゴリーごとの RSS

## v1～3
旧リポジトリの [CHANGELOG](https://github.com/h-yoshikawa44/change-of-pace/blob/main/CHANGELOG.md) を参照（プライベートリポジトリ）