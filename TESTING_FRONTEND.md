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
| Loading spinner | When page first loads and data is being fetched, the user is presented with a loading spinner to inform the user data is being fetch. | Visited homepage. | Loading spinner was displayed when page originally displays until data is fetched. | Pass |
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
| Alert message on creating user. | When the sign up form has successfully been submitted, an alert message should pop up, informing the user that they have successfully created a new user. | Submitted sign up form correctly. | Alert message popped up informing me I had successfully created new user. | Pass |
| Redirected on successful submission. | When user has successfully submitted the sign up form, user should then be redirected back to the homepage. | Successfully submitted the sign up form. | I was redirected back to homepage. | Pass |
| Redirected if not admin user. | If a regular logged in user tries to access the add user page through the url, they will be redirected back to the homepage. | Logged in as a regular user and typed in the url for the add user page. | I was redirected back to the homepage. | Pass |
| Redirected if not logged in. | If a logged out user tries to access the add user page through the url, they will be redirected back to the sign in page. | Visited site as a logged out user and typed in the url for the add user page. | I was redirected back to the sign in page. | Pass |
| Sign up form button turns to loading spinner when submitting. | When user has submitted the sign up form, the sign up button has now been disabled and is a loading spinner to inform the user the request is being loaded. | Submitted the sign up form. | Loading spinner had replaced the sign up button. | Pass |
| `Sign in page` |
| User can sign in. | When a user has an account and goes to the sign in page. If they fill out the sign in form correctly, they can log into the site. | Filled out the sign in form correctly. | Successfully logged into site. | Pass |
| Input field errors displayed. | If there is an error with one of the form input fields on submission, an error will appear underneath that field to inform the user of the error. | Tried submitting the sign in form with an intentional error. | Form was not submitted and error message underneath the specific field was displayed. | Pass |
| Alert message informing error. | If there is an error submitting the sign in form, an alert message will pop up informing the user that there was an error. | Tried submitting sign in form with an intentional error. | Alert message popped up informing user of an error. | Pass |
| Alert message on signing in. | When the sign in form has successfully been submitted, an alert message should pop up, informing the user that they have successfully signed in as that user. | Submitted sign up form correctly. | Alert message popped up informing me I had successfully created new user. | Pass |
| Redirected on successful submission. | When user has successfully submitted the sign in form, user should then be redirected back to the homepage. | Successfully submitted the sign in form. | I was redirected back to homepage. | Pass |
| Redirected if not logged out. | If a logged in user tries to access the sign in page through the url, they will be redirected back to the homepage. | Visited site as a logged in user and typed in the url for the sign in page. | I was redirected back to the homepage. | Pass |
| Sign in form button turns to loading spinner when submitting. | When user has submitted the sign in form, the sign in button has now been disabled and is a loading spinner to inform the user the request is being loaded. | Submitted the sign in form. | Loading spinner had replaced the sign in button. | Pass |
| `Add job page` |
| Can add new job. | When logged in as an admin user, the admin user can create another job by filling out the add job form correctly. | Signed in as an admin user and filled out the add job form correctly. | Successfully created new job. | Pass |
| Input field errors displayed. | If there is an error with one of the form input fields on submission, an error will appear underneath that field to inform the user of the error. | Tried submitting the add job form with an intentional error. | Form was not submitted and error message underneath the specific field was displayed. | Pass |
| Alert message informing error. | If there is an error submitting the add job form, an alert message will pop up informing the user that there was an error. | Tried submitting add job form with an intentional error. | Alert message popped up informing user of an error. | Pass |
| Alert message on creating job. | When the add job form has successfully been submitted, an alert message should pop up, informing the user that they have successfully created a new job. | Submitted add job form correctly. | Alert message popped up informing me I had successfully created new job. | Pass |
| Redirected on successful submission. | When user has successfully submitted the add job form, user should then be redirected back to the homepage. | Successfully submitted the add job form. | I was redirected back to homepage. | Pass |
| Redirected if not admin user. | If a regular logged in user tries to access the add job page through the url, they will be redirected back to the homepage. | Logged in as a regular user and typed in the url for the add job page. | I was redirected back to the homepage. | Pass |
| Redirected if not logged in. | If a logged out user tries to access the add job page through the url, they will be redirected back to the sign in page. | Visited site as a logged out user and typed in the url for the add job page. | I was redirected back to the sign in page. | Pass |
| Add job form button turns to loading spinner when submitting. | When user has submitted the add job form, the add job button has now been disabled and is a loading spinner to inform the user the request is being loaded. | Submitted the add job form. | Loading spinner had replaced the sign up button. | Pass |
| `Job detail page` |
| User can see all job information. | When a user clicks to go on the specific job detail page, the user can see all the correct data for that specific job. | Visited various different job detail pages. | Each time I was able to see all the different data for that specific job. | Pass |
| Admin user edit job | As an admin user, you are able to edit all the fields for that specific job. | Logged in as admin user and visited different job detail pages. Here I changed each individual field and clicked save changes. | I was successfully able to edit all job detail fields. | Pass |
| Input field errors displayed. | If there is an error with one of the form input fields on submission, an error will appear underneath that field to inform the user of the error. | Tried saving the changes with an intentional error. | Form was not submitted and error message underneath the specific field was displayed. | Pass |
| Loading spinner | When page first loads and data is being fetched, the user is presented with a loading spinner to inform the user data is being fetch. | Visited homepage. | Loading spinner was displayed when page originally displays until data is fetched. | Pass |
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
| Infinite Scroll | When the job detail page is loaded, only the first ten most recent notes are fetched. Then as the user scrolls down throught the page, the site will automatically fetch the next page of notes automatically and will continue to do so as the user keeps scrolling. | Visited job detail page and scrolled down through the page. | At first, the first ten notes were displayed. As I scrolled down, the site kept fetching further data as I continued to scroll. | Pass |
| `Profiles page` |
| Can access admin page as admin. | If logged in as an admin user, the user can access the profiles page my clicking on the profile navbar link. | Logged in as an admin user and clicked on the profile navbar link. | Succuessfully accessed profiles page. | Pass |
| View all profiles. | When on the profiles page, the user can see all the users that have an account on this site. Each profile has a view profile button which allows the user to view there specific profile. | Visited the profiles page. | List of all the users profiles were displayed. I was able to click on each of the profiles and visit their specific profile pages. | Pass |
| Infinite Scroll | When the profiles page is loaded, only the first ten most recent profiles are fetched. Then as the user scrolls down throught the page, the site will automatically fetch the next page of profiles automatically and will continue to do so as the user keeps scrolling. | Visited profiles page and scrolled down through the page. | At first, the first ten profiles were displayed. As I scrolled down, the site kept fetching further data as I continued to scroll. | Pass |
| Redirected if not admin user. | If a regular logged in user tries to access the add profiles page through the url, they will be redirected back to the homepage. | Logged in as a regular user and typed in the url for the profiles page. | I was redirected back to the homepage. | Pass |
| Redirected if not logged in. | If a logged out user tries to access the profiles page through the url, they will be redirected back to the sign in page. | Visited site as a logged out user and typed in the url for the profiles page. | I was redirected back to the sign in page. | Pass |
| Loading spinner | When page first loads and data is being fetched, the user is presented with a loading spinner to inform the user data is being fetch. | Visited homepage. | Loading spinner was displayed when page originally displays until data is fetched. | Pass |
| `Profile page` |
| Can see the users work location. | When visiting the profile page, the user can see what their work location is set to. | Logged in as different users and visited the profile page. | Each profile, I could clearly see what their work location was set to. | Pass |
| Admin user can edit work location. | When logged in as an admin user, the user is able to edit the work location of any user. | Logged in as an admin user and tried editing the work location on different profile pages. | Successfully edited different profiles work locations. | Pass |
| Edit form button turns to loading spinner when submitting. | When user has submitted the edit work location form, the submit button has now been disabled and is a loading spinner to inform the user the request is being loaded. | Submitted the edit work location form. | Loading spinner had replaced the submit button. | Pass |
| Redirected if not logged in. | If a logged out user tries to access the profile page through the url, they will be redirected back to the sign in page. | Visited site as a logged out user and typed in the url for the profile page. | I was redirected back to the sign in page. | Pass |
| Redirected if not admin and note owner of profile. | If a regular logged in user tries to access the profile page which they are not the owner of through the url, they will be redirected back to the homepage. | Logged in as a regular user and typed in the url for the profile page user was not the owner of. | I was redirected back to the homepage. | Pass |
| Link to change username. | When logged in and visiting your own profile page, user is presented with a three dot icon, which when clicked will offer a link to a change username page. | Logged in and went to that users profile page and clicked on the change username link. | Successfully directed to change username page. | Pass |
| Link to change password. | When logged in and visiting your own profile page, user is presented with a three dot icon, which when clicked will offer a link to a change password page. | Logged in and went to that users profile page and clicked on the change password link. | Successfully directed to change password page. | Pass |
| Loading spinner | When page first loads and data is being fetched, the user is presented with a loading spinner to inform the user data is being fetch. | Visited homepage. | Loading spinner was displayed when page originally displays until data is fetched. | Pass |
| `Change username page` |
| Can change username. | When logged in, the user can change their username by filling out the change username form correctly. | Signed in as user and filled out the change username form correctly. | Successfully changed username. | Pass |
| Input field errors displayed. | If there is an error with one of the form input fields on submission, an error will appear underneath that field to inform the user of the error. | Tried submitting the change username form with an intentional error. | Form was not submitted and error message underneath the specific field was displayed. | Pass |
| Alert message informing error. | If there is an error submitting the change username form, an alert message will pop up informing the user that there was an error. | Tried submitting change username form with an intentional error. | Alert message popped up informing user of an error. | Pass |
| Alert message on changing username. | When the change username form has successfully been submitted, an alert message should pop up, informing the user that they have successfully changed their username. | Submitted change username form correctly. | Alert message popped up informing me I had successfully changed the username. | Pass |
| Redirected on successful submission. | When user has successfully submitted the change username form, user should then be redirected back to their profile page. | Successfully submitted the change username form. | I was redirected back to their profile page. | Pass |
| `Change password page` |
| Can change password. | When logged in, the user can change their password by filling out the change password form correctly. | Signed in as user and filled out the change password form correctly. | Successfully changed password. | Pass |
| Input field errors displayed. | If there is an error with one of the form input fields on submission, an error will appear underneath that field to inform the user of the error. | Tried submitting the change password form with an intentional error. | Form was not submitted and error message underneath the specific field was displayed. | Pass |
| Alert message informing error. | If there is an error submitting the change password form, an alert message will pop up informing the user that there was an error. | Tried submitting change password form with an intentional error. | Alert message popped up informing user of an error. | Pass |
| Alert message on changing password. | When the change password form has successfully been submitted, an alert message should pop up, informing the user that they have successfully changed their password. | Submitted change password form correctly. | Alert message popped up informing me I had successfully changed the password. | Pass |
| Redirected on successful submission. | When user has successfully submitted the change password form, user should then be redirected back to their profile page. | Successfully submitted the change password form. | I was redirected back to their profile page. | Pass |
| `Sign out modal` |
| Sign out modal appears when trying to sign out. | When a logged in user clicks the sign out navbar link, the sign out modal appears, checking that the user wants to sign out. If the user clicks yes, the user will be signed out. | Logged in as different users and clicked the sign out link. | Sign out modal appears and if clicked, I was successfully signed out. If I clicked no, or any where else on the screen, the modal closed and was able to continue as a logged in user. | Pass |


[back to top](#control-systems-jobs-react-testing)

## Validators

### Lighthouse

<details>

<summary>Desktop</summary>

Homepage Logged Out:

![Desktop Homepage Logged Out Lighthouse](/docs/frontend_testing_screenshots/desktop-homepage-logged-out-lighthouse.png)

Homepage Logged In:

![Desktop Homepage Logged In Lighthouse](/docs/frontend_testing_screenshots/desktop-homepage-logged-in-lighthouse.png)

Sign In Page:

![Desktop Sign In Page Lighthouse](/docs/frontend_testing_screenshots/desktop-signin-lighthouse.png)

Add User Page:

![Desktop Add User Page Lighthouse](/docs/frontend_testing_screenshots/desktop-add-user-lighthouse.png)

Add Job Page:

![Desktop Add Job Page Lighthouse](/docs/frontend_testing_screenshots/desktop-add-job-lighthouse.png)

Job Detail Page:

![Desktop Job Detail Page Lighthouse](/docs/frontend_testing_screenshots/desktop-job-detail-lighthouse.png)

Profiles Page:

![Desktop Profiles Page Lighthouse](/docs/frontend_testing_screenshots/desktop-profiles-lighthouse.png)

Profile Page:

![Desktop Profile Page Lighthouse](/docs/frontend_testing_screenshots/desktop-profile-lighthouse.png)

Change Username Page:

![Desktop Change Username Page Lighthouse](/docs/frontend_testing_screenshots/desktop-change-username-lighthouse.png)

Change Password Page:

![Desktop Change Password Page Lighthouse](/docs/frontend_testing_screenshots/desktop-change-password-lighthouse.png)

</details>

<details>

<summary>Mobile</summary>

Homepage Logged Out:

![Mobile Homepage Logged Out Lighthouse](/docs/frontend_testing_screenshots/mobile-homepage-logged-out-lighthouse.png)

Homepage Logged In:

![Mobile Homepage Logged In Lighthouse](/docs/frontend_testing_screenshots/mobile-homepage-logged-in-lighthouse.png)

Sign In Page:

![Mobile Sign In Page Lighthouse](/docs/frontend_testing_screenshots/mobile-signin-lighthouse.png)

Add User Page:

![Mobile Add User Page Lighthouse](/docs/frontend_testing_screenshots/mobile-add-user-lighthouse.png)

Add Job Page:

![Mobile Add Job Page Lighthouse](/docs/frontend_testing_screenshots/mobile-add-job-lighthouse.png)

Job Detail Page:

![Mobile Job Detail Page Lighthouse](/docs/frontend_testing_screenshots/mobile-job-detail-lighthouse.png)

Profiles Page:

![Mobile Profiles Page Lighthouse](/docs/frontend_testing_screenshots/mobile-profiles-lighthouse.png)

Profile Page:

![Mobile Profile Page Lighthouse](/docs/frontend_testing_screenshots/mobile-profile-lighthouse.png)

Change Username Page:

![Mobile Change Username Page Lighthouse](/docs/frontend_testing_screenshots/mobile-change-username-lighthouse.png)

Change Password Page:

![Mobile Change Password Page Lighthouse](/docs/frontend_testing_screenshots/mobile-change-password-lighthouse.png)

</details>

[back to top](#control-systems-jobs-react-testing)

### ESLint JavaScript

Most of the JavaScript code validation was done through the help of the prettier code formatting extension and ESLint running through the production of the app.

All JavaScript files were then validated using ESLint JavaScript validator, which reported back no issues. 

[back to top](#control-systems-jobs-react-testing)

### W3C CSS Validator

W3C CSS Validator was used to validate the site's CSS code. All style pages return with no errors found:

![W3C CSS Validattion Screenshot](/docs/frontend_testing_screenshots/css-validation.png)

[back to top](#control-systems-jobs-react-testing)

## Responsiveness

All pages were tested to ensure responsiveness on screen sizes from 320px and upwards. The site was also tested on multiple browsers and devices.

Browser test table:

| Browser Tested | Actual Result | Pass / Fail |
| --- | --- | --- |
| Chrome | As Expected | Pass |
| Firefox | As Expected | Pass |
| Edge | As Expected | Pass |
|Samsung | As Expected | Pass |

Devices tested and devices using google tools:

| Device Tested | Actual Result | Pass / Fail |
| --- | --- | --- |
| Acer Laptop | As expected | Pass |
| Samsung 22 inch Screen | As expected | Pass |
| i Phone SE | As expected | Pass |
| i Phone XR | As expected | Pass |
| i Phone 12 Pro | As expected | Pass |
| i Phone 14 Pro Max | As expected | Pass |
| Pixel 7 | As expected | Pass |
| Samsung Galaxy S8 | As expected | Pass |
| Samsung S20 Ultra | As expected | Pass |
| iPad Mini | As expected | Pass |
| iPad Air | As expected | Pass |
| iPad Pro | As expected | Pass |
| Surface Pro 7 | As expected | Pass |
| Surface Duo | As expected | Pass |
| Galaxy Fold | As expected | Pass |
| Samsung Galaxy A51/71 | As expected | Pass |
| Nest Hub | As expected | Pass |
| Nest Hub Max | As expected | Pass |

[back to top](#control-systems-jobs-react-testing)