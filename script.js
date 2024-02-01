src="jquery-3.7.1.js"
$(document).ready(function() 
{
  $('#image1').hover(function ()
{
$('#image1').attr('src', 'hhmc.PNG') ;
},
function()//on out
{
  $('#image1').attr('src', 'Group.JPG');


})

});

$(document).ready(function() 
{
$('#image2').hover(function ()
{
$('#image2').attr('src', 'HHMS.PNG') ;
},
function()//on out
{
  $('#image2').attr('src', 'hhm.PNG');

})

$(document).ready(function() 
{
$('#image3').hover(function ()
{
$('#image3').attr('src', 'fgf.PNG') ;
},
function()//on out
{
  $('#image3').attr('src', 'fund.PNG');

  

})
$(document).ready(function() 
{
$('#image4').hover(function ()
{
$('#image4').attr('src', 'cr1.png') ;
},
function()//on out
{
  $('#image4').attr('src', 'clubrush1.PNG');


  $(document).ready(function() 
{
$('#image5').hover(function ()
{
$('#image5').attr('src', 'cr2.png') ;
},
function()//on out
{
  $('#image5').attr('src', 'clubrush2.PNG');

})


$(document).ready(function() 
{
$('#image6').hover(function ()
{
$('#image6').attr('src', '2022.png') ;
},
function()//on out
{
  $('#image6').attr('src', '2022sale.PNG');

})







$(document).ready(function() 
{
$('#image7').hover(function ()
{
$('#image7').attr('src', '2023.png') ;
},
function()//on out
{
  $('#image7').attr('src', 'seniorawards.PNG');

})

})
})
})
})
})
})
});


$.getJSON('settings.json', function(data) {
  
   $('.adv').html(data.president); 

  
  $('#vicepresident').html(data.vicepresident); 

   

  $('#secretary').html(data.secretary); 

   

  $('#treasurer').html(data.treasurer); 

   

  $('#eventscoordinator').html(data.eventscoordinator); 

     
});






