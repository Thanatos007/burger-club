/* global $ */

$(document).ready(function() {
    // Get the modal
    var modal = document.getElementById('myModal');
    
    // Get the button that opens the modal
    var btn = document.getElementById("sign-up");
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        var name = document.getElementById("name-sign").val();
        var email = document.getElementById("email-sign").val();
        document.getElementById("sign-up-modal").innerHTML = "Hi " + name + ", thank you for signing up! We will send an email to " + email + " shortly";
        console.log("hi");
        modal.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});


$(".social-media-pic").hover(function() {
    
    $('i[class^="social-"]', this).addClass('icon-2x');
}, function() {
    $('i[class^="social-"]', this).removeClass('icon-2x');
});
