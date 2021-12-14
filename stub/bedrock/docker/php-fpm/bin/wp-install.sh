#!/bin/bash

cd /bedrock

composer install

wp core install --url=$WP_HOME --title=example --admin_user=admin --admin_email=admin@example.com --admin_password=password

wp package install aaemnnosttv/wp-cli-login-command || echo 'wp-cli-login-command is already installed'

wp plugin is-installed wp-cli-login-server --skip-plugins --skip-themes \
  || wp login install --activate --yes --skip-plugins --skip-themes

exit 0
