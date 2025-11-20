## Login & Logout Features
## Password Manager - ReactJS 
## User Information
## mohan.sp@uvcyber.com


import json
from django.views import View
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

VALID_USERS = {
    "test": "test123",
    "new": "pass123"
}

@method_decorator(csrf_exempt, name='dispatch')
class AuthLoginView(View):
    def post(self, request):
        data = json.loads(request.body.decode("utf-8"))
        username = data.get("username")
        password = data.get("password")

        if username in VALID_USERS and VALID_USERS[username] == password:
            request.session["user"] = username 
            return JsonResponse({"message": f"Welcome {username}"})
        
        return JsonResponse({"message": "Invalid username or password"}, status=401)


@method_decorator(csrf_exempt, name='dispatch')
class AuthLogoutView(View):
    def get(self, request):
        request.session.flush() 
        return JsonResponse({"message": "Logged out"})
