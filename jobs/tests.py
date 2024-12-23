from django.contrib.auth.models import User
from .models import Job
from rest_framework import status
from rest_framework.test import APITestCase
from profiles.models import Profile


class JobListViewTests(APITestCase):
    """
    this class is for testing the JobList views
    """
    # setup logged in user
    def setUp(self):
        # Create a superuser
        admin = User.objects.create_superuser(
            username='admin', password='adminpass'
        )
        # Create regular user
        sam = User.objects.create_user(username='sam', password='pass123')

        # Create job
        Job.objects.create(
            csa_number='CSA10000',
            syspal_number='K1000',
            order_number='123',
            quantity=1,
            description='test description',
            quote='test quote',
        )

    # test list of jobs are only displayed if user logged in
    def test_logged_in_user_can_view_job_list(self):
        self.client.login(username='sam', password='pass123')
        response = self.client.get(f'/api/jobs/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Job.objects.count(), 1)

    # test list of jobs are not displayed if user logged out
    def test_logged_out_user_cannot_view_job_list(self):
        response = self.client.get(f'/api/jobs/')
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    # test regular user cannot create a job
    def test_regular_user_cannot_create_job(self):
        self.client.login(username='sam', password='pass123')
        response = self.client.post(
            '/api/jobs/',
            {
                'csa_number': 'CSA10001',
                'syspal_number': 'K1001',
                'order_number': '1234',
                'quantity': 1,
                'description': 'test description',
                'quote': 'test quote',
            }
        )
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    # test superuser can create a job
    def test_superuser_can_create_job(self):
        self.client.login(username='admin', password='adminpass')
        response = self.client.post(
            '/api/jobs/',
            {
                'csa_number': 'CSA10023',
                'syspal_number': 'K1023',
                'order_number': '1234',
                'quantity': 1,
                'description': 'test description 23',
                'quote': 'test quote 23',
            }
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)


class JobDetailViewTests(APITestCase):
    """
    this class is for testing Job Detail views
    """
    def setUp(self):
        # Create a superuser
        admin = User.objects.create_superuser(
            username='admin', password='adminpass'
        )
        # Create regular users
        sam = User.objects.create_user(username='sam', password='pass123')

        # Create jobs
        Job.objects.create(
            csa_number='CSA10005',
            syspal_number='K1000',
            order_number='123',
            quantity=1,
            description='test description',
            quote='test quote',
        )
        Job.objects.create(
            csa_number='CSA10023',
            syspal_number='K1023',
            order_number='1234',
            quantity=2,
            description='test description 2',
            quote='test quote 2',
        )

    # test that logged in user can retrieve single job by id
    def test_logged_in_user_can_retrieve_job_detail(self):
        self.client.login(username='sam', password='pass123')
        response = self.client.get(f'/api/jobs/1')
        self.assertEqual(response.data['csa_number'], 'CSA10005')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    # test that logged out user cannot retrieve single job by id
    def test_logged_out_user_cannot_retrieve_job_detail(self):
        response = self.client.get(f'/api/jobs/1')
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    # test regular user cannot update certain fields
    def test_regular_user_cannot_update_all_fields(self):
        self.client.login(username='sam', password='pass123')
        response = self.client.put(
            '/api/jobs/1',
            {
                'csa_number': 'CSA20000',
                'syspal_number': 'K2000',
                'order_number': '9987',
                'quantity': 3,
                'description': 'test update',
                'quote': 'test update',
            }
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    # test superuser can update certain fields
    def test_superuser_can_update_all_fields(self):
        self.client.login(username='admin', password='adminpass')
        response = self.client.put(
            '/api/jobs/1',
            {
                'csa_number': 'CSA20000',
                'syspal_number': 'K2000',
                'order_number': '9987',
                'quantity': 3,
                'description': 'test update',
                'quote': 'test update',
            }
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    # test regular user cannot delete a job
    def test_user_cannot_delete_job(self):
        self.client.login(username='sam', password='pass123')
        response = self.client.delete(f'/api/jobs/1')
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    # test superuser can delete job
    def test_superuser_can_delete_job(self):
        self.client.login(username='admin', password='adminpass')
        response = self.client.delete(f'/api/jobs/1')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
