/**
 * Created by Alex Marton on 03/01/2016.
 */

$(document).ready(function(){



$("#search_link").click(function(){

    $("#search_result").css("display","none");

    $.ajax({
        type:"POST",
        url:"ajax/test.php",
        data:"dsend="+$("#mp3text").val(),
        beforeSend: function ( xhr ) {
            alert("sendiiing...");
            //  $("#loadingDIV").show();
        },
        success:function(tresult){

            $("#result_mp3").html(tresult);
            $("#result_mp3").show(tresult);
        },

        complete:function (xhr){
            $("#search_result").css("display","block");
            alert("completee");
        },

        error:function(a,b,c){

            $("#result_mp3").html("Please check your input text"+b);

        }
    })




});




})
