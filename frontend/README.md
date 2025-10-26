# Template: TypeScript + Next.js + TailwindCSS フロントエンド
## 開発サーバー起動
```
// フロントエンドディレクトリへ移動
cd frontend

// 開発サーバー起動
npm run dev
```
起動後は以下のようにターミナルに表示される
```
> frontend@0.1.0 dev
> next dev --turbopack

   ▲ Next.js 15.3.2 (Turbopack)
   - Local:        http://localhost:3000
   - Network:      http://xxx.xxx.xxx.xxx:3000
// .env.local を設定している場合以下に表示
   - Environments: .env.local

 ✓ Starting...
 ✓ Ready in xxxx ms
```
## テスト実行コマンド
```
npm run test
```
## ビルドコマンド
```
npm run build
```
## ビルドファイルのプレビューサーバー起動
```
// npm run build後に実行
npm run start
```
## 技術スタック

### 言語・フレームワーク
- TypeScript
- React
- Next.js

### ビルド・開発ツール
- Turbopack

### スタイリング
- TailwindCSS

### コードフォーマッター・Linter
- Prettier
- prettier-plugin-tailwindcss
- ESLint

### テスト
- Vitest
- React Testing Library

## 参考
- 主要ライブラリの公式ドキュメント
  - [React](https://ja.react.dev/)
  - [Next.js](https://nextjs.org/)
  - [TailwindCSS](https://tailwindcss.com/)
  - [Vitest](https://vitest.dev/)
  - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)