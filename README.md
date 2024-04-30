# Placement Cell App

## Introduction
The "Placement Cell App" facilitates the management of the placement process :
Student Management: Allows administrators to add, edit, and manage student profiles, including academic information and skills

Interview Scheduling: Provides functionality to schedule interviews for students with potential employers or recruiters.

Job Application Portal: Offers a platform to browse job openings and submit applications.

Placement Process Management: Helps administrators track the progress of the placement process, including the number of students placed, pending interviews, and job offers

Creating a **Placement Cell App** to maintain a database of all the student interviews. It is built using MongoDB, ExpressJS, EJS, Express-Partials-Layouts, GulpJs, Vanilla JS & implements RestFul CRUD APIs along with CRUD Operations.
This web application helps students to store following details:

<br/>

-  Batch
-	Student Details (including college, status: [placed, not_placed])
-	Course Scores (including DSA Final Score, WebD Final Score, React Final Score)
-	Interviews (including company name and Date)
-	Results (this is a mapping between company, and student, contains result: [PASS, FAIL, On Hold, Didn’t Attempt])


<br/>

## 🔗 Important Links

> ## Checkout the Website [Web Application](https://placement-1-1am9.onrender.com)
>
> ## Checkout the Application Demo Video.

<br/>

## Features

- **Sign In**
<p> Employee can Register himself using Google, Github and by entering their required details to Register himself.</p>

- **Sign Up**
<p> Employee can Login in himself using Google, Github and by manually entering username and password.</p>

- **Update Profile**
<p> Employee can Update his profile by changing profile picture, name, email.</p>

- **Add Student**
<p> Employee can create student using Add Student form </p>

- **Show Specific Student Details**
<p>Employee can view the details of specific student</p>

- **Show All Students List**
<p>Employee can view the list of students</p>

- **Update Specific Student Details**
<p>Employee can update the details specific student</p>

- **Delete Specific Student from the List**
<p>Employee can delete the spefic student from the list of all students</p>

- **Add Interview**
<p>Employee can create a Interview Slot by specifying the Company Name and Date of Interview</p>

- **Schedule Interview**
<p>Employee can add students to the interview slot created for a specific company</p>

- **List of all students in an Interview Slot**
<p>Employee can view the list of all students who have applied for a specific interview slot</p>

- **Update the Result of Student**
<p>Employee can update the specific student result from the list of all students in an interview slot</p>

- **Delete Student from Interview Slot**
<p>Employee can delete student from an Interview Slot</p>

- **Delete Interview Slot**
<p>Employee can delete the created Interview Slot</p>

- **List All Details**
<p>Employee can view the list of all students along with their allocated interivew slots</p>

- **Download Report in CSV**
<p>Employee can download report in the CSV format which consists of list of all students details along with their allocated interview details and result of interview</p>

- **Job Portal(External Jobs List)**
<p>Job Portal consists of details of real time available job openings fetched from the external jobs API. Student can also apply for job opening which will redirected to the jobs portal remotive.com webiste</p>


## Getting Started With Project
- Fork the Project in your Repository.
- Clone the Forked Repository in your Local System.
- Install & Configure - NodeJS, MongoDB, Robo3T, POSTMAN.
- Create '.env' file & Set the Environment Variables in it, as per the 'ENV_FORMAT.json' file.
- Run 'npm install' in GitBash Terminal
- If you want to run the project in development mode locally then go to '.env' file & set,
  ENVIRONMENT=development
  DEPLOYMENT=local
- If you want to run the project in production mode then go to '.env' file & set,
  ENVIRONMENT=production
  DEPLOYMENT=local/other/Heroku/AWS
- For Development Mode:
  Run 'npm run dev_start' in GitBash Terminal
- For Production Mode:
  Run 'npm run prod_start' in GitBash Terminal

## Tools Used

 <p align="justify">
<img height="140" width="140" src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png" alt="HTML logo">
<img height="140" width="140" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt="CSS logo">
<img height="140" width="140" src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png" alt="Javascript logo">
<img height="140" width="140" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="Bootstrap logo">
<img height="140" width="140" src="https://www.startechup.com/wp-content/uploads/January-11-2021-Nodejs-What-it-is-used-for-and-when-where-to-use-it-for-your-enterprise-app-development.jpg" alt="NodeJs logo">
<img height="140" width="140" src="https://www.edureka.co/blog/wp-content/uploads/2019/07/express-logo.png" alt="ExpressJs logo">
<img height="140" width="140" src="https://g.foolcdn.com/art/companylogos/square/mdb.png" alt="mongoDB Logo">
<img height="140" width="140" src="https://www.pngitem.com/pimgs/m/13-131098_visual-studio-code-logo-hd-png-download.png" alt="Vscode img logo">

</p>


## Library Used
- connect-flash
- connect-mongo
- cookie-parser
- cross-fetch
- crypto
- dotenv
- ejs
- express
- express-ejs-layouts
- express-session
- json2csv
- mongoose
- multer
- node-sass-middleware
- nodemon
- noty
- passport
- passport-google-oauth
- passport-github
- passport-local


- Framework: ExpressJS, Bootstrap
- Database: MongoDB
- Version Control System: Git
- VCS Hosting: GitHub
- Programming / Scripting: Vanilla JavaScript
- Front-End: SCSS, EJS
- Runtime Environment: NodeJS
- Integrated Development Environment: VSCode


## Screens

<p align="justify">

## Sign Up 


### Sign In
<img src="./screenshots/Screenshot-Sign_in.png">


### Home Page
<img src="/screenshots/Screenshot-home_page.png">

### Add Student


### Display Specific Student Details
<img src="/screenshots/Screenshot-student_profile.png">

### Display List of all Students
<img src="/screenshots/Screenshot-List_of_students.png">

### Add Interview Slot
<img src="./screenshots/Screenshot-add_interviews.png">


### Schedule Interview of Student
<img src="/screenshots/Screenshot-schedule_interviews.png">

### List of all Interviews
<img src="/screenshots/Screenshot-list_of_interviews.png">

### List of Students in an Interview Slot


### List of all Students Details Along with Interview Details
<img src="/screenshots/Screenshot-manage results.png">

### Profile Page
<img src="/screenshots/Screenshot-student_profile.png">

</p>
