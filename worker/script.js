!function(t){var e={};function r(s){if(e[s])return e[s].exports;var l=e[s]={i:s,l:!1,exports:{}};return t[s].call(l.exports,l,l.exports,r),l.l=!0,l.exports}r.m=t,r.c=e,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var l in t)r.d(s,l,function(e){return t[e]}.bind(null,l));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);function s(t){return t[t.length-1]}function l(t){return t.length>1}function a(t){for(var e=[],r=1;r<t.length;r++)try{var s=t[r].split("</div>")[0].split("background-image:url(")[1].split(")")[0];e.push(s)}catch(t){}return e}const i=t=>((t=new URL(t)).searchParams.delete("_appId"),t.searchParams.delete("pid"),t.searchParams.delete("_refId"),t.searchParams.delete("cmpid"),t.toString());var p=async(t,e)=>{if("compact"==e)var r=!0,p=!1;else if("minimum"==e)r=!1,p=!0;else r=!1,p=!1;try{const e=encodeURI(t);console.log("Product details initiated");try{var c=await(await fetch("https://www.flipkart.com/"+e)).text();if(l((c=c.replace(/&amp;/g,"&")).split("for has been moved or deleted")))throw"Link provided doesn't corresponds to any product"}catch(t){return JSON.stringify({error_message:t,possible_solution:"Validate your link and try removing https://www.flipkart.com from your product link",bug_report:"https://github.com/umeshjakhar/flipkart-scraper-api/issues"})}var n,o=null,h=null,d=null,u=null,g=[];if(l(c.split("<h1"))){u=c.split("<h1")[1].split("</span>")[0].split('">')[2].replace(/<!-- -->/g,"").replace(/<!-- --/g,"").replace(/&nbsp;/g,"");try{var m=c.split('class="B_NuCI')[1].split("</span>")[0].split(">")[1].replace(/<!-- -->/g,"").replace(/<!-- --/g,"").replace(/&nbsp;/g,"");""!=m&&(u+=m)}catch(t){}}else u=c.split('class="B_NuCI')[1].split("</span>")[0].split(">")[1].replace(/<!-- -->/g,"").replace(/&nbsp;/g,"");try{h=c.split("<h1")[1].split(">₹")[1].split("</div>")[0]}catch(t){h=null}try{var f=c.split("<h1")[1].split(">₹")[2].split("</div>")[0].split("\x3c!-- --\x3e"),v=l(f)}catch(t){v=!1}var y=c.split("height:64px"),w=[];if((l(y)||l(y=c.split("_20Gt85 _1Y"))||l(y=c.split("_2r_T1I")))&&(w=a(y)),0==w.length)try{var _=u.split("(")[0].trim(),k=c.split('alt="'+_);k=k[1].split('src="')[1].split('"')[0],w.push(k)}catch(t){}try{var b=c.split("<h1")[1].split("Product Description")[0].split("fk-cp-zion/img/fa_62673a.png"),P=l(b)}catch(t){P=l(c.split("Product Description")[0].split("fk-cp-zion/img/fa_62673a.png"))}try{h=parseInt(h.replace(/,/g,"")),n=v?parseInt(f[1].replace(/,/g,"")):h}catch(t){n=null}try{var I=c.split('product.share.pp"');if(l(I)&&(d=I=s(I[I.length-2].split('"'))+"product.share.pp"),"/"==d[0]&&(d="https://www.flipkart.com"+d),""==e.split("/")[0])var M=1;else M=0;if("s"==e.split("/")[M]||"dl"==e.split("/")[M])var S="https://dl.flipkart.com/"+e;else S="https://www.flipkart.com/"+e;S=i(S),d=i(d),(S.length<d.length||l(String(d).toLowerCase().split("login")))&&(d=S)}catch(t){if("s"==e.split("/")[0]||"dl"==e.split("/")[0])d="https://dl.flipkart.com/"+e;else d="https://www.flipkart.com/"+e}var N=l(c.split("Coming Soon</div>")),C=l(c.split("This item is currently out of stock</div>"))||N;try{var j=c.split("Highlights")[1].split("</ul>")[0].replace(/<\/li>/g,"").split("<li");if(l(j))for(var L=1;L<j.length;L++)try{g.push(j[L].split(">")[1])}catch(t){}}catch(t){g=[]}var x=b[0].split("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==");if(N)o=null;else if(l(x))o=s(x[0].split('">')).split("<")[0];else try{o=c.split("_3LWZlK")[1].split("<")[0].split(">")[1].trim()}catch(t){}(null==h||null==h||NaN==h||h<1)&&(h=parseInt(c.split("_30jeq3 _16Jk6d")[1].split("</div>")[0].split(">")[1].replace(/₹/g,"").replace(/,/g,""))),(null==n||null==n||NaN==n||n<1)&&(n=parseInt(c.split("_3I9_wc _2p6lqe")[1].split("</div>")[0].split(">")[1].replace(/₹/g,"").replace(/,/g,"")));var T=parseInt(100*(1-h/n));try{u=u.replace(/&#x27;/g,"'").trim(),d=d.replace("http://","https://"),C=!C}catch(t){}if(!p){var R=[];try{var A=c.split("Specifications</div>")[1].split(">Safe and Secure Payments.")[0].replace(/&amp;/g,"&").split("</div><table")}catch(t){A=[]}for(L=1;L<A.length;L++)try{var D,O="",Z=[],H=s(A[L-1].split(">")),z=A[L].split("</td>");for(D=1;D<z.length;D+=2)try{var E=s(z[D-1].split(">")),G=s(z[D].split("</li>")[0].split(">"));null!=E&&""!=E&&1==G.split("<").length&&""!=G&&(r?O+=E+" : "+G+"; ":Z.push({property:E,value:G}))}catch(t){}Z!=[]&&(r?R.push({title:H,details:O}):R.push({title:H,details:Z}))}catch(t){}}var Q={name:u,current_price:h,original_price:n,discounted:v,discount_percent:T,rating:parseFloat(o),in_stock:C,f_assured:P,share_url:d,thumbnails:w,highlights:g};return p||(Object.assign(Q,{specs:R}),Q.specs=R),r||p?JSON.stringify(Q):JSON.stringify(Q,null,1)}catch(t){return JSON.stringify({error:"Couldn't fetch information : "+t.message,possible_solution:"Don't lose hope, contact the support",bug_report:"https://github.com/umeshjakhar/flipkart-scraper-api/issues"},null,2)}};const c=t=>{var e=new URL(t.replace(/amp;/g,""));return e.searchParams.delete("_appId"),e.searchParams.delete("_refId"),e.searchParams.delete("cmpid"),e.searchParams.delete("pid"),e.searchParams.delete("marketplace"),e.searchParams.delete("ppt"),e.searchParams.delete("lid"),e.searchParams.delete("store"),e.searchParams.delete("spotlightTagId"),e.searchParams.delete("q"),e.searchParams.delete("srno"),e.searchParams.delete("otracker"),e.searchParams.delete("fm"),e.searchParams.delete("iid"),e.searchParams.delete("ppn"),e.searchParams.delete("ssid"),e.searchParams.delete("qH"),e.toString()};var n=async(t,e)=>{const r="https://www.flipkart.com/search?marketplace=FLIPKART&q="+t;console.log("Search initiated : "+r);for(var s=await(await fetch(r)).text(),l=(s=s.replace(/style="color:#000000;font-size:14px;font-style:normal;font-weight:700">₹/g,">Rs. ")).split(">₹"),a=[],i=null,p=!1,n=1;n<l.length;n++)try{var o,h=null,d=null,u=null,g=!1,m=null,f=null,v=null,y=l[n].split("</div>")[0].replace(/,/g,"");if(o=parseInt(y),1==y.split("</option>").length){try{(v=(f=l[n-1].split("</a>"))[f.length-2].split('target="_blank"')).length>1&&(d="https://www.flipkart.com"+v[1].split('href="')[1].split('"')[0],u=v[1].split('href="')[1].split('"')[1].split(">")[1],i="A")}catch(t){console.log("Failed to obtain product name and link from Method A")}if(h=parseInt(o),""==u||null==u){f=null,v=null;try{"C"!=i&&"D"!=i||(n++,p=!0),f=l[n-2].split("<a"),i="B",1==f.length?(f=l[n-1].split("<a"),i="C"):console.log("Failed to obtain product name and link from Method B"),(v=f[f.length-1].split('target="_blank"')).length>1&&(d="https://www.flipkart.com"+v[1].split('href="')[1].split('"')[0],u=v[1].split('href="')[1].split('"col col-7-12">')[1].split("</div>")[0].split(">")[1]),p&&(n--,p=!1,i="D",console.log("Failed to obtain product name and link from Method C"))}catch(t){console.log(t.message)}if(""==u||null==u)console.log("Failed to obtain product name and link from known methods");else{console.log("Sucessfully obtained product name and link from known methods");try{m=s.split(`alt="${u}"`)[1].split('src="')[1].split('"')[0]}catch(t){m=null}if(n+1!=l.length)(g=(w=l[n+1].split("</div>")[0].replace(/,/g,"").split("\x3c!-- --\x3e")).length>1)&&(n++,h=parseInt(w[1]));a.push({name:u.replace(/&#x27;/g,"'"),link:c(d),current_price:o,original_price:h,discounted:g,thumbnail:m,query_url:c(d).replace("www.flipkart.com",e+"/product").replace("dl.flipkart.com",e+"/product")})}}else{try{m=s.split(`alt="${u}"`)[1].split('src="')[1].split('"')[0]}catch(t){m=[]}var w;if(n+1!=l.length)(g=(w=l[n+1].split("</div>")[0].replace(/,/g,"").split("\x3c!-- --\x3e")).length>1)&&(n++,h=parseInt(w[1]));a.push({name:u.replace(/&#x27;/g,"'").trim(),link:c(d).replace("http://","https://"),current_price:o,original_price:h,discounted:g,thumbnail:m,query_url:c(d).replace("www.flipkart.com",e+"/product").replace("dl.flipkart.com",e+"/product")})}}else s=s.replace("₹","Rs."),console.log("Ignoring amount "+o+" : Suspected to be dropdown menu item")}catch(t){console.log(t.message)}return JSON.stringify({total_result:a.length,query:t,fetch_from:r,result:a},null,2)};var o=t=>({"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"*","Access-Control-Allow-Methods":"GET","Access-Control-Max-Age":"86400","Content-Type":"application/json","Cache-Control":"no-cache, no-store, must-revalidate","Your-IP":t.get("cf-connecting-ip"),"Your-Country":t.get("CF-IPCountry"),Host:t.get("host"),"Made-By":atob("VmlzaGFsIERhcyBodHRwczovL2dpdGh1Yi5jb20vZHZpc2hhbDQ4NQ==")});function h(t){return t[t.length-1]}function d(t){return t.length>1}function u(t,e,r){var s=!1;e=e.toLowerCase(),t=t.toLowerCase();for(var l=0;l<r.length;l++)if(r[l]=r[l].toLowerCase(),d(t.split(r[l]))||d(e.split(r[l])))return s=!0;return s}function g(t){for(var e=[],r=1;r<t.length;r++)try{var s=t[r].split("</div>")[0].split("background-image:url(")[1].split(")")[0];e.push(s)}catch(t){}return e}var m=async t=>{try{var e=t.split("/")[0];t=t.split(e+"/")[1];var r=e.split("&");const D=encodeURI(t);console.log("Product details initiated");try{var s=await(await fetch("https://www.flipkart.com/"+D)).text();if(d((s=s.replace(/&amp;/g,"&")).split("for has been moved or deleted")))throw"Link provided doesn't corresponds to any product"}catch(t){return JSON.stringify({error_message:t,possible_solution:"Validate your link and try removing https://www.flipkart.com from your product link",bug_report:"https://github.com/umeshjakhar/flipkart-scraper-api/issues"})}var l,a=null,i=null,p=null,c=null,n=[];if(d(s.split("<h1")))c=s.split("<h1")[1].split("</span>")[0].split('">')[2].replace(/<!-- -->/g,"").replace(/&nbsp;/g,"");else c=s.split('class="B_NuCI')[1].split("</span>")[0].split(">")[1].replace(/<!-- -->/g,"").replace(/&nbsp;/g,"");try{i=s.split("<h1")[1].split(">₹")[1].split("</div>")[0]}catch(t){i=null}try{var o=s.split("<h1")[1].split(">₹")[2].split("</div>")[0].split("\x3c!-- --\x3e"),m=d(o)}catch(t){m=!1}var f=s.split("height:64px"),v=[];if((d(f)||d(f=s.split("_20Gt85 _1Y"))||d(f=s.split("_2r_T1I")))&&(v=g(f)),0==v.length)try{var y=c.split("(")[0].trim(),w=s.split('alt="'+y);w=w[1].split('src="')[1].split('"')[0],v.push(w)}catch(t){}try{var _=s.split("<h1")[1].split("Product Description")[0].split("fk-cp-zion/img/fa_62673a.png"),k=d(_)}catch(t){k=d(s.split("Product Description")[0].split("fk-cp-zion/img/fa_62673a.png"))}try{i=parseInt(i.replace(/,/g,"")),l=m?parseInt(o[1].replace(/,/g,"")):i}catch(t){l=null}try{if("/"==(p=h(h((h(s.split("product.share.pp")[0].split('"url":"'))+"product.share.pp").split(" ")).split('"')))[0]&&(p="https://www.flipkart.com"+p),d(String(p).toLowerCase().split("login"))){if(""==D.split("/")[0])var b=1;else b=0;if("s"==D.split("/")[b]||"dl"==D.split("/")[b])p="https://dl.flipkart.com/"+D;else p="https://www.flipkart.com/"+D}}catch(t){if("s"==D.split("/")[0]||"dl"==D.split("/")[0])p="https://dl.flipkart.com/"+D;else p="https://www.flipkart.com/"+D}var P=new URL(p);P.searchParams.delete("_appId"),P.searchParams.delete("_refId"),P.searchParams.delete("cmpid"),p=P.toString();var I=d(s.split("This item is currently out of stock</div>"))||d(s.split("Coming Soon</div>"));try{var M=s.split("Highlights")[1].split("</ul>")[0].replace(/<\/li>/g,"").split("<li");if(d(M))for(var S=1;S<M.length;S++)try{n.push(M[S].split(">")[1])}catch(t){}}catch(t){n=[]}var N=_[0].split("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==");if(d(N))a=h(N[0].split('">')).split("<")[0];else try{a=s.split("_3LWZlK")[1].split("<")[0].split(">")[1].trim()}catch(t){}(null==i||null==i||NaN==i||i<1)&&(i=parseInt(s.split("_30jeq3 _16Jk6d")[1].split("</div>")[0].split(">")[1].replace(/₹/g,"").replace(/,/g,""))),(null==l||null==l||NaN==l||l<1)&&(l=parseInt(s.split("_3I9_wc _2p6lqe")[1].split("</div>")[0].split(">")[1].replace(/₹/g,"").replace(/,/g,"")));var C=[],j=[];try{var L=s.split("Specifications</div>")[1].split(">Safe and Secure Payments.")[0].replace(/&amp;/g,"&").split("</div><table")}catch{L=[]}for(S=1;S<L.length;S++)try{var x,T=L[S].split("</td>");for(x=1;x<T.length;x+=2)try{var R=h(T[x-1].split(">")),A=h(T[x].split("</li>")[0].split(">"));null==R&&""==R||u(A,R,r)&&j.push({property:R,value:A})}catch(t){}0!=j.length&&(C=j)}catch(t){}return JSON.stringify({name:c.replace(/&#x27;/g,"'").trim(),current_price:i,original_price:l,discounted:m,discount_percent:parseInt(100*(1-i/l)),rating:a,in_stock:!I,f_assured:k,share_url:p.replace("http://","https://"),thumbnails:v,highlights:n,desired_specs:C})}catch(t){return JSON.stringify({error:"Couldn't fetch information : "+t.message,possible_solution:"Don't lose hope, contact the support",bug_report:"https://github.com/umeshjakhar/flipkart-scraper-api/issues"})}};addEventListener("fetch",t=>{t.respondWith(async function(t){const e=o(t.headers),r=new URL(t.url).pathname;return"GET"==t.method?r.startsWith("/search/")?new Response(await n(r.replace("/search/",""),t.headers.get("host")),{status:200,headers:e}):r.startsWith("/product/min/")?new Response(await p(r.replace("/product/min/",""),"minimum"),{status:200,headers:e}):r.startsWith("/product/compact/")?new Response(await p(r.replace("/product/compact/",""),"compact"),{status:200,headers:e}):r.startsWith("/product/")?new Response(await p(r.replace("/product/",""),"general"),{status:200,headers:e}):r.startsWith("/property/")?new Response(await m(r.replace("/property/",""),"general"),{status:200,headers:e}):new Response(JSON.stringify({name:"flipkart-scraper",description:"API to scrapes search result and product details from Flipkart",version:"2.1.0",author:"Vishal Das",email:"umeshjakhar@gmail.com",documentation:"https://umeshjakhar.github.io/flipkart-scraper-api/",usage:{search_api:"https://flipkart.umeshjakhar.workers.dev/search/<product_name>",product_api:"https://flipkart.umeshjakhar.workers.dev/product/<product_link_argument>",product_min_api:"https://flipkart.umeshjakhar.workers.dev/product/min/<product_link_argument>",product_compact_api:"https://flipkart.umeshjakhar.workers.dev/product/compact/<product_link_argument>",product_search_specs:"https://flipkart.umeshjakhar.workers.dev/property/<specs_to_search>/<product_link_argument>"},examples:{search_api:"https://flipkart.umeshjakhar.workers.dev/search/smartwatch",product_api:"https://flipkart.umeshjakhar.workers.dev/product/dl/huami-amazfit-bip-u-smartwatch/p/itmc6ae7a0e9f440?pid=SMWFY7PPGQTEH2BZ",product_min_api:"https://flipkart.umeshjakhar.workers.dev/product/min/dl/huami-amazfit-bip-u-smartwatch/p/itmc6ae7a0e9f440?pid=SMWFY7PPGQTEH2BZ",product_compact_api:"https://flipkart.umeshjakhar.workers.dev/product/compact/dl/huami-amazfit-bip-u-smartwatch/p/itmc6ae7a0e9f440?pid=SMWFY7PPGQTEH2BZ",product_search_specs:"https://flipkart.umeshjakhar.workers.dev/property/battery&display/dl/huami-amazfit-bip-u-smartwatch/p/itmc6ae7a0e9f440?pid=SMWFY7PPGQTEH2BZ"}},null,2),{status:200,headers:e}):Response.redirect("https://github.com/umeshjakhar/flipkart-scraper-api",301)}(t.request))})}]);