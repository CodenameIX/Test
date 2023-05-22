let buttonS = document.getElementsByClassName("buttonS");
for (let iS = 0; iS < buttonS.length; iS++) {
    buttonS[iS].addEventListener("click", clickHandlerS);
    function clickHandlerS() {
        let linkS = document.getElementById("linkS");
        if (buttonS[iS].contains(buttonS[0])) {
            linkS.href = "";
            buttonS[0].style = "background-color: rgb(20, 20, 20); left: 32px;";
        } else {
            buttonS[0].style = "";
        }
        if (buttonS[iS].contains(buttonS[1])) {
            linkS.href = "s01.css";
            buttonS[1].style = "background-color: rgb(20, 20, 20); left: 32px;";
        } else {
            buttonS[1].style = "";
        }
        if (buttonS[iS].contains(buttonS[2])) {
            linkS.href = "s02.css";
            buttonS[2].style = "background-color: rgb(20, 20, 20); left: 32px;";
        } else {
            buttonS[2].style = "";
        }
        if (buttonS[iS].contains(buttonS[3])) {
            linkS.href = "s03.css";
            buttonS[3].style = "background-color: rgb(20, 20, 20); left: 32px;";
        } else {
            buttonS[3].style = "";
        }
    }
    buttonS[0].style = "background-color: rgb(20, 20, 20); left: 32px;";
}

let buttonT = document.getElementsByClassName("buttonT");
for (let iT = 0; iT < buttonT.length; iT++) {
    buttonT[iT].addEventListener("click", clickHandlerT);
    function clickHandlerT() {
        let linkT = document.getElementById("linkT");
        if (buttonT[iT].contains(buttonT[0])) {
            linkT.href = "";
            buttonT[0].style = "background-color: rgb(20, 20, 20); left: 32px;";
        } else {
            buttonT[0].style = "";
        }
        if (buttonT[iT].contains(buttonT[1])) {
            linkT.href = "t01.css";
            buttonT[1].style = "background-color: rgb(20, 20, 20); left: 32px;";
        } else {
            buttonT[1].style = "";
        }
        if (buttonT[iT].contains(buttonT[2])) {
            linkT.href = "t02.css";
            buttonT[2].style = "background-color: rgb(20, 20, 20); left: 32px;";
        } else {
            buttonT[2].style = "";
        }
        if (buttonT[iT].contains(buttonT[3])) {
            linkT.href = "t03.css";
            buttonT[3].style = "background-color: rgb(20, 20, 20); left: 32px;";
        } else {
            buttonT[3].style = "";
        }
    }
    buttonT[0].style = "background-color: rgb(20, 20, 20); left: 32px;";
}

let buttonC = document.getElementsByClassName("buttonC");
for (let iC = 0; iC < buttonC.length; iC++) {
    buttonC[iC].addEventListener("click", clickHandlerC);
    function clickHandlerC() {
        let content0 = document.getElementById("content0");
        if (buttonC[iC].contains(buttonC[0])) {
            content0.style = "";
            buttonC[0].style = "background-color: rgb(20, 20, 20); left: 32px;";
        } else {
            buttonC[0].style = "";
        }
        if (buttonC[iC].contains(buttonC[1])) {
            content0.style = "background-color: rgb(20, 20, 20);";
            buttonC[1].style = "background-color: rgb(20, 20, 20); left: 32px;";
        } else {
            buttonC[1].style = "";
        }
        if (buttonC[iC].contains(buttonC[2])) {
            content0.style = "background-color: rgb(45, 110, 170); background: linear-gradient(354deg, rgba(35,35,40,1) 10%, rgba(26,42,60,1) 90%);";
            buttonC[2].style = "background-color: rgb(20, 20, 20); left: 32px;";
        } else {
            buttonC[2].style = "";
        }
        if (buttonC[iC].contains(buttonC[3])) {
            content0.style = "background-color: blue;";
            buttonC[3].style = "background-color: rgb(20, 20, 20); left: 32px;";
        } else {
            buttonC[3].style = "";
        }
    }
    buttonC[0].style = "background-color: rgb(20, 20, 20); left: 32px;";
}