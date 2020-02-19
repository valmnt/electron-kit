var picture = document.getElementById('input_user')

function profilBdd(picture) {
    $query = "DELETE FROM profil"
    connection.query($query)
    $query = "INSERT INTO profil (picture) VALUES ('" + picture + "')"
    connection.query($query)
    window.location.href = "../views/tools.html";
}

document.getElementById('submit').addEventListener('click', function () {
    if (picture.value) {
        profilBdd(picture.value)
    }
    else {
        profilBdd("https://image.flaticon.com/icons/svg/1705/1705706.svg")
    }

})