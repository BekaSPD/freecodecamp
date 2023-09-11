// Selecting from Many Options with Switch Statements
// If you need to match one value against many options, you can use a switch statement. A switch statement compares the value to the case statements which define various possible values. Any valid JavaScript statements can be executed inside a case block and will run from the first matched case value until a break is encountered.
//
//     Here is an example of a switch statement:
//
//     switch (fruit) {
//         case "apple":
//             console.log("The fruit is an apple");
//             break;
//         case "orange":
//             console.log("The fruit is an orange");
//             break;
//     }
//     case values are tested with strict equality (===). The break tells JavaScript to stop executing statements. If the break is omitted, the next statement will be executed.
//
//         Write a switch statement which tests val and sets answer for the following conditions:
//         1 - alpha
//         2 - beta
//         3 - gamma
//         4 - delta
//
//         Tests
//         Waiting:caseInSwitch(1) should have a value of the string alpha
//         Waiting:caseInSwitch(2) should have a value of the string beta
//         Waiting:caseInSwitch(3) should have a value of the string gamma
//         Waiting:caseInSwitch(4) should have a value of the string delta
//         Waiting:You should not use any if or else statements
//         Waiting:You should have at least 3 break statements

//Solution

function caseInSwitch(val) {
    var result = "";

    switch(val) {
        case 1:
            result = "alpha";
            break;
        case 2:
            result = "beta";
            break;
        case 3:
            result = "gamma";
            break;
        case 4:
            result = "delta";
            break;
    }

    return result;
}

caseInSwitch(1);