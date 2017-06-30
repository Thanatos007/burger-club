/* global $ */

$(document).ready(function() {
    
});

// Get the modal
    var modal = document.getElementById('myModal');
    
// Get the button that opens the modal
    var btn = document.getElementById("sign-up");
    
// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
//Get the form
    var form = document.getElementById("validate");
    
// When the user clicks the button, open the modal 
    btn.onclick = function(e) {
        var name = $("#name-sign").val();
        var email = $("#email-sign").val();
        var check = email.indexOf(".com");
        if(name == ""||email == ""){
            e.preventDefault();
            document.getElementById("sign-up-modal").innerHTML = "Please make sure every field is filled out before submitting";
            modal.style.display = "block";
        }
        else{
            if(check == -1){
                e.preventDefault();
                document.getElementById("sign-up-modal").innerHTML = "Please enter a valid email";
                modal.style.display = "block";
            }
            else{
                e.preventDefault();
                document.getElementById("sign-up-modal").innerHTML = "Hi " + name + " thank you for signing up! We will send an email to " + email + " shortly (Make sure popups are enabled for this page)";
                modal.style.display = "block";
                setTimeout(function(){
                    form.target = "_blank";
                    form.action = "https://formspree.io/markgriffith009@gmail.com";
                    form.method = "POST";
                    document.forms["validate"].submit();
                },4000);
            }
            console.log(name);
            console.log(email);
            console.log(check);
        }
    };
    
// When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    };
    
// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

