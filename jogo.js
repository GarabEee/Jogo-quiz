document.getElementsByClassName('container')[0].style.display = "block";

function next(id) {
    document.getElementsByClassName('container')[id - 1].style.display = "none";
    document.getElementsByClassName('container')[id].style.display = "block";
}

function result() {
    var score = 0;
    if (document.getElementById('certo1').checked) {
        score++;
    }
    if (document.getElementById('certo2').checked) {
        score++;
    }
    if (document.getElementById('certo3').checked) {
        score++;
    }
    alert("Pontuação: " + score);
}
