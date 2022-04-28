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
    console.log(random);
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
document.querySelectorAll(".team-members .container .box").forEach(e => {
    e.style.setProperty("--psedou-color", "#eee");
});
function black(e) { 
    e.style.setProperty("background-color", "#191919");
    e.style.setProperty("color", "white");
}
function darkgrey(e) { 
    e.style.setProperty("background-color", "#333333");
    e.style.setProperty("color", "white");
}
function white(e) { 
    e.style.setProperty("background-color", "white");
    e.style.setProperty("color", "black");
}
function grey(e) { 
    e.style.setProperty("background-color", "var(--main-background-color)");
    e.style.setProperty("color", "black");
}
function darkMode() {
    window.localStorage.setItem("dark", true);
    darkModeBtn.classList.add("clicked");
    for (let i = 0; i < allElements.length; i++) {
        allElements[i].style.cssText = "transition: 0.3s;   -webkit-transition: 0.3s;  -moz-transition: 0.3s;  -ms-transition: 0.3s;  -o-transition: 0.3s;";
        if (allElements[i].tagName.toLowerCase() !== "i" &&
            allElements[i].tagName.toLowerCase() !== "span" &&
            allElements[i].tagName.toLowerCase() !== "h3" &&
            allElements[i].tagName.toLowerCase() !== "img" &&
            allElements[i].tagName.toLowerCase() !== "h1" &&
            allElements[i].tagName.toLowerCase() !== "h2" &&
            allElements[i].tagName.toLowerCase() !== "h3" &&
            allElements[i].tagName.toLowerCase() !== "h4" &&
            allElements[i].tagName.toLowerCase() !== "p" &&
            allElements[i].tagName.toLowerCase() !== "input" &&
            allElements[i].tagName.toLowerCase() !== "button" &&
            allElements[i].tagName.toLowerCase() !== "textarea" &&
            allElements[i].tagName.toLowerCase() !== "video" &&
            allElements[i].className !== "container" &&
            allElements[i].className !== "info" && allElements[i].className !== "social" &&
            allElements[i].className !== "text" &&
            allElements[i].className !== "box") {
            allElements[i].classList.add("dark");
        }
    }
    // main heading
    document.querySelectorAll(".main-heading").forEach(e => {
        e.style.setProperty("color", "white");
    });
    // header
    document.querySelector("header").style.cssText = "box-shadow: 0 2px 15px rgb(255 255 255 / 10%);";
    black(document.querySelector(".mega-menu"));
    document.querySelectorAll(".nav-bar a").forEach(e => {
        black(e);
    });
    circle.style.cssText = "left:27px;  background-color: #ffffff; ";
    document.querySelectorAll("ul.nav-bar li a").forEach(e => {
        e.onmouseenter = function () {
            e.style.color = "var(--main-color)";
        };
        e.onmouseleave = function () {
            e.style.color = "white";
        };
    });
    // landing
    darkgrey(document.querySelector(".landing"));
    document.querySelector(".landing").style.setProperty("--psedou-color", "#191919");
    // articles
    document.querySelectorAll(".articles .container .box").forEach(e => {
        black(e);
        e.style.setProperty("box-shadow", "0 2px 15px rgb(255 255 255 / 10%)");
        e.onmouseenter = function () {
            e.style.setProperty("box-shadow", "0 2px 15px rgb(255 255 255 / 30%)")
        };
        e.onmouseleave = function () {
            e.style.setProperty("box-shadow", "0 2px 15px rgb(255 255 255 / 10%)");
        };
    });
    // gallery
    darkgrey(document.querySelector(".gallery"));
    document.querySelectorAll(".gallery .container .picture").forEach(e => {
        black(e);
    });
    // features
    document.querySelectorAll(".features .container .box .image").forEach(e => {
        black(e);
    });
    // testimonials
    darkgrey(document.querySelector(".testimonials"));
    document.querySelectorAll(".testimonials .container .box").forEach(e => {
        black(e);
        e.style.setProperty("box-shadow", "0 2px 15px rgb(255 255 255 / 10%)");
        e.onmouseenter = function () {
            e.style.setProperty("box-shadow", "0 2px 15px rgb(255 255 255 / 30%)");
        };
        e.onmouseleave = function () {
            e.style.setProperty("box-shadow", "0 2px 15px rgb(255 255 255 / 10%)");
        }
    });
    // team-members
    document.querySelectorAll(".team-members .container .box").forEach(e => {
        e.style.setProperty("--psedou-color", "#333333");
        e.style.setProperty("--team-slider-color", "#474747");
    });
    document.querySelectorAll(".team-members .container .box .pic").forEach(e => {
        e.style.setProperty("background-color", "transparent");
    });
    document.querySelectorAll(".social a").forEach(e => {
        e.style.setProperty("background-color", "transparent");
    });
    // sevices
    darkgrey(document.querySelector(".services"));
    document.querySelectorAll(".services .container .box").forEach(e => {
        black(e);
        e.style.setProperty("box-shadow", "0 12px 20px 0 rgb(255 255 255 / 8%), 0 2px 4px 0 rgb(255 255 255 / 7%)");
        e.onmouseenter = function () {
            e.style.setProperty("box-shadow", "0 12px 20px 0 rgb(255 255 255 / 15%), 0 2px 4px 0 rgb(255 255 255 / 15%)");
        };
        e.onmouseleave = function () {
            e.style.setProperty("box-shadow", "0 12px 20px 0 rgb(255 255 255 / 8%), 0 2px 4px 0 rgb(255 255 255 / 7%)");
        };
    });
    document.querySelectorAll(".services .container .box .number").forEach(e => {
        e.style.setProperty("background-color", "#292929");
        e.firstElementChild.style.setProperty("background-color", "#292929");
    });
    // skills
    let spansPrecent = document.querySelectorAll(".our-skills .container .prog-languages .language .line span");
    spansPrecent[0].style.setProperty("width", "80%");
    spansPrecent[1].style.setProperty("width", "85%");
    spansPrecent[2].style.setProperty("width", "70%");
    spansPrecent[3].style.setProperty("width", "80%");
    document.querySelectorAll(".our-skills .container .prog-languages .language .line").forEach(e => {
        darkgrey(e);
    });
    // how it works
    darkgrey(document.querySelector(".work"));
    darkgrey(document.querySelector(".work .container .pic"));
    document.querySelectorAll(".work .container .box .content").forEach(e => {
        e.style.setProperty("background-color", "#404040");
        e.style.setProperty("--main-background-color", "#333333");
    });
    document.querySelectorAll(".work .container .box .content .logo").forEach(e => {
        e.style.setProperty("background-color", "transparent");
    });
    // events
    document.querySelectorAll(".events .container .box .count-down .unit").forEach(e => {
        black(e);
        e.style.setProperty("border-color", "#333333");
        e.onmouseenter = function () {
            e.style.setProperty("border-color", "var(--main-color)");
            e.querySelector(".count-down .unit div").style.setProperty("border-color", "var(--main-color)");
        };
        e.onmouseleave = function () {
            e.style.setProperty("border-color", "#333333");
            e.querySelector(".count-down .unit div").style.setProperty("border-color", "#333333");
        };
    });
    document.querySelectorAll(".count-down .unit div").forEach(e => {
        e.style.setProperty("border-color", "#333333");
    });
    darkgrey(document.querySelector(".events form"));
    // pricing
    darkgrey(document.querySelector(".pricing"));
    darkgrey(document.querySelector(".pricing .dots-1"));
    darkgrey(document.querySelector(".pricing .dots-2"));
    document.querySelectorAll(".pricing .container .box").forEach(e => {
        black(e);
        e.style.setProperty("--pricing-psedou-color", "transparent");
    });
    // top videos
    darkgrey(document.querySelector(".video .container .select .shuffle"));
    darkgrey(document.querySelector(".video .container .play-video"));
    black(document.querySelector(".video .container p"));
    document.querySelectorAll(".video .container .select .video-select ul li span").forEach(e => {
        e.style.setProperty("color", "white");
    });
    document.querySelectorAll(".video .container .select .video-select ul li").forEach(e => {
        e.onmouseenter = function () {
            e.style.setProperty("background-color", "#9f9f9f6b");
        }
        e.onmouseleave = function () {
            e.style.setProperty("background-color", "#191919");
        }
    });
    // Our Awesome Stats
    document.querySelectorAll(".stats .container .box").forEach(e => {
        black(e);
    });
    document.querySelector(".stats").style.setProperty("--stats-before", "black");
}
if (window.localStorage.getItem("dark") === "true") { 
    darkMode();
}
darkModeBtn.addEventListener("click", (e) => {
    if (darkModeBtn.classList.contains("clicked")) {
        window.localStorage.dark = false;
        darkModeBtn.classList.remove("clicked");
        circle.style.cssText = "left:4px";
        for (let i = 0; i < allElements.length; i++) { 
            allElements[i].classList.remove("dark");
        }
        // main heading
        document.querySelectorAll(".main-heading").forEach(e => {
            e.style.setProperty("color", "black");
        });
        // header
        document.querySelectorAll(".nav-bar a").forEach(e => {
            white(e);
        });
        grey(document.querySelector(".landing"));
        document.querySelector("header").style.cssText = "box-shadow: 0 2px 15px rgb(0 0 0 / 10%);";
        white(document.querySelector(".mega-menu"));
        document.querySelectorAll("ul.nav-bar li a").forEach(e => {
            white(e);
            e.onmouseenter = function () {
                e.style.color = "var(--main-color)";
            };
            e.onmouseleave = function () {
                e.style.color = "black";
            };
        });
        document.querySelector(".landing").style.setProperty("--psedou-color", "white");
        document.querySelectorAll(".articles .container .box").forEach(e => {
            e.style.removeProperty("background-color");
            e.style.setProperty("box-shadow", "0 2px 15px rgb(0 0 0 / 10%)");
            e.onmouseenter = function () {
                e.style.setProperty("box-shadow", "0 2px 15px rgb(0 0 0 / 30%)")
            };
            e.onmouseleave = function () {
                e.style.setProperty("box-shadow", "0 2px 15px rgb(0 0 0 / 10%)");
            };
        });
        grey(document.querySelector(".gallery"));
        document.querySelectorAll(".gallery .container .picture").forEach(e => {
            e.style.setProperty("border-color", "white");
        });
        document.querySelectorAll(".features .container .box .image").forEach(e => {
            e.style.setProperty("--psedou-color", "white");
        });
        grey(document.querySelector(".testimonials"));
        document.querySelectorAll(".testimonials .container .box").forEach(e => {
            white(e);
            e.style.setProperty("box-shadow", "0 2px 15px rgb(0 0 0 / 10%)");
            e.onmouseenter = function () {
                e.style.setProperty("box-shadow", "0 2px 15px rgb(0 0 0 / 30%)");
            };
            e.onmouseleave = function () { 
                e.style.setProperty("box-shadow", "0 2px 15px rgb(0 0 0 / 10%)");
            }
        });
        document.querySelectorAll(".team-members .container .box").forEach(e => {
            e.style.setProperty("--psedou-color", "#eee");
        });
        document.querySelectorAll(".team-members .container .box").forEach(e => {
            e.style.setProperty("--team-slider-color", "#c1c1c1");
        });
        document.querySelectorAll(".social a").forEach(e => {
            e.style.setProperty("background-color", "transparent");
        });
        // sevices
        grey(document.querySelector(".services"));
        document.querySelectorAll(".services .container .box").forEach(e => {
            white(e);
            e.style.setProperty("box-shadow", "0 12px 20px 0 rgb(0 0 0 / 8%), 0 2px 4px 0 rgb(0 0 0 / 7%)");
            e.onmouseenter = function () {
                e.style.setProperty("box-shadow", "0 12px 20px 0 rgb(0 0 0 / 15%), 0 2px 4px 0 rgb(0 0 0 / 15%)");
            };
            e.onmouseleave = function () {
                e.style.setProperty("box-shadow", "0 12px 20px 0 rgb(0 0 0 / 8%), 0 2px 4px 0 rgb(0 0 0 / 7%)");
            };
        });
        document.querySelectorAll(".services .container .box .number").forEach(e => {
            e.style.setProperty("background-color", "#f9f9f9");
            e.firstElementChild.style.setProperty("background-color", "#f9f9f9");
        });
        // skills
        document.querySelectorAll(".our-skills .container .prog-languages .language .line").forEach(e => {
            grey(e);
        });
        // how it works
        grey(document.querySelector(".work"));
        grey(document.querySelector(".work .container .pic"));
        document.querySelectorAll(".work .container .box .content").forEach(e => {
            e.style.setProperty("background-color", "#f9f9f9");
            e.style.setProperty("--main-background-color", "#ececec");
        });
        // events
        document.querySelectorAll(".events .container .box .count-down .unit").forEach(e => {
            e.style.setProperty("border-color", "var(--main-background-color)");
            white(e);
        });
        document.querySelectorAll(".count-down .unit div").forEach(e => {
            e.style.setProperty("border-color", "var(--main-background-color)");
        });
        grey(document.querySelector(".events form"));
        // pricing
        grey(document.querySelector(".pricing .dots-1"));
        grey(document.querySelector(".pricing .dots-2"));
        grey(document.querySelector(".pricing"));
        document.querySelectorAll(".pricing .container .box").forEach(e => {
            white(e);
            e.style.setProperty("--pricing-psedou-color", "rgb(248, 248, 248)");
        });
        // top videos
        grey(document.querySelector(".select .shuffle"));
        grey(document.querySelector(".play-video"));
        white(document.querySelector(".video .container p"));
        document.querySelectorAll(".video .container .select .video-select ul li span").forEach(e => {
            e.style.setProperty("color", "black");
        });
        document.querySelectorAll(".video .container .select .video-select ul li").forEach(e => {
            e.style.setProperty("background-color", "white");
            e.onmouseenter = function () {
                e.style.setProperty("background-color", "#9f9f9f6b");
            }
            e.onmouseleave = function () {
                e.style.setProperty("background-color", "white");
            }
        });
        // Our Awesome Stats
        document.querySelectorAll(".stats .container .box").forEach(e => {
            white(e);
        });
        document.querySelector(".stats").style.setProperty("--stats-before", "white");
    } else {
        darkMode();
    }
});
