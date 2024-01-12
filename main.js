//Output screen
console.log(1 - 3 + 3)
let questionOutput = document.querySelectorAll('.answerFlex textarea')[0];
let answerOutput = document.querySelectorAll('.answerFlex textarea')[1];
let flexInputView = document.querySelector('.answerFlex')
const resetView = () => {
    flexInputView.classList.remove('equalClickEvent')
}
const alone = () => {
    if (questionOutput.innerHTML === '') {
        console.log('jUST ALONE')
        questionOutput.innerHTML = '0'
    }
}

function evaluate() {
    if (questionOutput.innerHTML === '') {
        answerOutput.innerHTML = ''

    }
    else {
        // answerOutput.innerHTML = questionOutput.innerHTML
        // try {
        checkAndReplace()

        // }
        // catch (err) {
        //     console.log(err)
        //     answerOutput.innerHTML = 'Syntax Error'

        // }
    }

}

// function autoEqual() {
//     //if includes × an ÷
//     if (questionOutput.innerHTML.includes('÷')) {
//         var modifiedAnswer = questionOutput.innerHTML.replace('÷', '/');
//     }
//     if (questionOutput.innerHTML.includes('×')) {
//         modifiedAnswer = questionOutput.innerHTML.replace('×', '*')
//     }
//     if (questionOutput.innerHTML.includes('^')) {
//         modifiedAnswer = questionOutput.innerHTML.replace('^', '**')
//     }
//     console.log(modifiedAnswer)

//     // If lenght of answer is too long
//     let autoAnswer = String(eval(modifiedAnswer));
//     if (autoAnswer.length > 10) {
//         console.log('too long')
//         var plusLengthModified = eval(autoAnswer.slice(0, 14))
//         answerOutput.innerHTML = eval(plusLengthModified)
//     }
//     else {
//         console.log('lenght ok')
//         console.log(answerLength)
//         answerOutput.innerHTML = eval(modifiedAnswer)
//     }

// }


function checkAndReplace() {
    let behindMath;
    resetView()

    if (questionOutput.innerHTML.includes('÷')) {
        console.log('has ÷')
        behindMath = questionOutput.innerHTML.replaceAll('÷', '/')
        console.log(eval(behindMath))
        answerOutput.innerHTML = eval(behindMath)
    }
    if (questionOutput.innerHTML.includes('×')) {
        console.log('has ×')
        behindMath = questionOutput.innerHTML.replaceAll('×', '*')
        console.log(behindMath);
        answerOutput.innerHTML = eval(behindMath)
    }
    if (questionOutput.innerHTML.includes('−')) {
        console.log('has −')
        behindMath = questionOutput.innerHTML.replaceAll('−', '-')
        console.log(behindMath);
        answerOutput.innerHTML = eval(behindMath)
    }
    if (questionOutput.innerHTML.includes('+')) {
        console.log('has +')
        behindMath = questionOutput.innerHTML.replaceAll('+', '+')
        console.log(behindMath);
        answerOutput.innerHTML = eval(behindMath)
    }
    if (questionOutput.innerHTML.includes('^')) {
        console.log('has ^')
        behindMath = questionOutput.innerHTML.replaceAll('^', '**')
        console.log(behindMath);
        answerOutput.innerHTML = eval(behindMath)
    }

    answerOutput.innerHTML = eval(7 * 9)
    console.log(behindMath)
    function checkAnsLength() {
        if (String(eval(behindMath)).length > 14) {
            let sliced = String(eval(behindMath)).slice(0, 14)
            answerOutput.innerHTML = sliced
        }
    }
    checkAnsLength()
}

// All calculation button
//Row 1
let row1 = document.querySelectorAll('.row1 div')

//Row 2
let row2 = document.querySelectorAll('.row2 div')


//Row 3 
let row3 = document.querySelectorAll('.row3 div')


//Row 4
let row4 = document.querySelectorAll('.row4 div')

//row 5
let row5 = document.querySelectorAll('.row5 div')


for (let i = 0; i < 4; i++) {
    //Row 1
    row1[i].addEventListener('click', (e) => {
        if (e.target) {
            resetView()
        }
        if (i === 0) {
            questionOutput.innerText = ''
            answerOutput.innerText = ''
        }
        else if (i === 1) {

            let sliced = questionOutput.innerHTML.slice(0, -1);
            questionOutput.innerText += sliced;
            answerOutput.innerHTML = sliced

        }
        else if (i === 2) {
            if (questionOutput.innerHTML === '') {
                answerOutput.innerHTML = ''
            }
            else {
                if (answerOutput.innerHTML === '') {
                    answerOutput.innerHTML = Number(questionOutput.innerHTML) / 100
                    questionOutput.innerHTML += '%'
                }

                else {
                    checkAndReplace()
                    answerOutput.innerHTML = Number(answerOutput.innerHTML) / 100
                    questionOutput.innerHTML = answerOutput.innerHTML + '%'

                }
            }
        }
        else {
            alone()
            questionOutput.innerHTML += '÷'

        }
    })

    //Row 2 
    row2[i].addEventListener('click', () => {
        if (i === 0) {
            questionOutput.innerHTML += 7
            evaluate()
            // checkAndReplace()
        }
        else if (i === 1) {
            questionOutput.innerHTML += 8
            evaluate()
            // checkAndReplace()
        }
        else if (i === 2) {
            questionOutput.innerHTML += 9
            evaluate()
            // checkAndReplace()
        }
        else {
            alone()
            questionOutput.innerHTML += '×'

        }
    })

    row3[i].addEventListener('click', () => {
        if (i === 0) {
            questionOutput.innerHTML += 4
            evaluate()
        }
        else if (i === 1) {
            questionOutput.innerHTML += 5
            evaluate()
        }
        else if (i === 2) {
            questionOutput.innerHTML += 6
            evaluate()
        }
        else {
            alone()
            questionOutput.innerHTML += '−';
        }
    })

    row4[i].addEventListener('click', () => {
        if (i === 0) {
            questionOutput.innerHTML += 1
            evaluate()
        }
        else if (i === 1) {
            questionOutput.innerHTML += 2
            evaluate()
        }
        else if (i === 2) {
            questionOutput.innerHTML += 3
            evaluate()
        }
        else {
            alone()
            questionOutput.innerHTML += '+';
        }
    })

    row5[i].addEventListener('click', () => {
        if (i === 0) {
            alone()
            questionOutput.innerHTML += '^'
        }
        else if (i === 1) {
            questionOutput.innerHTML += 0
            evaluate()
        }
        else if (i === 2) {
            questionOutput.innerHTML += '.'
            evaluate()
        }
        else {
            alone()
            flexInputView.classList.add('equalClickEvent')
        }
    })
}
