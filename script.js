    var rows = document.getElementsByTagName('tr');

    var i = 0;
    var j = 0;
    var res = "{\n";
    var intermediateRes = "";
    for (i = 0; i < rows.length; i++) {
        var tds = rows.item(i).getElementsByTagName('td');
        for (j = 0; j < tds.length; j++) {
            var it = tds.item(j).textContent;
            if (it.length > 0) {
                if (j == 0) {
                    intermediateRes = "\t'" + it + "' => \""
                } else if (it.length > 1) {
                    intermediateRes += it
                }
            }
        }
        intermediateRes += "\""
        res += intermediateRes;
        res += ",\n";
    }
    res += "\n}";

    console.log(res);
