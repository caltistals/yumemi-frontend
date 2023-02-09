# ディレクトリ構造

```
src
├── assets            # 画像やフォントなどの静的ファイル
├── components        # アプリケーション全体で使用する共通コンポーネント
├── features          # 機能ベースモジュール
├── lib               # 外部ライブラリをラップしたモジュール
├── providers         # アプリケーションのプロバイダー
```

```
src/features/unknown-feature
├── api              # APIリクエストを行う関数
├── components       # 機能に限定されたコンポーネント
├── hooks            # 機能に限定されたhooks
├── types            # 機能に限定された型
```
