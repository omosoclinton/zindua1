from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from .models import Student, Course
from .serializers import StudentSerializer, CourseSerializer, StudentCreateSerializer

# Create your views here.
class StudentView(APIView):
    def get(self, request, *args, **kwargs):
        students = Student.objects.all()
        serializer = StudentSerializer(students, many=True)
        print(serializer)
        return Response(serializer.data, status=200)
    
    def post(self, request, *args, **kwargs):
        course = Course.objects.filter(name=request.data['course']).first()
        if not course:
            return Response({"Msg":"Course does not exist"}, status=404)
        request.data['course'] = course.id
        serializer = StudentCreateSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return  Response({"Msg":"Ok"}, status=201)
        

        return  Response(serializer.errors, status=400)
    
    def put(self, request,pk, *args, **kwargs):
        student = Student.objects.filter(pk=pk).first()
        if student:
            serializer = StudentSerializer(student, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=201)
            return  Response(serializer.errors, status=404)
        return  Response({"Msg":"Student does not exist"}, status=404)
    
    def delete(self, request,pk, *args, **kwargs):
        student = Student.objects.filter(pk=pk).first()
        if student:
            student.delete()
            return Response({"msg":"success"}, status=200)
        return Response({"msg":"Student not found"}, status=404)  


class CourseView(APIView):
    def get(self, request, *args, **kwargs):
        courses = Course.objects.all()
        serializer = CourseSerializer(courses, many=True)
        return Response(serializer.data, status=200)
    
    def post(self, request, *args, **kwargs):
        serializer = CourseSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return  Response({"Msg":"Ok"}, status=201)

        return  Response(serializer.errors, status=400)
    


# @api_view( ['GET', 'PUT', 'POST'])
# def functionTest(request):
#     if request.method == "GET":
#         return Response({"Name":"Dan"}, status=200)
#     if request.method == "POST":
#         return Response({"Name":"Dan"}, status=200)