let arr1  = [
    'Whats the biggest animal in the world?',
    'Which country is brie cheese originally from?',
    'What is the capital of Iceland?',
    'What does IPA stand for?',
    'What is the largest country in the world?'
];
let arr2  = [
    'The blue whale',
    'France',
    'Reykjavik',
    'Indian Pale Ale',
    'Russia'
];

var right_count   = 0;
var wrong_count   = 0;
var right_answers = []
var wrong_answers = []


for (var position = 0; position < 5; position++) {
    var answer = prompt(arr1[position]);


    if (answer != null) {

        if (answer.toLowerCase() == arr2[position].toLowerCase()) {
            right_count += 1
            right_answers.push(arr1[position])
        }
        else {
            wrong_count += 1
            wrong_answers.push(arr1[position])
        }

    }

}

 
function buildList(arr) {
    var listHTML = "<ol>";
    for (var i = 0; i < arr.length; i++) {
        listHTML += '<br>' + "<li>" + arr[i] + "</li>" + '<br>';
    }
    listHTML += "</ol>";
    return listHTML;
}


document.getElementById('1h').innerHTML = 'Javascript Quiz'
document.getElementById("right_num").innerHTML =
    "You got " + right_count + " question(s) right.";

document.getElementById('p1').innerHTML= 'You got these questions correct: '
document.getElementById('p2').innerHTML = 'You got these questions wrong: '
document.getElementById('list1').innerHTML = buildList(right_answers);
document.getElementById('list2').innerHTML = buildList(wrong_answers);
