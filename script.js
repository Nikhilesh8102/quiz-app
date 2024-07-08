const questions = [
    {
        id: 1,
        desc: 'Inside which HTML element do we put the javascript?',
        options: {
            '&lt;js&gt;': false,
            '&lt;script&gt;': true,
            '&lt;javascript&gt;': false,
            '&lt;scr&gt;': false
        }
    },
    {
        id: 2,
        desc: 'Which of the following is hoisted in javascript?',
        options: {
            'let': false,
            'var': false,
            'const': false,
            'all of the above': true
        }
    },
    {
        id: 3,
        desc: 'typeof [1,2,3,4,5]?',
        options: {
            'array': false,
            'Array': false,
            'object': true,
            'none of the above': false
        }
    },
    {
        id: 4,
        desc: 'What is the correct syntax for referring to an external script called "abc.js"?',
        options: {
            '&lt;script src="abc.js"&gt;': true,
            '&lt;script href="abc.js"&gt;': false,
            '&lt;script ref="abc.js"&gt;': false,
            '&lt;script name="abc.js"&gt;': false
        }
    },
    {
        id: 5,
        desc: 'How do you write "Hello World" in an alert box?',
        options: {
            'alert("Hello World");': true,
            'msgBox("Hello World");': false,
            'msg("Hello World");': false,
            'prompt("Hello World");': false
        }
    },
    {
        id: 6,
        desc: 'Which function is used to print in JavaScript?',
        options: {
            'console.log()': true,
            'print()': false,
            'document.write()': false,
            'write()': false
        }
    },
    {
        id: 7,
        desc: 'What does CSS stand for?',
        options: {
            'Colorful Style Sheets': false,
            'Creative Style Sheets': false,
            'Cascading Style Sheets': true,
            'Computer Style Sheets': false
        }
    },
    {
        id: 8,
        desc: 'What is the correct way to write a JavaScript array?',
        options: {
            'var colors = ["red", "green", "blue"];': true,
            'var colors = "red", "green", "blue";': false,
            'var colors = (1:"red", 2:"green", 3:"blue");': false,
            'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue");': false
        }
    },
    {
        id: 9,
        desc: 'How can you add a comment in a JavaScript?',
        options: {
            '//This is a comment': true,
            '&lt;!--This is a comment--&gt;': false,
            '/**This is a comment*/': false,
            '--This is a comment': false
        }
    },
    {
        id: 10,
        desc: 'Which event occurs when the user clicks on an HTML element?',
        options: {
            'onchange': false,
            'onmouseclick': false,
            'onmouseover': false,
            'onclick': true
        }
    },
    {
        id: 11,
        desc: 'Which operator is used to assign a value to a variable?',
        options: {
            '=': true,
            ':': false,
            '*': false,
            '-': false
        }
    },
    {
        id: 12,
        desc: 'How do you declare a JavaScript variable?',
        options: {
            'var carName;': true,
            'variable carName;': false,
            'v carName;': false,
            'declare carName;': false
        }
    },
    {
        id: 13,
        desc: 'Which built-in method returns the character at a specified index?',
        options: {
            'characterAt()': false,
            'getCharAt()': false,
            'charAt()': true,
            'None of the above': false
        }
    },
    {
        id: 14,
        desc: 'Which function is used to convert a string to an integer in JavaScript?',
        options: {
            'parseInt()': true,
            'String()': false,
            'toInt()': false,
            'parseInteger()': false
        }
    },
    {
        id: 15,
        desc: 'What is the correct JavaScript syntax for opening a new window called "myWindow"?',
        options: {
            'myWindow = window.open("http://www.example.com");': true,
            'myWindow = window.new("http://www.example.com");': false,
            'myWindow = new Window("http://www.example.com");': false,
            'myWindow = open("http://www.example.com");': false
        }
    },
    {
        id: 16,
        desc: 'Which of the following is a valid type of function javascript supports?',
        options: {
            'named function': false,
            'anonymous function': false,
            'lambda function': false,
            'All of the above': true
        }
    },
    {
        id: 17,
        desc: 'Which of the following is not considered as an error in JavaScript?',
        options: {
            'Syntax error': false,
            'Missing of semicolon': false,
            'Division by zero': true,
            'Missing of Bracket': false
        }
    },
    {
        id: 18,
        desc: 'Which built-in method combines the text of two strings and returns a new string?',
        options: {
            'changeConcat()': false,
            'concat()': true,
            'append()': false,
            'attach()': false
        }
    },
    {
        id: 19,
        desc: 'What is the correct JavaScript syntax for adding a background color?',
        options: {
            'document.body.style.color = "yellow";': false,
            'document.body.style.backgroundColor = "yellow";': true,
            'body.backgroundColor = "yellow";': false,
            'body.style.backgroundColor = "yellow";': false
        }
    },
    {
        id: 20,
        desc: 'Which of the following is the correct way to check if a variable is not undefined in JavaScript?',
        options: {
            'if (myVar != undefined)': false,
            'if (myVar !== undefined)': false,
            'if (typeof myVar !== "undefined")': false,
            'All of the above': true
        }
    }
];


// const questions = [
//     {
//         id: 1,
//         desc: 'What does the "use strict" directive do in JavaScript?',
//         options: {
//             'Enables strict mode for the JavaScript code.': true,
//             'Declares that the script is using strict type checking.': false,
//             'Ensures that variables are strictly typed.': false,
//             'Indicates that strict equality comparisons should be used.': false
//         }
//     },
//     {
//         id: 2,
//         desc: 'What is closure in JavaScript?',
//         options: {
//             'A function that has access to its outer function\'s scope.': true,
//             'A function that is defined within another function.': false,
//             'A function that closes all other functions in its lexical scope.': false,
//             'A function that returns a closure object.': false
//         }
//     },
//     {
//         id: 3,
//         desc: 'What is the result of the following expression? "2" + 2 * "2"',
//         options: {
//             '"24"': true,
//             '"6"': false,
//             '"22"': false,
//             'NaN': false
//         }
//     },
//     {
//         id: 4,
//         desc: 'What does the bind() method do in JavaScript?',
//         options: {
//             'Creates a new function that, when called, has its this keyword set to the provided value.': true,
//             'Binds a function to a specific context.': false,
//             'Attaches an event handler to an element.': false,
//             'Binds arguments to a function.': false
//         }
//     },
//     {
//         id: 5,
//         desc: 'What is a promise in JavaScript?',
//         options: {
//             'An object representing the eventual completion or failure of an asynchronous operation.': true,
//             'A guarantee that a function will always return a value.': false,
//             'An assertion made by a function.': false,
//             'A function that resolves a value asynchronously.': false
//         }
//     },
//     {
//         id: 6,
//         desc: 'What is the result of the following code? (function() { var a = b = 5; })(); console.log(b);',
//         options: {
//             '5': true,
//             'undefined': false,
//             'ReferenceError': false,
//             'TypeError': false
//         }
//     },
//     {
//         id: 7,
//         desc: 'What does the Array.map() method do in JavaScript?',
//         options: {
//             'Creates a new array with the results of calling a provided function on every element in the calling array.': true,
//             'Modifies the original array by mapping each element to a new value.': false,
//             'Returns the first element in the array that satisfies a provided testing function.': false,
//             'Concatenates two or more arrays.': false
//         }
//     },
//     {
//         id: 8,
//         desc: 'What is the purpose of the "this" keyword in JavaScript?',
//         options: {
//             'Refers to the object that is executing the current function.': true,
//             'Refers to the parent object of the current object.': false,
//             'Refers to the global object.': false,
//             'Refers to the prototype of the current object.': false
//         }
//     },
//     {
//         id: 9,
//         desc: 'What does the JavaScript operator "===" do?',
//         options: {
//             'Strictly compares two values without type conversion.': true,
//             'Compares two values and converts them to the same type before comparison.': false,
//             'Assigns a value to a variable.': false,
//             'Checks if two values are equal.': false
//         }
//     },
//     {
//         id: 10,
//         desc: 'What is the difference between "undefined" and "null" in JavaScript?',
//         options: {
//             '"undefined" means a variable has been declared but has not yet been assigned a value; "null" is an assignment value that represents no value.': true,
//             '"undefined" represents an empty or non-existent value, while "null" represents a value of zero or empty value.': false,
//             '"undefined" is a type in JavaScript, while "null" is not a type but a keyword.': false,
//             '"undefined" and "null" are interchangeable and can be used interchangeably in JavaScript.': false
//         }
//     },
//     {
//         id: 11,
//         desc: 'What is the purpose of the "use strict" directive in JavaScript?',
//         options: {
//             'Enables strict mode, which catches common coding mistakes and "unsafe" actions.': true,
//             'Indicates that the code should use strict type checking.': false,
//             'Ensures that JavaScript code runs in strict accordance with the latest ECMAScript specification.': false,
//             'Prevents certain actions from being performed in JavaScript code.': false
//         }
//     },
//     {
//         id: 12,
//         desc: 'What does the JavaScript method Object.keys() do?',
//         options: {
//             'Returns an array of a given object\'s own enumerable property names.': true,
//             'Returns an array of all property names in a given object, including inherited properties.': false,
//             'Returns an array of all property values in a given object.': false,
//             'Returns an array of prototype methods in a given object.': false
//         }
//     },
//     {
//         id: 13,
//         desc: 'What is the difference between "undefined" and "null" in JavaScript?',
//         options: {
//             '"undefined" means a variable has been declared but has not yet been assigned a value; "null" is an assignment value representing no value.': true,
//             '"undefined" represents a variable that has been declared but not used in the code; "null" represents a variable that is used but not declared.': false,
//             '"undefined" is a type in JavaScript, while "null" is not a type but a keyword.': false,
//             '"undefined" and "null" are interchangeable and can be used interchangeably in JavaScript.': false
//         }
//     },
//     {
//         id: 14,
//         desc: 'What does the JavaScript operator "void" do?',
//         options: {
//             'Evaluates an expression without returning a value.': true,
//             'Returns undefined.': false,
//             'Converts an expression to a string.': false,
//             'Converts an expression to a boolean value.': false
//         }
//     },
//     {
//         id: 15,
//         desc: 'What does the Array.reduce() method do in JavaScript?',
//         options: {
//             'Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.': true,
//             'Filters elements of an array based on a provided function.': false,
//             'Returns the first element in the array that satisfies a provided testing function.': false,
//             'Sorts the elements of an array in place and returns the sorted array.': false
//         }
//     },
//     {
//         id: 16,
//         desc: 'What is memoization in JavaScript?',
//         options: {
//             'A programming technique used to speed up function execution by caching its previously computed results.': true,
//             'A technique used to store variables in memory for quick access.': false,
//             'A method for creating immutable objects in JavaScript.': false,
//             'A strategy for optimizing asynchronous operations in JavaScript.': false
//         }
//     },
//     {
//         id: 17,
//         desc: 'What does the "async" keyword do in JavaScript?',
//         options: {
//             'Defines a function as asynchronous, allowing it to use the await keyword within its body.': true,
//             'Marks a function as deprecated.': false,
//             'Specifies that a variable should be treated as a constant.': false,
//             'Indicates that a function should run only after all other functions have completed.': false
//         }
//     },
//     {
//         id: 18,
//         desc: 'What is a callback function in JavaScript?',
//         options: {
//             'A function passed as an argument to another function, which is then invoked inside the outer function to complete some kind of action.': true,
//             'A function that returns another function.': false,
//             'A function that automatically calls itself after a specific period of time.': false,
//             'A function that is defined within another function.': false
//         }
//     },
//     {
//         id: 19,
//         desc: 'What is the difference between synchronous and asynchronous programming in JavaScript?',
//         options: {
//             'Synchronous programming executes code sequentially and blocks further execution until the current operation finishes; asynchronous programming allows multiple operations to be performed concurrently.': true,
//             'Synchronous programming uses callbacks; asynchronous programming uses promises.': false,
//             'Synchronous programming is faster than asynchronous programming.': false,
//             'Synchronous programming is used for frontend development; asynchronous programming is used for backend development.': false
//         }
//     },
//     {
//         id: 20,
//         desc: 'What is the purpose of the JavaScript method Object.defineProperty()?',
//         options: {
//             'Defines a new property directly on an object, or modifies an existing property on an object, and returns the object.': true,
//             'Returns an array of an object\'s own enumerable property names.': false,
//             'Modifies the prototype of an object.': false,
//             'Creates a new object with a specified prototype object and properties.': false
//         }
//     }
// ];

let nextCount = 0;
let timerId = null;




if (nextCount < questions.length) {
    document.querySelector('.next-btn')?.addEventListener('click', () => { nextCount++; display(); displayNumber() });
}





let c = 0;
let i = 0;

function verifyAnswer(target, response) {

    clearInterval(timerId);

    if (questions[`${nextCount}`]['options'][response] === true) {
        target.style.border = '3px solid green';
        c++;
    }
    else {
        target.style.border = '3px solid red';
        i++;
    }







}

function seeScore() {
    document.querySelector('.next-btn').addEventListener('click', () => { window.location.href = `./final.html?c=${c}&i=${i}`; })

}

function display() {



    if (nextCount === questions.length - 1) {
        document.querySelector('.next-btn').innerHTML = 'See Result';
        show();
        // After quiz completion or when navigating to final.html
        seeScore();


        return;

    }
    show();

}
display();

function show() {
    const question = document.querySelector('.question');
    const optionList = document.querySelectorAll('.option');
    if (question) {
        question.innerText = questions[`${nextCount}`]?.['desc'];
    }
    optionList.forEach((option, index) => {
        option.addEventListener('click', handleOptionClick)
        option.style.border = '2px solid rgba(155, 154, 154, 0.461)';
        option.innerHTML = Object.keys(questions[`${nextCount}`]['options'])[index];
    })

    startTimer();
}



function startTimer() {


    if (!timerId) {
        createTimer();
    }
    else {
        clearInterval(timerId);
        timerId = null;
        createTimer();
    }


}

function createTimer() {

    const timer = document.querySelector('.timer');
    let seconds = 30;
    const qBody = document.querySelector('.q-body')
    if (qBody) {
        qBody.style.backgroundColor = 'rgb(204, 226, 194, 1)';
    }
    if (timer) {
        timerId = setInterval(() => {
            seconds--;
            if (seconds < 10) {
                timer.innerText = `00:0${seconds}`;
            }

            else {
                timer.innerText = `00:${seconds}`;
            }

            document.querySelector('.timer').style.fontSize = "34px";
            if (seconds < 6) {
                document.querySelector('.q-body').style.backgroundColor = 'rgba(219, 173, 173, 1)';
            }

            if (seconds === 0) {
                document.querySelector('.timer').innerText = "Time's up!";
                document.querySelector('.timer').style.fontSize = "17px";
                clearInterval(timerId)
                timerId = null;
                optionList.forEach(option => {
                    option.removeEventListener('click', handleOptionClick);
                });
            }




        }, 1000)
    }


}

function displayNumber() {
    let num = `${nextCount + 1}`;
    if (num < 10) {
        num = '0' + num;
    }
    const resNum = num + '/' + questions.length;

    const questionNumber = document.querySelector('.question-number');

    if (questionNumber) {
        questionNumber.innerText = resNum;
    }
}
displayNumber();



const optionList = document.querySelectorAll('.option');


// Initialize an array to track if options are selected for each question
let optionsSelected = new Array(questions.length).fill(false);

// Function to handle option click
function handleOptionClick(e) {
    const currentQuestionIndex = nextCount;



    if (!optionsSelected[currentQuestionIndex]) {
        verifyAnswer(e.target, e.target.innerHTML);

        // Disable all options for the current question
        optionList.forEach((option, index) => {
            if (index === currentQuestionIndex) {
                option.setAttribute('disabled', true);
            }
        });

        // // Adding click event listener to each option
        // optionList.forEach(option => {
        //     option.addEventListener('click', handleOptionClick);
        // });


        // Set the flag to true for the current question
        optionsSelected[currentQuestionIndex] = true;
    }
}



// function showCorrectAnswer() {

//     for (const key in questions[nextCount]['options']) {
//         if (questions[nextCount]['options'][key] === true) {

//         }
//     }

// }



// Previous button event listener
// document.querySelector('.prev-btn').addEventListener('click', () => {
//     // Ensure nextCount is greater than 0 to prevent going below the first question
//     if (nextCount > 0) {
//         nextCount--; // Move to the previous question
//         display(); // Display the previous question and its options
//         displayNumber(); // Update the question number display
//         disableSelectedOption(); // Disable the selected option for the previous question
//         startOrResumeTimer(); // Start or resume the timer for the previous question
//     }
// });

// // Function to disable the selected option for the previous question
// function disableSelectedOption() {
//     const selectedOption = document.querySelector('.option.selected');
//     if (selectedOption) {
//         const selectedText = selectedOption.innerHTML;
//         const optionList = document.querySelectorAll('.option');
//         optionList.forEach(option => {
//             if (option.innerHTML === selectedText) {
//                 option.setAttribute('disabled', true); // Disable the selected option
//                 option.style.border = '3px solid green'; // Optionally, you can style the selected option differently
//             }
//         });
//     }
// }

// // Function to start or resume the timer for the previous question
// function startOrResumeTimer() {
//     const timer = document.querySelector('.timer');
//     const currentSeconds = parseInt(timer.innerText.split(':')[1], 10); // Get current seconds

//     clearInterval(timerId); // Clear any existing timer
//     timerId = null; // Reset timerId

//     // Start timer from the current seconds
//     timerId = setInterval(() => {
//         if (currentSeconds < 10) {
//             timer.innerText = `00:0${currentSeconds}`;
//         } else {
//             timer.innerText = `00:${currentSeconds}`;
//         }

//         if (currentSeconds === 0) {
//             clearInterval(timerId);
//             timerId = null;
//         }
//         if (currentSeconds < 6) {
//             document.querySelector('.q-body').style.backgroundColor = 'rgba(219, 173, 173, 1)';
//         }

//         currentSeconds--; // Decrement seconds
//     }, 1000);
// }
