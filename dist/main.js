(()=>{"use strict";const e=document.createElement("template");e.innerHTML='<style>@font-face{font-family:Inter;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format(\'woff2\');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Inter;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format(\'woff2\');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:\'Roboto Mono\';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/robotomono/v13/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSh0me8iUI0.woff2) format(\'woff2\');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:\'Roboto Mono\';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/robotomono/v13/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSh0me8iUI0.woff2) format(\'woff2\');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}.text-muted{color:#6c757d!important}.m-0{margin:0!important}.align-items-center{-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important}.justify-content-between{-webkit-box-pack:justify!important;-ms-flex-pack:justify!important;justify-content:space-between!important}.d-flex{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}.p-0{padding:0!important}.row{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.col-5,.col-7{position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px}.col-5{-webkit-box-flex:0;-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-7{-webkit-box-flex:0;-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}:host{--theme-blue:#3FA7FE;--theme-green:#B4FFC9;--theme-yellow:#FEB12B;--theme-red:#FF4D4D;--theme-gray:#939393;--theme-midnight:#18182F;--theme-gradient-evening:linear-gradient(180deg, #313450 0%, rgba(49, 52, 80, 0.5) 100%);--theme-error:#5a1b1b;--theme-error-gradient:linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.05) 100%);--modal-bg:var(--theme-midnight);--modal-status-bg:var(--theme-gradient-evening)}*{font-family:Inter,sans-serif}body{margin:0}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}a{text-decoration:none;box-sizing:border-box}svg{vertical-align:top}a:not([href]):not([tabindex]):focus,a:not([href]):not([tabindex]):hover{color:inherit;text-decoration:none}h1{font-size:20px;font-weight:500;font-size:20px;line-height:26px}h2{font-weight:700;font-size:18px;line-height:22px}div,p{font-weight:400;font-size:14px;line-height:150%}.btn{display:inline-block;text-align:center;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;padding:.375rem .75rem;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;font-weight:700;font-size:16px;line-height:19px;letter-spacing:.5px}.btn.btn-blue{color:#fff;background:var(--theme-blue);transition:all .2s ease}.btn.btn-blue:hover{filter:brightness(.75)}.btn.disabled{background:var(--theme-gray)}.btn.disabled,.btn:disabled{opacity:.65}a.btn.disabled,fieldset:disabled a.btn{pointer-events:none}.auth-page-wrapper{position:fixed;bottom:-1px;width:100%;z-index:999999}.auth-page-wrapper::before{content:\'\';display:inline-block;position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.5)}.auth-page-wrapper .auth-page{position:relative;padding:10px 20px;color:#fff;background:var(--modal-bg);border-radius:20px 20px 0 0}.auth-page--lost{--modal-bg:var(--theme-error);--modal-status-bg:var(--theme-error-gradient)}.auth-page-wrapper .auth-page .btn-close{position:absolute;top:20px;left:20px;cursor:pointer;transition:all .2s ease;opacity:.5}.auth-page-wrapper .auth-page .btn-close:hover{opacity:1}.auth-page-wrapper .auth-page .__header{text-align:center;margin-bottom:15px}.auth-page-wrapper .auth-page .__header #status-icon svg{margin:-15px 0 -25px}.auth-page-wrapper .auth-page .__header .status-title svg{margin-left:8px;margin-right:-8px;vertical-align:text-bottom}.tag-image{margin-top:10px;max-height:150px;max-width:100%;vertical-align:top}.auth-page-wrapper .auth-page #__status-box{display:none;margin-bottom:14px;padding:20px;background:var(--modal-status-bg);border-radius:24px}.auth-page-wrapper .auth-page #__status-box .tag{padding:6px 12px;font-family:\'Roboto Mono\';font-weight:700;font-size:10px;line-height:13px;letter-spacing:3px;text-transform:uppercase;background:var(--theme-midnight);border-radius:6px}.auth-page-wrapper .auth-page #__status-box .item{margin:10px 0;font-family:\'Roboto Mono\';font-weight:500;font-size:20px;line-height:26px;letter-spacing:.5px}.auth-page-wrapper .auth-page #__status-box .description{margin-bottom:16px;position:relative}.auth-page-wrapper .auth-page #__status-box .description p{margin:0;font-size:12px;line-height:18px;cursor:pointer}.auth-page-wrapper .auth-page #__status-box .description.hide{padding-bottom:18px}.auth-page-wrapper .auth-page #__status-box .description.hide p{display:block;display:-webkit-box;max-height:calc(12px*1.5*2);-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.auth-page-wrapper .auth-page #__status-box .description:not(.hide) p::after{content:\'less\';display:inline;margin-left:5px;color:#fff}.auth-page-wrapper .auth-page #__status-box .description.hide::after{content:\'more\';display:block;position:absolute;bottom:0;left:0;color:#fff;font-size:12px;line-height:18px}.auth-page-wrapper .auth-page #__status-box>.row{margin:7px 0}.auth-page-wrapper .auth-page #__status-box .key{font-size:12px;letter-spacing:.5px}.auth-page-wrapper .auth-page #__status-box .value{font-family:\'Roboto Mono\';font-size:12px;text-align:right;letter-spacing:1px;text-decoration-line:underline;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:400px;transition:all .2s ease}.auth-page-wrapper .auth-page #__status-box a.value:hover{color:var(--theme-blue)}.auth-page-wrapper .auth-page .__copyright{margin-top:14px;text-align:center;color:var(--theme-gray)}.auth-page-wrapper .auth-page .__copyright a{color:var(--theme-gray)}.auth-page-wrapper .auth-page .__copyright strong{color:#fff;font-weight:500}.auth-page-wrapper .auth-page .btn{display:none;width:100%}</style> <div class="auth-page-wrapper" style="display:none"> <div class="auth-page"> <svg class="btn-close" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="14" cy="14" r="13.5" stroke="#fff"/> <path d="M19.0659 9.06586L8.93413 19.1976" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M19.0659 19.1976L8.93413 9.0659" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg> <div class="__loading"> </div> <div class="__header"> <div id="status-icon"></div> <h2 class="status-title"> <strong id="status-type"></strong> </h2> <p id="status-message" class="text-muted m-0"></p> <img class="tag-image" style="display:none"> </div> <div id="__status-box"> <h1 class="item" data-value="tag.product_name"></h1> <div class="description hide"> <p class="text-muted" data-value="tag.description"></p> </div> <div class="row align-items-center justify-content-between"> <div class="key col-5 p-0">UID</div> <div class="value col-7 p-0" data-value="tag.uid"></div> </div> <div class="row align-items-center justify-content-between"> <div class="key col-5 p-0">Token ID</div> <div class="value col-7 p-0" data-value="tag.nft_token_id"></div> </div> <div class="row align-items-center justify-content-between"> <div class="key col-5 p-0">Owner Address</div> <a class="value col-7 p-0" target="_blank" id="owner-address" data-value="tag.nft_owner_address"></a> </div> <div class="row align-items-center justify-content-between"> <div class="key col-5 p-0">Contract Address</div> <a class="value col-7 p-0" target="_blank" id="contract-address" data-value="tag.nft_contract_address"></a> </div> <div class="row align-items-center justify-content-between" style="display:none"> <div class="key col-5 p-0">Contact</div> <a class="value col-7 p-0" target="_blank" id="contact" data-value="tag.nft_owner_contact"></a> </div> </div> <a id="redeem" class="btn btn-blue" target="_blank">Redeem NFT</a> <div class="__copyright"> <a href="https://www.smartseal.io/" target="_blank">Powered by <strong>SmartSeal</strong></a> </div> </div> </div> ';const t=e;function a(e,t){var a=t.getAttribute("data-value");t.innerText=function(e,t){return t.split(".").reduce((function(e,t){return e&&e[t]}),e)}(e,a)}const o='<svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g filter="url(#filter0_d)">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M59 47.2872C49.0992 53.0034 43 63.5675 43 75C43 86.4325 49.0992 96.9965 59 102.713C68.9008 108.429 81.0991 108.429 91 102.713C100.901 96.9965 107 86.4325 107 75C107 63.5675 100.901 53.0034 91 47.2872C81.0991 41.5709 68.9008 41.5709 59 47.2872ZM92.5 44.6891C81.6709 38.437 68.329 38.437 57.5 44.6891C46.671 50.9412 40 62.4957 40 75C40 87.5043 46.671 99.0587 57.5 105.311C68.329 111.563 81.6709 111.563 92.5 105.311C103.329 99.0587 110 87.5043 110 75C110 62.4957 103.329 50.9412 92.5 44.6891Z" fill="#FF4D4D"/>\n</g>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M88.4186 65.4128C89.3933 64.4349 89.3907 62.852 88.4128 61.8773C87.4349 60.9026 85.8519 60.9052 84.8773 61.8831L74.9942 71.799L65.0782 61.9159C64.1003 60.9412 62.5174 60.9438 61.5427 61.9218C60.568 62.8997 60.5707 64.4826 61.5486 65.4573L71.4645 75.3404L61.5814 85.2563C60.6067 86.2342 60.6094 87.8172 61.5873 88.7919C62.5652 89.7665 64.1481 89.7639 65.1228 88.786L75.0059 78.8701L84.9218 88.7531C85.8997 89.7278 87.4826 89.7252 88.4573 88.7473C89.432 87.7693 89.4294 86.1864 88.4514 85.2117L78.5356 75.3287L88.4186 65.4128Z" fill="white"/>\n<defs>\n<filter id="filter0_d" x="0" y="0" width="150" height="150" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>\n<feOffset/>\n<feGaussianBlur stdDeviation="20"/>\n<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.3 0 0 0 0 0.3 0 0 0 1 0"/>\n<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>\n<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>\n</filter>\n</defs>\n</svg>\n',n='<svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g filter="url(#filter0_d)">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M59 47.2872C49.0992 53.0034 43 63.5675 43 75C43 86.4325 49.0992 96.9965 59 102.713C68.9008 108.429 81.0991 108.429 91 102.713C100.901 96.9965 107 86.4325 107 75C107 63.5675 100.901 53.0034 91 47.2872C81.0991 41.5709 68.9008 41.5709 59 47.2872ZM92.5 44.6891C81.6709 38.437 68.329 38.437 57.5 44.6891C46.671 50.9412 40 62.4957 40 75C40 87.5043 46.671 99.0587 57.5 105.311C68.329 111.563 81.6709 111.563 92.5 105.311C103.329 99.0587 110 87.5043 110 75C110 62.4957 103.329 50.9412 92.5 44.6891Z" fill="#B4FFC9"/>\n</g>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M90.9301 65.2875C91.9064 66.2638 91.9064 67.8468 90.9301 68.8231L72.6227 87.1305C71.6464 88.1068 70.0635 88.1068 69.0872 87.1305L59.7607 77.8041C58.7844 76.8278 58.7844 75.2448 59.7607 74.2685C60.737 73.2922 62.32 73.2922 63.2963 74.2685L70.8549 81.8272L87.3946 65.2875C88.3709 64.3112 89.9538 64.3112 90.9301 65.2875Z" fill="white"/>\n<defs>\n<filter id="filter0_d" x="0" y="0" width="150" height="150" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>\n<feOffset/>\n<feGaussianBlur stdDeviation="20"/>\n<feColorMatrix type="matrix" values="0 0 0 0 0.466667 0 0 0 0 1 0 0 0 0 0.616 0 0 0 1 0"/>\n<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>\n<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>\n</filter>\n</defs>\n</svg>\n';class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(t.content.cloneNode(!0)),this.injectFont()}connectedCallback(){this.description=this.shadowRoot.querySelector(".description"),this.description.addEventListener("click",(()=>{this.toggleDescription()})),this.closeBtn=this.shadowRoot.querySelector(".btn-close"),this.closeBtn.addEventListener("click",(()=>{this.hide()}));var e={useragent:"useragent string goes here",ip_address:"111.111.111.111",url_payload:this.getQueryVariable("pl")};e&&e.url_payload&&this.getTagData(e)}getQueryVariable(e){for(var t=window.location.search.substring(1).split("&"),a=0;a<t.length;a++){var o=t[a].split("=");if(decodeURIComponent(o[0])==e)return decodeURIComponent(o[1])}console.log("Query variable %s not found",e)}toggleDescription(){this.description.classList.toggle("hide")}show(){this.shadowRoot.querySelector(".auth-page-wrapper").style.display="block"}hide(){this.shadowRoot.querySelector(".auth-page-wrapper").style.display="none",this.dispatchEvent(new CustomEvent("smartseal-close",{bubbles:!0}))}setNftAddress(e,t,a){if(e){let o;1===e?o="https://etherscan.io/address/":137===e?o="https://polygonscan.com/address/":3===e&&(o="https://ropsten.etherscan.io/address/"),this.shadowRoot.getElementById("owner-address").href=o+t,this.shadowRoot.getElementById("contract-address").href=o+a}}setRedemptionUrl(e){e?this.shadowRoot.getElementById("redeem").href=e:this.shadowRoot.getElementById("redeem").classList.add("disabled")}setImage(e){if(e){const t=this.shadowRoot.querySelector(".tag-image");t.src=e,t.style.display="inline-block"}}async getTagData(e){let t,i,s,r=await fetch("https://staging.smartseal.io/api/authenticate/",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",mode:"cors",body:JSON.stringify(e)}),l=await r.text();if(l=JSON.parse(l),l.tag?.is_lost_or_stolen)t=o,i="This item is lost or stolen",this.shadowRoot.querySelector(".auth-page").classList.add("auth-page--lost"),this.shadowRoot.getElementById("status-message").style.display="none",this.shadowRoot.getElementById("__status-box").style.display="block",l.tag.nft_owner_contact&&(this.shadowRoot.getElementById("contact").parentElement.style.display=""),this.setNftAddress(l.tag.chain_id,l.tag.nft_owner_address,l.tag.nft_contract_address),this.setImage(l.tag.image_location);else switch(l.scan.auth_stat){case 0:default:t=o,i="Error",s="There was a problem authenticating this tag. Please contact info@smartseal.io for more information";break;case 1:t=n,i="Authenticated",this.shadowRoot.getElementById("status-message").style.display="none",this.shadowRoot.getElementById("__status-box").style.display="block",this.shadowRoot.getElementById("redeem").style.display="block",this.setNftAddress(l.tag.chain_id,l.tag.nft_owner_address,l.tag.nft_contract_address),this.setRedemptionUrl(l.tag.nft_redemption_url),this.setImage(l.tag.image_location);break;case 2:t=n,i="Authenticated and Sealed",this.shadowRoot.getElementById("status-message").style.display="none",this.shadowRoot.getElementById("__status-box").style.display="block",this.setNftAddress(l.tag.chain_id,l.tag.nft_owner_address,l.tag.nft_contract_address),this.setRedemptionUrl(l.tag.nft_redemption_url),this.setImage(l.tag.image_location);break;case 3:t=n,i="Authenticated and Unsealed",this.shadowRoot.getElementById("status-message").style.display="none",this.shadowRoot.getElementById("__status-box").style.display="block",this.setNftAddress(l.tag.chain_id,l.tag.nft_owner_address,l.tag.nft_contract_address),this.setImage(l.tag.image_location);break;case 4:case 5:case 6:t=o,i="Tag Not Active",s="Here is where we can have the error message on this screen and the next action";break;case 7:t='<svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g filter="url(#filter0_d)">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M91 47.2872C81.0991 41.5709 68.9008 41.5709 59 47.2872C49.0992 53.0034 43 63.5675 43 75C43 86.4325 49.0992 96.9965 59 102.713C68.9008 108.429 81.0992 108.429 91 102.713C100.901 96.9965 107 86.4325 107 75C107 63.5675 100.901 53.0034 91 47.2872ZM92.5 44.6891C81.6709 38.437 68.329 38.437 57.5 44.6891C46.671 50.9412 40 62.4957 40 75C40 87.5043 46.671 99.0587 57.5 105.311C68.329 111.563 81.6709 111.563 92.5 105.311C103.329 99.0587 110 87.5043 110 75C110 62.4957 103.329 50.9412 92.5 44.6891Z" fill="#FEB12B"/>\n</g>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M54.5 75C54.5 73.067 56.067 71.5 58 71.5L92 71.5C93.933 71.5 95.5 73.067 95.5 75C95.5 76.933 93.933 78.5 92 78.5L58 78.5C56.067 78.5 54.5 76.933 54.5 75Z" fill="white"/>\n<defs>\n<filter id="filter0_d" x="0" y="0" width="150" height="150" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>\n<feOffset/>\n<feGaussianBlur stdDeviation="20"/>\n<feColorMatrix type="matrix" values="0 0 0 0 0.996078 0 0 0 0 0.694118 0 0 0 0 0.168627 0 0 0 1 0"/>\n<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>\n<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>\n</filter>\n</defs>\n</svg>\n',i="Authentication Token Expired",s="Please rescan tag";break;case 8:t=o,i="Authentication Code Not Valid",s="Here is where we can have the error message on this screen and the next action"}return this.shadowRoot.getElementById("status-icon").innerHTML=t,this.shadowRoot.getElementById("status-type").innerText=i,this.shadowRoot.getElementById("status-message").innerText=s,function(e,t){var o=t.querySelectorAll("[data-value]");[].forEach.call(o,a.bind(null,e))}(l,this.shadowRoot.querySelector(".auth-page")),this.show(),l}injectFont(){if(!document.getElementById("smartSealFont")){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.id="smartSealFont",t.type="text/css",t.innerText="\n      @font-face {\n        font-family: 'Inter';\n        font-style: normal;\n        font-weight: 400;\n        font-display: swap;\n        src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format('woff2');\n        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n      }\n      @font-face {\n        font-family: 'Inter';\n        font-style: normal;\n        font-weight: 700;\n        font-display: swap;\n        src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format('woff2');\n        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n      }\n      @font-face {\n        font-family: 'Roboto Mono';\n        font-style: normal;\n        font-weight: 400;\n        font-display: swap;\n        src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSh0me8iUI0.woff2) format('woff2');\n        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n      }\n      @font-face {\n        font-family: 'Roboto Mono';\n        font-style: normal;\n        font-weight: 500;\n        font-display: swap;\n        src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSh0me8iUI0.woff2) format('woff2');\n        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n      }\n    ",e.appendChild(t)}}}window.customElements.define("smartseal-auth",i)})();