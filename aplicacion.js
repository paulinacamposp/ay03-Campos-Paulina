$(document).ready(function(){

    $("#boton1").click(function(){
        var idboton1 = $(this).attr("id");
        $("#parrafo2").hide();
    });

    $("#boton2").click(function(){
        $("#parrafo3").text("Buenas vibras");
    });

    $("#div3").mouseenter(function(){
        $(this).css("background-color","red");
    });
});

