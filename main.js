$('.redag').toggle(0)
$('.stul').toggle(0)
$('.rightcl').toggle(0)
$('.htm').click(function(){

    $('.redag').show(0)
    $('.stul').hide(0)
    $('.textare').val($('.pole').html())
})
$('.styl').click(function(){
    $('.stul').show(0)
    $('.redag').hide(0)
})
$('.close').click(function(){
    $('.stul').toggle(0)
})
$('.save').click(function(){
    $('.redag').toggle(0)
    let ss = $('.textare').val()
    console.log(ss)
    $('.pole').html(ss)
    $('.textare').val('')
    

})
$('.colch1').click(function(){
    $('.rightcl1').toggle(0)
    $('.rightcl2').hide(0)
})
$('.colch2').click(function(){
    $('.rightcl1').hide(0)
    $('.rightcl2').toggle(0)
})
// $('.save2').click(function(){
//     console.log($('radioi').val())
// })
$('.radioi').click(function(){
   
    $('.pole').css('fontSize', $(this).val())
})
$('#select').change(function(){
    $('.pole').css('fontFamily', $(this).val())
})
$('#col11').click(function(){
    $('.pole').css('color', 'red')
})
$('#col12').click(function(){
    $('.pole').css('color', 'green')
})
$('#col13').click(function(){
    $('.pole').css('color', 'blue')
})
$('#col14').click(function(){
    $('.pole').css('color', 'white')
})
$('#col15').click(function(){
    $('.pole').css('color', 'orange')
})
$('#col16').click(function(){
    $('.pole').css('color', 'palevioletred')
})
$('#col17').click(function(){
    $('.pole').css('color', 'black')
})
$('#col18').click(function(){
    $('.pole').css('color', 'gray')
})
$('#col19').click(function(){
    $('.pole').css('color', 'pink')
})
$('#col21').click(function(){
    $('.pole').css('backgroundColor', 'red')
})
$('#col22').click(function(){
    $('.pole').css('backgroundColor', 'green')
})
$('#col23').click(function(){
    $('.pole').css('backgroundColor', 'blue')
})
$('#col24').click(function(){
    $('.pole').css('backgroundColor', 'white')
})
$('#col25').click(function(){
    $('.pole').css('backgroundColor', 'orange')
})
$('#col26').click(function(){
    $('.pole').css('backgroundColor', 'palevioletred')
})
$('#col27').click(function(){
    $('.pole').css('backgroundColor', 'black')
})
$('#col28').click(function(){
    $('.pole').css('backgroundColor', 'gray')
})
$('#col29').click(function(){
    $('.pole').css('backgroundColor', 'pink')
})
let it =0;
let bo =0;
$('.ittic').click(function(){
    if(it==0){
       $('.ittic').css('backgroundColor', 'blue') 
       $('.pole').css('fontStyle', 'italic')
       it++;
    }else{
        $('.ittic').css('backgroundColor', 'white') 
        $('.pole').css('fontStyle', 'normal')
        it--;
    }
})
$('.bold').click(function(){
    if(bo==0){
       $('.bold').css('backgroundColor', 'blue') 
       $('.pole').css('fontWeight', '700')
       bo++;
    }else{
        $('.bold').css('backgroundColor', 'white') 
        $('.pole').css('fontWeight', '100')
        bo--;
    }
})