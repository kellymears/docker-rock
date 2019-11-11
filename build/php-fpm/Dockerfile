FROM ubuntu:18.04

ENV DEBIAN_FRONTEND noninteractive
ENV PHP_VERSION 7.3
ENV WP_CLI_VERSION 2.3.0

# Set up locale
RUN apt-get update \
 && apt-get -y install locales \
 && locale-gen en_US.UTF-8

ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

# Install packages
RUN apt-get update \
  && apt-get -y --no-install-recommends install \
    software-properties-common \
    bash \
    build-essential \
    ca-certificates \
    curl \
    dnsmasq \
    dnsutils \
    gcc \
    gdb \
    git \
    htop \
    iputils-ping\
    iproute2 \
    less \
    make \
    mariadb-client \
    mcrypt \
    nginx \
    openssl \
    redis-tools \
    ssmtp \
    supervisor \
    tar \
    unzip \
    vim \
    wget \
    zip

# Install PHP and extensions
RUN add-apt-repository -y ppa:ondrej/php \
 && apt-get update \
 && apt-get -y install \
    php${PHP_VERSION} \
    php${PHP_VERSION}-fpm \
    php-pear \
    php${PHP_VERSION}-bz2 \
    php${PHP_VERSION}-cli \
    php${PHP_VERSION}-common \
    php${PHP_VERSION}-curl \
    php${PHP_VERSION}-dev \
    php${PHP_VERSION}-dom \
    php${PHP_VERSION}-gd \
    php${PHP_VERSION}-imagick \
    php${PHP_VERSION}-intl \
    php${PHP_VERSION}-json \
    php${PHP_VERSION}-mbstring \
    php${PHP_VERSION}-mysql \
    php${PHP_VERSION}-opcache \
    php${PHP_VERSION}-phar \
    php${PHP_VERSION}-readline \
    php${PHP_VERSION}-redis \
    php${PHP_VERSION}-xml \
    php${PHP_VERSION}-xdebug

# Configure and run php-fpm
COPY php-conf/php-fpm.conf /etc/php/${PHP_VERSION}/fpm/php-fpm.conf
RUN  service php${PHP_VERSION}-fpm start

# Install composer
RUN curl --silent --show-error https://getcomposer.org/installer | php \
 && chmod +x composer.phar \
 && mv composer.phar /usr/bin/composer\
 && composer -v

## Install wp-cli pkg
RUN composer create-project wp-cli/wp-cli:${WP_CLI_VERSION} /usr/share/wp-cli --no-dev \
 && ln -sf /usr/share/wp-cli/bin/wp /usr/bin/wp \
 && ln -sf /usr/share/wp-cli/bin/wp /usr/bin/wp-cli \
 && wp cli version --allow-root

# Cleanup
RUN apt-get clean \
 && rm -rf \
    /var/lib/apt/lists/* \
    /tmp/* \
    /var/tmp/*

WORKDIR /app

EXPOSE 9000
