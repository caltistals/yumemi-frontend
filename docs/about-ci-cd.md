# CI/CD について

- push 時に lint と build のチェックが走ります
  - このチェックを通らないと、main ブランチへのマージが行えません
- main ブランチに変更があった場合に、vercel へのデプロイが行われます
  - デプロイ先: https://yumemi-frontend-roan.vercel.app/
