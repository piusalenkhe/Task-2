window.addEventListener('load', ()=>{
   const form = document.querySelector('form');
   form.addEventListener('submit', submitForm);
})
       function submitForm(event){
           var name = document.querySelector('#name');
   var message = document.querySelector('#message');
   var error = document.querySelector('#error');
           error.innerHTML = ''
           event.preventDefault();
           if(name.value.length < 4){
               error.innerHTML += '<div class="error">Please your name should be four characters or more</div>'
           }
           if(message.value.length < 20){
               error.innerHTML += '<div class="error">Please your message should be twenty characters or more</div>'
           }
       }