from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Structure
from .serializers import StructureSerializer
from .enc import encrypt_message, decrypt_message
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer

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

@api_view(('GET',))
def retrieve_password(request, passphrase, platform):
    try:
        qs = Structure.objects.filter(passphrase=passphrase).filter(title=platform)
        for q in qs:
            encrypted_password = q.passwd
        encrypted_password = eval(encrypted_password) 
        decrypted_password = decrypt_message(encrypted_password)
        res = {"decrypted_password" : decrypted_password }
        return Response(res)
    except:
        res = {"response" : "invalid passphrase or platform name" }
        return Response(res)
