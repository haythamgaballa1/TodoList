// jquery
$(document).ready(function(){ //بعد تحميل العناصر
    $('.form').change(function(){
        var task = $(this).val();

        $('#tasks').append('<li>' + task + '<i class="fa-solid fa-check"></i><i class="fa-solid fa-trash"></i> </li>');
        $(task).val("")
    })
    $('ul').on('click','.fa-trash',function(){
        $(this).parent('li').fadeOut(200)
    })
    $('ul').on('click','.fa-check',function(){
        $(this).parent('li').css({
            'background-color' : 'greenyellow' ,
            'border' : '2px green solid'
        })
    })
})
