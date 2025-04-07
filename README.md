# Control Systems Jobs Manager

## Overview

Welcome to Control Systems Jobs Manager! As an enthusiastic junior developer, I created this site to streamline job management for an electrical engineering company, Control Systems Automation. This platform allows engineers to effortlessly track the status of each job at both locations, whether it’s in progress, completed, or not yet started. Since control panels are built in the workshop and later installed at separate factory location, this site eliminates the need for time consuming phone calls by providing real time updates on job statuses. Engineers can, view the current job status, check if a job has been delivered, access the jobs quote and leave notes to share important information with other engineers.

Here is a live version of my project [Control Systems Jobs Manager](https://control-systems-jobs-8e7c07b4a83a.herokuapp.com/)

![Am I Responsive Screenshot](/docs/readme_screenshots/am-i-responsive.png)

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
  - [Frontend](#frontend)
    - [User Experience](#user-experience)
      - [The Strategy Plan](#the-strategy-plan)
        - [Ideal User](#ideal-user)
        - [Site Goals](#site-goals)
      - [Agile Planning](#agile-planning)
        - [User Stories](#user-stories)
      - [Skeleton Plane](#skeleton-plane)
        - [Wireframes](#wireframes)
        - [Database Schema](#database-schema)
        - [Security](#security)
      - [The Scope Plane](#the-scope-plane)
      - [The Structure Plane](#the-structure-plane)
        - [Features](#features)
      - [The Surface Plane](#the-surface-plane)
        - [Design](#design)
    - [Use of Components](#use-of-components)
    - [Custom Hooks](#custom-hooks)
    - [Technologies Used](#technologies-used)
      - [Languages Used](#languages-used)
    - [Frameworks, Libraries and Dependencies](#frameworks-libraries-and-dependencies)
      - [React](#react)
      - [React-Router-DOM](#react-router-dom)
      - [ReactDOM](#reactdom)
      - [Axios](#axios)
      - [React Bootstrap](#react-bootstrap)
      - [Font Awesome](#fontawesome)
      - [Google Fonts](#google-fonts)
      - [Prettier](#prettier)
    - [Testing Frontend](#testing-frontend)
  - [Credits](#credits)

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

## Frontend

### User Experience

 #### The Stratgey Plane

 Control Systems Jobs Manager is intended for the engineers who work at Control Systems Automation Limited. Here engineers and managers can track the current status of each individual job and any information they may need regarding the specific job.

 #### The Ideal User

 - Manager / Engineer who works at Control Systems Automation Limited.

##### Site Goals

- To provide user with current status for each indivial job in it's development.

- Let user know if specific job has been delivered or completed.

- Let user know any important information regarding the specific job.

[back to top](#control-systems-jobs-manager)

### Agile Planning

This project was developed using agile methodologies by delivering small features across the duration of the project. This broke down the build of the project into a lot more manageable parts and was able to select which user stories were more important for the site.

It was carried out this way to try ensuring that all core requirements were completed first to give the project a complete feel and to make sure the most important user stories were implemented. When clicked on and opened the user story, the user story was assigned a label "must have", "should have" or "could have" so I would know the importance of the user story.

The kanban board was created using GitHub projects, this helped me be able to see all my user stories and be able to keep track of which ones had been done, to do or in progress.

![User Stories Screenshot](/docs/readme_screenshots/user-stories.png)

Each User story was placed into it's own milestone iteration to help schedule the development of the project. These iterations can be set with dates but I did not do this due to fitting in around work and other commitments. In the iteration you can close a user story when finished, this will also keep track of how much is completed.

Milestones:

![Milestones Screenshot](/docs/readme_screenshots/milestones.png)

[back to top](#control-systems-jobs-manager)

##### User Stories

***Themes***

Themes were developed using the project goals as a starting point. These included:

  - User management - This was necessary so that user could have all the necessary functions across the site.

  - Admin management - This was necessary so that the admin to have full function of admin data.


***Epics***

Themes were then refined into the following epics:

- User management:
  
  - Easily navigate across site.

  - Able to find any job by job numbers.

  - Able to change job status depending on the work location.

  - Able to change their password and username.

  - Able to leave notes on jobs.

- Admin management:

  - Sign in to admin page.

  - Sign up new users

  - Change users work locations.

  - Add new jobs to site.

  - Edit and delete any jobs.

***User Stories***

The following user stories were completed throughout the development:

User Sign In:

- As a user I can sign in to my account so that I can access all the jobs.

User Sign Up:

- As a Admin I can sign up new users so that I can create new accounts for any new employees.

NavBar Navigation:

- As a user I can clearly view the navbar from every page so that I can easily naviaget between pages.

Routing:

- As a user I can navigate through pages quickly so that I can view content seamlessly without page refresh.

Conditional Rendering:

- As a logged out user I can see the sign in option so that I can sign in and then access job information.

Add New Jobs:

- As a admin I can create new jobs to the site so that engineers and users and see any new jobs we have to do.

Search For Jobs In Search Bar:

- As a user I can search for any job, by the CSA or syspal job number so that users can find any job that we have on order and fast.

Job is Complete:

- As a user I can see on the job, whether it has been completed so that engineers know the job has been completed.

View full Job Details:

- As a user I can click on any job and then view the full job details so that I can see all the information that is required and the status of jobs.

Leave Notes:

- As a user I can leave notes on any job so that all other engineers can see any important information they need to know.

Changing Workshop Status:

- As a user based in the workshop I can update the workshop status so that I can confirm what stage of the build process the job is in, in the workshop.

Changing Syspal Status:

- As a user in syspal I can update the syspal status so that other engineers can see what stage of the build proces the job is in, in syspal.

Change Work Location:

- As a admin I can change the work location or the users so that users can only update the job status in a certain location, if their work location is set top that place.

Change Password:

- As a user I can change my password so that I can keep my account safe.

Change Username

- As a user I can change my username so that users can see what notes I've left by the name I choose.

Infinite Scroll:

- As a user I can scroll through the jobs and notes, with them only fetching so many at a time so that it doesn't fetch all jobs at once and keeping site running smoother and faster.

[back to top](#control-systems-jobs-manager)

#### The Skeleton Plane

##### Wireframes

Wireframes were used to create a prototype of the project which may change during its development.

***Homepage***

Desktop:

![Homepage Desktop Screenshot](/docs/readme_screenshots/desktop-homepage-wireframe.png)

Mobile:

![Homepage Mobile Screenshot](/docs/readme_screenshots/mobile-homepage-wireframe.png)

***Sign In Page***

Desktop:

![Sign In Desktop Screenshot](/docs/readme_screenshots/desktop-signin-wireframe.png)

Mobile:

![Sign In Mobile Screenshot](/docs/readme_screenshots/mobile-signin-wireframe.png)

***Add User Page***

Desktop:

![Add User Desktop Screenshot](/docs/readme_screenshots/desktop-add-user-wireframe.png)

Mobile:

![Add User Mobile Screenshot](/docs/readme_screenshots/mobile-add-user-wireframe.png)

***Jobs Page***

Desktop:

![Jobs List Admin Desktop Screenshot](/docs/readme_screenshots/desktop-job-list-admin-wireframe.png)

![Jobs List Desktop Screenshot](/docs/readme_screenshots/desktop-job-list-engineer-wireframe.png)

Mobile:

![Jobs List Mobile Screenshot](/docs/readme_screenshots/mobile-job-list-wireframe.png)

***Job Detail Page***

Desktop:

![Job Detail Desktop Screenshot](/docs/readme_screenshots/desktop-job-detail-wireframe.png)

Mobile:

![Job Detail Mobile Screenshot](/docs/readme_screenshots/mobile-job-detail-wireframe.png)

***Add Job Page***

Desktop:

![Add Job Desktop Screenshot](/docs/readme_screenshots/desktop-add-job-wireframe.png)

Mobile:

![Add Job Mobile Screenshot](/docs/readme_screenshots/mobile-add-job-wireframe.png)

***Admin Profiles Page***

Desktop:

![Admin Profiles Desktop Screenshot](/docs/readme_screenshots/desktop-profile-admin-wireframe.png)

Mobile:

![Admin Profiles Mobile Screenshot](/docs/readme_screenshots/mobile-profile-admin-wireframe.png)

***User Profile Page***

Desktop:

![Profile Desktop Screenshot](/docs/readme_screenshots/desktop-profile-wireframe.png)

Mobile:

![Profile Mobile Screenshot](/docs/readme_screenshots/mobile-profile-wireframe.png)

***Change Password Page***

Desktop:

![Change Password Desktop Screenshot](/docs/readme_screenshots/desktop-change-password-wireframe.png)

Mobile:

![Change Password Mobile Screenshot](/docs/readme_screenshots/mobile-change-password-wireframe.png)

***Change Username Page***

Desktop:

![Change Username Desktop Screenshot](/docs/readme_screenshots/desktop-change-username-wireframe.png)

Mobile:

![Change Username Mobile Screenshot](/docs/readme_screenshots/mobile-change-username-wireframe.png)

***Change Work Location Page***

![Change Work Location Desktop Screenshot](/docs/readme_screenshots/desktop-edit-work-location-wireframe.png)

Mobile:

![Change Work Location Mobile Screenshot](/docs/readme_screenshots/mobile-edit-work-location-wireframe.png)

***Sign Out Page***

![Sign Out Desktop Screenshot](/docs/readme_screenshots/desktop-sign-out-wireframe.png)

Mobile:

![Sign Out Mobile Screenshot](/docs/readme_screenshots/mobile-sign-out-wireframe.png)


##### Database Schema

This is well explained in the backend repository readme [here](#backend)

##### Security

For security I've made sure that I users get an authorization token from the backend when they sign in. Here I always make sure that a user is logged in, and that a the current user can only change passwords and usernames for their own user profile.

#### The Scope Plane

- Responsive Design - The site should be fully functional on all devices from 320px wide and up.

- Hamburger menu for navbar on mobile devices.

- Homepage welcoming user to the site and links them to the signin in page, where once signed in can navigate through the site.

[back to top](#control-systems-jobs-manager)

#### The Structure Plane

##### Features

As a User I would like to view the site on all my different devices so I can view site wherever I am.

***Navbar***

As a user I want to see a clear way of navigating around the site so that I can easily find the relative information I am looking for.

The Navbar contains links to jobs, profile and sign out for regular users, and add job, add user, jobs, profile and sign out for admin users. These links are only available to users once logged in successfully.

The navigation menu is displayed on all pages and forms into a hamburger menu on smaller devices. This allows users to view the site from any device and not take up too much space on mobile devices. It's very clear and easy to use.

There is also a hover over effect to inform the user when they are hovering over the specific link and the Navlink for the page the user is currently on will also be of a different colour to inform the user which page they are on.

Desktop Regular User:

![Desktop Navbar Regular User Screenshot](/docs/readme_screenshots/desktop-navbar-user.png)

Desktop Admin User:

![Desktop Navbar Admin User Screenshot](/docs/readme_screenshots/desktop-navbar-admin.png)

Mobile Regular User:

![Mobile Navbar Regular User Screenshot](/docs/readme_screenshots/mobile-navbar-user.png)

Mobile Admin User:

![Mobile Navbar Regular User Screenshot](/docs/readme_screenshots/mobile-navbar-admin.png)

Desktop Logged Out:

![Desktop Navbar Logged Out Screenshot](/docs/readme_screenshots/desktop-navbar-logged-out.png)

Mobile Logged Out:

![Mobile Navbar Logged Out Screenshot](/docs/readme_screenshots/mobile-navbar-logged-out.png)

***Sign In Page***

Sign in page displays the sign in form, so that users can sign in and view all jobs.

Desktop:

![Desktop Sign In Page Screenshot](/docs/readme_screenshots/desktop-signin-page.png)

Mobile:

![Mobile Sign In Page Screenshot](/docs/readme_screenshots/mobile-signin-page.png)

***Jobs List Page***

Job list page is where, once a user is logged in they can see and search for any job that control systems has on order.

Desktop:

![Desktop Job List Page Screenshot 1](/docs/readme_screenshots/desktop-job-list-page-1.png)

![Desktop Job List Page Screenshot 2](/docs/readme_screenshots/desktop-job-list-page-2.png)

Mobile:

![Mobile Job List Page Screenshot 1](/docs/readme_screenshots/mobile-job-list-page-1.png)

![Mobile Job List Page Screenshot 2](/docs/readme_screenshots/mobile-job-list-page-2.png)

***Add User Page***

Add user page is only accessible for the admin user, here the admin user can create a new user.

Desktop:

![Desktop Signup Page Screenshot](/docs/readme_screenshots/desktop-signup-page.png)

Mobile:

![Mobile Signup Page Screenshot](/docs/readme_screenshots/mobile-signup-page.png)

***Add Job Page***

Add job page is only accessible for the admin user, here the admin user can create new jobs.

Desktop:

![Desktop Add Job Page Screenshot](/docs/readme_screenshots/desktop-add-job-page.png)

Mobile:

Desktop:

![Mobile Add Job Page Screenshot 1](/docs/readme_screenshots/mobile-add-job-page-1.png)

![Mobile Add Job Page Screenshot 2](/docs/readme_screenshots/mobile-add-job-page-2.png)

***Job Detail Page***

The job detail page is where the users and can see all the information they need to regarding the specific job. Here they can also see any important notes that have been added to the job and create their own.

Desktop:

![Desktop Job Detail Page Screenshot 1](/docs/readme_screenshots/desktop-job-detail-page-1.png)

![Desktop Job Detail Page Screenshot 2](/docs/readme_screenshots/desktop-job-detail-page-2.png)

![Desktop Job Detail Page Screenshot 3](/docs/readme_screenshots/desktop-job-detail-page-3.png)

Mobile:

![Mobile Job Detail Page Screenshot 1](/docs/readme_screenshots/mobile-job-detail-page-1.png)

![Mobile Job Detail Page Screenshot 2](/docs/readme_screenshots/mobile-job-detail-page-2.png)

![Mobile Job Detail Page Screenshot 3](/docs/readme_screenshots/mobile-job-detail-page-3.png)

***Profiles Page***

Profiles page is only accessible by the admin user. Here the admin user can see the list of all profiles, and can choose to view any of these profiles.

Desktop:

![Desktop Profiles Page Screenshot](/docs/readme_screenshots/desktop-profiles-page.png)

Mobile:

![Mobile Profiles Page Screenshot](/docs/readme_screenshots/mobile-profiles-page.png)

***Profile Page***

Profile Page is where the user can view their own profile. Here they can see where their work location is set and also have the ability to change their password and username.

Admin user can view any profile and modify the work location of any of the users.

Desktop Regular User:

![Desktop Profile Page Admin Screenshot](/docs/readme_screenshots/desktop-profile-page-admin.png)

Desktop Admin User:

![Desktop Profile Page Regular User Screenshot](/docs/readme_screenshots/desktop-profile-page-user.png)

Mobile Regular User:

![Mobile Profile Page Admin Screenshot](/docs/readme_screenshots/mobile-profile-page-admin.png)

Mobile Admin User:

![Mobile Profile Page Regular User Screenshot](/docs/readme_screenshots/mobile-profile-page-user.png)

***Change Username***

Change username page is where the users can change their usernames.

Desktop:

![Desktop Change Username Page Screenshot](/docs/readme_screenshots/desktop-change-username-page.png)

Mobile:

![Mobile Change Username Page Screenshot](/docs/readme_screenshots/mobile-change-username-page.png)

***Change Password***

Change password page is where the users can change their usernames.

Desktop:

![Desktop Change Password Page Screenshot](/docs/readme_screenshots/desktop-change-password-page.png)

Mobile:

![Mobile Change Password Page Screenshot](/docs/readme_screenshots/mobile-change-password-page.png)

***Sign Out Modal***

When a user attempts to sign out, the sign out modal pops up to check the user wants to sign out.

Desktop:

![Desktop Sign Out Modal Screenshot](/docs/readme_screenshots/desktop-sign-out-modal.png)

Mobile:

![Mobile Sign Out Modal Screenshot](/docs/readme_screenshots/mobile-sign-out-modal.png)

***Delete Job Modal***

When an admin user goes to delete a job, the modal pops up asking the admin user if they are sure they want to delete job.

Desktop:

![Desktop Delete Job Modal Screenshot](/docs/readme_screenshots/desktop-delete-job-modal.png)

Mobile:

![Mobile Delete Job Modal Screenshot](/docs/readme_screenshots/mobile-delete-job-modal.png)


***Delete Note Modal***

When a user goes to delete a note, the modal pops up asking the user if they are sure they want to delete the note.

Desktop:

![Desktop Delete Note Modal Screenshot](/docs/readme_screenshots/desktop-delete-note-modal.png)

Mobile:

![Mobile Delete Job Modal Screenshot](/docs/readme_screenshots/mobile-delete-note-modal.png)

***Delete Profile Modal***

When an admin user goes to delete a profile, the modal pops up asking the admin user if they are sure they want to delete the profile.

Desktop:

![Desktop Delete Profile Modal Screenshot](/docs/readme_screenshots/desktop-delete-profile-modal.png)

Mobile:

![Mobile Delete Job Modal Screenshot](/docs/readme_screenshots/mobile-delete-profile-modal.png)

***Edit Note Form***

When the logged in user is the owner of a note, they have the option to click on the edit icon, which will then make an edit note form appear where they can then edit their note.

Desktop:

![Desktop Edit Note Form Screenshot](/docs/readme_screenshots/desktop-edit-note-form.png)

Mobile:

![Mobile Edit Note Form Screenshot](/docs/readme_screenshots/mobile-edit-note-form.png)

***Form Errors and Alerts***

When a form is filled out incorrectly their will be an error message underneath the form field with the error and also an alert popping up to inform the user that an error has occurred.

Signin Form:

![Desktop Signin Form Errors Screenshot](/docs/readme_screenshots/desktop-signin-form-errors.png)

Signup Form:

![Desktop Signup Form Errors Screenshot](/docs/readme_screenshots/desktop-signup-form-errors.png)

Add Job Form:

![Desktop Add Job Form Errors Screenshot](/docs/readme_screenshots/desktop-add-job-form-errors.png)

Add Note Form:

![Desktop Add Note Form Errors Screenshot](/docs/readme_screenshots/desktop-add-note-form-errors.png)

Change Username Form:

![Desktop Change Username Form Errors Screenshot](/docs/readme_screenshots/desktop-change-username-form-errors.png)

Change Password Form:

![Desktop Change password Form Errors Screenshot](/docs/readme_screenshots/desktop-change-password-form-errors.png)

***Successful Alerts***

When a user submits a form successfully, the user will see an alert pop up informing them of their successful action with brief description.

![Desktop Success Alert Screenshot](/docs/readme_screenshots/desktop-success-alert.png)

[back to top](#control-systems-jobs-manager)

#### The Surface Plane

##### Design

***Colour Scheme***

I opted for a very few choices of colours throughout the site. The same colours have been implemented across the site and are included in the button's styles. The colours are the colours of Control Systems Automation Limited Logo

This hopefully makes the site easy and clear to read / use.

The colour palette was created using the coolors website.

![Coolors Screenshot](/docs/readme_screenshots/coolors-screenshot.png)

***Imagery***

Font awesome was used to for the sites icons.

Google fonts was used for the font style.

[back to top](#control-systems-jobs-manager)

### Use of Components

A number of reusable React components were created with the intention of reducing code duplication.

***AlertMessage.js***

Used to show alert messages to inform user of different actions. This was passed as a prop so each alert when called can display it's own message. 

***CustomButton.js***

Used to create a custom button and then styled depending on what purpose the button is used for, which is passed as a prop.


***CustomModal.js***

Use to create a modal to pop when a user has decided and on action but is asked if they a sure.

***ErrorMessage.js***

Used to display error messages on pages if any.

***LoadingSpinner***

Used to display loading spinner for whenever site is loading. Spinner can be different sizes depending on purpose, which is passed as a prop.

***MoreDropdown.js***

Used so that the jobs, notes and profiles have an icon, where they can click and then have the options for delete or edit information. These are built so they can be modified slightly depending on where the component is used.

***NavBar***

Used to display navbar on all pages.

***NavBarNavLink***

Used to create numerous nav links for the navbar, which diferent information was passed as props.

### Custom Hooks

***useAutoLogout.js***

This custom hook is used trigger user to be signed out automatically if token expired or reset token expire time if user being active.

***useCheckTokenExpiry.js***

This custom hook is used to check if the auth token for the logged in user hasn't expired on a rgular basis.

***useClickOutsideToggle.js***

This custom hook is used so that in mobile devices, if the navbar dropdown menu has been toggled open, the user can click anywhere outside the dropdown menu and this will still toggle the dropdown menu closed.

***useJobs.js***

This custom hook is used to deal with any backend requests related to the jobs. Fetch, Add, Delete and Edit jobs.

***useLogoutUser.js***

This custom hook is used to logout the user manually.

***useModal.js***

This custom hook is used to control the functionality of the custom modal.

***useNotes.js***

This custom hook is used to deal with any backend requests related to the notes. Fetch, Add, Delete and Edit notes.

***useProfiles.js***

This custom hook is used to deal with any backend requests related to the profiles. Fetch, Add, Delete and Edit profiles.

***useRedirectUser.js***

This custom hook is used to redirect the user from certain pages, depending on whether they are not logged in or if they are not a super user.

[back to top](#control-systems-jobs-manager)

### Languages Used

- HTML5

- JSX

- CSS

- JavaScript

[back to top](#control-systems-jobs-manager)

### Frameworks, Libraries and Dependencies

#### React

React is the frontend framework used to create the frontend of this project.

#### React-Router-Dom

React-Router-Dom is used to enable client side routing for React web applications and is used to implement basic routing across this project.

#### ReactDOM

ReactDOM is used for rendering components to the DOM. It bridges the gap between Reacts Virtual DOM and the actual DOM in the browser.

#### Axios

Axios was used to simplify requests made to the REST API.

#### React Bootstrap

React Bootstrap was used to help with the styling and layout of the entire project.

#### Font Awesome

Font awesome was used for the icons used across the site.

#### Google fonts

Google fonts was used to provide the font for the site.

#### Prettier

Prettier is used as code formatting tool which helped me structure my code in the correct way.

#### Infinite Scroll

Used so that all data isn't fetched at once, and instead which fetch more data, if any as the user scrolls through the pages.

[back to top](#control-systems-jobs-manager)

### Testing Frontend

I have included details of my testing during and post development in a separate file called [TESTING_FRONTEND.md](TESTING_FRONTEND.md)

[back to top](#control-systems-jobs-manager)

### Credits

- Code Institute - Without the knowledge gained through out doing the course I would not have been able to build this project.

- React Framework - React Framework - For being able to use React Framework to build my project and all the documentation to help build and set up correctly.

- StackOverflow - For helping give me with ideas on how to overcome issues I encountered.

- Google Fonts - For supplying the fonts used.

- Font Awesome - For Providing the icons used throughout this project.

- Djando Rest Framework - For providing me the platform to create my custom API for the backend.

[back to top](#control-systems-jobs-manager)