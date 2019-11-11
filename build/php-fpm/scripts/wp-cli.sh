#!/bin/bash

composer create-project wp-cli/wp-cli:2.3.0 /usr/share/wp-cli --no-dev \
  && ln -sf /usr/share/wp-cli/bin/wp /usr/bin/wp \
  && ln -sf /usr/share/wp-cli/bin/wp /usr/bin/wp-cli \
  && wp cli version --allow-root
