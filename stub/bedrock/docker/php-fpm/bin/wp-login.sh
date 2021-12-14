#!/bin/bash

cd /bedrock

wp package install aaemnnosttv/wp-cli-login-command || echo 'wp-cli-login-command is already installed'
wp login install --activate --yes --skip-plugins --skip-themes || echo 'wp login already activated'

wp login as 1
