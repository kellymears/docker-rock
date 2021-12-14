#!/bin/bash

curl --silent --show-error https://getcomposer.org/installer | php \
  && chmod +x composer.phar \
  && mv composer.phar /bin/composer \
  && composer -v
