function nY(hN){return document.getElementById(hN);}; // id den nesne yaratır
function nS(hN){nY(hN).parentNode.removeChild(nY(hN));}; // id den nesne siler
function nSd(hN){hN.parentNode.removeChild(hN);}; // nesne (object)den nesne siler
function nH(e){if (window.event){var e = window.event;var elm = e.srcElement;}else{var elm = e.target;};return elm}; //Olayın kaynak nesnesini verir
function eY(elmTag,parentId,elmId,elmName,insValue,insHTML,elmType)
	{
		var yElm = document.createElement(elmTag);
		if(elmId){yElm.id=elmId;}
		if(elmName){yElm.name=elmName;}
		if(insValue){yElm.value=insValue;}
		if(insHTML){yElm.innerHTML=insHTML;}
		if(elmType){yElm.type = elmType;}
		if(parentId){nY(parentId).appendChild(yElm);}else{document.body.appendChild(yElm);}
return yElm;
	}
function tamYeriNere(elmId) // Object de alıyor id (string) te.
{
if(typeof(elmId)=='object'){var obj = elmId}else{var obj = document.getElementById(elmId);}
var curleft = curtop = 0;
	if (obj.offsetParent)
	{
							do {
										curleft += obj.offsetLeft;
										curtop += obj.offsetTop;
								} while (obj = obj.offsetParent);

	}
	return [curleft,curtop];
}