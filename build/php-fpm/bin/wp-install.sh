#!/bin/sh

cd /bedrock
ls -la
composer install
wp core install --url=$WP_HOME --title=example --admin_user=admin --admin_email=admin@example.com --admin_password=password
