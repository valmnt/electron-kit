document.getElementById('submit_form').addEventListener('click', function () {
    console.log(type.value)
    if (call.value && url.value && urlImg.value && type.value) {
        $query = "INSERT INTO website(name, url, urlImg, type) VALUES('" + call.value + "', '" + url.value + "', '" + urlImg.value + "', '" + type.value + "')"

        connection.query($query, function (err, rows, fields) {
            if (err) {
                console.log("An error ocurred performing the query.");
                console.log(err);
                return;
            }
            console.log("Query succesfully executed");
        });
        window.location.replace("tools.html");
    }
    else {
        if (!call.value) {
            call.style.borderColor = "red"
        }
        else {
            call.style.borderColor = "#7289da"
        }
        if (!url.value) {
            url.style.borderColor = "red"
        }
        else {
            url.style.borderColor = "#7289da"
        }
        if (!urlImg.value) {
            urlImg.style.borderColor = "red"
        }
        else {
            urlImg.style.borderColor = "#7289da"
        }
        if (!type.value) {
            type.style.borderColor = "red"
        }
        else {
            type.style.borderColor = "#7289da"
        }
    }
})
