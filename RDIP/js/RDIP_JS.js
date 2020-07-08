function selectfun() {

    var x = document.getElementById("btns");
    x.innerHTML = "";
    x.style.display = "none";


    //document.write(document.getElementById('ab').value)
    let s = document.getElementById('ab').value;
    document.getElementById('pid1').innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words<br>"
    document.getElementById('pid2').innerHTML = "(select the buttons in proper order)"
    if (s === 'English') {
        x.style.display = "block";



        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", "../Corpus/english.txt", true);
        rawFile.onreadystatechange = function() {
            if (rawFile.readyState === 4) {
                var allText = rawFile.responseText;
                var allText1 = allText.split("   ");

                var n = Math.floor(Math.random() * 9);
                var k = allText1[n];
                var alltext2 = k.split("  ");
                var z = alltext2[0].split(" ");
                var len = z.length;
                for (var i = 0; i < z.length; i++) {
                    var button = document.createElement("button");
                    button.innerHTML = z[i];
                    button.className = "btn1";
                    button.id = "btn" + i;
                    var buttonDiv = document.getElementById("btns");
                    buttonDiv.appendChild(button);
                }
            }
        }
        rawFile.send();
    } else {
        x.style.display = "block";
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", "../Corpus/hindi.txt", true);
        rawFile.onreadystatechange = function() {
            if (rawFile.readyState === 4) {
                var allText = rawFile.responseText;
                var allText1 = allText.split("   ");
                var n = Math.floor(Math.random() * 6);
                var k = allText1[n];
                var alltext2 = k.split("  ");
                var z = alltext2[0].split(" ");
                var len = z.length;
                for (var i = 0; i < z.length; i++) {
                    var button = document.createElement("button");
                    button.innerHTML = z[i];
                    button.className = "btn1";
                    var buttonDiv = document.getElementById("btns");
                    buttonDiv.appendChild(button);
                }
            }
        }
        rawFile.send();

    }
}