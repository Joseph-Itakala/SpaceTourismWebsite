async function getData(){const e=await fetch("../data.json"),c=await e.json();console.log(c);const n=document.getElementById("commander"),t=document.getElementById("mission"),r=document.getElementById("pilot"),o=document.getElementById("flight"),d=document.createElement("img");document.querySelector("section.img-box").appendChild(d),d.src=c.crew[0].images.png,d.alt="pictures of the crews",document.querySelector("section.detail-box > h4").innerHTML=c.crew[0].role,document.querySelector("section.detail-box > h2").innerHTML=c.crew[0].name,document.querySelector("p.text-crew").innerHTML=c.crew[0].bio;let i=1;setInterval(function(){switch(i){case 1:n.checked=!0,t.checked=!1,r.checked=!1,o.checked=!1,i=2;break;case 2:n.checked=!1,t.checked=!0,r.checked=!1,o.checked=!1,i=3;break;case 3:n.checked=!1,t.checked=!1,r.checked=!0,o.checked=!1,i=4;break;case 4:n.checked=!1,t.checked=!1,r.checked=!1,o.checked=!0,i=1}n.checked?n.dispatchEvent(new Event("change")):t.checked?t.dispatchEvent(new Event("change")):r.checked?r.dispatchEvent(new Event("change")):o.checked&&o.dispatchEvent(new Event("change"))},15e3),n.addEventListener("change",function(){document.querySelector("section.detail-box > h4").innerHTML=c.crew[0].role,document.querySelector("section.detail-box > h2").innerHTML=c.crew[0].name,document.querySelector("p.text-crew").innerHTML=c.crew[0].bio,d.src=c.crew[0].images.png}),t.addEventListener("change",function(){document.querySelector("section.detail-box > h4").innerHTML=c.crew[1].role,document.querySelector("section.detail-box > h2").innerHTML=c.crew[1].name,document.querySelector("p.text-crew").innerHTML=c.crew[1].bio,d.src=c.crew[1].images.png}),r.addEventListener("change",function(){document.querySelector("section.detail-box > h4").innerHTML=c.crew[2].role,document.querySelector("section.detail-box > h2").innerHTML=c.crew[2].name,document.querySelector("p.text-crew").innerHTML=c.crew[2].bio,d.src=c.crew[2].images.png}),o.addEventListener("change",function(){document.querySelector("section.detail-box > h4").innerHTML=c.crew[3].role,document.querySelector("section.detail-box > h2").innerHTML=c.crew[3].name,document.querySelector("p.text-crew").innerHTML=c.crew[3].bio,d.src=c.crew[3].images.png})}getData();