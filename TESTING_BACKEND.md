# Control Systems Jobs Manager API Testing

## Testing Overview

During and post development of this project numerous testing was carried out by myself.

## Contents

- [Control Systems Jobs Manager API Testing](#control-systems-jobs-manager-api-testing)
  - [Testing Overview](#testing-overview)
  - [Contents](#contents)
  - [Manual Testing](#manual-testing)
  - [Automated Testing](#automated-testing)
  - [Validators](#validators)
    - [CI Python Linter](#ci-python-linter)
  - [Bugs and Fixes](#bugs-and-fixes)

## Manual Testing

Manual testing was carried out throughout the project, making sure the site was functioning correctly.

Full test table:

| Feature | Expected Outcome | Testing Performed | Result | Pass / Fail |
| --- | ---| --- | --- | --- |
| `Profiles` |
| Profile is created when user is created. | When a user is created, the profile for the user is automatically created. | Created a superuser and view the profiles URL to see if it was created. | Went to the profiles URL and the profile was created. | Pass |
| Get list of profiles | I am able to retrieve a list of all the profiles on the profiles URL page. | Went to the profiles URL. | On the profiles URL could see a list of all the profiles made. | Pass |
| Retrieve profile by id. | In the URL I can search for the profile by adding its id number. | In the URL I add the id number following the profiles/. | Only one profile on display which was the correct id number. | Pass |
| If user is logged in they can edit their profile. | When the user is logged in, they are able to edit their own profile allowed fields. | Logged in as a user and attempted to edit the profile. | Once logged in and on the correct profile, an edit form appeared underneath the profile and I was able to edit the profile details. | Pass |
| Only superuser can edit work location on users profile. | When the user is logged in, they are unable to edit the work location field. If they try to they get an error message saying only superuser's allowed to edit this field. | Attempted to edit the work location field, logged in as a user and then as a superuser. | When logged in as a user I was unable to modify the work lcoation field and got an error message. When logged in as a superuser I was able to modify the work location field | Pass |
| User can't edit another's profile. | When user logged in and retrieve another's profile, the edit form does not appear and user is unable to edit their profile. | Logged in as a user and retrieved a profile which wasn't that users profile. | The update form was not on the screen and was unable to edit their profile. | Pass |
| Profile edit form doesn't appear when logged out. | When a user is logged out and retrieves a profile by id, the profiles update form does not appear. | Remained logged out and retrieved a profile by id. | The profile update form was not on display. | Pass |
| `Jobs` |
| Get a list of all jobs. | I am able to retrieve a list of all the jobs created on the jobs URL page. | Went to the jobs URL. | On the jobs URL I could see a list of all the jobs that had been made. | Pass |
| Only Superuser can create a job. | When a user is logged in and on the jobs URL, a post form is now on display. If a regular user attempts to create this job, they will be unsuccessful and get an error stating only superusers can create jobs. When logged in as a superuser and attempt to post this form, the job wil successfully be created. | Logged in as both regular user and superuser and attempted to create a new job. | When logged in as regular user I was unable to create a new job and an error message was on display. When logged in as a superuser I was successfully able to create a new job. | Pass |
| logged out user cannot create a job. | When a user is logged out and on the jobs URL, the post form is not on display and the user unable to create a job. |
Made sure I was logged out and went to the jobs URL. | The job form was not on display and I was unable to create a job. | Pass |
| Retrieve a job by id. | In the URL I am able to retrieve a job by its id number, by adding its id number after jobs/. | In the URL I added the id number of a job after the jobs/. | Only one job on display which was the correct one by id number. | Pass |
| User not logged in cannot retrieve list of jobs. | If a user is not logged and tries to retrieve the list of jobs, the user is not granted access to see the list of jobs and error message informs user that authentication details were not provided. | Tried getting full list of jobs without logging in. | No jobs were displayed and error message explained that no authentication credentials were provided. | Pass |
| User not logged in cannot retrieve job by id. | If a user is not logged and tries to retrieve a job by id, the user is not granted access to see the job and error message informs user that authentication details were not provided. | Tried getting a job by id without logging in. | No job was displayed and error message explained that no authentication credentials were provided. | Pass |
| Superuser is able to edit all fields on any job. | When a superuser is logged in, the user is able to update any of the job fields successfully when retrieving a job by id. | Logged in as a superuser, retrieved job by id and attempting to modify all job fields. | I was succesfully able to modify all fields for any job. | Pass |
| Regular logged in user cannot edit all fields for jobs. | When a regular user is logged in and retrieves a job by id, they unable to edit the job fields except for job status field. When the user attempts to edit any other field an error message will appear with a list of the fields they are not able to edit. | Logged in as a regular user and attempted to edit all fields except for work location. | I was unable to modify any of these fields and each time error message appears with the list of fields I am unable to edit. | Pass |
| Regular user can only edit workshop status or syspal status field. | When a regualr user is logged in, they are only able to edit the workshop status or syspal status field depending on their work location set in their profile. Their work location must match the status field they are attempting to edit or an error message will appear with the list of fields they are unable to edit. | Logged in as different regular users which had different work locations on their profiles. Then attempted to edit both the syspal status and workshop status on different jobs. | With each user I was only able to edit a status field which matched my work location, if not the error message appeared with the list of fields I am unable to edit. | Pass |
| Only superuser can delete a job. | Only a logged in superser is able to delete a job. If a regular logged in user attempts to delete a job, an error message will appear stating they are not authorized. | Logged in as superuser and regular user and attempted to delete jobs. | When logged in as superuser I was able to dleete jobs, when logged in as regular user I was unable to delete jobs and error message was on display. | Pass |
| Delete button is not present logged out. | When a user is logged out, if a user retrieves a job by id the delete button will not be present. | Remained logged out and retrieved a job by id. | Once retrieved a job by id, the delete button wasn't present. | Pass |
| Can search for jobs by csa number. | When logged in as a user, I am able to search for a specific job by it's csa number. | Logged in as user and searched for different jobs by their csa number. | Each time the correct job with the correct csa number was on display. | Pass |
| Can search for jobs by syspal number. | When logged in as a user, I am able to search for a specific job by it's syspal number. | Logged in as user and searched for different jobs by their syspal number. | Each time the correct job with the correct syspal number was on display. | Pass |
| Can filter out jobs by workshop status. | When logged in as a user, I am able to filter out jobs by it's workshop status. | Logged in as user and filtered out jobs by their workshop status. | Each time the correct jobs with the correct workshop status was on display. | Pass |
| Can filter out jobs by syspal status. | When logged in as a user, I am able to filter out jobs by it's syspal status. | Logged in as user and filtered out jobs by their syspal status. | Each time the correct jobs with the correct syspal status was on display. | Pass |
| `Notes` |
| Get a list of all notes. | I am able to retrieve a list of all the notes created on the notes URL page. | Went to the notes URL. | On the notes URL I could see a list of all the notes that had been made. | Pass |
| Logged in user can create a note. | When a user is logged in and on the notes URL, the note form is on display and user is able to create a note. | Logged in as a user and went to the notes URL. | When logged in and on the notes URL, I could see the create a note form and was able to create a note. | Pass |
| Logged out user cannot create a note. | When a user is logged out and on the notes URL, the note form is not on display and the user unable to create a note. | Made sure I was logged out and went to the notes URL. | The note form was not on display and I was unable to create a note. | Pass |
| Retrieve a note by id. | In the URL I am able to retrieve a note by its id number, by adding its id number after notes/. | In the URL I added the id number of a note after the notes/. | Only one note on display which was the correct one by id number. | Pass |
| If user is logged in they can edit their own note. | When a user is logged in, they are able to edit any of their own notes. | Logged in as a user and retrieved notes which were mine and attempted to edit the notes. | Once logged in and on the correct notes, an edit form appeared and I was able to edit the note details. | Pass |
| User cannot edit another's notes. | When user is logged in and retrieve another note, the edit form is not on display and the user is unable to edit the other user's note. | Logged in as a user and retrieved a note which wasn't the user's note. | The update form was not on display and was unable to edit their note. | Pass |
| Note edit form does not appear when logged out. | When a user is logged out and retrieves a note by id, the note update edit form does not appear. | Remained logged out and retrieved a note by id. | The note edit form was not on display. | Pass |
| User can delete their own note. | When a user is logged in, they can retrieve their own note by id and then able to delete their note. | Logged in as a user, retrieved a note of that user by id. | Once logged in and on the correct note, the note now had a delete button present and I was able to delete the note. | Pass |
| User cannot delete another's note. | When a user is logged in, they can retrieve another's note by id but the delete button will not be present and unable to delete the other user's note. | Logged in as a user and retrieved another user's note. | Once logged in and on the correct note, the delete button was not present and was unable to delete the user's note. | Pass |
| Superuser can edit and delete any note. | When logged in as a superuser, I am able to edit or delete any note. | Logged in as a superuser, retrieved different notes and tried to delete and edit them. | Each time I was able to edit or delete the notes. | Pass |
| Logged out user unable to retrieve list of notes. | If a user is logged out, they are unable to retrieve and see the list of notes. An error message will be on display saying authentication credentials were not provided. | Attempted to get the list of notes as a logged out user. | Was unable to see the list of notes and error message was present. | Pass |
| Logged out user unable to retrieve note by id. | If a user is logged out, they are unable to retrieve a note by id. An error message will be on display saying authentication credentials were not provided. | Attempted to get a note by id as a logged out user. | Was unable to retrieve the note and error message was present. | Pass |
| Cannot create note leaving content field blank. | When creating a note, if the user leaves the content field blank and attempt to post the note, the post will be unsuccessful and the blank field will be highlighted stating this field cannot be blank. | Tried creating notes and on each occasion left the content field blank. | Each time I attempted to post the note, the post was unsuccessful and the content field was highlighted and stated that this field cannot be blank. | Pass |
| When a user makes a note the jobs notes count field goes up. | When a user makes a note, on that job the notes count field will increment up by one each time. | Logged in as a user and created numerous notes. | Each time a created a note, I could see on the jobs page that the jobs notes count field for that job had incremented up by one each time. It would also decrement by one when a note was deleted. | Pass |
| Can filter out notes by job. | When logged in as a user, I am able to filter out notes by it's job. | Logged in as user and filtered out notes by their job. | Each time the correct notes with the correct job was on display. | Pass |

[back to top](#control-systems-jobs-manager-api-testing)

## Automated Testing

In this project I also done automated python testing. In this I done some basic testing on the apps, but in future look to carry out more thorough automated testing. These tests were created to test the functionality of the apps. These can be found in the test.py files in the respective apps.

## Validators

***CI Python Linter***

The CI Python Linter was used to validate the python code used throughout the project. All results are in the table below:

| Files | Expected Result | Result | Pass / Fail |
| --- | --- | --- | --- |
|`control_systems_jobs`|
| asgi.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass |
| permissions.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass |
| serializers.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass |
| settings.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | ...| 
| urls.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass | 
| views.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass | 
| wsgi.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass |
|`jobs`|
| admin.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass | 
| apps.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass |
| models.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass | 
| serializers.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass | 
| tests.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass | 
| urls.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass | 
| views.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass |
|`notes`|
| admin.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass | 
| apps.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass | 
| models.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass | 
| tests.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass | 
| urls.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass | 
| views.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass |
|`profiles`|
| admin.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass | 
| apps.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass |  
| models.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass |
| serializers.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass | 
| tests.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass | 
| urls.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass | 
| views.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass |