#!/bin/bash

function show_commands(){
    echo ""
    echo ""
    echo "LIST OF COMMANDS"
    echo "-a or --all: Viewing all grades"
    echo "-s or --specific (followed by a class name): Viewing specific grades for one class"
    echo "-h or --help: Viewing all commands"
}

function all(){
    node all.js
}

function specific(){
    class=$2
    if [ -a communication.txt ]; then
        rm communication.txt
        echo $2 >> communcation.txt
        node specific.js
    else
        echo $2 >> communcation.txt
        node specific.js 
}

case $1 in 
    -h|--help)
        show_commands
        ;;
    -a|--all)
        all
        ;;
    -s|--specific)
        specific
esac