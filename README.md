# Remotion 動画制作環境

React と Remotion を使い、コードから動画を制作するための最小構成です。サンプルとして、フルHD・30fps・5秒の `Main` コンポジションを含みます。

## 必要なもの

- Node.js 20 以上
- npm

## 使い方

```bash
npm install
npm run dev
```

ブラウザで Remotion Studio が開き、`Main` コンポジションをプレビューできます。動画は次のコマンドで `out/main.mp4` に書き出します。

```bash
npm run render
```

## 開発コマンド

| コマンド            | 用途                                         |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Remotion Studioを起動                        |
| `npm run render`    | MP4動画を書き出し                            |
| `npm run build`     | Remotionバンドルを生成                       |
| `npm test`          | Vitestのユニットテストを実行                 |
| `npm run test:e2e`  | PlaywrightのE2Eテストを実行                  |
| `npm run lint`      | ESLintを実行                                 |
| `npm run format`    | Prettierで整形                               |
| `npm run typecheck` | TypeScriptの型検査を実行                     |
| `npm run check`     | Lint・フォーマット・テスト・ビルドを一括確認 |

E2Eテストを初めて実行する前に、Chromiumをインストールしてください。

```bash
npx playwright install chromium
```

## 構成

- `src/Root.tsx`: コンポジションの登録
- `src/compositions/Main.tsx`: サンプル動画
- `src/video-config.ts`: 動画サイズ・fps・尺の設定
- `public/`: 画像、音声、動画などの静的素材の配置先

Remotionを商用利用する場合は、用途に応じて[Remotion License](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md)を確認してください。
