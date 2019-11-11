FROM php:7.3-fpm

WORKDIR /bedrock

RUN set -ex \
 && savedAptMark="$(apt-mark showmanual)" \
 && apt-get update \
 && apt-get install -y --no-install-recommends \
    libjpeg-dev \
    libpng-dev \
 && docker-php-ext-configure gd --with-png-dir=/usr --with-jpeg-dir=/usr \
 && docker-php-ext-install \
    gd \
    mysqli \
    opcache \
 && apt-mark auto '.*' > /dev/null \
 && apt-mark manual $savedAptMark \
 && ldd "$(php -r 'echo ini_get("extension_dir");')"/*.so \
    | awk '/=>/ { print $3 }' \
    | sort -u \
    | xargs -r dpkg-query -S \
    | cut -d: -f1 \
    | sort -u \
    | xargs -rt apt-mark manual \
 && apt-get purge -y --auto-remove -o APT::AutoRemove::RecommendsImportant=false \
 && rm -rf /var/lib/apt/lists/*

RUN apt-get update \
 && apt-get install -y less git

# composer
ADD scripts/composer.sh /composer.sh
RUN chmod u+x /composer.sh
RUN /composer.sh

# wp-cli
ADD scripts/wp-cli.sh /wp-cli.sh
RUN chmod u+x /wp-cli.sh
RUN /wp-cli.sh
