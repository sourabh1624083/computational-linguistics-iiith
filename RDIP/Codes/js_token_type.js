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
            var k = allText1[n];
            //co'nsole.log(k);
            document.getElementById('p1').innerHTML = k;
        }
    }
    rawFile.send();
}