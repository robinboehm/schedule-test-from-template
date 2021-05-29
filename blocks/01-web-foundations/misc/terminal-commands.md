# Terminal Commands 101

## pwd

`pwd` is short for "print working directory". This command will print the current directory.

## cd

`cd <folderName>` is short for "change directory" and is used to change to a given folder.

`cd ..` will move you to the parent directory.

## mkdir

`mkdir <folderName>` is short for "make directory" and will create a new directory with the given name in the current folder.

## ls 

`ls` lists all files and directories in the current directory.

Parameter: 

`-l` shows the content in a list with rights and owner.

`-a` shows hidden files and directories as well.

## chmod

`chmod <filename>`changes the read-write-execute rights.

## chown

`chown` changes the owner and/or group of this file.

## ~

`~` is displayed if you are in your home directory.

`cd ~` brings you to your home directory.

## less

`less <filename>` shows the content of the file, but whitout the opportunity to edit.
 
 close the view with "q".
 
## nano

`nano <filename>` is creating/opening the file in an editor.
 
## mv
 
`mv <filename> <new-filename>` is changing the filename.
 
`mv <path/filename> <new-path/filename>` does move the file to the new place, a new filename in this step is possible.
 
## touch
 
`touch <filename>` is to create a new empty file.
 
## rm
 
`rm <filename>` delets this file.
 
`rm <folder>` delets this empty folder, to delete a folder with this content use `rm -rf <folder>`.

## cp

`cp <folder_a/filename> <folder_b>` makes a copy of the file at the new place.

## chsh


## wc


## which


## echo

`echo >phrase<` is displaying the phrase after the command `echo`.

`echo hello world`--> hello world.

## cat

`cat <filename>` shows the content of this file.

## grep

`grep "keyword" <filename>` is displaying all lines of this file which this keyword contains.

## git init

`git init -b main` creates a git repository in the current folder with the branch "main".

## git status

`git status` is displaying the state of the repository.

## git add

`git add <filename>` adds a new or changed file to stage.

## git commit

`git commit _m "coment"` is promoting files on stage to HEAD.

## git push

`git push -u origin main` is liftig the repository to github (you have to create the repository @github first).
