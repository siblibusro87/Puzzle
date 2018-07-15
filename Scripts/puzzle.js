/*
* grrd's Puzzle
* Copyright (c) 2012 Gerard Tyedmers, grrd@gmx.net
* Licensed under the MPL License
*/

!function(){"use strict";var e,s,a,t,o,n,i,g,r,l,p,w,c,u,m,d,h,f,b,v,P,_,y,I,k,x,D,T,A,R,S,C=!!window.HTMLCanvasElement,L=new Kinetic.Layer({name:"g_layer"}),M=new Kinetic.Layer({name:"g_back_g_layer"}),X=new Kinetic.Stage({container:"container",width:document.getElementById("container").width,height:document.getElementById("container").height}),Y=!!navigator.userAgent.match(/(iPad|iPhone|iPod)/g),E=!1,z=0,B=!1,K=2,O=new Image,F="",j=4,W=6,H=15,N=0,U=!1,Z=!1,G=!1,V=!0,q=!0,J=!0,Q=!0,ee=!1,te=!0,ae=!0,oe=!1,ne=$("#select_theme_img"),se=$("#b_back_g_grid"),ie=$("#b_back_g_image"),ge=$("#b_rotate"),re=$("#b_sound"),le=$("#container"),ce=$("#b_gold"),ue=$("#b_gold_enabled"),me=$("#b_gold_disabled"),de=$("#b_prev"),he=$("#b_next"),fe=$("#bt_easy"),be=$("#bt_med"),ve=$("#bt_hard"),pe=$("#bt_close"),we=$("#b_image_input"),Pe=$("#popupTheme"),_e=$("#popupNewTheme"),ye=function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}}();function $e(){U=!(Z=!0)}function Ie(){var t;$.mobile.hidePageLoadingMsg(),$.mobile.changePage("#game",{transition:"slide"}),setTimeout(function(){var e=L.getChildren();for(t=0;t<e.length;t+=1)e[t].setZIndex(Math.floor(Math.random()*W*j));for(t=0;t<e.length;t+=1)G?new Kinetic.Tween({node:e[t],x:Math.floor(Math.random()*k*(W-1))+k/2,y:Math.floor(Math.random()*x*(j-1))+x/2,rotation:.5*Math.PI*Math.floor(4*Math.random()),duration:1,onFinish:$e()}).play():new Kinetic.Tween({node:e[t],x:Math.floor(Math.random()*k*(W-1))+k/2,y:Math.floor(Math.random()*x*(j-1))+x/2,duration:1,onFinish:$e()}).play()},2e3)}function ke(a,o,n,s){!function(){var t;if(V){var e=new Kinetic.Shape({drawFunc:function(e){e.beginPath(),e.moveTo(y,I),0===o?e.lineTo(y+k,I):(e.bezierCurveTo(y+.8*k,I+.1*x*n,y,I-.25*x*n,y+k/2,I-.25*x*n),e.bezierCurveTo(y+k,I-.25*x*n,y+.2*k,I+.1*x*n,y+k,I)),a===W-1?e.lineTo(y+k,I+x):(e.bezierCurveTo(y+k+.1*k*n,I+.8*x,y+k-.25*k*n,I,y+k-.25*k*n,I+x/2),e.bezierCurveTo(y+k-.25*k*n,I+x,y+k+.1*k*n,I+.2*x,y+k,I+x)),o===j-1?e.lineTo(y,I+x):(e.bezierCurveTo(y+.2*k,I+x-.1*x*n,y+k,I+x+.25*x*n,y+k/2,I+x+.25*x*n),e.bezierCurveTo(y,I+x+.25*x*n,y+.8*k,I+x-.1*x*n,y,I+x)),0===a?e.lineTo(y,I):(e.bezierCurveTo(y-.1*k*n,I+.2*x,y+.25*k*n,I+x,y+.25*k*n,I+x/2),e.bezierCurveTo(y+.25*k*n,I,y-.1*k*n,I+.8*x,y,I)),e.closePath(),e.fillStrokeShape(this)},fillPatternImage:s,fillPatternOffset:[a*k,o*x],stroke:"black",strokeWidth:4});e.toImage({width:k+.6*k,height:x+.6*x,x:.3*-k,y:.3*-x,callback:function(e){Xe(t=new Kinetic.Image({image:e,x:a*k+k/2,origX:a*k+k/2,y:o*x+x/2,origY:o*x+x/2,row:o,col:a,offset:[k/2+.3*k,x/2+.3*x],draggable:!0,dragBoundFunc:function(e){var t=e.y,a=e.x;return a<0&&(a=0),p<a&&(a=p),t<0&&(t=0),w<t&&(t=w),{x:a,y:t}},name:"part_z"+o+"_s"+a})),t.createImageHitRegion(function(){L.drawHit()})}}),e.setStrokeWidth(null),e.setStroke(null),e.toImage({width:k+.6*k,height:x+.6*x,x:.3*-k,y:.3*-x,callback:function(e){b[o][a]=e}})}else Xe(t=new Kinetic.Image({x:a*k+k/2,origX:a*k+k/2,y:o*x+x/2,origY:o*x+x/2,row:o,col:a,width:k,height:x,offset:[k/2,x/2],crop:{x:s.width/W*a,y:s.height/j*o,width:s.width/W,height:s.height/j},stroke:"black",strokeWidth:4,fill:"black",Image:s,draggable:!0,dragBoundFunc:function(e){var t=e.y,a=e.x;return a<0&&(a=0),p<a&&(a=p),t<0&&(t=0),w<t&&(t=w),{x:a,y:t}},name:"part_z"+o+"_s"+a}))}()}function xe(){var t,a;for(b=[],t=0;t<j;t+=1)b[t]=[];N=0,L.removeChildren(),M.removeChildren(),X.removeChildren(),X.setWidth(p),X.setHeight(w),I=y=0,k=p/W,x=w/j,1,X.add(L);var e=p,o=w;Y&&(o/=function(e,t){var a=document.createElement("canvas");a.width=1,a.height=t;var o=a.getContext("2d");o.drawImage(e,0,0);for(var n=o.getImageData(0,0,1,t).data,s=0,i=t,g=t;s<g;)0===n[4*(g-1)+3]?i=g:s=g,g=i+s>>1;var r=g/t;return 0===r?1:r}(O,O.naturalHeight));0!==D.getPos()||5!==g&&6!==g&&7!==g&&8!==g||(e=w,o=p);var n=new Kinetic.Image({width:e,height:o,crop:{x:0,y:0,width:O.width,height:O.height},Image:O});0!==D.getPos()||5!==g&&6!==g||(n.setRotationDeg(90),n.setX(p)),0!==D.getPos()||3!==g&&4!==g||(n.setRotationDeg(180),n.setX(p),n.setY(w)),0!==D.getPos()||7!==g&&8!==g||(n.setRotationDeg(270),n.setY(w)),n.toImage({width:p,height:w,callback:function(e){if((q||J)&&function(e){var t,a,o,n;if(J&&(t=new Kinetic.Image({x:0,y:0,width:p,height:w,Image:e,opacity:.1}),M.add(t),M.draw()),q)for(a=0;a<j;a+=1)for(o=0;o<W;o+=1)n=new Kinetic.Rect({x:o*k,y:a*x,width:k,height:x,stroke:"#333333",strokeWidth:2}),M.add(n);X.add(M),M.moveToBottom()}(e),V)n.toImage({width:p,height:w,callback:function(e){for(a=0;a<j;a+=1)for(t=0;t<W;t+=1)ke(t,a,a%2!=0&&t%2!=0||a%2==0&&t%2==0?1:-1,e);L.draw(),Ie()}});else{for(a=0;a<j;a+=1)for(t=0;t<W;t+=1)ke(t,a,a%2!=0&&t%2!=0||a%2==0&&t%2==0?1:-1,e);L.draw(),Ie()}}})}function De(){P=D.getPos(),v=$("input:radio[name=image-set-"+P+"]:checked").val(),U||(void 0!==v&&(void 0!==o||0!==P)?te&&$("#image"+P+"-"+v).hasClass("locked")||(U=!0,$.mobile.showPageLoadingMsg("a",document.webL10n.get("lb_load"),!1),q="on"===se.val(),J="on"===ie.val(),G="on"===ge.val(),Q="on"===re.val(),ye&&(localStorage.setItem("s_back_g_grid",se.val()),localStorage.setItem("s_backg_image",ie.val()),localStorage.setItem("s_rotate",ge.val()),localStorage.setItem("s_sound",re.val())),document.getElementById("container").width=r,document.getElementById("container").height=l,w=l-4,p=r,u=F,0!==P?(i=void 0!==window.devicePixelRatio?window.devicePixelRatio:1,n=Math.min(l,r)*i<=270?"s":1080<Math.min(l,r)*i?"l":"",t="Images/"+s+"/image-set-"+P+"/sujet"+F+v+n+".jpg"):t=o,$("#g_imageObj").one("load",function(){O=document.getElementById("g_imageObj"),xe()}).attr("src",t).each(function(){0<=navigator.sayswho.indexOf("MSIE")&&this.complete&&$(this).trigger("load")})):$("#popup_choose").popup("open"))}function Te(e,t,a,o){var n,s,i,g,r,l,c;if("g_layer"===e.getParent().attrs.name)if("g_layer"===t.getParent().attrs.name){t.setX(a),t.setY(o);var u=new Kinetic.Group({draggable:!0,dragBoundFunc:function(e){var t=e.y,a=e.x;return a<0&&(a=0),p<a&&(a=p),t<0&&(t=0),w<t&&(t=w),{x:a,y:t}}});e.moveTo(u),t.moveTo(u),e.setDraggable(!1),t.setDraggable(!1),L.add(u)}else g=e.getX(),r=e.getY(),t.getParent().setX(t.getParent().getX()+a-t.getAbsolutePosition().x),t.getParent().setY(t.getParent().getY()+o-t.getAbsolutePosition().y),e.moveTo(t.getParent()),e.setRotationDeg(t.getRotationDeg()),l=g-e.getAbsolutePosition().x,c=r-e.getAbsolutePosition().y,0===e.getParent().getRotationDeg()&&(e.setX(e.getX()+l),e.setY(e.getY()+c)),90===e.getParent().getRotationDeg()&&(e.setY(e.getY()-l),e.setX(e.getX()+c)),180===e.getParent().getRotationDeg()&&(e.setX(e.getX()-l),e.setY(e.getY()-c)),270===e.getParent().getRotationDeg()&&(e.setY(e.getY()+l),e.setX(e.getX()-c)),e.setDraggable(!1);else if("g_layer"===t.getParent().attrs.name)t.moveTo(e.getParent()),t.setAbsolutePosition(a,o),t.setRotationDeg(e.getRotationDeg()),t.setDraggable(!1);else{s=t.getParent().getChildren();for(var m=a-t.getAbsolutePosition().x,d=o-t.getAbsolutePosition().y;0<s.length;)void 0!==s[0]&&(g=(i=s[0]).getAbsolutePosition().x,r=i.getAbsolutePosition().y,i.moveTo(e.getParent()),i.setRotationDeg(e.getRotationDeg()),l=g-i.getAbsolutePosition().x+m,c=r-i.getAbsolutePosition().y+d,0===e.getParent().getRotationDeg()&&(i.setX(i.getX()+l),i.setY(i.getY()+c)),90===e.getParent().getRotationDeg()&&(i.setY(i.getY()-l),i.setX(i.getX()+c)),180===e.getParent().getRotationDeg()&&(i.setX(i.getX()-l),i.setY(i.getY()-c)),270===e.getParent().getRotationDeg()&&(i.setY(i.getY()+l),i.setX(i.getX()-c)))}var h=(s=e.getParent().getChildren())[0].getAbsolutePosition().x,f=s[0].getAbsolutePosition().x,b=s[0].getAbsolutePosition().y,v=s[0].getAbsolutePosition().y;for(n=0;n<s.length;n+=1)s[n].getAbsolutePosition().x<h&&(h=s[n].getAbsolutePosition().x),s[n].getAbsolutePosition().x>f&&(f=s[n].getAbsolutePosition().x),s[n].getAbsolutePosition().y<b&&(b=s[n].getAbsolutePosition().y),s[n].getAbsolutePosition().y>v&&(v=s[n].getAbsolutePosition().y);g=e.getAbsolutePosition().x,r=e.getAbsolutePosition().y,e.getParent().setOffset(0,0),e.getParent().setX((h+f)/2),e.getParent().setY((b+v)/2),l=g-e.getAbsolutePosition().x,c=r-e.getAbsolutePosition().y,0===e.getParent().getRotationDeg()&&e.getParent().setOffset(-1*l,-1*c),90===e.getParent().getRotationDeg()&&e.getParent().setOffset(-1*c,l),180===e.getParent().getRotationDeg()&&e.getParent().setOffset(l,c),270===e.getParent().getRotationDeg()&&e.getParent().setOffset(c,-1*l),"g_layer"===t.getParent().attrs.name?t.moveToTop():t.getParent().moveToTop(),L.draw(),Q&&document.getElementById("click_sound").play()}function Ae(e){var t,a,o,n,s=[-1,1,0,0],i=[0,0,-1,1];for(d="g_layer"===e.getParent().attrs.name?e.getRotationDeg():(e.getRotationDeg()+e.getParent().getRotationDeg())%360,t=0;t<s.length;t+=1)0<(n=X.get(".part_z"+(e.attrs.row+i[t])+"_s"+(e.attrs.col+s[t]))).length&&(h="g_layer"===n[0].getParent().attrs.name?n[0].getRotationDeg():(n[0].getRotationDeg()+n[0].getParent().getRotationDeg())%360,0===d&&(a=e.getAbsolutePosition().x+k*s[t],o=e.getAbsolutePosition().y+x*i[t]),90===d&&(a=e.getAbsolutePosition().x-x*i[t],o=e.getAbsolutePosition().y+k*s[t]),180===d&&(a=e.getAbsolutePosition().x-k*s[t],o=e.getAbsolutePosition().y-x*i[t]),270===d&&(a=e.getAbsolutePosition().x+x*i[t],o=e.getAbsolutePosition().y-k*s[t]),Math.abs(a-n[0].getAbsolutePosition().x)<H&&Math.abs(o-n[0].getAbsolutePosition().y)<H&&d===h&&("g_layer"===e.getParent().attrs.name||"g_layer"===n[0].getParent().attrs.name||e.getParent()!==n[0].getParent())&&Te(e,n[0],a,o))}function Re(e){void 0!==e&&(e.setX(e.attrs.origX),e.setY(e.attrs.origY),e.setRotationDeg(0),e.moveToBottom(),e.setStrokeWidth(null),e.setStroke(null),e.setDraggable(!1),V&&e.setImage(b[e.attrs.row][e.attrs.col]),L.draw(),V&&e.disableShadow(),Q&&document.getElementById("click_sound").play(),document.body.style.cursor="default",setTimeout(function(){(N+=1)===W*j&&(pe.css("display","none"),Q&&document.getElementById("ding_sound").play())},500))}function Se(e){ce.val(e).slider("refresh"),ye&&localStorage.setItem("s_gold",ce.val()),"on"===ce.val()?(ee=!0,$("#img_easy").attr("src","Images/easy_gold.svg"),$("#img_med").attr("src","Images/medium_gold.svg"),$("#img_hard").attr("src","Images/hard_gold.svg")):(ee=!1,$("#img_easy").attr("src","Images/easy.svg"),$("#img_med").attr("src","Images/medium.svg"),$("#img_hard").attr("src","Images/hard.svg"))}function Ce(){var e,t,a,o,n=0;for(e=1;e<5;e+=1)for(t=1;t<4;t+=1)a=ye&&localStorage.getItem(s+e+F+t)||0,n+=parseInt(a),te?0<a?((o=$("#medal"+e+"-"+t)).removeClass("dn"),o.attr("src","Images/medal"+a+".svg"),t<3&&($("#image"+e+"-"+(t+1)).removeClass("locked"),$("#lock"+e+"-"+(t+1)).addClass("dn"))):($("#medal"+e+"-"+t).addClass("dn"),t<3&&($("#image"+e+"-"+(t+1)).addClass("locked"),$("#lock"+e+"-"+(t+1)).removeClass("dn"))):($("#medal"+e+"-"+t).addClass("dn"),$("#image"+e+"-"+(t+1)).removeClass("locked"),$("#lock"+e+"-"+(t+1)).addClass("dn"));36===n?(ue.show(),Se("on"),ce.slider({theme:"d"}).slider("refresh"),me.hide()):(me.show(),Se("off"),ce.slider({theme:"d"}).slider("refresh"),ue.hide())}function Le(){var e,t;if(l=$(window).height(),r=$(window).width(),F="",r<l?(F="p",$("#img_title").attr("style","width:100%;"),$(".image0").attr("style","height:"+1.5*(r/3-50)+"px;"),$(".lock").css({left:"10%",bottom:(r-70)/9.8,width:"80%"})):($("#img_title").attr("style","max-height:"+l/5+"px;"),$(".image0").attr("style","height:"+(r/3-50)/1.5+"px;"),$(".lock").css({left:"25%",bottom:(r-70)/30,width:"50%"})),Pe.css("max-height",l-10+"px"),_e.css("max-width",r-10+"px"),fe.attr("style","width:"+(r/3-12)+"px;"),be.attr("style","width:"+(r/3-12)+"px;"),ve.attr("style","width:"+(r/3-12)+"px;"),navigator.onLine){for(e=1;e<K+1;e+=1)for(t=1;t<4;t+=1)$("#radio"+e+"-"+t).attr("style","width:"+(r/3-12)+"px;"),$("#image"+e+"-"+t).attr("src","Images/"+s+"/image-set-"+e+"/sujet"+F+t+"s.jpg");$(".offline").hide(),$(".online").show()}else $(".offline").show(),$(".online").hide(),D.slide(0,0);s===a&&F===c||(a=s,c=F,Ce())}function Me(e){var t;pe.css("display","inline"),e&&(t=ye&&localStorage.getItem(s+P+u+v)||0,parseInt(_)>parseInt(t)&&(ye&&localStorage.setItem(s+P+u+v,_),Ce(),Q&&document.getElementById("ding_sound").play())),$.mobile.changePage("#title",{transition:"slide",reverse:!0}),Le(),setTimeout(function(){Le()},500)}function Xe(e){var t;e.on("mouseover",function(){(e.getDraggable()||e.getParent().getDraggable())&&Z&&(document.body.style.cursor="pointer")}),e.on("click tap",function(){!1!==oe&&((e.getDraggable()||e.getParent().getDraggable())&&Z&&G&&m===L.getChildren().length-1?"g_layer"===e.getParent().attrs.name?(t=e.getRotation(),Z=!1,new Kinetic.Tween({node:e,duration:.5,rotation:t+Math.PI/2,onFinish:function(){Z=!0,360===e.getRotationDeg()&&e.setRotationDeg(0),e.fire("dragend")}}).play()):(t=e.getParent().getRotation(),Z=!1,new Kinetic.Tween({node:e.getParent(),duration:.5,rotation:t+Math.PI/2,onFinish:function(){Z=!0,360===e.getParent().getRotationDeg()&&e.getParent().setRotationDeg(0),e.fire("dragend")}}).play()):N===W*j?Me(!(Z=!1)):e.fire("dragend"))}),e.on("mousedown touchstart",function(){oe=!0,setTimeout(function(){oe=!1},500),((f=e).getDraggable()||e.getParent().getDraggable())&&Z&&("g_layer"===e.getParent().attrs.name?(m=e.getZIndex(),e.moveToTop()):(m=e.getParent().getZIndex(),e.getParent().moveToTop()))}),e.on("dragend",function(){(e.getDraggable()||e.getParent().getDraggable())&&Z?function(e){var t,a,o;if(d="g_layer"===e.getParent().attrs.name?e.getRotationDeg():(e.getRotationDeg()+e.getParent().getRotationDeg())%360,Math.abs(e.getAbsolutePosition().x-e.attrs.origX)<H&&Math.abs(e.getAbsolutePosition().y-e.attrs.origY)<H&&0===d)if("g_layer"===e.getParent().attrs.name)Re(e);else for(a=e.getParent().getChildren();0<a.length;)(o=a[0]).moveTo(L),Re(o);else if("g_layer"===e.getParent().attrs.name)Ae(e);else for(a=e.getParent().getChildren(),t=0;t<a.length;t+=1)Ae(a[t])}(e):N===W*j&&Me(!(Z=!1))}),e.on("mouseout",function(){document.body.style.cursor="default"}),L.add(e),L.draw(),X.draw()}function Ye(t){var e;if("Safari,5.1.7"!==navigator.sayswho&&"MSIE,9.0"!==navigator.sayswho){if((e=t.target.files[0]).type.match("image.*")){var a=new FileReader;a.onload=function(e){o=e.target.result,EXIF.getData(t.target.files[0],function(){g=EXIF.getTag(this,"Orientation")}),$(".image0").attr("src",o),Le(),setTimeout(function(){Le()},500)},a.readAsDataURL(e)}}else $("#popup_own_img").popup("open")}function Ee(e){s=e,ne.attr("src","Images/"+s+"/theme.png"),E&&$("#select_theme").html(document.webL10n.get("lb_"+s)),ye&&localStorage.setItem("s_theme",e),ne.attr("style","width:59px; float:left;"),Le(),ne.attr("style","width:60px; float:left;")}function ze(){0===D.getPos()?$("#bullets0").attr("src","Images/bullets1o.svg"):$("#bullets0").attr("src","Images/bullets0o.svg"),1===D.getPos()?$("#bullets1").attr("src","Images/bullets1.svg"):$("#bullets1").attr("src","Images/bullets0.svg"),2===D.getPos()?$("#bullets2").attr("src","Images/bullets1.svg"):$("#bullets2").attr("src","Images/bullets0.svg"),3===D.getPos()?$("#bullets3").attr("src","Images/bullets1.svg"):$("#bullets3").attr("src","Images/bullets0.svg"),4===D.getPos()?$("#bullets4").attr("src","Images/bullets1.svg"):$("#bullets4").attr("src","Images/bullets0.svg")}function Be(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(window.location.href);return null!==t&&t[1]}"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("sw.js").then(function(e){},function(e){})}),le.mouseup(function(){void 0!==f&&"g_layer"!==f.getParent().attrs.name&&setTimeout(function(){f.fire("dragend")},350)}),le.touchend(function(){void 0!==f&&"g_layer"!==f.getParent().attrs.name&&setTimeout(function(){f.fire("dragend")},350)}),$(".own_image").click(function(){"Safari,5.1.7"!==navigator.sayswho&&"MSIE,9.0"!==navigator.sayswho?"file"!==we.attr("type")?window.MozActivity&&(new MozActivity({name:"pick",data:{type:"image/jpeg"}}).onsuccess=function(){o=window.URL.createObjectURL(this.result.blob),$(".image0").attr("src",o),Le(),setTimeout(function(){Le()},500)}):we.click():$("#popup_own_img").popup("open")}).show(),ce.on("change",function(){Se(ce.val())}),window.onload=function(){ae&&(ae=!1,C||$("#popup_canvas").popup("open"),D=new Swipe(document.getElementById("image_slider"),{startSlide:1,callback:function(e,t){0===t?$("#bullets0").attr("src","Images/bullets1o.svg"):$("#bullets0").attr("src","Images/bullets0o.svg"),1===t?$("#bullets1").attr("src","Images/bullets1.svg"):($("#bullets1").attr("src","Images/bullets0.svg"),K=4,Le()),2===t?$("#bullets2").attr("src","Images/bullets1.svg"):$("#bullets2").attr("src","Images/bullets0.svg"),3===t?$("#bullets3").attr("src","Images/bullets1.svg"):$("#bullets3").attr("src","Images/bullets0.svg"),4===t?$("#bullets4").attr("src","Images/bullets1.svg"):$("#bullets4").attr("src","Images/bullets0.svg")}}),document.getElementById("b_image_input").addEventListener("change",Ye,!1),de.click(function(e){D.prev(),ze(),e.preventDefault()}),he.click(function(e){D.next(),ze(),e.preventDefault()}),fe.click(function(e){_="1",r<l?ee?(j=9,W=6):(j=3,W=2):ee?(j=6,W=9):(j=2,W=3),De(),e.preventDefault()}),be.click(function(e){_="2",r<l?ee?(j=12,W=8):(j=6,W=4):ee?(j=8,W=12):(j=4,W=6),De(),e.preventDefault()}),ve.click(function(e){_="3",r<l?ee?(j=18,W=12):(j=8,W=5):ee?(j=12,W=18):(j=5,W=8),De(),e.preventDefault()}),pe.click(function(e){Me(Z=!1),e.preventDefault()}),$("#s_mascha").click(function(e){2<(z+=1)&&$(".t_mascha").removeClass("dn")}),$("#bt_settings").click(function(e){B||(B=!0,$("#t_europe").attr("src","Images/europe/theme.png"),$("#t_asia").attr("src","Images/asia/theme.png"),$("#t_america").attr("src","Images/america/theme.png"),$("#t_animals").attr("src","Images/animals/theme.png"),$("#t_flowers").attr("src","Images/flowers/theme.png"),$("#t_tricky").attr("src","Images/tricky/theme.png"),$("#t_mascha").attr("src","Images/mascha/theme.png"),$("#t_mascha2").attr("src","Images/mascha2/theme.png"),$("#t_shrek").attr("src","Images/shrek/theme.png"))}),_e.click(function(e){Ee("flowers"),$("#popupNewTheme").popup("close"),e.preventDefault()}),Pe.find("a").click(function(e){Ee(this.children[0].getAttribute("alt")),Pe.popup("close"),e.preventDefault()}),Pe.css({"overflow-y":"auto","min-width":"270px"}),ce.slider(),ye?(null===localStorage.getItem("s_back_g_grid")?se.val("on"):se.val(localStorage.getItem("s_back_g_grid")),null===localStorage.getItem("s_backg_image")?ie.val("on"):ie.val(localStorage.getItem("s_backg_image")),null===localStorage.getItem("s_rotate")?ge.val("off"):ge.val(localStorage.getItem("s_rotate")),null===localStorage.getItem("s_sound")?re.val("on"):re.val(localStorage.getItem("s_sound")),null===localStorage.getItem("s_gold")?Se("off"):Se(localStorage.getItem("s_gold")),null===localStorage.getItem("s_theme")?Ee("animals"):Ee(localStorage.getItem("s_theme"))):(se.val("on"),ie.val("on"),ge.val("off"),re.val("on"),Se("off"),Ee("animals")),"true"===(e=Be("mascha"))&&$(".t_mascha").removeClass("dn"),"true"===(e=Be("shrek"))&&($(".t_shrek").removeClass("dn"),$("#favicon").attr("href","Images/favicon_dark.ico")),(e=Be("theme"))&&Ee(e),/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)&&(de.attr("style","display:none;"),he.attr("style","display:none;")),$("#popupSettings").find("label").attr("style","display:inline;"),Le(),setTimeout(function(){Le()},500))},$(window).resize(function(){Le()}),navigator.sayswho=(T=navigator.appName,A=navigator.userAgent,R=A.match(/version\/([.\d]+)/i),(S=A.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i))&&null!==R&&(S[2]=R[1]),S=S?[S[1],S[2]]:[T,navigator.appVersion,"-?"]),document.webL10n.ready(function(){E=!0,(e=Be("lang"))&&e!==document.webL10n.getLanguage()&&(document.webL10n.setLanguage(e),E=!1)}),document.addEventListener("localized",function(){E&&($("html").attr("lang",document.webL10n.getLanguage().substr(0,2)),$("meta[name=description]").attr("content",document.webL10n.get("lb_desc")),$("link[rel=manifest]").attr("href","Manifest/appmanifest_"+document.webL10n.getLanguage().substr(0,2)+".json"),$("link[rel=canonical]").attr("href","https://grrd01.github.io/Puzzle/?lang="+document.webL10n.getLanguage().substr(0,2)),$("#select_theme").html(document.webL10n.get("lb_"+s)),$("#radio0-1").attr("title",document.webL10n.get("lb_image")),$("#radio-offline").attr("title",document.webL10n.get("lb_image")),$(".image0").attr("alt",document.webL10n.get("lb_image")),setTimeout(function(){new Date("10/25/2014")>new Date&&"flowers"!==s&&ye&&"flowers"!==localStorage.getItem("s_new_theme")&&(_e.popup("open"),Le(),setTimeout(function(){Le()},500))},500)),E=!0})}();