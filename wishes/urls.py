from django.urls import path

from wishes import views

urlpatterns = [
    path('', views.WishPage.as_view(), name='wishes_view'),
]
