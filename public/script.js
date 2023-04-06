const api_url =
  "https://sgp1.blynk.cloud/external/api/get?token=rEpQvAh5ysOY-Ue0oQ3LWEcXw8A47LFa&v33&v32&v35";

setInterval(() => {
  fetch(api_url)
    .then((hasil) => hasil.json())
    .then((res) => {
      var field = JSON.stringify(res.v33);
      var field1 = JSON.stringify(res.v32);
      var field2 = JSON.stringify(res.v35);
      var obj = JSON.parse(field);
      var obj1 = JSON.parse(field1);
      var obj2 = JSON.parse(field2);
      document.getElementById("v33").innerHTML = obj;
      document.getElementById("v32").innerHTML = obj1;
      document.getElementById("v35").innerHTML = obj2;
    });
}, 1000);
