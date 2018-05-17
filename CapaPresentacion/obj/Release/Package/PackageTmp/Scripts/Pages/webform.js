// FORM EXAMPLE
// ----------------------------------- 

$(document).ready(function () {

    var form = $("#exampleform");
    
    form.children("div").steps({
        headerTag: "h4",
        bodyTag: "fieldset",
        transitionEffect: "slideLeft",
        onStepChanging: function (event, currentIndex, newIndex) {
           
        },
        onFinishing: function (event, currentIndex) {
           
        },
        onFinished: function (event, currentIndex) {
            alert("Submitted!");

            // Submit form
            $(this).submit();
        }
    });

});
