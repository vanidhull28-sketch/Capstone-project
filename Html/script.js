function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let msg = document.getElementById("msg");

    if (user === "" || pass === "") {
        msg.style.color = "red";
        msg.innerText = "Please fill all fields";
    }

    else if (user === "admin" && pass === "1234") {
        msg.style.color = "green";
        msg.innerText = "Login Successful! Redirecting...";

        setTimeout(() => {
            window.location.href = "index.html";
        }, 10000);
        }


        else {
            msg.style.color = "red";
            msg.innerText = "Invalid username or password";
        }
    }
