# Dockerized Bedrock

Bedrock in a box. Totally vanilla. Comes with `wp-cli`.

## Install

1. `git clone git@github.com:kellymears/docker-rock`

2. Run `install.sh` to `git clone` and `composer install` Bedrock into `/bedrock`. Or, do it manually.

3. Rename `env.example` to `.env` and set your database name and user info _in that .env file_ (not Bedrock's).

4. Run `docker-compose up` in the project root.

## Wishlist

1. Let's encrypt

2. Integrate Redis container more closely (without modifying Bedrock).

3. Borrow more of the Trellis nginx config.
