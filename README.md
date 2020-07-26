# RememberMyPassword
An API which enables you to store and delete your passwords. 

# Why an app to remember my passwords?
Everyone knows it is a difficult job to remember all of their passwords. Especially if you are using a different computer. Thats where this API comes in. Simply update, add or delete the passwords and take them wherever you go. It is all on the cloud. 

# Is it safe? 
Yes, you would be using your own MongoDB database. Just make an account, create your cluster and add your MongDB database connection string.You are good to go. 
Also the passwords are encrypted and stored in your database. No worries.

# Want to try it out? 
Go over to mongodb atlas and create your own database. Copy the connection String and place that in a file named ```databasestring.js``` and export it. 
You also need to have a special string unique to you based on which the encryption would work. Think of a secret text and export it from a ```Secretmessage.js``` file. 

Now put both of the files inside a folder called ```SecretKeys``` and place this folder in the root directory. 

Do an ```npm install``` and test using POSTMAN. :) You are done!! 

# last but not the least.. 
I am just starting out writing scripts for backend. Hence any kind of help or suggestion would really help me out. And if you liked the idea, do not forget to star! 

# Peace

