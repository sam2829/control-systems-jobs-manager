# Control Systems Jobs React Testing

## Testing Overview

During the development of this project, numerous testing was carried out by myself and others.

## Contents

- [Control Systems Jobs React Testing](#control-systems-jobs-react-testing)
  - [Testing Overview](#testing-overview)
  - [Contents](#contents)
  - [Manual Testing](#manual-testing)
  - [Validators](#validators)
    - [Lighthouse](#lighthouse)
    - [ESLint JavaScript](#eslint-javascript)
    - [W3C CSS Validator](#w3c-css-validator)
  - [Responsiveness](#responsiveness)
  - [Bugs & Fixes](#bugs-&-fixes)

  ## Manual Testing

Manual testing was carried out throughout the project, making sure user stories were working successfully and the site was functioning correctly.

Full test table:

| Feature | Expected Outcome | Testing Performed | Result | Pass / Fail |
| --- | --- | --- | --- | --- |
| `Homepage` |
| Sign in link when not logged in. | When a user visits the homepage and is not logged in, they are presented with a message and a link to the sign in page. | Visited homepage as a logged out user. | Message was on home screen teeling me to register an account with managemend if I didn't have one. Link to sign in page was present and worked. | Pass |
| List of jobs appears when logged in. | When a logged in user visits the homepage, the user can see the full list of jobs. | Visited homepage as a logged in user. | Full list of all jobs were on display. | Pass |
| Search bar to filter jobs. | As a user, if I can type into the search bar to filter out the jobs by their CSA or Syspal number. | Visited homepage and started typing in different CSA and Syspal numbers to see if jobs would be filtered out. | Each time I typed in the respected numbers, the correct job / jobs would be filtered out. | Pass |
| View job detail link. | On each individual job, there is a view job button which if clicked, will take you to the job detail page fr that specific job. | Clicked on various different view job buttons for seperate jobs. | Each time I was taken to that specific jobs job detail page. | Pass |
| Infinite Scroll | When the homepage is loaded, only the first ten most recent jobs are fetched. Then as the user scrolls down throught the page, the site will automatically fetch the next page of jobs automatically and will continue to do so as the user keeps scrolling. | Visited home page and scrolled down through the page. | At first, the first ten jobs were displayed. As I scrolled down, the site kept fetching further data as I continued to scroll. | Pass |
| `Navbar` |
| Navbar is displayed on every page. | As a user I can see the the navbar on every page. | Visited every page on the site. | Navbar was always present. | Pass|
| Navbar displays different links if logged in or out. | As a user, the navbar on display will be different depending on whether I am logged in or out. If logged out I will only see the sign in link, and if logged in I see the links to navigate me through the site. | Visited site logged in and logged out. | The navbar rendered different links in navabr depending on whether I am logged in or out. | Pass |
| Additional links if admin user. | If the user is a logged in admin user, the user will have additonal links to the navbar for adding a user and adding a job. | Logged in as a regualr and a admin user. | When logged in as an admin user I could see the additional nav bar links but not when I logged in as a regular user. | Pass |
| Link take me to the correct page. | When I click on the navbar links, the links take me to the correct page on the site. | Clicked on all the different links in the navbar. | Each time the links took me to the correct page. | Pass |
| Navbar is drop down menu in smaller screens. | When visiting the site using smaller screens, the navbar will now become a dropdown menu with a hamburger icon. | Visited the site on a smaller screen. | The navbar was now a dropdown menu which was triggered by clicking on the hamburger icon. | Pass |
| Navbar links show which page user is on. | When a user is on a certain page, the respected navbar link will be styled differently so the user knows they are on that page. | When to different pages on the site. | Each time the respected navbar link was styled differently, showing me which page I was on. | Pass |
| Navbar hover effect. | When a user hovers over a navbar link, the navbar link will be styled differently to show the user they are hoverring over that link. | Hovered over different links. | Each link when hovered over, changed style to indicate I was hovering over that link. | Pass |
| `Add User Page` |
| Can add new user. | When logged in as an admin user, the admin user can create another user by filling out the sign up form correctly. | Signed in as an admin user and filled out the sign up form correctly. | Successfully created new user. | Pass |
| Input field errors displayed. | If there is an error with one of the form input fields on submission, an error will appear underneath that field to inform the user of the error. | Tried submitting the sign up form with an intentional error. | Form was not submitted and error message underneath the specific field was displayed. | Pass |
| Alert message informing error. | If there is an error submitting the sign up form, an alert message will pop up informing the user that there was an error. | Tried submitting sign up form with an intentional error. | Alert message popped up informing user of an error. | Pass |
| Alert message on creating user. | When the sign up form has successfully been submitted, an alert message should pop up, informing the user that they have successfully created a new user. | Submitted sign up form correctly. | Alert message popped up informing me I had successfully created new user. |
| Redirected on successful submission. | When user has successfully submitted the sign up form, user should then be redirected back to the homepage. | Successfully submitted the sign up form. | I was redirected back to homepage. | Pass |
| Redirected if not admin user. | If a regular logged in user tries to access the add user page through the url, they will be redirected back to the homepage. | Logged in as a regular user and typed in the url for the add user page. | I was redirected back to the homepage. | Pass |
| Redirected if not logged in. | If a logged out user tries to access the add user page through the url, they will be redirected back to the sign in page. | Visited site as a logged out user and typed in the url for the add user page. | I was redirected back to the sign in page. | Pass |
| Sign up form button turns to loading spinner when submitting. | When user has submitted the sign up form, the sign up button has now been disabled and is a loading spinner to inform the user the request is being loaded. | Submitted the sign up form. | Loading spinner had replaced the sign up button. | Pass |
| `Sign in page` |
| User can sign in. | When a user has an account and goes to the sign in page. If they fill out the sign in form correctly, they can log into the site. | Filled out the sign in form correctly. | Successfully logged into site. | Pass |
| Input field errors displayed. | If there is an error with one of the form input fields on submission, an error will appear underneath that field to inform the user of the error. | Tried submitting the sign in form with an intentional error. | Form was not submitted and error message underneath the specific field was displayed. | Pass |
| Alert message informing error. | If there is an error submitting the sign in form, an alert message will pop up informing the user that there was an error. | Tried submitting sign in form with an intentional error. | Alert message popped up informing user of an error. | Pass |
| Alert message on signing in. | When the sign in form has successfully been submitted, an alert message should pop up, informing the user that they have successfully signed in as that user. | Submitted sign up form correctly. | Alert message popped up informing me I had successfully created new user. |
| Redirected on successful submission. | When user has successfully submitted the sign in form, user should then be redirected back to the homepage. | Successfully submitted the sign in form. | I was redirected back to homepage. | Pass |
| Redirected if not logged out. | If a logged in user tries to access the sign in page through the url, they will be redirected back to the homepage. | Visited site as a logged in user and typed in the url for the sign in page. | I was redirected back to the homepage. | Pass |
| Sign in form button turns to loading spinner when submitting. | When user has submitted the sign in form, the sign in button has now been disabled and is a loading spinner to inform the user the request is being loaded. | Submitted the sign in form. | Loading spinner had replaced the sign in button. | Pass |
| `Add job page` |
| Can add new job. | When logged in as an admin user, the admin user can create another job by filling out the add job form correctly. | Signed in as an admin user and filled out the add job form correctly. | Successfully created new job. | Pass |
| Input field errors displayed. | If there is an error with one of the form input fields on submission, an error will appear underneath that field to inform the user of the error. | Tried submitting the add job form with an intentional error. | Form was not submitted and error message underneath the specific field was displayed. | Pass |
| Alert message informing error. | If there is an error submitting the add job form, an alert message will pop up informing the user that there was an error. | Tried submitting add job form with an intentional error. | Alert message popped up informing user of an error. | Pass |
| Alert message on creating job. | When the add job form has successfully been submitted, an alert message should pop up, informing the user that they have successfully created a new job. | Submitted add job form correctly. | Alert message popped up informing me I had successfully created new job. |
| Redirected on successful submission. | When user has successfully submitted the add job form, user should then be redirected back to the homepage. | Successfully submitted the add job form. | I was redirected back to homepage. | Pass |
| Redirected if not admin user. | If a regular logged in user tries to access the add job page through the url, they will be redirected back to the homepage. | Logged in as a regular user and typed in the url for the add job page. | I was redirected back to the homepage. | Pass |
| Redirected if not logged in. | If a logged out user tries to access the add job page through the url, they will be redirected back to the sign in page. | Visited site as a logged out user and typed in the url for the add job page. | I was redirected back to the sign in page. | Pass |
| Add job form button turns to loading spinner when submitting. | When user has submitted the add job form, the add job button has now been disabled and is a loading spinner to inform the user the request is being loaded. | Submitted the add job form. | Loading spinner had replaced the sign up button. | Pass |
| `Job detail page` |
| User can see all job information. | When a user clicks to go on the specific job detail page, the user can see all the correct data for that specific job. | Visited various different job detail pages. | Each time I was able to see all the different data for that specific job. | Pass |
| Admin user edit job | As an admin user, you are able to edit all the fields for that specific job. | Logged in as admin user and visited different job detail pages. Here I changed each individual field and clicked save changes. | I was successfully able to edit all job detail fields. | Pass |
| Input field errors displayed. | If there is an error with one of the form input fields on submission, an error will appear underneath that field to inform the user of the error. | Tried saving the changes with an intentional error. | Form was not submitted and error message underneath the specific field was displayed. | Pass |
| Admin user can delete job. | When logged in as an admin user, I am able to click on the three icons at the top of the job, click the delete icon and the job will be deleted. | Logged in as an admin user, clicked on the delete icon. | Job was successfully deleted. | Pass |
| Edit deliver status. | When logged in as an admin user, I am able to edit the delivered status field. When I change this to delivered, on submission the date delivered field will then automatically be filled with the date the status was changed. | Logged in as an admin user and changed the delivered status to delivered. | Date delivered field was now filled with the correct date. | Pass |
| Regular user can edit work status fields. | When logged in as a regular user, the user, depending on the work location on their profile, they can edit the status fields workshop status and syspal status. | Logged in as different regular users who's profiles had different work locations. | When logged in as a user with the work location of workshop, I was only able to edit the field workshop status. When logged in as a user with the work location of syspal, I was only able to edit the field syspal status. | Pass |
| Job complete icon. | When both workshop status and syspal status are set t complete, back on the homepage, that job should now have a tick under complete. | Set complete to both status fields on different job detail pages. Then went back to check job data on homepage. | Each time there was now a tick to say job was complete. | Pass |
| Job detail buttons turn to loading spinner when submitting. | When user has submitted the job detail form, the job detail buttons have now been disabled and is a loading spinner to inform the user the request is being loaded. | Submitted the job detail form. | Loading spinner had replaced the job detail buttons. | Pass |
| Redirected if not logged in. | If a logged out user tries to access the job detail page through the url, they will be redirected back to the sign in page. | Visited site as a logged out user and typed in the url for the job detail page. | I was redirected back to the sign in page. | Pass |
| Notes are displayed | When user visits the dob detail page, they are able to see if there are any notes left for the user to see. | Logged in as visited various job detail pages. | When there were any notes for the job, the notes were clearly on display for user. If there were no notes, then there was a message informing user of this. | Pass |
| User can leave notes. | When logged in, user is able to leave notes on any job detail page if form filled out correctly. | Submitted add note form successfully. | Succesfully added note which was now on display and notes count incremented up by one. | Pass |
| User can edit their own notes. | When user logged in, user can edit a note as long as they are the creator of that note. If they are the owner, a three dot icon will appear on that note, if clicked will display the edit icon, which if clicked will display the edit note form. If filled out correctly will allow user to edit note. | Logged in as user and tried to edit that users note. | Was able to edit a note that I created. | Pass |
| Input field errors displayed. | If there is an error with one of the form input fields on submission, an error will appear underneath that field to inform the user of the error. | Tried submitting the add note form with an intentional error. | Form was not submitted and error message underneath the specific field was displayed. | Pass |
| Add note form button turns to loading spinner when submitting. | When user has submitted the add note form, the add note button has now been disabled and is a loading spinner to inform the user the request is being loaded. | Submitted the add note form. | Loading spinner had replaced the create note button. | Pass |



