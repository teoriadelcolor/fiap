<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2685.4">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; -webkit-text-stroke: #000000}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; -webkit-text-stroke: #000000; min-height: 14.0px}
    span.s1 {font-kerning: none}
  </style>
</head>
<body>
<p class="p1"><span class="s1">const url = 'https://fiapnas.synology.me:5000/webapi/';</span></p>
<p class="p1"><span class="s1">const username = ‘‘; // Reemplaza con tu nombre de usuario</span></p>
<p class="p1"><span class="s1">const password = ‘‘; // Reemplaza con tu contraseña</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">async function authenticate() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const response = await fetch(`${url}auth.cgi?api=SYNO.API.Auth&amp;method=login&amp;version=2&amp;username=${username}&amp;password=${password}`);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const data = await response.json();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return data;</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">async function fetchData() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const authResponse = await authenticate();</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (authResponse.success) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>const sessionId = authResponse.data.sid;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>const filesResponse = await fetch(`${url}FileStation/list.cgi?api=SYNO.FileStation.List&amp;method=list&amp;version=2&amp;sid=${sessionId}&amp;directory=%2F`);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>const filesData = await filesResponse.json();</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">        </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>document.getElementById('data').innerHTML = JSON.stringify(filesData, null, 2);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>alert('Error de autenticación');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">document.getElementById('fetchData').addEventListener('click', fetchData);</span></p>
</body>
</html>
