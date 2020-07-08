let output = ""
let hidebtn = []
let imp1, imprandomstore, imp3;
let allbtnid = []

function selectfun() {

    var x = document.getElementById("btns");
    x.innerHTML = "";
    x.style.display = "none";
    imp1 = ""
    imprandomstore = ""
    imp3 = ""
    output = "";
    hidebtn = [];
    allbtnid = [];
    //document.write(document.getElementById('ab').value)
    let s = document.getElementById('ab').value;
    document.getElementById('pid1').innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words<br>"
    document.getElementById('pid2').innerHTML = "(select the buttons in proper order)"
    document.getElementById('correctcheck').style.display = 'none';
    document.getElementById('show').innerHTML = "";
    document.getElementById('showbef').innerHTML = "";
    document.getElementById('reform').style.display = 'none'
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
                imp1 = alltext2;
                var z = alltext2[0].split(" ");
                var len = z.length;
                z = shuffle(z);
                imprandomstore = z;
                for (var i = 0; i < z.length; i++) {
                    var button = document.createElement("button");
                    button.innerHTML = z[i];
                    button.className = "btn1";
                    button.id = "btn" + i;
                    allbtnid.push("btn" + i);
                    button.value = z[i]
                    button.onclick = function() { showfun(button.id) };
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
                imp1 = alltext2;
                var z = alltext2[0].split(" ");
                var len = z.length;
                z = shuffle(z);
                imprandomstore = z;
                for (var i = 0; i < z.length; i++) {
                    var button = document.createElement("button");
                    button.innerHTML = z[i];
                    button.className = "btn1";
                    button.value = z[i]
                    button.onclick = function() { showfun(button.id) };

                    button.id = "btn" + i;
                    allbtnid.push("btn" + i);
                    var buttonDiv = document.getElementById("btns");
                    buttonDiv.appendChild(button);
                }
            }
        }
        rawFile.send();

    }
}

function shuffle(arra1) {
    var ctr = arra1.length,
        temp, index;

    // While there are elements in the array
    while (ctr > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * ctr);
        // Decrease ctr by 1
        ctr--;
        // And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

function showfun(id) {
    var x = document.getElementById(event.srcElement.id).value
        //alert(x)
    document.getElementById(event.srcElement.id).style.display = 'none'
    document.getElementById('reform').style.display = 'block'
    document.getElementById('showbef').innerHTML = "Formed Sentence (after selecting words):"
        //hidebtn.appendChild(event.srcElement.id)
    output += x
    output += " "
    document.getElementById('show').innerHTML = output
    hidebtn.push(event.srcElement.id)
        //console.log(hidebtn)
    if (hidebtn.length === imprandomstore.length) {
        document.getElementById('correctcheck').style.display = 'block';
    }
}

function reformsent() {
    document.getElementById('show').innerHTML = "";
    document.getElementById('btns').innerHTML = "";
    document.getElementById('showbef').innerHTML = "";
    output = ""
    hidebtn = [];
    document.getElementById('reform').style.display = 'none'
    showbtnagain();
}

function showbtnagain() {
    allbtnid = []
    for (var i = 0; i < imprandomstore.length; i++) {
        var button = document.createElement("button");
        button.innerHTML = imprandomstore[i];
        button.className = "btn1";
        button.id = "btn" + i;
        allbtnid.push("btn" + i);
        button.value = imprandomstore[i]
        button.onclick = function() { showfun(button.id) };
        var buttonDiv = document.getElementById("btns");
        buttonDiv.appendChild(button);
    }
}