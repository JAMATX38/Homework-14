# 14 Model-View-Controller (MVC): Tech Blog

## Your Task

Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!

Your task this week is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. You’ll build this site completely from scratch and deploy it to Heroku. Your app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Mock-Up

The following animation demonstrates the application functionality:

![Animation cycles through signing into the app, clicking on buttons, and updating blog posts.](./Assets/14-mvc-homework-demo-01.gif) 

## Getting Started

Your application’s folder structure must follow the Model-View-Controller paradigm. You’ll need to use the [express-handlebars](https://www.npmjs.com/package/express-handlebars) package to implement Handlebars.js for your Views, use the [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect to a MySQL database for your Models, and create an Express.js API for your Controllers.

You’ll also need the [dotenv package](https://www.npmjs.com/package/dotenv) to use environment variables, the [bcrypt package](https://www.npmjs.com/package/bcrypt) to hash passwords, and the [express-session](https://www.npmjs.com/package/express-session) and [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) packages to add authentication.

**Note**: The [express-session](https://www.npmjs.com/package/express-session) package stores the session data on the client in a cookie. When you are idle on the site for more than a set time, the cookie will expire and you will be required to log in again to start a new session. This is the default behavior and you do not have to do anything to your application other than implement the npm package.

## Grading Requirements

This homework is graded based on the following criteria:

### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria plus the following:

    * Application’s folder structure follows the Model-View-Controller paradigm.

    * Uses the [express-handlebars](https://www.npmjs.com/package/express-handlebars) package to implement Handlebars.js for your Views.

    * Application must be deployed to Heroku.

### Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository contains application code.

### Application Quality: 15%

* User experience is intuitive and easy to navigate.

* User interface style is clean and polished.

* Application resembles the mock-up functionality provided in the homework instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality readme file with description, screenshot, and link to deployed application.

## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository, with a unique name and a readme describing the project.

## Installation

This APP requires a few steps for Installation, it is important to follow these steps in order so you have an optimal experiance using the APP. If you any of these steps do not work my suggestion is to use:
StackoverFlow- https://stackoverflow.com/
YouTube- https://www.youtube.com/
Google - https://www.google.com/
To help trouble shoot- my contact information is listed down below, feel free to reach out!

* Open App and navigate to the package.json file in the root of the folder.

* Hover your mouse over the package.json folder and right click.

* Click/Choose "Open in Integrated Terminal".

* In the command line type - npm i- it is important to NOT use caps- the APP will start to download the NODE dependencies that it requires and/or that are listed in the App's package.json file.( If you see 'warnings' populate while/when the modules are done loading it is OK! You only need to pay attention to ERRORs. If errors do occur while installing dependancy modules refer to the links I included above).

*When the Modules are done compiling navigate your cursor to the db folder, click the folder and right click "schema.sql". Your will "Open in Integrated Terminal" and leave it be for now.

* Now you will need to open your MySQL workbench and start a new connection. Please Note- you will need to make sure that the port is set to 3306- as that is the port that the APP uses. Create the connection and TEST it. If the Connection does not work please refer to the links i provided above or refer to this documentation from Digital Ocean https://docs.digitalocean.com/products/databases/mysql/resources/troubleshoot-connections/

* When your MySQL workbench is connected you will need to "create a new instance". When your "new instance" is created navigate back to your schema.sql file, left click on the file so the schema shows in VS code, highlight the syntax, press and hold ctrl c, navigate back to your MySQL work bench, left click in your new instance playground and press and hold ctrl V.

* At this point you should see the following 
"DROP DATABASE IF EXISTS infoTech_db;

CREATE DATABASE infoTech_db;

you will then need to highlight this syntax in your workbench and then hit the lightening symbol.....congratulations!! You have now created your database in Mysql!

* Now navigate back to your terminal that you opened through your schema file and log into MySQL using the following syntax- mysql -u root -p and hit enter! When you are connected switch back to the previous terminal, do not close the mysql terminal.

*NOW in the terminal that you NPM I your node modules please write the following syntax.... node server.js
This will start your server and allow you to work on the app locally!


## Technologies Used

NODE
MYSQL
HANDLEBARS
EXPRESS
SEQUELIZE
BCRYPT
SESSION
PRETTIER
JAVASCRIPT


## Node Packages

bcrypt
connect-session-sequelize
dotenv
express
express-handlebars
express-session
mysql2
sequelize

DEV DEPENDENCIES
eslint
eslint-config-prettier
prettier

## Known Bugs

I am having trouble starting MySQL, I have navigated through the docs, used google and searched stackoverflow. I cannot seem to find a solution to help me start MySQL. 
I have a feeling that it is something staring right at me but I am a little delerious right now. It is 3am and I have been working on Homework since 7am. I am behind on Homeworks and needed to get them done by 12am. As you can see that didnt happen because of some issues I have had with other apps. But I have to push forward and get the last Homework turned in no matter what. I have never cried over anything like this before and do not know why I am telling you this but it feels better to get it out. Bootcamp has been VERY hard. My personal life took a turn for the worse about 3 weeks in. I am also in the process of moving cities for work but that might be voided depending on me completing this course. I realize that my procrastination has really hindered my chances to graduate from this course and trust me its really hitting me now. I have now at least learned how to study, learn and take notes at this level! I only recently got my GED after being in the Natural/Organic food indusrtry for 20 years. I am just really proud of my self that I made it this far and I am going to continue to get these homeworks turned in no matter what.
This is the first app today I didnt get fully working. This really bothers me and gives me a great deal of anxiety because I need to get a letter grade to recieve my certificate for the Bootcamp.
I know the app isnt working but I do have the correct syntax, I am using all the packages that are called for and I am using the correct technologies that this Homework requires.
I also beefed up the ReadMe to compensate for my short comings on the deployment of the APP.
I do however realize that an incomplete might be a possability and that could stop me from recieving my Certificate. 
I apologize for this long ReadMe, I had to tell someone all of this.
Thank you for your time and good luck to you!





## Author

Jaime Martinez
Jaimetx38@gmail.com
GitHub Profile
JAMATX38
https://github.com/JAMATX38

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
