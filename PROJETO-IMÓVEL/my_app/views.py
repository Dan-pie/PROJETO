from django.shortcuts import render,  redirect
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth import login as login_django
from django.contrib.auth import logout as logout_django
from django.contrib.auth import authenticate
from .models import imovel as imovel_model
from django.contrib.auth.decorators import login_required
from django.db.models import Q



# Create your views here.
def home(request):
    adds = imovel_model.objects.all()
    search_query = request.GET.get('search', '')

    if search_query:
        adds = adds.filter(
            Q(city__icontains=search_query) |
            Q(street__icontains=search_query)
        )
    
    Num_imoveis = adds.count()

    context = {
        'anuncios': adds,
        'num_imoveis': Num_imoveis,
        'search_query': search_query,
    }


    if request.user.is_authenticated:
        return render(request, 'index_logado.html', context)
    else:
        return render(request, 'index.html', context)


def cad(request):
    if request.method == 'GET':
        return render(request, 'cadastro.html')
    elif request.method == 'POST':
        email = request.POST.get('email')
        username = request.POST.get('username')
        password = request.POST.get('password')
        
        user = User.objects.filter(username = username).first()

        if user:
            return HttpResponse('Username já utilizado!')
        else:
            user = User.objects.create_user(username= username, email= email, password= password)
            user.save()
            login_django(request,user)
            return redirect('home')
        

def login(request):
    if request.method == 'GET':
        return render(request, 'Login.html')
    elif request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username= username, password= password)
        if user is not None:
            login_django(request, user)
            return redirect('home')
        else:
            return HttpResponse('Usuario ou senha invalidos!')


def logout(request):
    logout_django(request)
    return redirect('home')


@login_required(login_url='/acessos/login/')
def anunciar(request):
    if request.method == 'GET':
        return render(request, 'anunciar.html')
    if request.method == 'POST':
        acao = request.POST.get('acao')
        tipo = request.POST.get('tipo')
        imovel = request.POST.get('imovel')
        cidade = request.POST.get('cidade')
        estado = request.POST.get('estado')
        rua = request.POST.get('rua')
        numero = request.POST.get('numero')
        complemento = request.POST.get('complemento')
        qntd_quartos = request.POST.get('quartos')
        qntd_bath = request.POST.get('banheiros')
        preco = request.POST.get('preco')
        area = request.POST.get('size')
        contato = request.POST.get('contato')
        img = request.FILES.get('imagem')

        estate = imovel_model(contact_user = contato,action = acao, type = tipo, estate = imovel, city = cidade, state = estado, street = rua, number = numero, complement = complemento, rooms = qntd_quartos, bath = qntd_bath, price = preco, area = area, image = img)
        estate.save()
        adds = imovel_model.objects.all()
        numero_imoveis = imovel_model.objects.all().count()
        return redirect('home')


