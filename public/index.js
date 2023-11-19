let intervalSocials;
let intervalFriends;

function resizeFunc(event) {
  const smallest = 300;
  const phone = 1800;
  
  let className = "sociallink-normal";
  
  if (window.innerWidth <= smallest) {
    className = "sociallink-smallest";
  }
  else if (window.innerWidth <= phone) {
    className = "sociallink-small";
  }
  
  let allElements = document.getElementsByClassName("sociallink");
  for (let i = 0; i < allElements.length; i++) {
      allElements[i].setAttribute("class", "sociallink " + className);
  }
}

function socialsLeft() {
    var socials = document.getElementById("sociallinks");
    var temp = socials.children.item(socials.children.length - 1);
    temp.remove();
    socials.insertBefore(temp, socials.firstChild);

    clearInterval(intervalSocials);
    intervalSocials = setInterval(socialsRight, 7000);
}

function socialsRight() {
    var socials = document.getElementById("sociallinks");
    var temp = socials.children.item(0);
    temp.remove();
    socials.appendChild(temp);

    clearInterval(intervalSocials);
    intervalSocials = setInterval(socialsRight, 7000);
}

function friendsLeft() {
    var socials = document.getElementById("friendlinks");
    var temp = socials.children.item(socials.children.length - 1);
    temp.remove();
    socials.insertBefore(temp, socials.firstChild);

    clearInterval(intervalFriends);
    intervalFriends = setInterval(friendsRight, 10000);
}

function friendsRight() {
    var socials = document.getElementById("friendlinks");
    var temp = socials.children.item(0);
    temp.remove();
    socials.appendChild(temp);

    clearInterval(intervalFriends);
    intervalFriends = setInterval(friendsRight, 10000);
}

intervalSocials = setInterval(socialsRight, 7000);
intervalFriends = setInterval(friendsRight, 10000);

addEventListener("resize", resizeFunc);

