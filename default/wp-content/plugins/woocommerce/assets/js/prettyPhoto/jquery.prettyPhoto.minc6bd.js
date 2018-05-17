/* ------------------------------------------------------------------------
	Class: prettyPhoto
	Use: Lightbox clone for jQuery
	Author: Stephane Caron (http://www.no-margin-for-errors.com)
	Version: 3.1.5
------------------------------------------------------------------------- */(function(e){function t(){var e=location.href;hashtag=e.indexOf("#prettyPhoto")!==-1?decodeURI(e.substring(e.indexOf("#prettyPhoto")+1,e.length)):!1;return hashtag}function n(){if(typeof theRel=="undefined")return;location.hash=theRel+"/"+rel_index+"/"}function r(){location.href.indexOf("#prettyPhoto")!==-1&&(location.hash="prettyPhoto")}function i(e,t){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var n="[\\?&]"+e+"=([^&#]*)",r=new RegExp(n),i=r.exec(t);return i==null?"":i[1]}e.prettyPhoto={version:"3.1.5"};e.fn.prettyPhoto=function(s){function g(){e(".pp_loaderIcon").hide();projectedTop=scroll_pos.scrollTop+(d/2-a.containerHeight/2);projectedTop<0&&(projectedTop=0);$ppt.fadeTo(settings.animation_speed,1);$pp_pic_holder.find(".pp_content").animate({height:a.contentHeight,width:a.contentWidth},settings.animation_speed);$pp_pic_holder.animate({top:projectedTop,left:v/2-a.containerWidth/2<0?0:v/2-a.containerWidth/2,width:a.containerWidth},settings.animation_speed,function(){$pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(a.height).width(a.width);$pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed);isSet&&S(pp_images[set_position])=="image"?$pp_pic_holder.find(".pp_hoverContainer").show():$pp_pic_holder.find(".pp_hoverContainer").hide();settings.allow_expand&&(a.resized?e("a.pp_expand,a.pp_contract").show():e("a.pp_expand").hide());settings.autoplay_slideshow&&!m&&!f&&e.prettyPhoto.startSlideshow();settings.changepicturecallback();f=!0});C();s.ajaxcallback()}function y(t){$pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility","hidden");$pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed,function(){e(".pp_loaderIcon").show();t()})}function b(t){t>1?e(".pp_nav").show():e(".pp_nav").hide()}function w(e,t){resized=!1;E(e,t);imageWidth=e,imageHeight=t;if((p>v||h>d)&&doresize&&settings.allow_resize&&!u){resized=!0,fitting=!1;while(!fitting){if(p>v){imageWidth=v-200;imageHeight=t/e*imageWidth}else if(h>d){imageHeight=d-200;imageWidth=e/t*imageHeight}else fitting=!0;h=imageHeight,p=imageWidth}(p>v||h>d)&&w(p,h);E(imageWidth,imageHeight)}return{width:Math.floor(imageWidth),height:Math.floor(imageHeight),containerHeight:Math.floor(h),containerWidth:Math.floor(p)+settings.horizontal_padding*2,contentHeight:Math.floor(l),contentWidth:Math.floor(c),resized:resized}}function E(t,n){t=parseFloat(t);n=parseFloat(n);$pp_details=$pp_pic_holder.find(".pp_details");$pp_details.width(t);detailsHeight=parseFloat($pp_details.css("marginTop"))+parseFloat($pp_details.css("marginBottom"));$pp_details=$pp_details.clone().addClass(settings.theme).width(t).appendTo(e("body")).css({position:"absolute",top:-1e4});detailsHeight+=$pp_details.height();detailsHeight=detailsHeight<=34?36:detailsHeight;$pp_details.remove();$pp_title=$pp_pic_holder.find(".ppt");$pp_title.width(t);titleHeight=parseFloat($pp_title.css("marginTop"))+parseFloat($pp_title.css("marginBottom"));$pp_title=$pp_title.clone().appendTo(e("body")).css({position:"absolute",top:-1e4});titleHeight+=$pp_title.height();$pp_title.remove();l=n+detailsHeight;c=t;h=l+titleHeight+$pp_pic_holder.find(".pp_top").height()+$pp_pic_holder.find(".pp_bottom").height();p=t}function S(e){return e.match(/youtube\.com\/watch/i)||e.match(/youtu\.be/i)?"youtube":e.match(/vimeo\.com/i)?"vimeo":e.match(/\b.mov\b/i)?"quicktime":e.match(/\b.swf\b/i)?"flash":e.match(/\biframe=true\b/i)?"iframe":e.match(/\bajax=true\b/i)?"ajax":e.match(/\bcustom=true\b/i)?"custom":e.substr(0,1)=="#"?"inline":"image"}function x(){if(doresize&&typeof $pp_pic_holder!="undefined"){scroll_pos=T();contentHeight=$pp_pic_holder.height(),contentwidth=$pp_pic_holder.width();projectedTop=d/2+scroll_pos.scrollTop-contentHeight/2;projectedTop<0&&(projectedTop=0);if(contentHeight>d)return;$pp_pic_holder.css({top:projectedTop,left:v/2+scroll_pos.scrollLeft-contentwidth/2})}}function T(){if(self.pageYOffset)return{scrollTop:self.pageYOffset,scrollLeft:self.pageXOffset};if(document.documentElement&&document.documentElement.scrollTop)return{scrollTop:document.documentElement.scrollTop,scrollLeft:document.documentElement.scrollLeft};if(document.body)return{scrollTop:document.body.scrollTop,scrollLeft:document.body.scrollLeft}}function N(){d=e(window).height(),v=e(window).width();typeof $pp_overlay!="undefined"&&$pp_overlay.height(e(document).height()).width(v)}function C(){if(isSet&&settings.overlay_gallery&&S(pp_images[set_position])=="image"){itemWidth=57;navWidth=settings.theme=="facebook"||settings.theme=="pp_default"?50:30;itemsPerPage=Math.floor((a.containerWidth-100-navWidth)/itemWidth);itemsPerPage=itemsPerPage<pp_images.length?itemsPerPage:pp_images.length;totalPage=Math.ceil(pp_images.length/itemsPerPage)-1;if(totalPage==0){navWidth=0;$pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()}else $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show();galleryWidth=itemsPerPage*itemWidth;fullGalleryWidth=pp_images.length*itemWidth;$pp_gallery.css("margin-left",-(galleryWidth/2+navWidth/2)).find("div:first").width(galleryWidth+5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected");goToPage=Math.floor(set_position/itemsPerPage)<totalPage?Math.floor(set_position/itemsPerPage):totalPage;e.prettyPhoto.changeGalleryPage(goToPage);$pp_gallery_li.filter(":eq("+set_position+")").addClass("selected")}else $pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave")}function k(t){settings.social_tools&&(facebook_like_link=settings.social_tools.replace("{location_href}",encodeURIComponent(location.href)));settings.markup=settings.markup.replace("{pp_social}","");e("body").append(settings.markup);$pp_pic_holder=e(".pp_pic_holder"),$ppt=e(".ppt"),$pp_overlay=e("div.pp_overlay");if(isSet&&settings.overlay_gallery){currentGalleryPage=0;toInject="";for(var n=0;n<pp_images.length;n++){if(!pp_images[n].match(/\b(jpg|jpeg|png|gif)\b/gi)){classname="default";img_src=""}else{classname="";img_src=pp_images[n]}toInject+="<li class='"+classname+"'><a href='#'><img src='"+img_src+"' width='50' alt='' /></a></li>"}toInject=settings.gallery_markup.replace(/{gallery}/g,toInject);$pp_pic_holder.find("#pp_full_res").after(toInject);$pp_gallery=e(".pp_pic_holder .pp_gallery"),$pp_gallery_li=$pp_gallery.find("li");$pp_gallery.find(".pp_arrow_next").click(function(){e.prettyPhoto.changeGalleryPage("next");e.prettyPhoto.stopSlideshow();return!1});$pp_gallery.find(".pp_arrow_previous").click(function(){e.prettyPhoto.changeGalleryPage("previous");e.prettyPhoto.stopSlideshow();return!1});$pp_pic_holder.find(".pp_content").hover(function(){$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()},function(){$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()});itemWidth=57;$pp_gallery_li.each(function(t){e(this).find("a").click(function(){e.prettyPhoto.changePage(t);e.prettyPhoto.stopSlideshow();return!1})})}if(settings.slideshow){$pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>');$pp_pic_holder.find(".pp_nav .pp_play").click(function(){e.prettyPhoto.startSlideshow();return!1})}$pp_pic_holder.attr("class","pp_pic_holder "+settings.theme);$pp_overlay.css({opacity:0,height:e(document).height(),width:e(window).width()}).bind("click",function(){settings.modal||e.prettyPhoto.close()});e("a.pp_close").bind("click",function(){e.prettyPhoto.close();return!1});settings.allow_expand&&e("a.pp_expand").bind("click",function(t){if(e(this).hasClass("pp_expand")){e(this).removeClass("pp_expand").addClass("pp_contract");doresize=!1}else{e(this).removeClass("pp_contract").addClass("pp_expand");doresize=!0}y(function(){e.prettyPhoto.open()});return!1});$pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click",function(){e.prettyPhoto.changePage("previous");e.prettyPhoto.stopSlideshow();return!1});$pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click",function(){e.prettyPhoto.changePage("next");e.prettyPhoto.stopSlideshow();return!1});x()}s=jQuery.extend({hook:"rel",animation_speed:"fast",ajaxcallback:function(){},slideshow:5e3,autoplay_slideshow:!1,opacity:.8,show_title:!0,allow_resize:!0,allow_expand:!0,default_width:500,default_height:344,counter_separator_label:"/",theme:"pp_default",horizontal_padding:20,hideflash:!1,wmode:"opaque",autoplay:!0,modal:!1,deeplinking:!0,overlay_gallery:!0,overlay_gallery_max:30,keyboard_shortcuts:!0,changepicturecallback:function(){},callback:function(){},ie6_fallback:!0,markup:'<div class="pp_pic_holder"> 						<div class="ppt">&nbsp;</div> 						<div class="pp_top"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 						<div class="pp_content_container"> 							<div class="pp_left"> 							<div class="pp_right"> 								<div class="pp_content"> 									<div class="pp_loaderIcon"></div> 									<div class="pp_fade"> 										<a href="#" class="pp_expand" title="Expand the image">Expand</a> 										<div class="pp_hoverContainer"> 											<a class="pp_next" href="#">next</a> 											<a class="pp_previous" href="#">previous</a> 										</div> 										<div id="pp_full_res"></div> 										<div class="pp_details"> 											<div class="pp_nav"> 												<a href="#" class="pp_arrow_previous">Previous</a> 												<p class="currentTextHolder">0/0</p> 												<a href="#" class="pp_arrow_next">Next</a> 											</div> 											<p class="pp_description"></p> 											<div class="pp_social">{pp_social}</div> 											<a class="pp_close" href="#">Close</a> 										</div> 									</div> 								</div> 							</div> 							</div> 						</div> 						<div class="pp_bottom"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 					</div> 					<div class="pp_overlay"></div>',gallery_markup:'<div class="pp_gallery"> 								<a href="#" class="pp_arrow_previous">Previous</a> 								<div> 									<ul> 										{gallery} 									</ul> 								</div> 								<a href="#" class="pp_arrow_next">Next</a> 							</div>',image_markup:'<img id="fullResImage" src="{path}" />',flash_markup:'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',quicktime_markup:'<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',iframe_markup:'<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',inline_markup:'<div class="pp_inline">{content}</div>',custom_markup:"",social_tools:'<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'},s);var o=this,u=!1,a,f,l,c,h,p,d=e(window).height(),v=e(window).width(),m;doresize=!0,scroll_pos=T();e(window).unbind("resize.prettyphoto").bind("resize.prettyphoto",function(){x();N()});s.keyboard_shortcuts&&e(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto",function(t){if(typeof $pp_pic_holder!="undefined"&&$pp_pic_holder.is(":visible"))switch(t.keyCode){case 37:e.prettyPhoto.changePage("previous");t.preventDefault();break;case 39:e.prettyPhoto.changePage("next");t.preventDefault();break;case 27:settings.modal||e.prettyPhoto.close();t.preventDefault()}});e.prettyPhoto.initialize=function(){settings=s;settings.theme=="pp_default"&&(settings.horizontal_padding=16);theRel=e(this).attr(settings.hook);galleryRegExp=/\[(?:.*)\]/;isSet=galleryRegExp.exec(theRel)?!0:!1;pp_images=isSet?jQuery.map(o,function(t,n){if(e(t).attr(settings.hook).indexOf(theRel)!=-1)return e(t).attr("href")}):e.makeArray(e(this).attr("href"));pp_titles=isSet?jQuery.map(o,function(t,n){if(e(t).attr(settings.hook).indexOf(theRel)!=-1)return e(t).find("img").attr("alt")?e(t).find("img").attr("alt"):""}):e.makeArray(e(this).find("img").attr("alt"));pp_descriptions=isSet?jQuery.map(o,function(t,n){if(e(t).attr(settings.hook).indexOf(theRel)!=-1)return e(t).attr("title")?e(t).attr("title"):""}):e.makeArray(e(this).attr("title"));pp_images.length>settings.overlay_gallery_max&&(settings.overlay_gallery=!1);set_position=jQuery.inArray(e(this).attr("href"),pp_images);rel_index=isSet?set_position:e("a["+settings.hook+"^='"+theRel+"']").index(e(this));k(this);settings.allow_resize&&e(window).bind("scroll.prettyphoto",function(){x()});e.prettyPhoto.open();return!1};e.prettyPhoto.open=function(t){if(typeof settings=="undefined"){settings=s;pp_images=e.makeArray(arguments[0]);pp_titles=arguments[1]?e.makeArray(arguments[1]):e.makeArray("");pp_descriptions=arguments[2]?e.makeArray(arguments[2]):e.makeArray("");isSet=pp_images.length>1?!0:!1;set_position=arguments[3]?arguments[3]:0;k(t.target)}settings.hideflash&&e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility","hidden");b(e(pp_images).size());e(".pp_loaderIcon").show();settings.deeplinking&&n();if(settings.social_tools){facebook_like_link=settings.social_tools.replace("{location_href}",encodeURIComponent(location.href));$pp_pic_holder.find(".pp_social").html(facebook_like_link)}$ppt.is(":hidden")&&$ppt.css("opacity",0).show();$pp_overlay.show().fadeTo(settings.animation_speed,settings.opacity);$pp_pic_holder.find(".currentTextHolder").text(set_position+1+settings.counter_separator_label+e(pp_images).size());typeof pp_descriptions[set_position]!="undefined"&&pp_descriptions[set_position]!=""?$pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])):$pp_pic_holder.find(".pp_description").hide();movie_width=parseFloat(i("width",pp_images[set_position]))?i("width",pp_images[set_position]):settings.default_width.toString();movie_height=parseFloat(i("height",pp_images[set_position]))?i("height",pp_images[set_position]):settings.default_height.toString();u=!1;if(movie_height.indexOf("%")!=-1){movie_height=parseFloat(e(window).height()*parseFloat(movie_height)/100-150);u=!0}if(movie_width.indexOf("%")!=-1){movie_width=parseFloat(e(window).width()*parseFloat(movie_width)/100-150);u=!0}$pp_pic_holder.fadeIn(function(){settings.show_title&&pp_titles[set_position]!=""&&typeof pp_titles[set_position]!="undefined"?$ppt.html(unescape(pp_titles[set_position])):$ppt.html("&nbsp;");imgPreloader="";skipInjection=!1;switch(S(pp_images[set_position])){case"image":imgPreloader=new Image;nextImage=new Image;isSet&&set_position<e(pp_images).size()-1&&(nextImage.src=pp_images[set_position+1]);prevImage=new Image;isSet&&pp_images[set_position-1]&&(prevImage.src=pp_images[set_position-1]);$pp_pic_holder.find("#pp_full_res")[0].innerHTML=settings.image_markup.replace(/{path}/g,pp_images[set_position]);imgPreloader.onload=function(){a=w(imgPreloader.width,imgPreloader.height);g()};imgPreloader.onerror=function(){alert("Image cannot be loaded. Make sure the path is correct and image exist.");e.prettyPhoto.close()};imgPreloader.src=pp_images[set_position];break;case"youtube":a=w(movie_width,movie_height);movie_id=i("v",pp_images[set_position]);if(movie_id==""){movie_id=pp_images[set_position].split("youtu.be/index.html");movie_id=movie_id[1];movie_id.indexOf("?")>0&&(movie_id=movie_id.substr(0,movie_id.indexOf("?")));movie_id.indexOf("&")>0&&(movie_id=movie_id.substr(0,movie_id.indexOf("&")))}movie="http://www.youtube.com/embed/"+movie_id;i("rel",pp_images[set_position])?movie+="?rel="+i("rel",pp_images[set_position]):movie+="?rel=1";settings.autoplay&&(movie+="&autoplay=1");toInject=settings.iframe_markup.replace(/{width}/g,a.width).replace(/{height}/g,a.height).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,movie);break;case"vimeo":a=w(movie_width,movie_height);movie_id=pp_images[set_position];var t=/http(s?):\/\/(www\.)?vimeo.com\/(\d+)/,n=movie_id.match(t);movie="http://player.vimeo.com/video/"+n[3]+"?title=0&amp;byline=0&amp;portrait=0";settings.autoplay&&(movie+="&autoplay=1;");vimeo_width=a.width+"/embed/?moog_width="+a.width;toInject=settings.iframe_markup.replace(/{width}/g,vimeo_width).replace(/{height}/g,a.height).replace(/{path}/g,movie);break;case"quicktime":a=w(movie_width,movie_height);a.height+=15;a.contentHeight+=15;a.containerHeight+=15;toInject=settings.quicktime_markup.replace(/{width}/g,a.width).replace(/{height}/g,a.height).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,pp_images[set_position]).replace(/{autoplay}/g,settings.autoplay);break;case"flash":a=w(movie_width,movie_height);flash_vars=pp_images[set_position];flash_vars=flash_vars.substring(pp_images[set_position].indexOf("flashvars")+10,pp_images[set_position].length);filename=pp_images[set_position];filename=filename.substring(0,filename.indexOf("?"));toInject=settings.flash_markup.replace(/{width}/g,a.width).replace(/{height}/g,a.height).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,filename+"?"+flash_vars);break;case"iframe":a=w(movie_width,movie_height);frame_url=pp_images[set_position];frame_url=frame_url.substr(0,frame_url.indexOf("iframe")-1);toInject=settings.iframe_markup.replace(/{width}/g,a.width).replace(/{height}/g,a.height).replace(/{path}/g,frame_url);break;case"ajax":doresize=!1;a=w(movie_width,movie_height);doresize=!0;skipInjection=!0;e.get(pp_images[set_position],function(e){toInject=settings.inline_markup.replace(/{content}/g,e);$pp_pic_holder.find("#pp_full_res")[0].innerHTML=toInject;g()});break;case"custom":a=w(movie_width,movie_height);toInject=settings.custom_markup;break;case"inline":myClone=e(pp_images[set_position]).clone().append('<br clear="all" />').css({width:settings.default_width}).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(e("body")).show();doresize=!1;a=w(e(myClone).width(),e(myClone).height());doresize=!0;e(myClone).remove();toInject=settings.inline_markup.replace(/{content}/g,e(pp_images[set_position]).html())}if(!imgPreloader&&!skipInjection){$pp_pic_holder.find("#pp_full_res")[0].innerHTML=toInject;g()}});return!1};e.prettyPhoto.changePage=function(t){currentGalleryPage=0;if(t=="previous"){set_position--;set_position<0&&(set_position=e(pp_images).size()-1)}else if(t=="next"){set_position++;set_position>e(pp_images).size()-1&&(set_position=0)}else set_position=t;rel_index=set_position;doresize||(doresize=!0);settings.allow_expand&&e(".pp_contract").removeClass("pp_contract").addClass("pp_expand");y(function(){e.prettyPhoto.open()})};e.prettyPhoto.changeGalleryPage=function(e){if(e=="next"){currentGalleryPage++;currentGalleryPage>totalPage&&(currentGalleryPage=0)}else if(e=="previous"){currentGalleryPage--;currentGalleryPage<0&&(currentGalleryPage=totalPage)}else currentGalleryPage=e;slide_speed=e=="next"||e=="previous"?settings.animation_speed:0;slide_to=currentGalleryPage*itemsPerPage*itemWidth;$pp_gallery.find("ul").animate({left:-slide_to},slide_speed)};e.prettyPhoto.startSlideshow=function(){if(typeof m=="undefined"){$pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function(){e.prettyPhoto.stopSlideshow();return!1});m=setInterval(e.prettyPhoto.startSlideshow,settings.slideshow)}else e.prettyPhoto.changePage("next")};e.prettyPhoto.stopSlideshow=function(){$pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function(){e.prettyPhoto.startSlideshow();return!1});clearInterval(m);m=undefined};e.prettyPhoto.close=function(){if($pp_overlay.is(":animated"))return;e.prettyPhoto.stopSlideshow();$pp_pic_holder.stop().find("object,embed").css("visibility","hidden");e("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed,function(){e(this).remove()});$pp_overlay.fadeOut(settings.animation_speed,function(){settings.hideflash&&e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility","visible");e(this).remove();e(window).unbind("scroll.prettyphoto");r();settings.callback();doresize=!0;f=!1;delete settings})};if(!pp_alreadyInitialized&&t()){pp_alreadyInitialized=!0;hashIndex=t();hashRel=hashIndex;hashIndex=hashIndex.substring(hashIndex.indexOf("https://codeless.co/")+1,hashIndex.length-1);hashRel=hashRel.substring(0,hashRel.indexOf("https://codeless.co/"));setTimeout(function(){e("a["+s.hook+"^='"+hashRel+"']:eq("+hashIndex+")").trigger("click")},50)}return this.unbind("click.prettyphoto").bind("click.prettyphoto",e.prettyPhoto.initialize)}})(jQuery);var pp_alreadyInitialized=!1;