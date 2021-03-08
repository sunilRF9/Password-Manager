from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Structure
from .serializers import StructureSerializer
from .enc import encrypt_message, decrypt_message

class StructureView(APIView):
    def get(self, request, *args, **kwargs):
        qs = Structure.objects.all()
        ser = StructureSerializer(qs, many=True)
        return Response(ser.data)

    def post(self, request, *args, **kwargs):
        passdata = request.data
        encrypted_passwd = encrypt_message(passdata["passwd"])
        print("ENP",encrypted_passwd)
        new_pass = Structure.objects.create(passwd=encrypted_passwd, passphrase=passdata["passphrase"], username=passdata["username"],title=passdata["title"])
        new_pass.save()
        ser = StructureSerializer(new_pass)
        return Response(ser.data)


def detailView(request, passphrase):
    qs = Structure.objects.filter(passphrase=passphrase)
    ser = StructureSerializer(qs, many=True)
    return Response(ser.data)

