from django.views import generic


class DashboardPage(generic.TemplateView):
    template_name = "dashboard.html"


class LoginPage(generic.TemplateView):
    template_name = "login.html"


class RegistrationPage(generic.TemplateView):
    template_name = "register.html"
