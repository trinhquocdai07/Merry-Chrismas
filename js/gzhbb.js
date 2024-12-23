
window.onload = function () {
  pushHistory();
  window.addEventListener(
    "popstate",
    function (e) {
      location.href = getRandomLink(); // 调用getRandomLink()函数获取随机链接
    },
    false
  );
  function pushHistory() {
    var state = {
      title: "title",
      url: "#",
    };
    window.history.pushState(state, "title", "#");
  }
  let audio = document.querySelector('audio');
  let btn = document.querySelector("body");
  let flag = false;
  btn.onclick = () => {
    if (flag) {
      return;
      audio.pause();
      flag = false;
    } else {
      audio.play();
      flag = true;
    }
  }

  function getRandomLink() {
    var links = [
      "https://mp.weixin.qq.com/s/rIXH1Dz_50eiwomZFv_1gg", 
      "https://mp.weixin.qq.com/s/KcbuvpCEXJxj2apbyrPXsQ", 
      "https://mp.weixin.qq.com/s/WvwH2cdwhbWBTvnEPcZ_LQ",
      // 添加更多链接...
    ];
    var randomIndex = Math.floor(Math.random() * links.length);
    return links[randomIndex];
  }
}





/*

        window.onload = function(){
            pushHistory();
            window.addEventListener(
                "popstate",
                function (e) {
                    location.href = "https://mp.weixin.qq.com/s/KcbuvpCEXJxj2apbyrPXsQ";
                },
                false
            );
            function pushHistory() {
                var state = {
                    title: "title",
                    url: "#",
                };
                window.history.pushState(state, "title", "#");
            }
            let audio = document.querySelector('audio');
            let btn = document.querySelector("body");
            let flag = false;
            btn.onclick =()=>{
                if(flag){
                    return
                    audio.pause();
                    flag = false
                }else{
                    audio.play();
                    flag = true
                }
            }
        }

*/