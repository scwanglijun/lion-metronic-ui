var _carbonads={init:function(where){_carbon_where=null;if(where)_carbon_where=where;var placement=this.getUrlVar('placement');var serve=this.getServe(this.getUrlVar('serve'),placement);var baseurl='http://cdn.carbonads.com/srv.buysellads.com';if(window.location.protocol=='http:')baseurl='http://cdn.carbonads.com/srv.carbonads.net';var pro=document.createElement('script');pro.id='_carbonads_projs';pro.type='text/javascript';pro.src='//'+baseurl+'/ads/'+serve+'.json?segment=placement:'+placement+'&callback=_carbonads_go';var ck='';try{ck=document.cookie}catch(e){};var day=ck.indexOf('_bsap_daycap='),life=ck.indexOf('_bsap_lifecap=');day=day>=0?ck.substring(day+12+1).split(';')[0].split(','):[];life=life>=0?ck.substring(life+13+1).split(';')[0].split(','):[];if(day.length||life.length){var freqcap=[];for(var i=0;i<day.length;i++){var adspot=day[i];for(var found=-1,find=0;find<freqcap.length&&found==-1;find++)if(freqcap[find][0]==adspot)found=find;if(found==-1)freqcap.push([adspot,1,0]);else freqcap[found][1]++}for(var i=0;i<life.length;i++){var adspot=day[i];for(var found=-1,find=0;find<freqcap.length&&found==-1;find++)if(freqcap[find][0]==adspot)found=find;if(found==-1)freqcap.push([adspot,0,1]);else freqcap[found][2]++}for(var i=0;i<freqcap.length;i++)freqcap[i]=freqcap[i].join(',');if(freqcap.length)pro.src+='&freqcap='+freqcap.join(';')}document.getElementsByTagName('head')[0].appendChild(pro)},getServe:function(serve,placement){var skip=['978gs','aaronrussellcouk','abundantcodecom','alexyoungorg','alphapixelscom','amiresponsivedesignis','andrewdumontme','appscreensco','asymco','beautifulpixelscom','benevanscom','benhowdle','blockio','blogdavidtateorg','blogechoenduringcom','bloggarstasiocom','blogshaydesdsgncom','bootstrapstage','bootstrapvalidatorcom','bootzee','brdrckme','byteswirecom','cferdinandigithubiokraken','chainso','codepen','cooldesignjobscom','css3gencom','cssstatscom','csstypesetcom','cube3x','damiannicholsoncom','danluucom','davidchartiercom','dbtek','designspiration','dogechaininfo','drewsymocom','drublicde','dzyngiricom','finerthingsin-archived','freshas','fribbblecom','geekingspreecom','geocoderca','getskeletoncom','gomakethingscomblog','gotoandlearn','grackcom','hackerbracket','hawkeecom','hellomrperez','htmlsig','iconiicom','ihatetomatoesnet','inspectelementcom','johnpolacekcom','jsdbio','jshintcom','kilianvalkhofcom','laravel','launchbyte','launchingnext','leebrimelow','leostartsupcom','lovebootstrapcom','markitupjaysalvatcom','markoprljictumblrcom','materialupcom','mathiasbynensbe','matmartinez','merowinginfo','middlemanappcom','mmminimalcom','mobileosgeek','motionographercom','newstartupscom','nomadlistcom','noteandpointcom','npmstatcom','osvaldas','packalorg','pastieorg','pydocnet','scottksmithcom','septemberindustrycouk','shirtmockupcom','stierncom','stoweboydcom','stugreenhamcomblog','taylordavidsoncomwriting','techslides','thebootstrapthemescom','thedreamercc','theinstructionalcom','thenameapp','tnycz-delete','tympanusnet','webjobbingcom','wppbio','wwwbuildinternetcom','wwwravelrumbacom','wwwsqlreplcom','xtermit','dribbblenewtab','dribbblenewtab2'];var reroute=new Array();reroute['onepagelove']='CVYD42T';reroute['cssgradients']='CVYD42T';reroute['wwwquenesscom']='CVYD42T';reroute['realfavicongeneratornet']='CVYD42T';reroute['hipsteripsumme']='CVYD42T';reroute['socialdoe']='CVYD42T';reroute['logogeekuk']='CVYD42T';reroute['htmlxprs']='CVYD42T';reroute['formvalidatornet']='CVYD42T';reroute['taybenlorcom']='C6AILKT';reroute['fontawesome']='C6AILKT';reroute['startbootstrapcom']='CVYD42E';reroute['w3bincom']='CVYD42E';reroute['danielmiesslercom']='CVYD42E';reroute['emojicheatsheetcom']='CVYD42E';reroute['davidaireycom']='CVYD42E';if(skip.indexOf(placement)>0)return'F6AIK5T';if(this.isset(reroute[placement]))return reroute[placement];return serve},getUrlVar:function(name){name=name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");var regexS="[\\?&]"+name+"=([^&#]*)";var regex=new RegExp(regexS);var results=regex.exec(document.getElementById('_carbonads_js').src);if(results==null)return'';else return results[1]},isset:function(v){return typeof v!=='undefined'&&v!=null},refresh:function(){this.remove(document.getElementById('_carbonads_projs'));this.remove(document.getElementById('carbonads'));this.init()},reload:function(where){this.remove(document.getElementById('_carbonads_projs'));this.init(where)},remove:function(el){if(typeof el!=='undefined'&&el!=null)el.parentNode.removeChild(el)}};function _carbonads_go(b){var ad=b['ads'][0],link,fulllink,image,description;var placement=_carbonads.getUrlVar('placement');var serve=_carbonads.getUrlVar('serve');if(ad.html!=null)ad=JSON.parse(ad.html);if(ad.fetch!=null){var fetch=document.createElement('script');fetch.type='text/javascript';fetch.src=ad.fetch+'/'+placement+'/8/';if(ad.click_redir!=null)fetch.src+='?click_redir='+encodeURIComponent(ad.click_redir)+'&r='+Math.round(Date.now()/10000);else fetch.src+='/?'+Math.round(Date.now()/10000);document.getElementsByTagName('head')[0].appendChild(fetch);return}image=ad.image;link=ad.statlink.split('?encredirect=');description=ad.description;if(typeof link[1]!='undefined')fulllink=link[0]+'?segment=placement:'+placement+';&encredirect='+encodeURIComponent(link[1]);else if(link[0].search('http://cdn.carbonads.com/srv.buysellads.com')>0)fulllink=link[0]+'?segment=placement:'+placement+';';else fulllink=link[0];if(window.location.protocol=='http:')fulllink=fulllink.replace('http://cdn.carbonads.com/srv.buysellads.com','http://cdn.carbonads.com/srv.carbonads.net');var el=document.createElement('span');el.innerHTML='<span class="carbon-wrap"><a href="'+fulllink+'" class="carbon-img" target="_blank"><img src="'+ad.image+'" alt="" border="0" height="100" width="130" style="max-width:130px;" /></a><a href="'+fulllink+'" class="carbon-text" target="_blank">'+ad.description+'</a></span>';if(!_carbonads.isset(ad.removecarbon))el.innerHTML+='<a href="http://carbonads.net/" class="carbon-poweredby" target="_blank">ads via Carbon</a>';if(typeof ad.pixel!='undefined'){var pix=document.createElement('img');pix.src=ad.pixel;pix.border='0';pix.height='1';pix.width='1';pix.style.display='none';el.appendChild(pix)}var n=document.getElementsByClassName('carbon-wrap');var fdiv=document.createElement('div');fdiv.id=n.length>0?'carbonads_'+n.length:'carbonads';fdiv.appendChild(el);var carbonjs=document.getElementById('_carbonads_js');if(carbonjs!=null)if(_carbonads.isset(_carbon_where))_carbon_where.appendChild(fdiv);else carbonjs.parentNode.insertBefore(fdiv,carbonjs.nextSibling);_bsap_serving_callback(ad.bannerid,ad.zonekey,ad.freqcap)}_carbonads.init();window['_bsap_serving_callback']=function(banner,zone,freqcap){var append=function(w,data,days){var c=document.cookie,i=c.indexOf(w+'='),existing=i>=0?c.substring(i+w.length+1).split(';')[0]+',':'',d=new Date();d.setTime(days*3600000+d);data=existing+data;data=data.substring(0,2048);document.cookie=w+'='+data+'; expires='+d.toGMTString()+'; path=\/'};if(freqcap){append('_bsap_daycap',banner,1);append('_bsap_lifecap',banner,365)}};