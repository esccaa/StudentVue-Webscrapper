#!/bin/bash

function show_commands(){
    echo ""
    echo ""
    echo "LIST OF COMMANDS"
    echo "-a or --all: Viewing all grades"
    echo "-s or --specific (followed by the class period): Viewing specific grades for one class"
    echo "-h or --help: Viewing all commands"
}

function all(){
    if [ -e communication.txt ]; then
        rm communication.txt
        echo "all" >> communication.txt
        node grade.js
    else
        echo "all" >> communication.txt
        node grade.js
    fi
}

function specific(){
    if [ $# -eq 2 ]; then
        class=$2
        if [ -e communication.txt ]; then
            rm communication.txt
            echo "specific" >> communication.txt
            echo $2 >> communication.txt
            node grade.js
        else
            echo "specific" >> communication.txt
            echo $2 >> communication.txt
            node grade.js
        fi
    else
        echo "Error: Please provide a class name after -s or --specific"
        show_commands
    fi
}

function viewclasses(){
    if [ -e communication.txt ]; then
        rm communication.txt
        echo "viewclasses" >> communication.txt
        node grade.js
    else
        echo "viewclasses" >> communication.txt
        node grade.js
    fi 
}


if [ $# -eq 0 ]
    then 
        all
else
    case $1 in 
        -h|--help)
            show_commands
            ;;
        -a|--all)
            all
            ;;
        -s|--specific)
            specific $@
            ;;
        -vc|--viewclasses)
            viewclasses
            ;;
        *)
            echo "Error: Invalid command"
            echo ""grade -h" for help"
            ;;
    esac
fi
