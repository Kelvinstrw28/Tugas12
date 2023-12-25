function otentikasi(){
    const username = "kelvin123";
    const password = "lesuh22";
    let enter_username = document.getElementById("uname").value;
    let enter_password = document.getElementById("psw").value;

    if(enter_username == username & enter_password == password){
        window.location.href = "sukses.html";
        window.alert("Login Sukses");
    } else {
        window.alert("Login Gagal");
    }
}