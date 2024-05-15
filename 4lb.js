document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
   
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
   
    // Здесь будет код для отправки данных на сервер
   
    alert('Сообщение отправлено!');
    this.reset();
});


$('#Date').bind('blur', function(){
    var d = new Date();
    var InputVal = $(this).val().split('-')[0];
    var ThisYear = d.getFullYear();
    if(ThisYear-InputVal<18) {
      $('.res').text('Вам дожно быть больше 18 чтобы получить скидочную карту');
    } 
});