!function(t){var e={};function r(s){if(e[s])return e[s].exports;var i=e[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(s,i,function(e){return t[e]}.bind(null,i));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);function s(t){return t[t.length-1]}function i(t){return t.length>1}var a=async(t,e)=>{if("compact"==e)var r=!0,a=!1;else if("minimum"==e)r=!1,a=!0;else r=!1,a=!1;try{const e=encodeURI(t);console.log("Product details initiated");try{var l=await(await fetch("https://www.flipkart.com/"+e)).text();if(i((l=l.replace(/&amp;/g,"&")).split("for has been moved or deleted")))throw"Link provided doesn't corresponds to any product"}catch(t){return JSON.stringify({error_message:t,possible_solution:"Validate your link and try removing https://www.flipkart.com from your product link",bug_report:"https://github.com/dvishal485/flipkart-scraper-api/issues"})}var p,n=null,c=null,o=null,u=null,d=[];if(l.split("<h1").length>1)u=l.split("<h1")[1].split("</span>")[0].split('">')[2].replace(/<!-- -->/g,"").replace(/&nbsp;/g,"");else u=l.split('class="B_NuCI"')[1].split("</span>")[0].split(">")[1].replace(/<!-- -->/g,"").replace(/&nbsp;/g,"");try{c=l.split("<h1")[1].split(">₹")[1].split("</div>")[0]}catch(t){c=null}try{var h=l.split("<h1")[1].split(">₹")[2].split("</div>")[0].split("\x3c!-- --\x3e"),g=i(h)}catch(t){g=!1}try{var m=l.split("<h1")[1].split(">₹"+c)[0].split("fk-cp-zion/img/fa_62673a.png"),f=i(m)}catch(t){f=i(l.split("fk-cp-zion/img/fa_62673a.png"))}try{c=parseInt(c.replace(/,/g,"")),p=g?parseInt(h[1].replace(/,/g,"")):c}catch(t){p=null}try{"/"==(o=s(s((s(l.split("product.share.pp")[0].split('"url":"'))+"product.share.pp").split(" ")).split('"')))[0]&&(o="http://www.flipkart.com"+o),String(o).toLowerCase().split("login").length>1&&(o="http://www.flipkart.com/"+e)}catch(t){o="http://www.flipkart.com/"+e}var v=new URL(o);v.searchParams.delete("_appId"),v.searchParams.delete("_refId"),v.searchParams.delete("cmpid"),o=v.toString();var w=i(l.split("This item is currently out of stock</div>"))||i(l.split("Coming Soon</div>")),y=l.split("Highlights")[1].split("</ul>")[0].replace(/<\/li>/g,"").split("<li");if(i(y))for(k=1;k<y.length;k++)d.push(y[k].split(">")[1]);var _=m[0].split("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==");if(i(_))n=s(_[0].split('">')).split("<")[0];else try{n=l.split("_3LWZlK")[1].split("<")[0].split(">")[1].trim()}catch(t){}if((null==c||null==c||NaN==c||c<1)&&(c=parseInt(l.split("_30jeq3 _16Jk6d")[1].split("</div>")[0].split(">")[1].replace(/₹/g,"").replace(/,/g,""))),(null==p||null==p||NaN==p||p<1)&&(p=parseInt(l.split("_3I9_wc _2p6lqe")[1].split("</div>")[0].split(">")[1].replace(/₹/g,"").replace(/,/g,""))),a)return JSON.stringify({name:u.replace(/&#x27;/g,"'"),current_price:c,original_price:p,discounted:g,discount_percent:parseInt(100*(1-c/p)),rating:n,in_stock:!w,f_assured:f,share_url:o,highlights:d},null,2);var k,I=[],P=l.split("Specifications</div>")[1].split(">Safe and Secure Payments.")[0].replace(/&amp;/g,"&").split("</div><table");for(k=1;k<P.length;k++){var b,M="",S=[],N=s(P[k-1].split(">")),C=P[k].split("</td>");for(b=1;b<C.length;b+=2){var L=s(C[b-1].split(">")),j=s(C[b].split("</li>")[0].split(">"));null!=L&&""!=L&&1==j.split("<").length&&""!=j&&(r?M+=L+" : "+j+"; ":S.push({property:L,value:j}))}S!=[]&&(r?I.push({title:N,details:M}):I.push({title:N,details:S}))}return JSON.stringify({name:u.replace(/&#x27;/g,"'"),current_price:c,original_price:p,discounted:g,discount_percent:parseInt(100*(1-c/p)),rating:n,in_stock:!w,f_assured:f,share_url:o,highlights:d,specs:I},null,2)}catch(t){return JSON.stringify({error:"Couldn't fetch information : "+t.message,possible_solution:"Don't lose hope, contact the support",bug_report:"https://github.com/dvishal485/flipkart-scraper-api/issues"})}};const l=t=>{var e=new URL(t.replace(/amp;/g,""));return e.searchParams.delete("_appId"),e.searchParams.delete("_refId"),e.searchParams.delete("cmpid"),e.searchParams.delete("marketplace"),e.searchParams.delete("ppt"),e.searchParams.delete("lid"),e.searchParams.delete("store"),e.searchParams.delete("spotlightTagId"),e.searchParams.delete("q"),e.searchParams.delete("srno"),e.searchParams.delete("otracker"),e.searchParams.delete("fm"),e.searchParams.delete("iid"),e.searchParams.delete("ppn"),e.searchParams.delete("ssid"),e.searchParams.delete("qH"),e.toString()};var p=async t=>{const e="https://www.flipkart.com/search?marketplace=FLIPKART&q="+t;console.log("Search initiated : "+e);var r,s=await(await fetch(e)).text(),i=(s=s.replace(/style="color:#000000;font-size:14px;font-style:normal;font-weight:700">₹/g,">Rs. ")).split(">₹"),a=[],p=null,n=!1;for(r=1;r<i.length;r++)try{var c,o=null,u=null,d=null,h=!1,g=null,m=null,f=i[r].split("</div>")[0].replace(/,/g,"");if(c=parseInt(f),1==f.split("</option>").length){try{(m=(g=i[r-1].split("</a>"))[g.length-2].split('target="_blank"')).length>1&&(u="https://www.flipkart.com"+m[1].split('href="')[1].split('"')[0],d=m[1].split('href="')[1].split('"')[1].split(">")[1],p="A")}catch(t){}if(o=parseInt(c),""==d||null==d){g=null,m=null;try{"C"!=p&&"D"!=p||(r++,n=!0),g=i[r-2].split("<a"),p="B",1==g.length&&(g=i[r-1].split("<a"),p="C"),(m=g[g.length-1].split('target="_blank"')).length>1&&(u="https://www.flipkart.com"+m[1].split('href="')[1].split('"')[0],d=m[1].split('href="')[1].split('"col col-7-12">')[1].split("</div>")[0].split(">")[1]),n&&(r--,n=!1,p="D")}catch(t){}if(""==d||null==d);else{if(r+1!=i.length)(h=(v=i[r+1].split("</div>")[0].replace(/,/g,"").split("\x3c!-- --\x3e")).length>1)&&(r++,o=parseInt(v[1]));a.push({name:d.replace(/&#x27;/g,"'"),link:l(u),current_price:c,original_price:o,discounted:h})}}else{var v;if(r+1!=i.length)(h=(v=i[r+1].split("</div>")[0].replace(/,/g,"").split("\x3c!-- --\x3e")).length>1)&&(r++,o=parseInt(v[1]));a.push({name:d.replace(/&#x27;/g,"'"),link:l(u),current_price:c,original_price:o,discounted:h})}}else s=s.replace("₹","Rs."),console.log("Ignoring amount "+c+" : Suspected to be dropdown menu item")}catch(t){console.log(t.message)}return JSON.stringify({result:a},null,2)};var n=t=>({"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"*","Access-Control-Allow-Methods":"GET","Access-Control-Max-Age":"86400","Content-Type":"application/json","Cache-Control":"no-cache, no-store, must-revalidate","Your-IP":t.get("cf-connecting-ip"),"Your-Country":t.get("CF-IPCountry"),Host:t.get("host"),"Made-By":atob("VmlzaGFsIERhcyBodHRwczovL2dpdGh1Yi5jb20vZHZpc2hhbDQ4NQ==")});function c(t){return t[t.length-1]}function o(t){return t.length>1}function u(t,e,r){var s=!1;e=e.toLowerCase(),t=t.toLowerCase();for(var i=0;i<r.length;i++)if(r[i]=r[i].toLowerCase(),o(t.split(r[i]))||o(e.split(r[i])))return s=!0;return s}var d=async t=>{try{var e=t.split("/")[0];t=t.split(e+"/")[1];var r=e.split("&");const L=encodeURI(t);console.log("Product details initiated");try{var s=await(await fetch("https://www.flipkart.com/"+L)).text();if(o((s=s.replace(/&amp;/g,"&")).split("for has been moved or deleted")))throw"Link provided doesn't corresponds to any product"}catch(t){return JSON.stringify({error_message:t,possible_solution:"Validate your link and try removing https://www.flipkart.com from your product link",bug_report:"https://github.com/dvishal485/flipkart-scraper-api/issues"})}var i,a=null,l=null,p=null,n=null,d=[];if(s.split("<h1").length>1)n=s.split("<h1")[1].split("</span>")[0].split('">')[2].replace(/<!-- -->/g,"").replace(/&nbsp;/g,"");else n=s.split('class="B_NuCI"')[1].split("</span>")[0].split(">")[1].replace(/<!-- -->/g,"").replace(/&nbsp;/g,"");try{l=s.split("<h1")[1].split(">₹")[1].split("</div>")[0]}catch(t){l=null}try{var h=s.split("<h1")[1].split(">₹")[2].split("</div>")[0].split("\x3c!-- --\x3e"),g=o(h)}catch(t){g=!1}try{var m=s.split("<h1")[1].split(">₹"+l)[0].split("fk-cp-zion/img/fa_62673a.png"),f=o(m)}catch(t){f=o(s.split("fk-cp-zion/img/fa_62673a.png"))}try{l=parseInt(l.replace(/,/g,"")),i=g?parseInt(h[1].replace(/,/g,"")):l}catch(t){i=null}try{"/"==(p=c(c((c(s.split("product.share.pp")[0].split('"url":"'))+"product.share.pp").split(" ")).split('"')))[0]&&(p="http://www.flipkart.com"+p),String(p).toLowerCase().split("login").length>1&&(p="http://www.flipkart.com/"+L)}catch(t){p="http://www.flipkart.com/"+L}var v=new URL(p);v.searchParams.delete("_appId"),v.searchParams.delete("_refId"),v.searchParams.delete("cmpid"),p=v.toString();var w=o(s.split("This item is currently out of stock</div>"))||o(s.split("Coming Soon</div>")),y=s.split("Highlights")[1].split("</ul>")[0].replace(/<\/li>/g,"").split("<li");if(o(y))for(k=1;k<y.length;k++)d.push(y[k].split(">")[1]);var _=m[0].split("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==");if(o(_))a=c(_[0].split('">')).split("<")[0];else try{a=s.split("_3LWZlK")[1].split("<")[0].split(">")[1].trim()}catch(t){}(null==l||null==l||NaN==l||l<1)&&(l=parseInt(s.split("_30jeq3 _16Jk6d")[1].split("</div>")[0].split(">")[1].replace(/₹/g,"").replace(/,/g,""))),(null==i||null==i||NaN==i||i<1)&&(i=parseInt(s.split("_3I9_wc _2p6lqe")[1].split("</div>")[0].split(">")[1].replace(/₹/g,"").replace(/,/g,"")));var k,I=[],P=[],b=s.split("Specifications</div>")[1].split(">Safe and Secure Payments.")[0].replace(/&amp;/g,"&").split("</div><table");for(k=1;k<b.length;k++){var M,S=b[k].split("</td>");for(M=1;M<S.length;M+=2){var N=c(S[M-1].split(">")),C=c(S[M].split("</li>")[0].split(">"));null==N&&""==N||u(C,N,r)&&P.push({property:N,value:C})}0!=P.length&&(I=P)}return JSON.stringify({name:n.replace(/&#x27;/g,"'"),current_price:l,original_price:i,discounted:g,discount_percent:parseInt(100*(1-l/i)),rating:a,in_stock:!w,f_assured:f,share_url:p,highlights:d,desired_specs:I},null,2)}catch(t){return JSON.stringify({error:"Couldn't fetch information : "+t.message,possible_solution:"Don't lose hope, contact the support",bug_report:"https://github.com/dvishal485/flipkart-scraper-api/issues"})}};addEventListener("fetch",t=>{t.respondWith(async function(t){const e=n(t.headers),r=new URL(t.url).pathname;return"GET"==t.method?r.startsWith("/search/")?new Response(await p(r.replace("/search/","")),{status:200,headers:e}):r.startsWith("/product/min/")?new Response(await a(r.replace("/product/min/",""),"minimum"),{status:200,headers:e}):r.startsWith("/product/compact/")?new Response(await a(r.replace("/product/compact/",""),"compact"),{status:200,headers:e}):r.startsWith("/product/")?new Response(await a(r.replace("/product/",""),"general"),{status:200,headers:e}):r.startsWith("/property/")?new Response(await d(r.replace("/property/",""),"general"),{status:200,headers:e}):new Response(JSON.stringify([{name:"flipkart-scraper",description:"API to scrapes search result and product details from flipkart",version:2.1,author:"Vishal Das",email:"dvishal485@gmail.com",telegram:"@dvishal485",documentation:"https://dvishal485.github.io/flipkart-scraper-api/",usage:{search_api:"https://flipkart.dvishal485.workers.dev/search/<product_name>",product_api:"https://flipkart.dvishal485.workers.dev/product/<product_link_argument>",product_min_api:"https://flipkart.dvishal485.workers.dev/product/min/<product_link_argument>",product_compact_api:"https://flipkart.dvishal485.workers.dev/product/compact/<product_link_argument>",product_search_specs:"https://flipkart.dvishal485.workers.dev/property/<specs_to_search>/<product_link_argument>"},examples:{search_api:"https://flipkart.dvishal485.workers.dev/search/smartwatch",product_api:"https://flipkart.dvishal485.workers.dev/product/dl/huami-amazfit-bip-u-smartwatch/p/itmc6ae7a0e9f440?pid=SMWFY7PPGQTEH2BZ",product_min_api:"https://flipkart.dvishal485.workers.dev/product/min/dl/huami-amazfit-bip-u-smartwatch/p/itmc6ae7a0e9f440?pid=SMWFY7PPGQTEH2BZ",product_compact_api:"https://flipkart.dvishal485.workers.dev/product/compact/dl/huami-amazfit-bip-u-smartwatch/p/itmc6ae7a0e9f440?pid=SMWFY7PPGQTEH2BZ",product_search_specs:"https://flipkart.dvishal485.workers.dev/property/battery&display/dl/huami-amazfit-bip-u-smartwatch/p/itmc6ae7a0e9f440?pid=SMWFY7PPGQTEH2BZ"}}],null,2),{status:200,headers:e}):Response.redirect("https://github.com/dvishal485/flipkart-scraper/",301)}(t.request))})}]);