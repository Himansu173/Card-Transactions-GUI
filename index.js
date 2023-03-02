function display(parameter1, parameter2, parameter3, parameter4, parameter5, parameter6, parameter7, parameter8, parameter9) {
    let values = document.getElementById(parameter1).value;

    if (values.charAt(0) != "") {
        document.getElementById(parameter6).innerHTML = values.charAt(0);
        document.getElementById(parameter2).style.cssText = `
        animation:scrollup 0.6s;
        animation-iteration-count: 1;
        top:-1.5rem;
        `;
    }
    if (values.charAt(0) == "") {
        document.getElementById(parameter2).style.cssText = `
        animation:scrolldown 0.6s;
        animation-iteration-count: 1;
        top:0;
        `;
    }

    if (values.charAt(1) != "") {
        document.getElementById(parameter7).innerHTML = values.charAt(1);
        document.getElementById(parameter3).style.cssText = `
        animation:scrollup 0.6s;
        animation-iteration-count: 1;
        top:-1.5rem;
        `;
    }
    if (document.getElementById(parameter7).innerHTML != "") {
        if (values.charAt(1) == "") {
            document.getElementById(parameter3).style.cssText = `
            animation:scrolldown 0.6s;
            animation-iteration-count: 1;
            top:0;
            `;
        }
    }
    if (values.charAt(2) != "") {
        document.getElementById(parameter8).innerHTML = values.charAt(2);
        document.getElementById(parameter4).style.cssText = `
        animation:scrollup 0.6s;
        animation-iteration-count: 1;
        top:-1.5rem;
        `;
    }
    if (document.getElementById(parameter8).innerHTML != "") {
        if (values.charAt(2) == "") {
            document.getElementById(parameter4).style.cssText = `
        animation:scrolldown 0.6s;
        animation-iteration-count: 1;
        top:0;
        `;
        }
    }
    if (values.charAt(3) != "") {
        document.getElementById(parameter9).innerHTML = values.charAt(3);
        document.getElementById(parameter5).style.cssText = `
    animation:scrollup 0.6s;
    animation-iteration-count: 1;
    top:-1.5rem;
    `;
    }
    if (document.getElementById(parameter9).innerHTML != "") {
        if (values.charAt(3) == "") {
            document.getElementById(parameter5).style.cssText = `
    animation:scrolldown 0.6s;
    animation-iteration-count: 1;
        top:0;
        `;
        }
    }
}


function displayYYYY(parameter1, parameter2, parameter3, parameter4, parameter5, parameter6, parameter7, parameter8, parameter9) {
    let values = document.getElementById(parameter1).value;

    if (values.charAt(0) != "") {
        document.getElementById(parameter6).innerHTML = values.charAt(0);
        document.getElementById(parameter2).style.cssText = `
        animation:dateScrollup 0.6s;
        animation-iteration-count: 1;
        top:-1rem;
        `;
    }
    if (values.charAt(0) == "") {
        document.getElementById(parameter2).style.cssText = `
        animation:dateScrolldown 0.6s;
        animation-iteration-count: 1;
        top:0;
        `;
    }

    if (values.charAt(1) != "") {
        document.getElementById(parameter7).innerHTML = values.charAt(1);
        document.getElementById(parameter3).style.cssText = `
        animation:dateScrollup 0.6s;
        animation-iteration-count: 1;
        top:-1rem;
        `;
    }
    if (document.getElementById(parameter7).innerHTML != "") {
        if (values.charAt(1) == "") {
            document.getElementById(parameter3).style.cssText = `
        animation:dateScrolldown 0.6s;
        animation-iteration-count: 1;
        top:0;
        `;
        }
    }
    if (values.charAt(2) != "") {
        document.getElementById(parameter8).innerHTML = values.charAt(2);
        document.getElementById(parameter4).style.cssText = `
    animation:dateScrollup 0.6s;
    animation-iteration-count: 1;
    top:-1rem;
    `;
    }
    if (document.getElementById(parameter8).innerHTML != "") {
        if (values.charAt(2) == "") {
            document.getElementById(parameter4).style.cssText = `
        animation:dateScrolldown 0.6s;
        animation-iteration-count: 1;
        top:0;
        `;
        }
    }
    if (values.charAt(3) != "") {
        document.getElementById(parameter9).innerHTML = values.charAt(3);
        document.getElementById(parameter5).style.cssText = `
        animation:dateScrollup 0.6s;
        animation-iteration-count: 1;
        top:-1rem;
        `;
    }
    if (document.getElementById(parameter9).innerHTML != "") {
        if (values.charAt(3) == "") {
            document.getElementById(parameter5).style.cssText = `
        animation:dateScrolldown 0.6s;
        animation-iteration-count: 1;
        top:0;
        `;
        }
    }
}

function displayMM(parameter1, parameter2, parameter3, parameter4, parameter5) {
    let values = document.getElementById(parameter1).value;

    if (values.charAt(0) != "") {
        document.getElementById(parameter4).innerHTML = values.charAt(0);
        document.getElementById(parameter2).style.cssText = `
        animation:dateScrollup 0.6s;
        animation-iteration-count: 1;
        top:-1rem;
        `;
    }
    if (values.charAt(0) == "") {
        document.getElementById(parameter2).style.cssText = `
        animation:dateScrolldown 0.6s;
        animation-iteration-count: 1;
        top:0;
        `;
    }

    if (values.charAt(1) != "") {
        document.getElementById(parameter5).innerHTML = values.charAt(1);
        document.getElementById(parameter3).style.cssText = `
        animation:dateScrollup 0.6s;
        animation-iteration-count: 1;
        top:-1rem;
        `;
    }
    if (document.getElementById(parameter5).innerHTML != "") {
        if (values.charAt(1) == "") {
            document.getElementById(parameter3).style.cssText = `
        animation:dateScrolldown 0.6s;
        animation-iteration-count: 1;
        top:0;
        `;
        }
    }
}

function displaycvv(parameter1, parameter2, parameter3, parameter4, parameter5, parameter6, parameter7) {
    let values = document.getElementById(parameter1).value;

    if (values.charAt(0) != "") {
        document.getElementById(parameter5).innerHTML = '<i>' + values.charAt(0) + '</i>';
        document.getElementById(parameter2).style.cssText = `
        animation:cvvScrollup 0.6s;
        animation-iteration-count: 1;
        top:-1.3rem;
        `;
    }
    if (values.charAt(0) == "") {
        document.getElementById(parameter2).style.cssText = `
        animation:cvvScrolldown 0.6s;
        animation-iteration-count: 1;
        top:0;
        `;
    }

    if (values.charAt(1) != "") {
        document.getElementById(parameter6).innerHTML = '<i>' + values.charAt(1) + '</i>';
        document.getElementById(parameter3).style.cssText = `
        animation:cvvScrollup 0.6s;
        animation-iteration-count: 1;
        top:-1.3rem;
        `;
    }
    if (document.getElementById(parameter6).innerHTML != "") {
        if (values.charAt(1) == "") {
            document.getElementById(parameter3).style.cssText = `
            animation:cvvScrolldown 0.6s;
            animation-iteration-count: 1;
            top:0;
            `;
        }
    }
    if (values.charAt(2) != "") {
        document.getElementById(parameter7).innerHTML = '<i>' + values.charAt(2) + '</i>';
        document.getElementById(parameter4).style.cssText = `
        animation:cvvScrollup 0.6s;
        animation-iteration-count: 1;
        top:-1.3rem;
        `;
    }
    if (document.getElementById(parameter7).innerHTML != "") {
        if (values.charAt(2) == "") {
            document.getElementById(parameter4).style.cssText = `
        animation:cvvScrolldown 0.6s;
        animation-iteration-count: 1;
        top:0;
        `;
        }
    }
}
let container;
function changeFeild(para) {
    container = document.getElementById(para);
    // Move to next field if full (user pressed a key)
    container.onkeyup = function (e) {
        var target = e.srcElement || e.target;
        var maxLength = parseInt(target.attributes["maxlength"].value, 10);
        var myLength = target.value.length;
        if (myLength >= maxLength) {
            var next = target;
            while (next = next.nextElementSibling) {
                if (next == null)
                    break;
                if (next.tagName.toLowerCase() === "input") {
                    next.focus();
                    break;
                }
            }
        }
        // Move to previous field if empty (user pressed backspace)
        else if (myLength === 0) {
            var previous = target;
            while (previous = previous.previousElementSibling) {
                if (previous == null)
                    break;
                if (previous.tagName.toLowerCase() === "input") {
                    previous.focus();
                    break;
                }
            }
        }
    }
}

var PrePara = "first-four-no-audio";
function playAudio(parameter){
    if (document.getElementById(PrePara).currentTime > 0 && !document.getElementById(PrePara).paused){
        document.getElementById(PrePara).pause();
    }
    var audio;
    audio = document.getElementById(parameter);
    audio.currentTime=0;
    audio.play();
    PrePara = parameter;
}

function focused(argument1, argument2,argument3) {
    document.getElementById(argument1).style.cssText = `border-color: azure;box-shadow: 0 0 4px azure;`;
    playAudio(argument2);
    if (argument3 != null) {
        changeFeild(argument3);
    }
}
function focusOut(x) {
    document.getElementById(x).style.cssText = `border-color: transparent;box-shadow: none;`;
}

function focuscvv() {
    playAudio("cvv-audio");
    document.querySelector('.card-inner').style.transform = 'rotateY(180deg)';
    document.getElementById('Cvv').style.cssText = `border-color: black;box-shadow: 0 0 4px black;`;
}
function focusOutcvv() {
    document.querySelector('.card-inner').style.transform = 'rotateY(0)';
    document.getElementById('Cvv').style.cssText = `border-color: transparent;box-shadow: none;`;
}

function storeName() {
    let name = document.getElementById('name').value;
    name = name.toUpperCase();
    if (name == "") {
        document.getElementById('holderName').innerHTML = "NARESH LAKHANI";

    } else {
        document.getElementById('holderName').innerHTML = name;
    }
}

function submited() {
    playAudio('successful-audio');
    document.getElementById('inputForm').reset();
    display('card-noOne','firstNoOne','firstNoTwo','firstNoThree','firstNoFour','oneOne','oneTwo','oneThree','oneFour');
    display('card-noTwo','secondNoOne','secondNoTwo','secondNoThree','secondNoFour','twoOne','twoTwo','twoThree','twoFour');
    display('card-noThree','thirdNoOne','thirdNoTwo','thirdNoThree','thirdNoFour','threeOne','threeTwo','threeThree','threeFour');
    display('card-noFour','fourthNoOne','fourthNoTwo','fourthNoThree','fourthNoFour','fourOne','fourTwo','fourThree','fourFour');
    displayMM('validityMM','monthOne','monthTwo','monthFirst','monthSecond');
    displayYYYY('validityYYYY','yearOne','yearTwo','yearThree','yearFour','yearFirst','yearSecond','yearThird','yearFourth');
    storeName();
    displaycvv('cvv','cvvFrirst','cvvSecond','cvvThird','cvvOne','cvvTwo','cvvThree');
}