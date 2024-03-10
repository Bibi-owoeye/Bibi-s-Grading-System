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
        document.getElementById('result').innerHTML = 'E remain small, You for fail - E'
    }
    else if (score >= 44 && score < 50) {
        document.getElementById('result').innerHTML = 'You have passed - D'
    }
    else if (score >= 50 && score < 60) {
        document.getElementById('result').innerHTML = 'You have tried - C'
    }
    else if (score >= 60 && score < 70) {
        document.getElementById('result').innerHTML = 'You sef no small - B'
    }
    else if (score >= 70 && score <= 100) {
        document.getElementById('result').innerHTML = 'Do you want benz or amala and abula - A'
    }
    else if (score > 100) {
        document.getElementById('result').innerHTML = 'Invalid'
    }
    else if (score < 0) {
        document.getElementById('result').innerHTML = 'Invalid'
    }

}  