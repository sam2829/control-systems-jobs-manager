from django.contrib.auth.models import User
from .models import Note
from jobs.models import Job
from rest_framework import status
from rest_framework.test import APITestCase


class NoteListViewTests(APITestCase):
    """
    this class is for testing the NoteList views
    """
    def setUp(self):
        # Create regular user
        sam = User.objects.create_user(username='sam', password='pass123')

        # Create job
        self.job = Job.objects.create(
            csa_number='CSA10000',
            syspal_number='K1000',
            order_number='123',
            quantity=1,
            description='test description',
            quote='test quote',
        )

    # test list of notes are displayed
    def test_can_list_notes(self):
        sam = User.objects.get(username='sam')
        self.client.login(username='sam', password='pass123')
        Note.objects.create(
            owner=sam,
            job=self.job,
            content='test note',
        )
        response = self.client.get(f'/api/notes/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Job.objects.count(), 1)

    # test user must be logged in to view notes
    def test_logged_out_user_cannot_view_notes(self):
        sam = User.objects.get(username='sam')
        Note.objects.create(
            owner=sam,
            job=self.job,
            content='test note',
        )
        response = self.client.get(f'/api/notes/')
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    # test logged in user can create note
    def test_logged_in_user_can_create_note(self):
        self.client.login(username='sam', password='pass123')
        response = self.client.post(
            '/api/notes/',
            {
                'job': self.job.id,
                'content': 'Test note 23',
            }
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        note = Note.objects.count()
        self.assertEqual(note, 1)

    # test logged out user cannot create a note
    def test_logged_out_user_cannot_create_note(self):
        response = self.client.post(
            '/api/notes/',
            {
                'job': self.job.id,
                'content': 'Test note 99',
            }
        )
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)


class NoteDetailViewTests(APITestCase):
    """
    this class is for testing Note Detail views
    """
    def setUp(self):
        # Create a superuser
        admin = User.objects.create_superuser(
            username='admin', password='adminpass'
        )
        # Create regular users
        sam = User.objects.create_user(username='sam', password='pass123')
        emma = User.objects.create_user(username='emma', password='pass456')

        # Create jobs
        job_1 = Job.objects.create(
            csa_number='CSA10000',
            syspal_number='K1000',
            order_number='123',
            quantity=1,
            description='test description',
            quote='test quote',
        )
        job_2 = Job.objects.create(
            csa_number='CSA10011',
            syspal_number='K1011',
            order_number='111',
            quantity=2,
            description='test description 2',
            quote='test quote 1',
        )

        # Create notes
        note_1 = Note.objects.create(
            owner=sam,
            job=job_1,
            content='Note 1 content',
        )
        note_2 = Note.objects.create(
            owner=emma,
            job=job_2,
            content='Note 2 content',
        )

    # test user can retrieve note by id
    def test_can_retrieve_note_detail(self):
        self.client.login(username='sam', password='pass123')
        response = self.client.get(f'/api/notes/1')
        self.assertEqual(response.data['content'], 'Note 1 content')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    # test logged out user cannot retrieve note by id
    def test_looged_out_user_cannote_retrieve_note_detail(self):
        response = self.client.get(f'/api/notes/1')
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    # test user can update a note
    def test_logged_in_user_can_update_note(self):
        self.client.login(username='sam', password='pass123')
        response = self.client.put(
            '/api/notes/1',
            {
                'content': 'Note updated',
            }
        )
        self.assertEqual(response.data['content'], 'Note updated')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    # test user cannot update someone elses note
    def test_logged_in_user_cannot_update_anothers_note(self):
        self.client.login(username='sam', password='pass123')
        response = self.client.put(
            '/api/notes/2',
            {
                'content': 'Note updated',
            }
        )
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    # test logged out user cannot update note
    def test_logged_out_user_cannot_update_note(self):
        response = self.client.put(
            '/api/notes/2',
            {
                'content': 'Note updated',
            }
        )
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    # test user can delete note
    def test_logged_in_user_can_delete_note(self):
        self.client.login(username='sam', password='pass123')
        response = self.client.delete(f'/api/notes/1')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

    # test user cannot delete someone elses note
    def test_logged_in_user_cannot_delete_anothers_note(self):
        self.client.login(username='sam', password='pass123')
        response = self.client.delete(f'/api/notes/2')
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    # test superuser can update another users note
    def test_superuser_can_update_anothers_note(self):
        self.client.login(username='admin', password='adminpass')
        response = self.client.put(
            '/api/notes/1',
            {
                'content': 'Note updated',
            }
        )
        self.assertEqual(response.data['content'], 'Note updated')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    # test superuser can delete anothers users note
    def test_superuser_can_delete_anothers_note(self):
        self.client.login(username='admin', password='adminpass')
        response = self.client.delete(f'/api/notes/2')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
