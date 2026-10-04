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

ブラウザで Remotion Studio が開き、次の4つのコンポジションをプレビューできます。

- `LuminousMitosis`: 発光体が分裂・小型化・再結合する神秘的なループモーション
- `GeometricPulse`: 暖色のバウハウス調で図形がリズミカルに組み替わるモーション
- `GeometricOrbit`: 寒色の軌道とグリッドが同期して回転するモーション
- `Main`: 初期サンプル

初期サンプルは次のコマンドで `out/main.mp4` に書き出します。

```bash
npm run render
```

幾何学モーションは、それぞれ次のコマンドで書き出せます。

```bash
npm run render:pulse
npm run render:orbit
npm run render:mitosis
```

## 開発コマンド

| コマンド                 | 用途                                         |
| ------------------------ | -------------------------------------------- |
| `npm run dev`            | Remotion Studioを起動                        |
| `npm run render`         | MP4動画を書き出し                            |
| `npm run render:pulse`   | GeometricPulseをMP4で書き出し                |
| `npm run render:orbit`   | GeometricOrbitをMP4で書き出し                |
| `npm run render:mitosis` | LuminousMitosisをMP4で書き出し               |
| `npm run build`          | Remotionバンドルを生成                       |
| `npm test`               | Vitestのユニットテストを実行                 |
| `npm run test:e2e`       | PlaywrightのE2Eテストを実行                  |
| `npm run lint`           | ESLintを実行                                 |
| `npm run format`         | Prettierで整形                               |
| `npm run typecheck`      | TypeScriptの型検査を実行                     |
| `npm run check`          | Lint・フォーマット・テスト・ビルドを一括確認 |

E2Eテストを初めて実行する前に、Chromiumをインストールしてください。

```bash
npx playwright install chromium
```

## 構成

- `src/Root.tsx`: コンポジションの登録
- `src/compositions/Main.tsx`: サンプル動画
- `src/compositions/GeometricPulse.tsx`: バウハウス調の幾何学モーション
- `src/compositions/GeometricOrbit.tsx`: 軌道調の幾何学モーション
- `src/compositions/LuminousMitosis.tsx`: 発光体が分裂・再結合するループモーション
- `src/video-config.ts`: 動画サイズ・fps・尺の設定
- `public/`: 画像、音声、動画などの静的素材の配置先

Remotionを商用利用する場合は、用途に応じて[Remotion License](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md)を確認してください。
