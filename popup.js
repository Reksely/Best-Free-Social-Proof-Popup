

const usernames = [
  "Reksely", 
  "Cat", 
  "Bimka"
]; 
const actionsMade = [
  "Bought Premium and using AI Video", 
  "Meowing because he's bored", 
]; 

const visibleFor = 120;
const intervalBetweenPopups = 15;
const backgroundColor = "#191e24";
const textColor = "#a6adbb";
const imageForPopup = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/2048px-Github-desktop-logo-symbol.svg.png"

function setUpPopup() {
  const style = document.createElement('style');
  style.innerHTML = `
    :root {
      --SP-transition-time: 0.8s; /* Fixed transition time */
    }

    .__SP_recent-transactions {
      font-family: 'Inter', sans-serif;
      position: fixed;
      z-index: 100;
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 16px;
      max-width: 100%;
      min-width: 300px;
      pointer-events: none;
    }

    @media (min-width: 768px) {
      .__SP_recent-transactions {
        max-width: 450px;
      }
    }

    .__SP_popup {
      display: flex;
      gap: 12px;
      border-radius: 8px;
      border: 1px solid #e5e7eb;
      background-color: #ffffff;
      padding: 16px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: all var(--SP-transition-time) ease-in-out;
      margin: 0px;
    }

    .__SP_content {
      font-size: 12px;
      margin: 0px;
      width: 100%; /* Ensure it takes the full width */
      text-align: left;
    }

    .__SP_primary-text {
      color: #4f46e5;
      font-size: 15px;
      margin: 0px;
      padding: 0px;
      display: block;
      white-space: nowrap; /* Ensure text does not wrap */
      overflow: hidden; /* Handle overflow text */
      text-overflow: ellipsis; /* Display ellipsis for overflow text */
    }

    .__SP_description-text {
      padding-top: 1px;
      padding-bottom: 2px;
      color: #4f46e5;
      font-size: 14px;
      margin: 0px;
      display: block;
      white-space: nowrap; /* Ensure text does not wrap */
      overflow: hidden; /* Handle overflow text */
      text-overflow: ellipsis; /* Display ellipsis for overflow text */
    }

    .__SP_secondary-text {
      display: flex;
      gap: 4px;
      align-items: center; /* Center items vertically */
    }

    .__SP_time-ago-text {
      color: rgb(125, 125, 125);
    }

    .__SP_popup_verified {
      display: flex;
      gap: 2px;
      align-items: center;
      cursor: pointer;
      pointer-events: auto;
      text-decoration: none;
      color: #6b7280;
    }
    .__SP_popup_verified > a {
      color: inherit;
      text-decoration: none;
    }
    .__SP_popup_verified:hover {
      opacity: 0.8;
    }

    .__SP_popup_verified > svg {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-right: 2px;
    }

    .__SP_popup_verified > img {
      display: inline-block;
      height: 15px;
      margin-left: 1px;
    }

    .__SP_popup-enter,
    .__SP_popup-leave-to {
      transform: translateX(-200px);
      opacity: 0;
    }

    .__SP_popup-enter-right,
    .__SP_popup-leave-to-right {
      transform: translateX(200px);
      opacity: 0;
    }
  `;
  document.head.appendChild(style);

  function getRandomTimeAgo() {
    const minutes = Math.floor(Math.random() * 40) + 1; // 1 to 40 minutes
    const hours = Math.floor(Math.random() * 4) + 1; // 1 to 4 hours
    return Math.random() < 0.5 ? `${minutes} min ago` : `${hours} hour${hours > 1 ? 's' : ''} ago`;
  }

  function animatePopup() {
    document.querySelectorAll('.__SP_recent-transactions').forEach(element => element.remove());

    const randomUser = usernames[Math.floor(Math.random() * usernames.length)];
    const randomAction = actionsMade[Math.floor(Math.random() * actionsMade.length)];
    const randomTimeAgo = getRandomTimeAgo();

    const popupDiv = document.createElement('div');
    popupDiv.innerHTML = `
      <div class="__SP_recent-transactions" style="bottom: 0px; left: 0px;">
        <div class="__SP_popup" style="background-color: ${backgroundColor}; border-color: rgb(229, 231, 235);">
          <img src="${imageForPopup}" alt="Crown" style="width: 50px; height: 50px;">
          <div class="__SP_content">
            <p class="__SP_primary-text" style="color: ${textColor}">
              <b>${randomUser}</b>
            </p>
            <p class="__SP_description-text" style="color: ${textColor};">
              ${randomAction}
            </p>
            <div class="__SP_secondary-text">
              <span class="__SP_time-ago-text">
                ${randomTimeAgo}
                <span class="__SP_popup_separator"> | </span>
              </span>
              <a href="https://salespopup.io/" target="_blank" class="__SP_popup_verified" style="color: rgb(125, 125, 125);">
                <svg xmlns="http://www.w3.org/2000/svg" fill="${textColor}" viewBox="0 0 512 512">
                  <path d="M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                </svg>
                Verified
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(popupDiv);

    const popup = popupDiv.querySelector('.__SP_popup');

    popup.classList.add('__SP_popup-enter');

    setTimeout(() => {
      popup.classList.remove('__SP_popup-enter');

      setTimeout(() => {
        popup.classList.add('__SP_popup-leave-to');

        setTimeout(() => {
          popupDiv.remove();
        }, 800); 
      }, (visibleFor - 0.8) * 1000); 
    }, 100); 
  }

  animatePopup();

  setInterval(animatePopup, (visibleFor + intervalBetweenPopups) * 1000); 
}

setUpPopup();
