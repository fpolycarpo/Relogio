var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()
var data2 = data.toLocaleDateString()
var dia= data.getDate()
//var diasem = data.getDate()
//var mes = data.getMonth() 
//var ano = data.getFullYear()
//var meses = new Array[January,February,March,April,May,June,July,August,September,October,November,December];
//var semana = new Array[Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday];
//msg.innerHTML = `Hoje é ${semana(diasem)},dia ${dia} de ${meses(mes)} de ${ano} e são ${hora}`
if (hora >= 0 && hora < 12) {
    //Good morning !
    img.src = 'fotomanha.png'
    document.body.style.background = '#e2cd9f'
    msg.innerHTML = `It is ${hora}:${minuto} am on ${data2}`
 }  else if (hora >= 12 && hora < 18) {
     //Good afternoon!
     img.src = 'fototarde.png'
     document.body.style.background = '#b9846f'
     msg.innerHTML = `It is ${hora}:${minuto} pm on ${data2}`
 } else {
     //Good night!
     img.src = 'fotonoite.png'
     document.body.style.background ='#515154'
     msg.innerHTML = `It is ${hora}:${minuto} pm on ${data2}`
 }