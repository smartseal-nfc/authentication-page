import template from './template.js';
import { bind } from './helpers.js';
import iconError from './assets/icons/status-error.svg';
import iconWarning from './assets/icons/status-warning.svg';
import iconSuccess from './assets/icons/status-success.svg';
export class SmartSealAuth extends HTMLElement {
  constructor() {
    super();
    // attach Shadow DOM to the parent element.
    // save the shadowRoot in a property because, if you create your shadow DOM in closed mode, 
    // you have no access from outside

    const shadowRoot = this.attachShadow({mode: 'open'});

    // clone template content nodes to the shadow DOM
    shadowRoot.appendChild(template.content.cloneNode(true));
    this.injectFont();
  }

  connectedCallback() {
    this.description = this.shadowRoot.querySelector('.description');
    this.description.addEventListener('click', () => {
      this.toggleDescription();
    });

    this.closeBtn = this.shadowRoot.querySelector('.btn-close');
    this.closeBtn.addEventListener('click', () => {
      this.hide();
    });

    let queryVar = 'pl'

    var url_payload = this.getQueryVariable(queryVar);
    var post_data = { useragent: navigator.userAgent, url_payload: url_payload };

    if( post_data && post_data.url_payload ){
      this.getTagData(post_data);
    }

    const pageTogglers = Array.from(this.shadowRoot.querySelectorAll('[data-show-page]'));
    pageTogglers.forEach(toggler => {

      toggler.addEventListener('click', () => {
        const pageItems = Array.from(this.shadowRoot.querySelectorAll('[data-page]'));
        pageItems.forEach(page => {
          page.style.display = 'none';
        });

        const pageId = toggler.dataset.showPage;

        const page = this.shadowRoot.querySelector(`[data-page="${pageId}"]`);
        console.log(page, pageId);
        if(page) page.style.display = 'block';
      });
    });

    const detailsTogglers = Array.from(this.shadowRoot.querySelectorAll('.details-toggle'));
    detailsTogglers.forEach(toggler => {
      let hidden = true;
      toggler.addEventListener('click', () => {
        const details = toggler.parentElement.querySelector('.details');
        hidden = !hidden;
        details.classList.toggle('hidden', hidden);
        toggler.innerText = hidden ? 'More' : 'Less';
      });
    });
  }

  getQueryVariable(queryVar) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');
      if (decodeURIComponent(pair[0]) == queryVar) {
        return decodeURIComponent(pair[1]);
      }
    }
    console.log('Query variable %s not found', queryVar);
  }

  show() {
    this.shadowRoot.querySelector('.auth-page-wrapper').style.display = 'flex';
  }

  hide() {
    this.shadowRoot.querySelector('.auth-page-wrapper').style.display = 'none';
    this.dispatchEvent( new CustomEvent( 'smartseal-close', { bubbles: true} ) );
  }

  // Setters
  setNftAddress(chainId, ownerAddress, contractAddress) {
    if (chainId) {
      let url;
      if (chainId === 1) {
        url = 'https://etherscan.io/address/';
      } else if (chainId === 137) {
        url = 'https://polygonscan.com/address/';
      } else if (chainId === 3) {
        url = 'https://ropsten.etherscan.io/address/';
      }
      this.shadowRoot.getElementById('owner-address').href = (url + ownerAddress);
      this.shadowRoot.getElementById('contract-address').href = (url + contractAddress);
    }
  }

  setRedemptionUrl(url) {
    if (url) {
      this.shadowRoot.getElementById('redeem').href = url;
    } else {
      this.shadowRoot.getElementById('redeem').classList.add('disabled');
    }
  }

  setImage(url, origin = 'tag') {
    if(url) {
      const imageEl = this.shadowRoot.querySelector(`.${origin}-image`);
      imageEl.src = url;
      imageEl.style.display = 'block';
    }
  }

  async getTagData(variable) {
    let response = await fetch('https://loanmysole.smartseal.io/api/authenticate/', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(variable)
    });
    let data = await response.text();
    data = JSON.parse(data);

    // TEST
    // data.scan.auth_stat = 1;
    // data.tag.image_location = 'http://localhost/authentication-page/placeholder-img.png';
    // this.shadowRoot.querySelector('.tag-image').style.display = 'block';
    // const productId = '5922496681021105R';
    // const productId = '3617521092085R';
    // END TEST

    const productId = data.tag.nft_token_id;
    const lmsResponse = await fetch('https://www.loanmysole.com/api/products/get/modalinfo/' + productId);
    const lmsData = await lmsResponse.json();
    data.lms = lmsData.data;
    data.lms.connectedStr = data.lms.connected ? 'Yes' : 'No';

    let statusIcon;
    let statusType;
    let statusMessage;

    if(data.tag?.is_lost_or_stolen) {
      statusIcon = iconError;
      statusType = 'This item is lost or stolen';
      this.shadowRoot.querySelector('.auth-page').classList.add('auth-page--lost');
      this.shadowRoot.getElementById('status-message').style.display = 'none';
      this.shadowRoot.getElementById('__status-box').style.display = 'block';
      if(data.tag.nft_owner_contact) this.shadowRoot.getElementById('contact').parentElement.style.display = '';
      this.setNftAddress(data.tag.chain_id, data.tag.nft_owner_address, data.tag.nft_contract_address);
      this.setImage(data.tag.image_location);
      this.setImage(data.lms.productImage, 'lms');
    } else {
      switch (data.scan.auth_stat) {
        case 0:
          statusIcon = iconError;
          statusType = 'Error'
          statusMessage = 'There was a problem authenticating this tag. Please contact info@smartseal.io for more information';
          break;
        case 1:
          statusIcon = iconSuccess;
          statusType = 'Authenticated'
          this.shadowRoot.getElementById('status-message').style.display = 'none';
          this.shadowRoot.getElementById('__status-box').style.display = 'block';
          this.shadowRoot.getElementById('redeem').style.display = 'block';
          this.setNftAddress(data.tag.chain_id, data.tag.nft_owner_address, data.tag.nft_contract_address);
          this.setRedemptionUrl(data.tag.nft_redemption_url);
          this.setImage(data.tag.image_location);
          this.setImage(data.lms.productImage, 'lms');
          break;
        case 2:
          statusIcon = iconSuccess;
          statusType = 'Authenticated and Sealed'
          this.shadowRoot.getElementById('status-message').style.display = 'none';
          this.shadowRoot.getElementById('__status-box').style.display = 'block';
          this.setNftAddress(data.tag.chain_id, data.tag.nft_owner_address, data.tag.nft_contract_address);
          this.setRedemptionUrl(data.tag.nft_redemption_url);
          this.setImage(data.tag.image_location);
          this.setImage(data.lms.productImage, 'lms');
          break;
        case 3:
          statusIcon = iconSuccess;
          statusType = 'Authenticated and Unsealed'
          this.shadowRoot.getElementById('status-message').style.display = 'none';
          this.shadowRoot.getElementById('__status-box').style.display = 'block';
          this.setNftAddress(data.tag.chain_id, data.tag.nft_owner_address, data.tag.nft_contract_address);
          this.setImage(data.tag.image_location);
          this.setImage(data.lms.productImage, 'lms');
          break;
        case 4:
          statusIcon = iconError;
          statusType = 'Tag Not Active'
          statusMessage = 'Here is where we can have the error message on this screen and the next action';
          break;
        case 5:
          statusIcon = iconError;
          statusType = 'Tag Not Active'
          statusMessage = 'Here is where we can have the error message on this screen and the next action';
          break;
        case 6:
          statusIcon = iconError;
          statusType = 'Tag Not Active'
          statusMessage = 'Here is where we can have the error message on this screen and the next action';
          break;
        case 7:
          statusIcon = iconWarning;
          statusType = 'Authentication Token Expired'
          statusMessage = 'Please rescan tag';
          break;
        case 8:
          statusIcon = iconError;
          statusType = 'Authentication Code Not Valid'
          statusMessage = 'Here is where we can have the error message on this screen and the next action';
          break;
        default:
          statusIcon = iconError;
          statusType = 'Error'
          statusMessage = 'There was a problem authenticating this tag. Please contact info@smartseal.io for more information';
          break;
      }
    }

    this.shadowRoot.getElementById('status-icon').innerHTML = statusIcon;
    this.shadowRoot.getElementById('status-type').innerText = statusType;
    this.shadowRoot.getElementById('status-message').innerText = statusMessage;

    // Data that need parsing
    ['shipBackBy', 'start', 'productProtection'].forEach(name => {
      if(!data.lms[name]) {
        const el = this.shadowRoot.querySelector(`[data-value="lms.${name}"]`);
        el.parentElement.classList.add('hidden');
      } else if (name !== 'productProtection' ) {
        let date = data.lms[name].split('T')[0];
        date = date.split('-');
        date = `${date[1]}/${date[2]}/${date[0]}`;
        data.lms[name] = date;
      }
    });

    [ 'Background', 'Box', 'Chain', 'Earring', 'Exterior', 'Eyes', 'FacialHair', 'Headwear', 'Mouth' ].forEach(name => {
      if(!data.lms[name]) data.lms[name] = 'None';
    });

    bind(data, this.shadowRoot.querySelector('.auth-page'));

    this.show();

    return data;
  }

  injectFont(){
    var css = `
      @font-face {
        font-family: 'Roboto Mono';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSh0me8iUI0.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: 'Roboto Mono';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSh0me8iUI0.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
    `;
    if(!document.getElementById('smartSealFont')){
      var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');
      style.id = 'smartSealFont';
      style.type = 'text/css';
      style.innerText = css;
      head.appendChild(style);
    }
  }
}

window.customElements.define('smartseal-auth', SmartSealAuth);
