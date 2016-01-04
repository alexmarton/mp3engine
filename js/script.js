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

              $("#loadingDIV").show();
        },
        success:function(tresult){



            var parsedData = JSON.parse(tresult);
            var newresult = parsedData.email;
            $("#result_mp3").html(newresult);
            $("#result_mp3_nume").html(tresult);




        },

        complete:function (xhr){
            $("#search_result").css("display","block");
            $("#loadingDIV").hide();
        },

        error:function(a,b,c){
           // $("#loadingDIV").hide();
            $("#result_mp3").html("Please check your input text"+b);

        }
    })




});




})
