# Dockerized Bedrock

Bedrock in a box. Comes with `wp-cli`.

## Install

1. `git clone git@github.com:kellymears/docker-rock`

2. Rename `env.example` to `.env` and [generate your salts](https://roots.io/salts.html).

3. Run `install.sh`.

## Running commands within the container

```sh
docker compose exec bash
```

From here you can run `wp` commands.
