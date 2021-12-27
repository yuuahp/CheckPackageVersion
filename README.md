# CheckPackageVersion

📦GitHubPackagesで公開されたPackageの最新バージョンをチェックします。

## 設定

```typescript
//config.ts
export default {
    token: "ここにアクセストークン",
    groupId: "パッケージのGroupID",
    name: "パッケージのお名前",
    type: "パッケージのおタイプ(maven/npm/rubygems/docker/nuget/container)",
    replaceVersion: true, //指定したビルドファイルを最新バージョンに書き換えるか (KotlinDSLのみ対応)
    buildFilePath: "build.gradle.ktsへのパス"
}
```

## 実行

`npm run`
