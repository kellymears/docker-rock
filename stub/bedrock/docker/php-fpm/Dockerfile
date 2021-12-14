FROM php:7.4-fpm
LABEL name=app
LABEL version=1

WORKDIR /bedrock

RUN set -ex \
 && savedAptMark="$(apt-mark showmanual)" \
 && apt-get update \
 && apt-get install -y \
    libjpeg-dev \
    libpng-dev \
    libzip-dev \
 && docker-php-ext-configure zip \
 && docker-php-ext-configure gd \
 && docker-php-ext-install \
    zip \
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
 && rm -rf /var/lib/apt/lists/* \
 && apt-get clean

RUN apt-get update \
 && apt-get install -y less git \
 && apt-get clean

ADD bin/composer.sh /bin/composer.sh
RUN chmod u+x /bin/composer.sh
RUN /bin/composer.sh

ADD bin/wp-cli.sh /bin/wp-cli.sh
RUN chmod u+x /bin/wp-cli.sh
RUN /bin/wp-cli.sh

ADD bin/teletype.sh /bin/teletype.sh
RUN chmod u+x /bin/teletype.sh

ADD bin/wp-install.sh /bin/wp-install.sh
RUN chmod u+x /bin/wp-install.sh

ADD bin/wp-login.sh /bin/wp-login.sh
RUN chmod u+x /bin/wp-login.sh

RUN useradd -ms /bin/bash web
RUN chown -R web /bedrock
RUN chown -R web /bin

USER web
