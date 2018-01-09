function liTiklandi(hedefID,onTaki,icerikOnTaki)
{
var relNum = hedefID.replace(onTaki,""); 
var liList = nY('menuseridi').getElementsByTagName('li'); 
for(lin=0;lin<liList.length;lin++){liList[lin].className='';}
nY(hedefID).className='secili';

var tAI = nY('altIcerikler').getElementsByTagName('div'); 
for(ti=0;ti<tAI.length;ti++){tAI[ti].style.display='none';}
document.getElementById(icerikOnTaki+relNum).style.display = 'block';
}

function seritKaysin(yon)
						{
var mS = nY('menuseridi');
var liList = nY('menuseridi').getElementsByTagName('li'); 
var pA = nY('panoalti');
//alert(mS.style.padding);
//var liW = (parseInt(liList[0].offsetWidth)); // bunun üzerinden gidilecek birde paddingler var 

var beherMiktar = 120;
var ustFark = -(parseInt(liList.length*beherMiktar) - parseInt(pA.offsetWidth));
//alert(mS.offsetWidth+'\n'+pA.offsetWidth);
var animSuresi = 1;
var beherPiksel = 4;

switch (yon)
{
case 'g':
		var zamanlayici = setInterval(function(){
													//alert('test');
													nesneSolMargin = parseInt(mS.style.marginLeft.replace('px',''));
													if(nesneSolMargin==0||nesneSolMargin>0){
																							clearInterval(zamanlayici);
																							mS.style.marginLeft = 0 +'px';
																							return
																							};
													nesneSolMargin+=beherPiksel;
													//alert(nesneSolMargin);
													mS.style.marginLeft = nesneSolMargin +'px';
													if (nesneSolMargin%beherMiktar==0){clearInterval(zamanlayici);dugmeSoldur(nesneSolMargin)};
													},
										animSuresi);
		break;

case 'i':
		var zamanlayici = setInterval(function(){
													//alert('test2');
													nesneSolMargin = parseInt(mS.style.marginLeft.replace('px',''));
													if(nesneSolMargin==ustFark||nesneSolMargin<ustFark){
																							clearInterval(zamanlayici);
																							//mS.style.marginLeft = ustFark +'px';
																							return
																							};
													nesneSolMargin-=beherPiksel;
													mS.style.marginLeft = nesneSolMargin +'px';
													//if(nesneSolMargin<ustFark){alert(ustFark+'\n'+nesneSolMargin)};
													if (nesneSolMargin%beherMiktar==0){clearInterval(zamanlayici)};
													},
										animSuresi);
		break;

}						
						}



function dugmeSoldur(solmarginNeymis)
{
// gereksiz bir fonksiyon ama şu şekilde devam edilebilir
if(solmarginNeymis==0||solmarginNeymis>0){
nY('geriD').style.backgroundPosition='-42px 0px';
}
else
{
nY('geriD').style.backgroundPosition='0px 0px';
}
}
