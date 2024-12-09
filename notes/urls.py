from django.urls import path
from notes import views

urlpatterns = [
    path('notes/', views.NoteList.as_view()),
    # path('jobs/<int:pk>', views.JobDetail.as_view()),
]
