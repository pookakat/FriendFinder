var resultsObject = {};
$('form').submit(function(event){
    var results = $(this).serializeArray();
    event.preventDefault();
   checkValues(results); 
});

function checkValues(resultsArray){
    for(var arrayCount = 0; arrayCount<resultsArray.length; arrayCount++){
        if (resultsArray[arrayCount].value===""){
            alert('Please make sure that all questions in the survey are complete');
            return;
        }
        else{
            if(arrayCount<2){
                console.log('Perts');
            }
            else{
                console.log('Answer');
            }
        }
    }
}