let k = "";
let l = [];

function selectfun() {
    var s = document.getElementById('dropdownmenu').value;
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "corpus.txt", true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
            var allText = rawFile.responseText;
            var allText1 = allText.split("   ");
            var n;
            if (s === 'Corpus1')
                n = 0;
            else if (s === 'Corpus2')
                n = 1;
            else
                n = 2;

            k = allText1[n];
            //co'nsole.log(k);
            document.getElementById('p1').innerHTML = k;
        }
    }
    rawFile.send();

    document.getElementById('p2').style.display = 'block';
    document.getElementById('row1').style.display = 'block';
    document.getElementById('row2').style.display = 'block';
}


function check() {
    var token = document.getElementById('token').value;
    var type = document.getElementById('type').value;
    var actual_token = check_token();
    var actual_type = check_type();

    document.getElementById('continue').style.display = 'none';
    document.getElementById('p4').innerHTML = "";
    document.getElementById('p3').innerHTML = "";

    if ((token == actual_token) && (type == actual_type)) {
        document.getElementById('token').style.backgroundColor = "green";
        document.getElementById('type').style.backgroundColor = "green";
        document.getElementById('p4').innerHTML = "Right Answer";
        document.getElementById('continue').style.display = 'block';
    } else {
        document.getElementById('token').style.backgroundColor = "red";
        document.getElementById('type').style.backgroundColor = "red";
        document.getElementById('p3').innerHTML = "Wrong Answer";
    }
}

function check_token() {
    var str = "";
    for (var i = 0; i < k.length; i++) {
        if (k[i] === '"' || k[i] === "?" || k[i] === "," || k[i] === ".") {
            str.trim();
            if (str === "" || str === " " || str === '"' || str === "?" || str === "," || str === ".")
                continue;
            l.push(str);
            str = "";
            continue;
        }
        str.trim();
        if (k[i] === " ") {
            str.trim();
            if (str === "" || str === " " || str === '"' || str === "?" || str === "," || str === ".")
                continue;
            l.push(str);
            str = "";
        }

        str += k[i].trim();
        str.trim();
    }
    //console.log(l.length)
    //    console.log(l, l.length)
    return l.length;
}

function check_type() {
    var res = 1;

    // Pick all elements one by one 
    for (var i = 1; i < l.length; i++) {
        var j = 0;
        var z = l[i];
        z = z.toLowerCase();
        for (j = 0; j < i; j++) {
            var x = l[j];
            x = x.toLowerCase();
            if (z === x)
                break;
        }

        // If not printed earlier,  
        // then print it 
        if (i == j) {
            res++;
            // console.log(l[i])
        }
    }
    //console.log(res)
    return res;
}