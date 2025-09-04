from django.urls import path
from . import views

urlpatterns = [
    path('',views.getRoutes, name="routes"),
    path('notes/',views.getNotes, name="notes"),
    path('notes/<str:pk>/update/',views.updateNote, name="update-note"),
    path('notes/<str:pk>/delete/',views.deleteNote, name="delete-note"),
    path('notes/<str:pk>/',views.getNote, name="note"),

]

'''
Bu dosya sadece api adlı uygulamaya ait URL’leri tanımlar.

Yani api uygulamasında hangi view’ler çalışacak burada belirlenir.

Burada da '' kullanıldığı için, mynotes/urls.py dosyasında '' ile eşleştiğinde, bu da yine boş olduğu için doğrudan getRoutes view’ine gider.
'': Bu app’in ana URL’sine (http://127.0.0.1:8000/) gidildiğinde çalışacak view’i belirtir.
views.getRoutes: Bu URL’ye gelen isteği getRoutes fonksiyonuna yönlendirir.
name="routes": URL’yi adlandırır, gerektiğinde reverse() gibi fonksiyonlarda kullanılır.
'''