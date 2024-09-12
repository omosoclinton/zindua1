from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Teacher
from .serializers import TeacherSerializer

# Create your views here.
class TeacherView(APIView):
    def get(self, request, *args, **kwargs):
        teachers = Teacher.objects.all()
        serializer = TeacherSerializer(teachers, many=True)
        return Response(serializer.data, status=200)

    def post(self, request, *args, **kwargs):
        serializer = TeacherSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"MSG":"OK"}, status=201)
        return Response(serializer.errors, status=400)
    
    def put(self, request,pk, *args, **kwargs):
        teacher = Teacher.objects.filter(pk=pk).first()
        if teacher:
            serializer = TeacherSerializer(teacher, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=201)
            return  Response(serializer.errors, status=404)
        return  Response({"Msg":"Teacher does not exist"}, status=404)
    
    def delete(self, request,pk, *args, **kwargs):
        teacher = Teacher.objects.filter(pk=pk).first()
        if teacher:
            teacher.delete()
            return Response({"msg":"success"}, status=200)
        return Response({"msg":"teacher not found"}, status=404)  
