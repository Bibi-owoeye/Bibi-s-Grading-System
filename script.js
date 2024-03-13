// var score = 39
// if (score >= 0 && score < 40){
//     console.log('fail');
// }
function check() {
    var score = document.getElementById("score").value
    if (score == "") {
        document.getElementById('result7').innerHTML = 'Please input a number'
        document.getElementById('result1').innerHTML = ''
        document.getElementById('result2').innerHTML = ''
        document.getElementById('result3').innerHTML = ''
        document.getElementById('result4').innerHTML = ''
        document.getElementById('result5').innerHTML = ''
        document.getElementById('result6').innerHTML = ''

    }else if( score >= 0 && score < 40){
        document.getElementById('result1').innerHTML = 'Fail - F'
        document.getElementById('result7').innerHTML = ''
        document.getElementById('result2').innerHTML = ''
        document.getElementById('result3').innerHTML = ''
        document.getElementById('result4').innerHTML = ''
        document.getElementById('result5').innerHTML = ''
        document.getElementById('result6').innerHTML = ''
        var songFailure = new Audio('audio/Fail Sound Effect.mp3')
        songFailure.play()
    }
    else if (score >= 40 && score < 44) {
        document.getElementById('result2').innerHTML = 'Fair - E'
        document.getElementById('result7').innerHTML = ''
        document.getElementById('result1').innerHTML = ''
        document.getElementById('result3').innerHTML = ''
        document.getElementById('result4').innerHTML = ''
        document.getElementById('result5').innerHTML = ''
        document.getElementById('result6').innerHTML = ''
    }
    else if (score >= 44 && score < 50) {
        document.getElementById('result3').innerHTML = 'Passed - D'
        document.getElementById('result7').innerHTML = ''
        document.getElementById('result1').innerHTML = ''
        document.getElementById('result2').innerHTML = ''
        document.getElementById('result4').innerHTML = ''
        document.getElementById('result5').innerHTML = ''
        document.getElementById('result6').innerHTML = ''
    }
    else if (score >= 50 && score < 60) {
        document.getElementById('result4').innerHTML = 'Good - C'
        document.getElementById('result7').innerHTML = ''
        document.getElementById('result1').innerHTML = ''
        document.getElementById('result2').innerHTML = ''
        document.getElementById('result3').innerHTML = ''
        document.getElementById('result5').innerHTML = ''
        document.getElementById('result6').innerHTML = ''
    }
    else if (score >= 60 && score < 70) {
        document.getElementById('result5').innerHTML = 'Very Good - B'
        document.getElementById('result7').innerHTML = ''
        document.getElementById('result1').innerHTML = ''
        document.getElementById('result2').innerHTML = ''
        document.getElementById('result3').innerHTML = ''
        document.getElementById('result4').innerHTML = ''
        document.getElementById('result6').innerHTML = ''
    }
    else if (score >= 70 && score <= 100) {
        document.getElementById('result6').innerHTML = 'Excellent - A'
        document.getElementById('result7').innerHTML = ''
        document.getElementById('result1').innerHTML = ''
        document.getElementById('result2').innerHTML = ''
        document.getElementById('result3').innerHTML = ''
        document.getElementById('result4').innerHTML = ''
        document.getElementById('result5').innerHTML = ''
        var songSuccess = new Audio('audio/Stand up for the champions Lyrics.mp3')
        songSuccess.play()
    }
    else if (score > 100) {
        document.getElementById('result7').innerHTML = 'Numbers must be between 0 - 100'
        document.getElementById('result1').innerHTML = ''
        document.getElementById('result2').innerHTML = ''
        document.getElementById('result3').innerHTML = ''
        document.getElementById('result4').innerHTML = ''
        document.getElementById('result5').innerHTML = ''
        document.getElementById('result6').innerHTML = ''
    }
    else if (score < 0) {
        document.getElementById('result7').innerHTML = 'Numbers must be between 0 - 100'
        document.getElementById('result1').innerHTML = ''
        document.getElementById('result2').innerHTML = ''
        document.getElementById('result3').innerHTML = ''
        document.getElementById('result4').innerHTML = ''
        document.getElementById('result5').innerHTML = ''
        document.getElementById('result6').innerHTML = ''
    }
}  