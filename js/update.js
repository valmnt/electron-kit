var call = document.getElementById('call')
var url = document.getElementById('url')
var urlImg = document.getElementById('urlImg')

document.getElementById('sub').addEventListener('click', function () {

    function update() {

        function mainUp(callback) {
            $query = "SELECT * FROM website"
            connection.query($query, function (err, rows, fields) {
                if (err) {
                    console.log("An error ocurred performing the query.");
                    console.log(err);
                    return;
                }
                callback(rows)
            });
        }

        function changeUp() {
            mainUp(function (rows) {
                rows.forEach(row => {
                    if (row.name == call.value) {

                        call.style.borderColor = "green"

                        window.setTimeout(function () {
                            call.style.borderColor = "#7289da"
                        }, 4000)

                        if (url.value && urlImg.value) {
                            $query = "UPDATE website SET url = '" + url.value + "', " + "urlImg = '" + urlImg.value + "' WHERE name ='" + call.value + "'"
                            connection.query($query)
                            window.location.href = "tools.html"
                        }
                        if (url.value) {
                            $query = "UPDATE website SET url = '" + url.value + "' WHERE name ='" + call.value + "'"
                            connection.query($query)
                            window.location.href = "tools.html"
                        }
                        if (urlImg.value) {
                            $query = "UPDATE website SET urlImg = '" + urlImg.value + "' WHERE name ='" + call.value + "'"
                            connection.query($query)
                            window.location.href = "tools.html"
                        }
                        if (!url.value && !urlImg.value) {
                            url.style.borderColor = "red"
                            urlImg.style.borderColor = "red"

                            window.setTimeout(function () {
                                url.style.borderColor = "#7289da"
                                urlImg.style.borderColor = "#7289da"
                            }, 4000)
                        }
                    }
                });
            })
        }
        changeUp()
    }
    update()

})