# STUDENT-DATA-SERVER

## SETUP

To get started and run the app:

- Clone the project using command

` git clone https://github.com/NileshDeshmukh09/StudentData-server.git `

- Run ` npm install ` to install the corresponding node packages

- Give the env variable  ` PORT` , ` DB_NAME`, `DB_USER`, ` DB_PASSWORD ` , ` DB_HOST `, ` DB_DIALECT ` , ` DB_PORT ` and ` JWT_SECRET ` .

- Run ` npm start ` to run the app on http://localhost:8000

### DB TABLES : 

 #### USER         
 - ID
 - Email
 - Password

 #### STUDENT        
 - ID
 - NAME
 - ROLLNO
 - ADDRESS
 - INSTITUTE
 - COURSE
 - EMAIL


### Features :

It has the APIs for 

- ` user-signup ` : POST - ` http://localhost:6666/signup `
    - which takes `email ` and ` password ` as input and stored in DB.
    
    ![signup](https://github.com/NileshDeshmukh09/StudentData-server/blob/master/screenshots/user-signup.png?raw=true)
    
- ` user-signIn ` : POST - ` http://localhost:6666/signup `
    - which takes `email ` and ` password ` as input 
    - gives ` accesstoken ` in Response 
    - which helps to get authorized data
    
      ![login](https://github.com/NileshDeshmukh09/StudentData-server/blob/master/screenshots/user-login.png?raw=true)
    

- ` add-students-from-CSV ` : POST - ` http://localhost:6666/students/upload ` , 
    - takes  CSV file  in form-data  with key `file ` as input
    - store the data in Database 
    
      ![addstudentFromCSV](https://github.com/NileshDeshmukh09/StudentData-server/blob/master/screenshots/add-student-from-CSV.png?raw=true)


- ` get-students ` : GET - ` http://localhost:6666/students `
    - Give array of objects in Response.
    
      ![GETSTUDENTS](https://github.com/NileshDeshmukh09/StudentData-server/blob/master/screenshots/get-students-list.png?raw=true)

- ` Export-and-Download-File ` : GET - ` http://localhost:6666/students/export `
    - Exports the CSV File and shows the data of file in Response .
    
      ![export-and-Download](https://github.com/NileshDeshmukh09/StudentData-server/blob/master/screenshots/export-and-download-CSV.png?raw=true)


## Thank-you  for checking Project
