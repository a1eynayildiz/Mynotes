from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls'))
]
'''
Tarayıcıdan gelen her URL isteği önce bu dosyaya gelir.
Bu dosya, URL'leri ilgili app’lere yönlendirir.
'admin/': Django’nun yerleşik admin paneline gider.
'': Ana dizin (http://127.0.0.1:8000/) altında api uygulamasındaki URL'leri devreye alır


'''