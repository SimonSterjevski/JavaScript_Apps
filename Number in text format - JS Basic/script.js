
let input = document.querySelector("#number");
let enter = document.querySelector("#btn");
let numberText = document.querySelector("#numbertext");

enter.addEventListener("click", outputNumber); 


function outputNumber () {

    first = input.value.substring(input.value.length, input.value.length-3);
    first1 = first.substring(first.length, first.length-1);
    first2 = first.substring(first.length-1, first.length-2);
    first3 = first.substring(first.length-2, first.length-3);
    second = input.value.substring(input.value.length-3, input.value.length-6);
    second1 = second.substring(second.length, second.length-1);
    second2 = second.substring(second.length-1, second.length-2);
    second3 = second.substring(second.length-2, second.length-3);
    third = input.value.substring(input.value.length-6, input.value.length-9);
    third1 = third.substring(third.length, third.length-1);
    third2 = third.substring(third.length-1, third.length-2);
    third3 = third.substring(third.length-2, third.length-3);
    fourth = input.value.substring(input.value.length-9, input.value.length-12);
    fourth1 = fourth.substring(fourth.length, fourth.length-1);
    fourth2 = fourth.substring(fourth.length-1, fourth.length-2);
    fourth3 = fourth.substring(fourth.length-2, fourth.length-3);
    firstRes = combineNumber(first3, first2, first1);
    secondRes = combineNumber(second3, second2, second1);
    thirdRes = combineNumber(third3, third2, third1);
    fourthRes = combineNumber(fourth3, fourth2, fourth1);

    if (parseInt(input.value) > 1000000000000) {
        numberText.innerText = `Number too big! Please enter number smaller than 1000000000000`;
    } else if (parseInt(input.value) === 1000000000000) {
        numberText.innerText = `one trillion`;
    } else if (!parseInt(input.value)) {
        numberText.innerText = `zero`;
    } else if (!parseInt(fourth) && !parseInt(third) && !parseInt(second)) {
        numberText.innerText = `${firstRes}`;
    } else if (parseInt(fourth) && !parseInt(third) && !parseInt(second)) {
        numberText.innerText = `${fourthRes} billion ${firstRes}`; 
    } else if (parseInt(fourth) && parseInt(third) && !parseInt(second)) {
        numberText.innerText = `${fourthRes} billion ${thirdRes} million ${firstRes}`; 
    } else if (parseInt(fourth) && !parseInt(third) && parseInt(second)) {
        numberText.innerText = `${fourthRes} billion ${secondRes} thousand ${firstRes}`;
    } else if (!parseInt(fourth) && parseInt(third) && parseInt(second) === 0) {
        numberText.innerText = `${thirdRes} million ${firstRes}`;
    } else if (!parseInt(fourth) && !parseInt(third) && parseInt(second)) {
        numberText.innerText = `${secondRes} thousand ${firstRes}`;
    } else if (!parseInt(fourth) && parseInt(third) && parseInt(second)) {
        numberText.innerText = `${thirdRes} million ${secondRes} thousand ${firstRes}`;
    } else {
        numberText.innerText = `${fourthRes} billion ${thirdRes} milion ${secondRes} thousand ${firstRes}`;
    }
}


function combineNumber(value3, value2, value1) {
   
        if (value3 === "9") {
            value3 = "nine hundred";
        } else if (value3 === "8") {
            value3 = "eight hundred";
        } else if(value3 === "7") {
            value3 = "seven hundred";
        } else if (value3 === "6") {
            value3 = "six hundred";
        } else if (value3 === "5") {
            value3 = "five hundred";
        } else if (value3 === "4") {
            value3 = "four hundred";
        } else if (value3 === "3") {
            value3 = "three hundred";
        } else if (value3 === "2") {
            value3 = "two hundred";
        } else if (value3 === "1") {
            value3 = "one hundred";
        } else if (value3 === "0") {
            value3 = "";
        }

        if (value2 === "9") {
            value2 = "ninety";
        } else if (value2 === "8") {
            value2 = "eighty";
        } else if(value2 === "7") {
            value2 = "seventy";
        } else if (value2 === "6") {
            value2 = "sixty";
        } else if (value2 === "5") {
            value2 = "fifty";
        } else if (value2 === "4") {
            value2 = "fourty";
        } else if (value2 === "3") {
            value2 = "thirty";
        } else if (value2 === "2") {
            value2 = "twenty";
        } else if (value2 === "0") {
            value2 = "";
        } 

        if (value1 === "9") {
            value1 = "nine";
        } else if (value1 === "8") {
            value1 = "eight";
        } else if(value1 === "7") {
            value1 = "seven";
        } else if (value1 === "6") {
            value1 = "six";
        } else if (value1 === "5") {
            value1 = "five";
        } else if (value1 === "4") {
            value1 = "four";
        } else if (value1 === "3") {
            value1 = "three";
        } else if (value1 === "2") {
            value1 = "two";
        } else if (value1 === "1") {
            value1 = "one";
        } else if (value1 === "0") {
            value1 = "";
        } 

        if (value2 === "1") {
            if (value1 === "nine") {
                value2 = "nineteen";
                value1 = "";
            } else if (value1 === "eight") {
                value2 = "eighteen";
                value1 = "";
            } else if(value1 === "seven") {
                value2 = "seventeen";
                value1 = "";
            } else if (value1 === "six") {
                value2 = "sixteen";
                value1 = "";
            } else if (value1 === "five") {
                value2 = "fiveteen";
                value1 = "";
            } else if (value1 === "four") {
                value2 = "fourteen";
                value1 = "";
            } else if (value1 === "three") {
                value2 = "thirteen";
                value1 = "";
            } else if (value1 === "two") {
                value2 = "twelfe";
                value1 = "";
            } else if (value1 === "one") {
                value2 = "eleven";
                value1 = "";
            } else if (value1 === "") {
                value2 = "ten";
                value1 = "";
            }
    } 

    if (value1 !== "" && value2 !== "") {
    return `${value3} ${value2}-${value1}`;
    } else {
    return `${value3} ${value2} ${value1}`;
    }
}
    




       

