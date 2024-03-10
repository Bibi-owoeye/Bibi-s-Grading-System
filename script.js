// var score = 39
// if (score >= 0 && score < 40){
//     console.log('fail');
// }
function check() {
    var score = document.getElementById("score").value
    if (score == "") {
        document.getElementById('result').innerHTML = 'Please input a number'
    }else if( score >= 0 && score < 40){
        document.getElementById('result').innerHTML = 'Fail'
    }
    else if (score >= 40 && score < 44) {
        document.getElementById('result').innerHTML = 'Fair - E'
    }
    else if (score >= 44 && score < 50) {
        document.getElementById('result').innerHTML = 'Passed - D'
    }
    else if (score >= 50 && score < 60) {
        document.getElementById('result').innerHTML = 'Good - C'
    }
    else if (score >= 60 && score < 70) {
        document.getElementById('result').innerHTML = 'Very Good - B'
    }
    else if (score >= 70 && score <= 100) {
        document.getElementById('result').innerHTML = 'Excellent - A'
    }
    else if (score > 100) {
        document.getElementById('result').innerHTML = 'Invalid'
    }
    else if (score < 0) {
        document.getElementById('result').innerHTML = 'Invalid'
    }

}  