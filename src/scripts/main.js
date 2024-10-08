document.addEventListener('DOMContentLoaded', function(){
    let valorDado = null;
    
    document.querySelectorAll('.dice-btn').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.dice-btn').forEach(btn => {
                btn.classList.remove('selected');
            });
            
            this.classList.add('selected');
            
            valorDado = this.id;
            document.querySelector('.confirma').style.display = 'block';
        });
    });
    document.querySelector('#rolar').addEventListener('click', function() {
        document.querySelector('.resultado').style.display = 'block';
        document.querySelector('#resultado-valor').style.visibility = 'hidden'
        valorDado = parseInt(valorDado)
    
        let numeroAleatorio = Math.random() * valorDado
        document.getElementById('resultado-valor').innerText = Math.floor(numeroAleatorio + 1)
        setTimeout(function()
        {document.querySelector('#resultado-valor').style.visibility = 'visible';}, 200)
    })
})