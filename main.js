$(document).ready(function() {  
    
    var id_lista = 0;

    $('form').on('submit', function(e){
        e.preventDefault();        
        
       $('<li id="' + id_lista + '">'+ $('input').val() +'</li>').appendTo('ol');
       $('input').val('');
       id_lista += 1;
    })

    $("#lista-tarefas").on("click", "li", function() {

        if (this.style.color == 'red') {
            $(this).css("text-decoration","none");
            $(this).css("color","black"); 
        } 
        else {
            $(this).css("text-decoration","line-through");  
            $(this).css("color","red");   
        }  
    })      

})