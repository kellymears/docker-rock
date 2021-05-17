#!/bin/bash

wp package path aaemnnosttv/wp-cli-login-command \
  || wp package install aaemnnosttv/wp-cli-login-command

wp plugin is-installed wp-cli-login-server --skip-plugins --skip-themes \
  || wp login install --activate --yes --skip-plugins --skip-themes

wp login as 1
