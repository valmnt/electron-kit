function callPicture(callback) {
    $query = "SELECT picture FROM profil"

    connection.query($query, function (err, rows, fields) {
        if (err) {
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        callback(rows)
    });

}
function getPicture() {
    callPicture(function (rows) {
        picture = rows[0].picture
        document.getElementById('pictureProfil').src = picture
    })
}
getPicture()
