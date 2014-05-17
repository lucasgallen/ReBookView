from django.shortcuts import render, get_object_or_404

def home(request):
    return render(request, 'home.html')

def interest(request):
    return render(request, 'interests.html')

def gameoflife(request):
    return render(request, 'gameoflife.html')

def contact(request):
    return render(request, 'contact.html')
