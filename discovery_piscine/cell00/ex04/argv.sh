#!/bin/bash
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    for arg in "$@"
    do
        echo "$arg"
    done
fi

#$>./argv.sh
#No arguments supplied
#$>./argv.sh 42
#42
#$>./argv.sh 2 40 42
#2
#40
#42
#$>./argv.sh Hello World ! 42
#Hello
#World
#!
#42
#$>