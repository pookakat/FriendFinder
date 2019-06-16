var resultsObject = {};

$('form').submit(function(event){
    var results = $(this).serializeArray();
    event.preventDefault();
   resultsObject = checkValues(results);
   console.log(resultsObject);
});

function checkValues(resultsArray){
    var scores = [];
    for(var arrayCount = 0; arrayCount<resultsArray.length; arrayCount++){
        if (resultsArray[arrayCount].value===""){
            alert('Please make sure that all questions in the survey are complete');
            return;
        }
        else{
            if(arrayCount<2){
                resultsObject[resultsArray[arrayCount].name]=resultsArray[arrayCount].value;
            }
            else{
                scores.push(resultsArray[arrayCount].value);
            }
        }
    }
    resultsObject["scores"]= scores;
    $.ajax("/api/friends", {body: resultsObject});
    return resultsObject;
}


