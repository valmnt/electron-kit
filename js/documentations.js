function del(id) {
    $query = "DELETE FROM website WHERE id = " + id

    connection.query($query, function (err) {
        if (err) {
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        console.log("Query succesfully executed");
    });
}

function showWeb(callback) {
    $query = "SELECT * FROM website where type = 'Documentations'"

    connection.query($query, function (err, rows, fields) {
        if (err) {
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        callback(rows)
        console.log("Query succesfully executed");
    });
}

function integrationHTML() {
    showWeb(function (rows) {
        var html = ""

        rows.forEach(function (row) {
            console.log(row)

            html += '<div class="main_cards">'
            html += '<div class="card image-header">'
            html += '<div class="card-header fg-white" style="background-image: url(' + row.urlImg + ')">'
            html += '</div>'
            html += '<div class="card-footer">'
            html += "<button style='background-color: #7289da; border-radius: 25px;' class='button secondary'><a style='color: white;' class='link' href='" + row.url + "'>" + row.name + "</a ></button > "
            html += "<a class='delink' href='update.html'><img class='del' src='assets/write.png' style='width:30%; height:30%; margin-left: 80%;'></a>"
            html += "<a class='delink' href='documentations.html'><img onclick='del(" + row.id + ")' class='del' src='assets/delete.png' style='width:30%; height:30%; margin-left: 60%;'></a>"
            html += '</div>'
            html += '</div>'
            html += '</div>'
        });
        document.querySelector('.main_tools').innerHTML = html;
    })
}
integrationHTML()