from rest_framework.generics import ListAPIView, RetrieveAPIView

from django_filters.rest_framework import DjangoFilterBackend

from .serializers import ListSerializer, CardSerializer
from .models import List, Card

class ListApi(ListAPIView):
    queryset = List.objects.all()
    serializer_class = ListSerializer

class CardApi(ListAPIView):
    queryset = Card.objects.all()
    serializer_class = CardSerializer

class ListDetailApi(ListAPIView):
    queryset = Card.objects.all()
    serializer_class = CardSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_fields = ('list',)


class CardDetailApi(RetrieveAPIView):
    queryset = Card.objects.all()
    serializer_class = CardSerializer