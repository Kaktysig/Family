from django.views import generic


class WishPage(generic.TemplateView):
    template_name = 'wishes/wishes.html'
