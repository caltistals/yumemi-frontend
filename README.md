# ゆめみフロントエンドコーディング試験

- [ゆめみ様向け各種情報](docs/for-yumemi.md)
- [ディレクトリ構成](docs/directory-structure.md)

## 環境構築

### 動作環境

- Node.js v16.10.0

### 環境変数設定

```
cp .env.example .env
```

[RESASAPI のサイト](https://opendata.resas-portal.go.jp/)から利用登録を行い、取得した API キーを`.env`の`VITE_RESAS_API_KEY`の値に設定してください。

```
VITE_RESAS_API_KEY=XXXXXXXXX
```

### 開発サーバー起動

```
npm install
npm run dev
```

### StoryBook 起動

```
npm run storybook
```

### コードチェック・フォーマット

```
# lint
npm run lint
# format
npm run format
```
