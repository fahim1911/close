const login_btn_nav = document.getElementById("login_btn_nav");
const start_btn = document.getElementById("start_btn");
const bg = document.getElementById("bg");
const close_btn = document.getElementById("popup_close_btn");
const box = document.getElementById("box")

function showPopup() {
    bg.style.display = "flex";
    box.style.animition="zoomin 0.3s ease forward"
}

login_btn_nav.onclick = showPopup;
start_btn.onclick = showPopup;

close_btn.onclick = () => {
    bg.style.display = "none";
};
