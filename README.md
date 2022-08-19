# A login and registration page made by Timothy Timbol

This web app is made with React JS with typescript and a backend api that uses SQLite3. The backend doesn't use any frameworks and is written in PHP. The backend hashes the password and checks matches during login and returns the JSON required in the job interview.

## !! before running the react app !!
I zipped the file without the node modules so install the dependecies with the node package manager.

*run the command while the shell is inside the directory:*
npm i

then

npms start

## !! running the backend !!
I wrote the backend with the help of XAMPP so it needs to be either in the htdocs directory of the xampp or change the directory to wherever you unzip the file in the **httpd.conf** which can be opened in the Apache config button.

sqlite3 isn't default enabled by xampp so you need to enable it by removing the semin colon of **extension=sqlite3** in the *php.ini* which can also be opened by pressing the apache config button in XAMPP.