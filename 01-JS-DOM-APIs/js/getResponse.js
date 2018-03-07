function getResponse(config){
            // Return a new promise.
            return new Promise(function(resolve, reject) {
                                var req = new XMLHttpRequest();
                                req.open('GET', config, true);
                                req.onload = function() {
                                                  var data=this.responseText;
                                                  var jsonResponse = JSON.parse(data);
                                                  if (this.readyState == 4 && this.status == 200) {
                                                  // Copy the response on textarea
                                                  document.getElementById("respuesta").value = document.getElementById("respuesta").value + "\n" + jsonResponse["value"].joke;
                                                }
                                          else {
                                                  // Otherwise reject with the status text and set section area background red
                                                  document.getElementById("respuesta").style.background = "#FC0000";
                                                  document.getElementById("respuesta").value = "TIMEOUT ERROR";
                                                  reject(Error(req.statusText));
                                                }
                                  };
                                  req.onerror = function(){
                                          document.getElementById("respuesta").style.background = "#FC0000";
                                          document.getElementById("respuesta").value = "CONNECT ERROR";
                                          reject(Error(req.statusText));
                                  };
                                  req.send();
                              });
  }


  function getResponseOnList(config){
              // Return a new promise.
              return new Promise(function(resolve, reject) {
                                  var req = new XMLHttpRequest();
                                  req.open('GET', config, true);
                                  req.onload = function() {
                                                    if (this.readyState == 4 && this.status == 200) {
                                                    // Adding the response on list
                                                          var ul = document.getElementById("lista");
                                                          var li = document.createElement("li");
                                                          li.appendChild(document.createTextNode(this.responseText));
                                                          ul.appendChild(li);
                                                  }
                                            else {
                                                    // Otherwise reject with the status text
                                                    reject(Error(req.statusText));
                                                  }
                                    };
                                    req.onerror = function(){
                                            reject(Error(req.statusText));
                                    };
                                    req.send();
                                });
    }
