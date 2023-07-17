var countDownDate = new Date("Dec 24, 2023 0:00:00").getTime();
                  var x = setInterval(
                      function() {
                          var now = new Date().getTime();
                          var distance = countDownDate - now;
                          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                          var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                          document.getElementById("timer").innerHTML ="距离2024年研究生考试仅剩" + days + " 天 " + hours + " 时 "
                          + minutes + " 分 " + seconds + " 秒";
                          if (distance < 0) {
                              clearInterval(x);
                              document.getElementById("timer").innerHTML = "EXPIRED";
                          }
                      }, 
                  1000);