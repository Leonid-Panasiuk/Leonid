$(document).ready(function () {
    $("#toggleClass-education").click(function () {
        $(".item-of-education").toggle(500);
    });
});

$("#toogleClass-skills").click(function () {
    $("#js-block-2").toggle(500);
    $('.items-of-skills').css('display', 'flex');
    
});


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});



// $(document).ready(function () {
//     $( "#toogleClass-skills" ).click(function() {
//         $('.items-of-skills').css('display', 'flex');
//       });
// });


// $(document).ready(function () {
//     $("#toogleClass-skills").click(function () {
//         $(".items-of-skills").toggle(1000);
//     });
// });