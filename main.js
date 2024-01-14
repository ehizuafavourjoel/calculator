
document.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 'complete') {
        console.log(document.readyState)
        initApp()
    }
})


const initApp = () => {
    let appStatus = 'calculator';
    const container = document.querySelector('.container')
    const navBtns = document.querySelectorAll('.heading span');
    const questionInput = document.querySelector('.questionInput')
    const answerInput = document.querySelector('.answerInput')
    const allBtns = document.querySelectorAll('.btnContainer div input')
    const delBtn = document.querySelector('#delBtn')
    const historyContainer = document.querySelector('.historyContainer')


    //creatinghistory elements
    function createAndAdd() {
        let ul = document.createElement('ul')
        let li1 = document.createElement('li')
        let li2 = document.createElement('li')

        li1.innerText = questionInput.value;
        li2.innerText = '=' + answerInput.value;
        ul.append(li1)
        ul.append(li2)

        historyContainer.prepend(ul)

    }

    //For toggling Between calculator and History View
    navBtns.forEach(navBtn => {
        navBtn.addEventListener('click', () => {
            if (navBtn.innerText === '=') {
                container.classList.remove('historyArea')
                navBtn.parentElement.classList.remove('hisT')
            }
            else {
                container.classList.add('historyArea')
                navBtn.parentElement.classList.add('hisT')

            }
        })
    })

    //Defining background maths values
    let myBackMathValue = "";

    //All the calculator Buttons Functionalities
    //calculate function 

    const signRules = (mysign, mysign2) => {
        let miLastIndex = questionInput.value.charAt(questionInput.value.length - 1)
        if (miLastIndex === '+' ||
            miLastIndex === '-' ||
            miLastIndex === '÷' ||
            miLastIndex === '×' ||
            miLastIndex === '.') {
            let dummy = myBackMathValue.slice(0, -1)
            let fullDummy1 = dummy + mysign;
            var backFullDummy = dummy + mysign2
            console.log(backFullDummy)
            questionInput.value = fullDummy1
            myBackMathValue = backFullDummy

        }
        else {
            console.log('clean')
            calculate(mysign, mysign2);
        }




    }
    const calculate = (x, y = x) => {
        if (questionInput.value === "" &&
            myBackMathValue === '' && (x === '÷' || x === '+' || x === '%' || x === '×' || x === '-')) {
            questionInput.value += 0 + x;
            myBackMathValue += 0 + y
        } else {
            questionInput.value += x;
            myBackMathValue += y

        }
        if (x === '9' || x === '8' || x === '7' || x === '6' || x === '5' || x === '4' || x === '3' || x === '2' || x === '1' || x === '0' || x === '.') {
            // console.log(myBackMathValue)
            answerInput.value = eval(myBackMathValue)
        }

    }
    //for delBtn first 
    delBtn.addEventListener('click', () => {
        let mySliced = questionInput.value.slice(0, -1)
        questionInput.value = mySliced;
        myBackMathValue = mySliced
        answerInput.value = myBackMathValue
    })
    allBtns.forEach(btn => {
        /* if (questionInput.value === '') {
        //     console.log('f')
        //     document.querySelector('#clear').value = 'Ac'
        // }
        // else {
        //     console.log('r')
        //     document.querySelector('#clear').value = 'c'
         }*/
        btn.addEventListener('click', (e) => {
            //equalTo rebounce event
            document.querySelector('.answerFlex').classList.remove('equalClickEvent');

            if (btn.value === 'c') {

                questionInput.value = ''
                answerInput.value = ''
                myBackMathValue = ''
            }
            else if (btn.value === '%') {
                console.log('%');
                let myPercent = questionInput.value / 100;
                questionInput.value = myPercent
                answerInput.value = myPercent;
                myBackMathValue = myPercent;
                answerInput.value = myBackMathValue;
            }
            else if (btn.value === '÷') {
                signRules('÷', '/')
            }
            else if (btn.value === '7') {
                calculate('7');
            }
            else if (btn.value === '8') {
                calculate('8');
            }
            else if (btn.value === '9') {
                calculate('9');
            }
            else if (btn.value === '×') {
                signRules('×', '*');
            }
            else if (btn.value === '4') {
                calculate('4');
            }
            else if (btn.value === '5') {
                calculate('5');
            }
            else if (btn.value === '6') {
                calculate('6');
            }
            else if (btn.value === '−') {
                signRules('-', '-');
            }
            else if (btn.value === '1') {
                calculate('1');
            }
            else if (btn.value === '2') {
                calculate('2');
            }
            else if (btn.value === '3') {
                calculate('3');
            }
            else if (btn.value === '+') {
                signRules('+');
            }
            else if (btn.value === '**') {
                signRules('^');
            }
            else if (btn.value === '0') {
                calculate('0');
                if (questionInput.value === '0÷0') {
                    answerInput.value = 'can'
                }
                if (questionInput.value.includes('÷0')) {
                    answerInput.value = `can't divide by zero`
                }
            }
            else if (btn.value === '.') {
                signRules('.')
            }
            else {
                document.querySelector('.answerFlex').classList.add('equalClickEvent');
                createAndAdd()
            }

        })
    })

}