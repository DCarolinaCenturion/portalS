$(document).ready(function () {
    $("#sidebar").toggleClass("collapsed");
    $("#content").toggleClass("col-md-9 col-md-12");
   
});

$("#btn-slider").click(function () {

    $("#sidebar").toggleClass("collapsed");
    $("#content").toggleClass("col-md-9");
    return false;
})