#!/bin/bash

function show_commands (){
    echo ""
    echo ""
    echo "LIST OF COMMANDS :"
    echo ""
    echo ""
}

function all (){
    node all.js
}

case $1 in 
    -h|--help)
        show_commands
        ;;
    -a|--all)
        all
        ;;
esac