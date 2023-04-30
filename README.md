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

Then, to give permission for your grade.sh file to work:
```
chmod u+x src/grade.sh
```

To use the command globally, move the grade.sh file to your PASS directory (where all of your commands are stored).