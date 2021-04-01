# AutoForce Challenge

Desafio do processo seletivo para vaga de Suporte Front-end Júnior da empresa AutoForce.

# Parte 1 - Manipulação da DOM

1. Adicione um ícone para Youtube no header apontando para https://www.youtube.com/channel/UCLI4tg1oh_oLiJJteExJdUQ

> **Jquery:** `$('.header__networks-list').append('<a href="https://www.youtube.com/channel/UCLI4tg1oh_oLiJJteExJdUQ" target="_blank"><i class="icon icon-youtube-header icon--small icon--hover-youtube"></i></a>');`

> **VanillaJS:** `var element = document.createElement("a");
element.innerHTML = `<a href="https://www.youtube.com/channel/UCLI4tg1oh_oLiJJteExJdUQ" target="_blank"><i class="icon icon-youtube-header icon--small icon--hover-youtube"></i></a>`
document.querySelector(".header__networks-list").appendChild(element);`

2. Modificar o comportamento do menu WhatsApp

> **Jquery:** `<$('.header-conversion-form-whatsapp-modal').remove();
$('.header-mobile__whatsapp-link').remove();
$('.header__card-whatsapp-item:first-child').prepend('<a href="https://api.whatsapp.com/send?phone=551199999999" class="header-mobile__whatsapp-link" data-name="Seminovos" data-number="+55 (11) 9999-9999" data-product="Menu de Whatsapp" data-channel="Site" target="blank_" <strong>Seminovos: </strong><span class="header-mobile__whatsapp-number text-mask-phone">+55 (11) 9999-9999</span></a>');
$('.header__card-whatsapp-item:nth-child(2)').prepend('<a href="https://api.whatsapp.com/send?phone=5511111111111" class="header-mobile__whatsapp-link" data-name="Serviços" data-number="+55 (11) 11111-1111" data-product="Menu de Whatsapp" data-channel="Site" target="blank_" <strong>Serviços: </strong><span class="header-mobile__whatsapp-number text-mask-phone">+55 (11) 11111-1111</span></a>');
$('.header__card-whatsapp-item:nth-child(3)').prepend('<a href="https://api.whatsapp.com/send?phone=5511973860742&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20este%20ve%C3%ADculo." class="header-mobile__whatsapp-link" data-name="Central de Vendas" data-number="+55 (11) 97386-0742" data-product="Menu de Whatsapp" data-channel="Site" target="blank_" <strong>Central de Vendas: </strong><span class="header-mobile__whatsapp-number text-mask-phone">+55 (11) 97386-0742</span></a>');>`

> **VanillaJS:** `var item = document.getElementById("wpp-content-0").firstElementChild;
var newItemElements = document.createElement("ul");
newItemElements.innerHTML = `<li class="header__card-whatsapp-item"><a href="https://api.whatsapp.com/send?phone=551199999999" class="header-mobile__whatsapp-link" data-name="Seminovos" data-number="+55 (11) 9999-9999" data-product="Menu de Whatsapp" data-channel="Site" target="blank_" <strong>Seminovos: </strong><span class="header-mobile__whatsapp-number text-mask-phone">+55 (11) 9999-9999</span></a><i class="icon icon-whatsapp"></i></li><li class="header__card-whatsapp-item"><a href="https://api.whatsapp.com/send?phone=5511111111111" class="header-mobile__whatsapp-link" data-name="Serviços" data-number="+55 (11) 11111-1111" data-product="Menu de Whatsapp" data-channel="Site" target="blank_" <strong>Serviços: </strong><span class="header-mobile__whatsapp-number text-mask-phone">+55 (11) 11111-1111</span></a><i class="icon icon-whatsapp"></i></li><li class="header__card-whatsapp-item"><a href="https://api.whatsapp.com/send?phone=5511973860742&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20este%20ve%C3%ADculo." class="header-mobile__whatsapp-link" data-name="Central de Vendas" data-number="+55 (11) 97386-0742" data-product="Menu de Whatsapp" data-channel="Site" target="blank_" <strong>Central de Vendas: </strong><span class="header-mobile__whatsapp-number text-mask-phone">+55 (11) 97386-0742</span></a><i class="icon icon-whatsapp"></i></li>`
item.innerHTML = '';
item.appendChild( newItemElements );`
