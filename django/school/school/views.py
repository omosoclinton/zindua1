from rest_framework.views import APIView
from django.contrib.auth.models import User
from .serializers import UserRegisterSerializer
from rest_framework.response import Response
from django.contrib.auth import authenticate
from knox.models import AuthToken
from rest_framework.decorators import permission_classes, authentication_classes
from knox.auth import TokenAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny

class UserRegisterView(APIView):
    def post(self, request):
        serializer = UserRegisterSerializer(data = request.data)
        if serializer.is_valid():
            user = serializer.save()
            user.set_password(request.data['password'])
            user.save()
            return Response({"Msg":"Ok"}, status=201)
        return Response(serializer.errors, status=400)
    
    def get(self, request):
        users = User.objects.all()
        serializer = UserRegisterSerializer(users, many=True)
        return Response(serializer.data, status=200)


class UserLoginView(APIView):
    def post(self, request):
        user = authenticate(username=request.data['username'], password=request.data['password'])
        if user:
            tokenObject = AuthToken.objects.create(user)
            data = {
                "token":tokenObject[1],
            }
            return Response(data, status=200)
        return Response({"msg":"Invalid login"}, status=400)
    
@authentication_classes([TokenAuthentication,])
@permission_classes([IsAuthenticated,])
class UserView(APIView):
    def get(self, request):
        users = User.objects.all()
        serializer = UserRegisterSerializer(users, many=True)
        return Response(serializer.data, status=200)
    


