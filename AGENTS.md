# AGENTS.md

このリポジトリは、React と Remotion を使ってさまざまな動画を制作・実験するための環境です。特定のジャンルや用途には限定せず、目的に応じてコンポジションや素材を追加してください。

## 開発方針

- 動画コンポーネントは `src/compositions/` に配置し、`src/Root.tsx` でコンポジションを登録する
- 画像・音声・動画などの静的素材は `public/` に配置し、Remotion の `staticFile()` から参照する
- アニメーションはフレームに対して決定的になるよう、`useCurrentFrame()` や `interpolate()` などの Remotion APIを利用する
- 既存の TypeScript、ESLint、Prettier の設定とコードスタイルに従う
- 振る舞いを追加・変更するときは、可能な範囲で先にテストを書く

## 確認コマンド

- プレビュー: `npm run dev`
- 一括確認: `npm run check`
- E2Eテスト: `npm run test:e2e`
- 動画出力: `npm run render`

構成や操作方法を変更した場合は、`README.md` も同じ変更内で更新してください。
