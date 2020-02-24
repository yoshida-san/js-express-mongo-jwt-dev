# js-express-mongo-jwt-dev

## 前提

- Node.js がインストールされていること
- docker, docker-compose がインストールされていること
- VSCode を利用すること

## 開発環境のインストール

この README.md と同階層で以下のコマンドを実行

```
~$ npm i
~$ docker-compose up
```

## VSCode で快適に開発する時に必要なこと

以下の VSCode プラグインをインストールすることで快適に開発ができるようになります。

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

プラグインインストール後は VSCode を再起動しておきましょう。

## 動作確認

### 単体テスト

以下のコマンドでテストを動かしてみましょう。

```
npm run ut
```

```
 PASS  __tests__/ut/Hello.test.js
  Greeting test
    ✓ Greeting to Yoshida -> "Hello, Yoshida!" (2ms)
    ✓ Greeting to John -> "Hello, John!"
    ✓ Greeting to "" -> "Hello...?"
    ✓ Greeting to null -> "Hello...?"
    ✓ Greeting to undefined -> "Hello...?"

Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        1.986s
```

こんな感じで表示されれば無事テストが動いています！

### E2E テスト

以下のコマンドでテストを動かしてみましょう。

```
npm run 2e2
```

```
 PASS  __tests__/e2e/root.test.js
  Testing /
    ✓ [Get] (28ms)
    ✓ [Get]{name="John"} (3ms)
    ✓ [Post] (3ms)
    ✓ [Post]{name="Jessie"} (18ms)

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        2.884s
```

こんな感じで表示されれば無事テストが動いています！

### 単体テストと E2E テストを同時に実行

以下のコマンドでテストを動かしてみましょう。

```
npm test
```

```
 PASS  __tests__/ut/Hello.test.js
 PASS  __tests__/e2e/root.test.js

Test Suites: 2 passed, 2 total
Tests:       9 passed, 9 total
Snapshots:   0 total
Time:        4.628s
Ran all test suites.
```

こんな感じで表示されれば無事テストが動いています！

### API 動作確認

以下のコマンドでサンプルの API を動かしてみましょう。

```
npm run start
```

Terminal に「Server running at http://127.0.0.1:3000/」と表示されていれば起動成功です！  
Terminal で以下のコマンドを実行してみましょう。

```
curl -X POST -H "Content-Type: application/json" -d '{"name":"John"}' localhost:3000
```

以下の内容が返ってくれば成功です！

```
{"message":"Hello, John!","requestPath":"/"}
```

### mongoDB の確認

以下のコマンドで mongoDB と mongoDB の管理ツールを動かしてみましょう（起動に少し時間がかかります）。

```
docker-compose up
```

コンテナ起動後、[localhost:8081](http://localhost:8081)にアクセスしてみましょう。  
Mongo Express が表示されていれば成功です！使い方はググってください。

## Git hooks

### pre-commit

Formatter と Lint --fix が走ります。

### pre-push

単体テストと E2E テストが走ります。
