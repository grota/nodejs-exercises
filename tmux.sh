#!/bin/bash
SESSION_NAME=${PWD##*/}
tmux has-session -t "$SESSION_NAME" 2> /dev/null
if [ $? != 0  ]; then
  # -d detaches, -n is for name
  tmux new-session -s "$SESSION_NAME" -d -n "shell"
  tmux split-window -h -t "$SESSION_NAME"
  tmux send-keys "vim app.js"
  tmux select-pane -L
  tmux split-window -v
  tmux select-pane -R
  sleep 1
  tmux send-keys C-m
fi
tmux attach -t "$SESSION_NAME"
