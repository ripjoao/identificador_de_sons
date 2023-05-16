function start() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ByKvfltiL/model.json', modelReady)

}

function modelReady() {
    classifier.classify(gotResults);
}
function gotResults (error, results) {
    if (error) {
        console.log(error)
    } else {
        console.log(results)

        document.getElementById("resultadoNome").innerHTML = "posso ouvir - " + results[0].label
        document.getElementById("resultadoPrecisao").innerHTML = 'Precisao - '+(results[0].confidence * 100).toFixed(2);
        pato = document.getElementById("pato")
        sabre = document.getElementById("sabre")
        buzina = document.getElementById("buzina")

        if (results[0].label == "pato de borracha"){
            pato.style.filter = "grayscale(0)";
            sabre.style.filter = "grayscale(1)";
            buzina.style.filter = "grayscale(1)";
        } else if (results[0].label == "sabre de luz"){
            pato.style.filter = "grayscale(1)";
            sabre.style.filter = "grayscale(0)";
            buzina.style.filter = "grayscale(1)";
           
        } else if (results[0].label == "busina"){
            pato.style.filter = "grayscale(1)"; 
            sabre.style.filter = "grayscale(1)";
            buzina.style.filter = "grayscale(0)";
        } else{
            pato.style.filter = "grayscale(1)"; 
            sabre.style.filter = "grayscale(1)";
            buzina.style.filter = "grayscale(1)"
        }

    }
}