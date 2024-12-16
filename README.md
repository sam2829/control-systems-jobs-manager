# Control Systems Jobs Manager

## Overview

Welcome to Control Systems Jobs Manager! As an enthusiastic junior developer, I created this site to streamline job management for an electrical engineering company, Control Systems Automation. This platform allows engineers to effortlessly track the status of each job at both locations, whether it’s in progress, completed, or not yet started. Since control panels are built in the workshop and later installed at separate factory location, this site eliminates the need for time consuming phone calls by providing real time updates on job statuses. Engineers can, view the current job status, check if a job has been delivered, access the jobs quote and leave notes to share important information with other engineers.

screenshot for repsonsive ness goes here lkjsndbflsbnfilasfif

## Content

- [Control Systems Job Manager](#control-systems-jobs-manager)
  - [Overview](#overview)
  - [Backend](#backend)
    - [Planning](#planning)
    - [Data Models](#data-models)
      - [API Endpoints](#api-endpoints)
      - [Technologies Used](#technologies-used)
        - [Languages Used](#languages-used)
        - [Frameworks and Tools Used](#frameworks-and-tools-used)
        - [Libraries Used](#libraries-used)
      - [Testing Backend](#testing-backend)
      - [Deployment](#deployment)

## Backend

### Planning

Planning started by using agile methodologies by delivering small features across the duration of the project. This broke down the build of the project into a lot more manageable parts and was able to select which user stories were more important to the site. The user stories were then used to help create wireframes to see how the user would navigate and use the app. This can all be seen in more details in the frontend section [here](#frontend).
These were then used to help work out the required API endpoints to support the desired functionality of the site.

### Data Models

Data model schema was planned with the API endpoints, using an entity relationship diagram to show how the models were related.

The custom models Control Systems Jobs Manager are:

**_Profiles_**

The Profile model is linked using a one-to-one relationship with the built in User model in conjunction with Django Allauth, with the user profile being created automatically when the user registers an account. The user then is able to edit their own profile with their name and password. 

A superuser is then also able the users work location which is used to allow the user to update certain information depending on their work location.

**_Jobs_**

The jobs model was created so the superuser can easily update the jobs list as a new order comes in. Engineer then can easily update the status of jobs depending on their work location. Engineers are also able to view useful information such as the quote, quantity and order number.

**_Notes_**

The notes model was created so engineers can leave important information for each indiviual job so other engineers are aware of this information. The notes model is also linked by foreign key to the user and jobs models so that specific notes can be linked back to a specific job and user.

An entity relationship diagram was created using drawSQL to show the schemas for each of the models and how they are related:

![ERD Screenshot](/docs/readme_screenshots/data-models-drawsql.png)

### API Endpoints

| URL | HTTP Method | CRUD Operation | View name |
| --- | --- | --- | --- |
| `Profile Endpoints` |
| /api/profiles | GET | List all profiles | LIST |
| /api/profiles/:id | GET | Retrieve profile by id | DETAIL |
| /api/profiles/:id | PUT | Edit / update profile by id | DETAIL |
| `Job Endpoints` |
| /api/jobs | GET | List all jobs | LIST |
| /api/jobs | POST | Create a job | LIST |
| /api/jobs/:id | GET | Retrieve job by id | DETAIL |
| /api/jobs/:id | PUT | Edit / update job by id | DETAIL |
| /api/jobs/:id | DELETE | Delete job by id | DETAIL |
| `Note Endpoints` |
| /api/notes | GET | List all notes | LIST |
| /api/notes | POST | Create a note | LIST |
| /api/notes/:id | GET | Retrieve note by id | DETAIL |
| /api/notes/:id | PUT | Edit / update note by id | DETAIL |
| /api/notes/:id | DELETE | Delete note by id | DELETE |

[back to top](#control-systems-jobs-manager)

### Technologies Used

- Python

- Django Rest Framework
  - Django Rest Framework was used as the main python framework in the development of this project.
- Supabase
  - Supabase was used for the production database.
- VS Code
  - VS Code was used to write the code.
- GitHub
  - GitHub was used to store the projects code after being pushed from Gitpod.
- Heroku
  - Heroku was used for deployment.
- DrawSQL
  - DrawSQL was used to draw out the entity relationship diagram.

#### Libraries Used

- Django - A python package for the django rest framework.
- Django Allauth - An integrated set of applications used for user authentication, registration and account management.
- Django rest auth - Provides REST API endpoints for login and logout.
- django rest framework-simplejwt - Used for JSON web token authentication.
- Django Signal - Used to create a profile every time a user is created.
- psychopg2 - Database adapter to enable interaction between Python and PostgreSQL database.
- django cors headers - This Django app adds CORS headers to responses, to enable the API to respond to requests from origins other than its own host.
- gunicorn - Used to help run application.
- django filter - Used to help filter requests from frontend for images.

[back to top](#control-systems-jobs-manager)

### Testing Backend

I have included details of my testing during and post development in a separate file called [TESTING_BACKEND.md](TESTING_BACKEND.md).

### Deployment

**_GitHub_**

This project was developed by using a Visual Studio Code. I first created a project in my folders and opened in VS Code.

- Once loaded, I then created a new repository for the project in GitHub.
- In GitHub, on the topleft there is a button labelled "new". Click this.
- Once clicked, I picked my repository name, then clicked the button labelled "Create repository".
- After this you can see the URL you need to set up your workspace to this GitHub repository.
- To then initially set up your workspace to the repository you first need add the repository with the command 'git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git'.
- Next add the changes with the command 'git add .'.
- Next commit the changes with the command 'git commit -m "initial commit"'.
  ' Next push to GitHub with the command 'git push -u origin main'. Once this push has been made, you then only have to use the command 'git push'.

**_Version Control_**

For version control the following steps were made:

- If any changes were made to my VS Code project.
- First files were made ready for commit with command - git add filename or git add . to add all files.
- To commit the changes using the following command - git commit -m "This is my commit" Note the brief description at the end of the command to make you aware of what changes have occurred.
- To then move the changes to GitHub, use the following command - git push

**_Clone Repo_**

Creating a clone allows you to make a copy of the repository at the specific point in time. This lets you run a copy of the project locally. This can be done by:

- Navigate to the repository you choose to clone in your GitHub.
- Clicking on the arrow of the green button named "Code" at the top of the file.
- Then select "Local" then under local select "HTTPS" and then copy that URL.
- Navigate to your code editor and within the terminal change the directory to the location you wish to clone the repository to.
- Type "git clone" and paste the copied HTTPS link from GitHub.
- Press enter and git will clone the repository to your local machine.

**_Forking the GitHub Repository_**

Forking the GitHub repository allows you to make a copy of the original repository on your GitHub account to view and make changes without it effecting the original repository. This can be done by:

- Log in to your GitHub account and locate the repository you wish to fork.
- Near the top of the page, under the "settings" button going across the page, you should see a button saying "Fork".
- Click the "Fork" button and you should now have a copy of the original repository in your GitHub account.

[back to top](#control-systems-jobs-manager)

**_Deployment to Heroku_**

For deployment to Heroku the following steps were made:

- First sign in to your Heroku account.

  - On the top right of the page there is a drop-down menu called "new", click this and click on "create new app".
  - You then need to decide your unique app name using '-' between each word. Then select which region you are working from and then click on the button "create app".
  - Once you have clicked on "create app" you will be taken to a new page. On this page you will see a row of tabs at the top left of the page. You first need to click on the "settings" tab and go to the settings page.
  - Login into your Supabase account and create a new project.
  - Check the options you selected the click create project.
  - Once Supabase project is created, click on the project created and there you will see the URL, which you can copy ready to be placed in the Heroku app.
  - If you have any code that you have kept private which has been prevented from loading to your GitHub, then you must click on the button "Reveal Config Vars". A small table will then appear with columns "key" and "value". Config Vars used:
    - DATABASE URL: (Enter the database URL from AIVEN)
    - SECRET_KEY: (Enter your secret key)
    - ALLOWED_HOST: (Enter the deployed Heroku app URL)
  - I then went back to the tabs row at the top of the page and clicked on the "Deploy" tab to take me to the deploy page.
  - On the deployment page, I scrolled down to deployment method and confirmed I wanted to deploy through GitHub.
  - When I click on GitHub a search bar will appear underneath which will allow me to search for my GitHub repository. I made sure I spelt the repository I'm searching for exactly as I named it and then clicked the search button.
  - The repository then appeared underneath my search, I checked this was the correct repository and then clicked the "connect" button. This has now linked up my Heroku app and my GitHub repository code.
  - I then scrolled down to the button "Enable Automatic Deploys", this allows my Heroku app to automatically update every time I've pushed a new change to my code to GitHub. This is optional.
  - I then scrolled down and clicked on the button "Deploy Branch" which is now building the app.
  - Once the app is successfully deployed, a message appeared saying "your app was successfully deployed." Then click on the "view" button which will take me to the deployed link.

[back to top](#control-systems-jobs-manager)


