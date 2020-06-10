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