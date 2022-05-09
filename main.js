// mega menu
const megaMenu = document.querySelector(".mega-menu");
const megaBtn = document.querySelector(".other-links a");
document.querySelector(".other-links a").onclick = function (e) {
    e.preventDefault();
};
megaBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    megaMenu.classList.toggle("opened");
});
megaMenu.addEventListener("click", (e) => {
    e.stopPropagation();
});
document.addEventListener("click", () => {
    megaMenu.classList.remove("opened");
});
// latest events section
let nums = document.querySelectorAll(".count-down .unit span");
nums[0].innerHTML = Math.floor(Math.random() * 20);
nums[1].innerHTML = Math.floor(Math.random() * 23);
nums[2].innerHTML = Math.floor(Math.random() * 59);
nums[3].innerHTML = Math.floor(Math.random() * 59);
function countDown() {  
    if (nums[3].innerHTML === "0") {
        if (nums[2].innerHTML === "0") {
            if (nums[1].innerHTML === "0") {
                if (nums[0].innerHTML === "0") {
                    clearInterval(n);
                } else { 
                    nums[0].innerHTML -= 1;
                    nums[1].innerHTML = "24";
                    nums[2].innerHTML = "60";
                    nums[3].innerHTML = "60";
                }
            } else { 
                nums[1].innerHTML -= 1;
                nums[2].innerHTML = "60";
                nums[3].innerHTML = "60";
            }
        } else { 
            nums[2].innerHTML -= 1;
            nums[3].innerHTML = "60";
        }
    } else { 
        nums[3].innerHTML -= 1;
    }
};
let n = setInterval(countDown, 1000);
// top videos
let videoLabel = document.querySelectorAll(".video-select li");
let videoDescription = document.querySelector("p#video");
// get video duration
let videoSpan = document.querySelectorAll(".video-select li span");
let videos = document.querySelectorAll("video");
for (let i = 0; i <= videos.length; i++) { 
    var x = setInterval(function () {
            var minutes = parseInt(videos[i].duration / 60, 10);
            var seconds = parseInt(videos[i].duration % 60, 10);
            videoSpan[i].innerHTML = `0${minutes}:${seconds}`;
            clearInterval(x);
    });
};
videoLabel.forEach(e => {
    e.addEventListener("click", () => {
        videoLabel.forEach(e => {
            e.classList.remove("clicked-video");
        });
        e.classList.add("clicked-video");
        let t = e.innerText.toString().split("");
        t = t.map((e) => {
            if (Number.isInteger(parseInt(e)) || e === ":") {
                return "";
            } else return e;
        });
        videoDescription.innerText = t.join("");
        videos.forEach((e) => {
            e.pause();
            e.style.display = "none";
        });
        videos.forEach(ele => {
            if (ele.getAttribute("data") === e.getAttribute("data")) {
                ele.style.display = "block";
                ele.autoplay = true;
                ele.load();
            }
        });
    });
});
// shufle button
let shuffleBtn = document.querySelector(".shuffle i");
shuffleBtn.addEventListener("click", function () {
    videos.forEach((e) => {
        e.style.display = "none";
        e.pause();
    });
    videoLabel.forEach(e => {
        e.classList.remove("clicked-video");
    });
    let random = Math.floor(Math.random() * 10);
    videoLabel[random].classList.add("clicked-video");
    videos.forEach(ele => {
        if (ele.getAttribute("data") === videoLabel[random].getAttribute("data")) {
            ele.style.display = "block";
        }
    });
    let t = videoLabel[random].innerText.toString().split("");
        t = t.map((e) => {
            if (Number.isInteger(parseInt(e)) || e === ":") {
                return "";
            } else return e;
        });
    videoDescription.innerHTML = t.join("");
    videos[random].autoplay = true;
    videos[random].load();
});
// dark mode button
let darkModeBtn = document.querySelector("#dark-mode");
let moon = document.querySelector(".fa-moon");
let sun = document.querySelector(".fa-sun");
let circle = document.querySelector('#circle');
let allElements = document.body.getElementsByTagName("*");

if (window.localStorage.getItem("dark-mode") === "true") { 
    darkMode();
}

function darkMode() { 
    darkModeBtn.classList.add("dark");
    window.localStorage.setItem("dark-mode", true);
    circle.style.cssText = "left: 26px;"
    document.documentElement.style.setProperty("--background-color", "#191919");
    document.documentElement.style.setProperty("--text-color", "white");
    document.documentElement.style.setProperty("--secondary-background-color", "#333333");
    document.documentElement.style.setProperty("--links-before", "#333333");
    document.documentElement.style.setProperty("--shadow", "0 2px 15px rgb(255 255 255 / 10%)");
    document.documentElement.style.setProperty("--shadow-after-hover", "0 2px 15px rgb(255 255 255 / 30%)");
    document.documentElement.style.setProperty("--before", "#474747");
    document.documentElement.style.setProperty("--stats-before", "rgb(0 0 0 / 95%)");
    document.querySelectorAll(".services .container .box .number").forEach(e => {
        e.style.setProperty("background-color", "#282727");
    });
    document.querySelectorAll(".work .container .box .content").forEach(e => {
        e.style.setProperty("background-color", "#494646");
    });
}
darkModeBtn.addEventListener("click", () => {
    if (darkModeBtn.classList.contains("dark")) {
        darkModeBtn.classList.remove("dark");
        window.localStorage.setItem("dark-mode", false);
        circle.style.cssText = "left: 4px;";
        document.documentElement.style.setProperty("--background-color", "white");
        document.documentElement.style.setProperty("--text-color", "black");
        document.documentElement.style.setProperty("--secondary-background-color", "#ececec");
        document.documentElement.style.setProperty("--links-before", "#eee");
        document.documentElement.style.setProperty("--shadow", "0 2px 15px rgb(0 0 0 / 10%)");
        document.documentElement.style.setProperty("--shadow-after-hover", "0 2px 15px rgb(0 0 0 / 30%)");
        document.documentElement.style.setProperty("--before", "#d1d1d1");
        document.documentElement.style.setProperty("--stats-before", "rgb(255 255 255 / 95%)");
        document.querySelectorAll(".services .container .box .number").forEach(e => {
            e.style.setProperty("background-color", "#f9f9f9");
        });
        document.querySelectorAll(".work .container .box .content").forEach(e => {
            e.style.setProperty("background-color", "#f6f5f5");
        });
    } else {
        darkMode();
    }
});
