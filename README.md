# CheckPackageVersion

📦GitHubPackagesで公開されたPackageの最新バージョンをチェックします。

## 設定

```typescript
//config.ts
export default {
    token: "ここにアクセストークン",
    name: "パッケージのお名前",
    type: "パッケージのおタイプ(maven/npm/rubygems/docker/nuget/container)"
}
```

## 実行

`npm test`
