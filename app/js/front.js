let options = [];

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });

  $(".submit-form").on("click", function(e){
    e.preventDefault();

    // Grab form elements
    var filledSurvey = {
        firstname: $('#first_name').val().trim(),
        photo: $('#photo').val().trim(),
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

    console.log(filledSurvey);

    $('.modal').modal();


    var currentURL = window.location.origin;

    $.post(currentURL + "/survey", filledSurvey,
    function(data){
       console.log(data)
       //NEED TO ADD A MODAL AND THEN TAKE SELECTED JSON OBJECT AND ADD THE NAME AND URL TO IT WHEN WE HAVE A MATCH
       //THEN ADD MATCH LOGIC
       $('.modal').modal();
       $('.modal').modal('open'); 

       let name = data.name;
       let photo = data.photo;
       $(".name").append(`<h5>${name}</h5>`)
       $(".modal-content").append(`<img class="photo" src= "${photo}" />`)

        $('#first_name').val("")
        $('#photo').val("")
      
    });

return false;

});



