## プロジェクトの作成と起動

```
mkdir src
cd src
composer create-project laravel/laravel=5.7 laravel-othello
cd laravel-othello
php artisan serve
```

## データベースの設定

Laravelの設定ファイル".env"をデータベースの設定に合わせて編集する．

```
DB_CONNECTION=mysql
DB_HOST=[ホスト名(localhost)]
DB_PORT=[ポート名(3306)]
DB_DATABASE=[スキーマ名]
DB_USERNAME=[データベースのユーザーネーム]
DB_PASSWORD=[パスワード]
```

## 認証機能の作成

```
php artisan make:auth
php artisan migrate
```

## React関係ファイルのインストール

```
cd src
cd laravel-othello
cd resources
cd react
npm install
```

## オセロコントローラを作る

```
cd src
cd laravel-othello
php artisan make:controller OthelloController
```

## Reactのファイルをコンパイルする

```
cd src
cd laravel-othello
python update_react.py
```

## データベースのマイグレーションを行う

```
cd src
cd laravel-othello
php artisan make:migration create_othello_players_table --create=othello_players
php artisan make:migration add_user_id_othello_players_table --table=othello_players
```

https://readouble.com/laravel/5.7/ja/migrations.html を参考にマイグレーションファイルの編集を行う．

```
php artisan migrate
```

## モデルを作成する

```
cd src
cd laravel-othello
php artisan make:model othello_player
```

## プロバイダを作成する

```
cd src
cd laravel-othello
php artisan make:provider OthelloServiceProvider
```

その他の作業は https://www.ritolab.com/entry/88 を参照して下さい．