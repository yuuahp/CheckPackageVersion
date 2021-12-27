# CheckPackageVersion

📦GitHubPackagesで公開されたPackageの最新バージョンをチェックします。  
(Gradle-KotlinDSLであれば自動で最新バージョンに更新することも出来ます)

## 設定 (config.ts)

```typescript
export default {
    token: "ここにアクセストークン",
    groupId: "パッケージのGroupID",
    name: "パッケージのお名前",
    type: "パッケージのおタイプ(maven/npm/rubygems/docker/nuget/container)",
    replaceVersion: true, //指定したビルドファイルを最新バージョンに書き換えるか (KotlinDSLのみ対応)
    buildFilePath: "build.gradle.ktsへのパス" //同じくKotlinDSLのみ対応
}
```

### 例

```typescript
export default {
    token: "ghp_yourpersonaltoken",
    groupId: "com.example",
    name: "examplepackage",
    type: "maven",
    replaceVersion: true,
    buildFilePath: "./build.gradle.kts"
}
```

## 実行

`npm run`
