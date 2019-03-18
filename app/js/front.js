//Materialize setup

let options = [];

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });

//Listens for click on submit and uses AJAX for post request of survey data to back end

  $(".submit-form").on("click", function(e){
    e.preventDefault();

    // Grab form elements
    var filledSurvey = {
        firstname: $('#first_name').val().trim(),
        scores: {
            q1: $('#q1').val(),
            q2: $('#q1').val(),
            q3: $('#q1').val(),
            q4: $('#q1').val(),
            q5: $('#q1').val(),
            q6: $('#q1').val(),
            q7: $('#q1').val(),
            q8: $('#q1').val(),
            q9: $('#q1').val(),
            q10: $('#q1').val()
    }
    };

    var currentURL = window.location.origin;

    $.post(currentURL + "/survey", filledSurvey,
    function(data){
        $("#name-photo").empty();
       console.log(data)
       //Triggers modal from materialize
       $('.modal').modal();
       $('.modal').modal('open'); 

       //Adds winning cast member to modal
       let name = data.name;
       let photo = data.photo;
       $("#name-photo").append(`<h5>Name: ${name}</h5><img class="responsive-img" src= "${photo}" />`)
        $('#first_name').val("")
        $('#photo').val("")
      
    });

return false;

});



