#!/bin/bash

HISTSIZE=1000
HISTFILESIZE=2000
HISTCONTROL=ignoredups:ignorespace

shopt -s histappend
shopt -s checkwinsize

[ -x /usr/bin/lesspipe ] && eval "$(SHELL=/bin/sh lesspipe)"

if [ -z "$debian_chroot" ] && [ -r /etc/debian_chroot ]; then
  debian_chroot=$(cat /etc/debian_chroot)
fi

alias ll='ls -alFh'
alias la='ls -A'
alias l='ls -CF'
alias wp='wp --allow-root'

if [ -x /usr/bin/dircolors ]; then
  if [ -r ~/.dircolors ]; then
    eval "$(dircolors -b ~/.dircolors)"
  else
    eval "$(dircolors -b)"
  fi

  alias ls='ls --color=auto'
  alias grep='grep --color=auto'
  alias fgrep='fgrep --color=auto'
  alias egrep='egrep --color=auto'
fi
