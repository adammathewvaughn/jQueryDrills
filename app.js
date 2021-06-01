
$(function(){
    $("#btnSubmit").attr("disabled", true);
    $('body').append('<div><h2></h2></div>');
    $('body').append('<ul>');
    $('form').keyup(function(){
        if ($("input[type='text']").val() == "") {
            $("#btnSubmit").attr("disabled", true);
        } else {
            $("#btnSubmit").attr("disabled", false);
        }
    });
    
         $("form").submit(function (e) {
             e.preventDefault();
             alert($('input:text').val());
             // $('h2').append($('input:text').val());
            // ('h2').hover(
                //     function(){
                    //         ('h2').css({
                        //             'backgroundColor':'green',
            //             'borderRadius':'5em'
            //         });
            //     },
            //     function(){
            //         ('h2').css({
                //             '':''
            //         });
            //             }
            
            // );
            $('ul').append('<li>');
            $('li').append($('input:text').val());

            $('li').click(function(){
                //let randomColor= '#'+Math.floor(Math.random()*16777215).toString(16);
                let colorOne= Math.floor(Math.random()* 255);
                let colorTwo= Math.floor(Math.random()* 255);
                let colorThree= Math.floor(Math.random()* 255);
               
                $(this).css('color', `rgb(${colorOne}, ${colorTwo}, ${colorThree})`);
            })
            $('li').dblclick(function(){
                $(this).remove();
            })
        
        });
        
  
        
    
    
    





});//.ready