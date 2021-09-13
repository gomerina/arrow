const mainSlider=document.querySelector(".main-slider__container");let mainSwiper=new Swiper(mainSlider,{slidesPerColumn:1,speed:1e3,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:20,slidesPerGroup:1},767:{slidesPerView:2,spaceBetween:20,slidesPerGroup:2},1200:{slidesPerView:3,spaceBetween:20,slidesPerGroup:3}}});!function(e){e((function(){e("ul.tabs__caption").on("click","li:not(.active)",(function(){e(this).addClass("active").siblings().removeClass("active").closest("div.tabs").find("div.tabs__content").removeClass("active").eq(e(this).index()).addClass("active")}))}))}(jQuery);const sliders=document.querySelectorAll(".swiper-container.tabs");sliders.forEach((function(e){new Swiper(e,{autoHeight:!0,spaceBetween:20,slidesPerView:1,speed:1200,observer:!0,observeParents:!0,grabCursor:!0,observeSlideChildren:!0,navigation:{nextEl:e.querySelector(".swiper-button-next"),prevEl:e.querySelector(".swiper-button-prev")},320:{slidesPerView:1,spaceBetween:20},767:{slidesPerView:1,spaceBetween:20}})}));let selects=document.getElementsByTagName("select");function selects_init(){for(let e=0;e<selects.length;e++){select_init(selects[e])}document.addEventListener("click",(function(e){selects_close(e)})),document.addEventListener("keydown",(function(e){27==e.which&&selects_close(e)}))}function selects_close(e){const t=document.querySelectorAll(".select");if(!e.target.closest(".select"))for(let e=0;e<t.length;e++){const s=t[e],l=s.querySelector(".select__options");s.classList.remove("_active"),_slideUp(l,100)}}function select_init(e){const t=e.parentElement,s=e.getAttribute("class"),l=e.querySelector("option:checked");e.setAttribute("data-default",l.value),e.style.display="none",t.insertAdjacentHTML("beforeend",'<div class="select select_'+s+'"></div>'),e.parentElement.querySelector(".select").appendChild(e),select_item(e)}function select_item(e){const t=e.parentElement,s=t.querySelector(".select__item"),l=e.querySelectorAll("option"),i=e.querySelector("option:checked").text,o=e.getAttribute("data-type");s&&s.remove();let r="";r="input"==o?'<div class="select__value"><input autocomplete="off" type="text" name="form[]" value="'+i+'" data-error="Ошибка" data-value="'+i+'" class="select__input"></div>':'<div class="select__value"><span>'+i+"</span></div>",t.insertAdjacentHTML("beforeend",'<div class="select__item"><div class="select__title">'+r+'</div><div class="select__options">'+select_get_options(l)+"</div></div></div>"),select_actions(e,t)}function select_actions(e,t){const s=t.querySelector(".select__item"),l=t.querySelector(".select__options"),i=t.querySelectorAll(".select__option"),o=e.getAttribute("data-type"),r=t.querySelector(".select__input");s.addEventListener("click",(function(){let e=document.querySelectorAll(".select");for(let t=0;t<e.length;t++){const l=e[t],i=l.querySelector(".select__options");l!=s.closest(".select")&&(l.classList.remove("_active"),_slideUp(i,100))}_slideToggle(l,100),t.classList.toggle("_active")}));for(let s=0;s<i.length;s++){const l=i[s],n=l.getAttribute("data-value"),c=l.innerHTML;"input"==o?r.addEventListener("keyup",select_search):l.getAttribute("data-value")==e.value&&(l.style.display="none"),l.addEventListener("click",(function(){for(let e=0;e<i.length;e++){i[e].style.display="block"}"input"==o?(r.value=c,e.value=n):(t.querySelector(".select__value").innerHTML="<span>"+c+"</span>",e.value=n,l.style.display="none")}))}}function select_get_options(e){if(e){let t="";for(let s=0;s<e.length;s++){const l=e[s],i=l.value;if(""!=i){t=t+'<div data-value="'+i+'" class="select__option">'+l.text+"</div>"}}return t}}function select_search(e){e.target.closest(".select ").querySelector(".select__options");let t=e.target.closest(".select ").querySelectorAll(".select__option"),s=e.target.value.toUpperCase();for(let e=0;e<t.length;e++){let l=t[e];(l.textContent||l.innerText).toUpperCase().indexOf(s)>-1?l.style.display="":l.style.display="none"}}function selects_update_all(){let e=document.querySelectorAll("select");if(e)for(let t=0;t<e.length;t++){select_item(e[t])}}selects.length>0&&selects_init();let _slideUp=(e,t=500)=>{e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=e.offsetHeight+"px",e.offsetHeight,e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,window.setTimeout((()=>{e.style.display="none",e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("_slide")}),t)},_slideDown=(e,t=500)=>{e.style.removeProperty("display");let s=window.getComputedStyle(e).display;"none"===s&&(s="block"),e.style.display=s;let l=e.offsetHeight;e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,e.offsetHeight,e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=l+"px",e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),window.setTimeout((()=>{e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("_slide")}),t)},_slideToggle=(e,t=500)=>{if(!e.classList.contains("_slide"))return e.classList.add("_slide"),"none"===window.getComputedStyle(e).display?_slideDown(e,t):_slideUp(e,t)};var swiperLaureates=new Swiper(".laureates-slider",{spaceBetween:20,slidesPerView:1,slidesPerGroup:1,speed:1e3,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const slidersExperts=document.querySelectorAll(".experts__slider");slidersExperts.forEach((function(e){new Swiper(e,{loop:!1,slidesPerGroup:1,speed:800,observer:!0,observeParents:!0,grabCursor:!0,observeSlideChildren:!0,navigation:{nextEl:e.querySelector(".swiper-button-next"),prevEl:e.querySelector(".swiper-button-prev")},breakpoints:{320:{slidesPerView:1,spaceBetween:20,slidesPerGroup:1},767:{slidesPerView:2,spaceBetween:27,slidesPerGroup:2},1200:{slidesPerView:4,spaceBetween:27,slidesPerGroup:4}}})})),$(".close__map-info").click((function(){$(".map-info").remove()}));