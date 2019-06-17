var userArray=[];
$('form').submit(function(event){
    var results = $(this).serializeArray();
    event.preventDefault();
    var resultsObject = checkValues(results);
    checkMatch(resultsObject);
   $.post("/api/friends", resultsObject);
    return false;
});

function checkValues(resultsArray){
    var resultsObject = {};
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
    return resultsObject;
}

function checkMatch(resultsObject){
    $.get("/api/getMatch", resultsObject, function(data){
        console.log(data);
    });
}




