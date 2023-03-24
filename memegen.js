window.onload = function() {
  var form = document.getElementById("form");
  form.addEventListener("submit", function(event){
    event.preventDefault() // prevents form from autosubmitting (refreshing)

    //gets submission values
    var url = document.getElementById("url").value;
    var toptext = document.getElementById("toptext").value;
    var bottext = document.getElementById("bottext").value;


    //create container and new image with url
    var con = document.createElement("div");
    con.classList.add('con');
    var newimg = document.createElement("img");
    newimg.setAttribute("src", url);
    newimg.classList.add("images");


    //add texts to container
    var tt = document.createElement("div");
    var bt = document.createElement("div");
    tt.innerText = toptext;
    bt.innerText = bottext;
    tt.classList.add('caption');
    tt.setAttribute('id','tt');
    bt.classList.add('caption');
    bt.setAttribute('id','bt');
    con.appendChild(tt);
    con.appendChild(bt);


    //append new image to container and container to bot
    con.appendChild(newimg);
    var bot = document.querySelector("#bottom_container");
    bot.appendChild(con);

    localStorage.clear();

  });

  var botcon = document.getElementById("bottom_container");
  botcon.addEventListener("click", function(event){
    if(event.target.getAttribute('class') === 'images') {
      event.target.parentElement.remove();
    }
  })

}

