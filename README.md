# StudentVue Terminal Tool

## Set-up

You need to have Bash in order for the code to work.

First, inside of the StudentVue folder, create a "id_password.txt" file with:
```
touch id_password.txt
```

Inside of the file, you have to put your school district's StudentVue website URL, your ID, and your password, all seperated by spaces, like:
```
https://yourDistrictWebsite.org/...(School Website URL) 0001(ID) 1234567(Password)
```

Then, to give permission for your studentvue.sh file to work:
```
chmod u+x src/studentvue.sh
```

To use the command globally, move the studentvue.sh file to your PASS directory (where all of your commands are stored).

## Using the tool

You can use:
```
./studentvue.sh [command]
```
to get the desired output.

You can do:
``` 
./studentvue.sh -h
```
to view all of the commands or go [here](./Commands.md) to view the list of possible commands.