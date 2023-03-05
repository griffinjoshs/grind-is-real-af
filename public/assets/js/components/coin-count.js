function createCoinCount(count, width, minWidth, height, fontSize) {
    const coinCount = document.createElement('div');
    coinCount.classList.add('coin-count', 'd-flex', 'justify-content-evenly', 'align-items-center', 'py-1', 'px-2', 'bg-third', 'rounded-pill');
    coinCount.style.minWidth = minWidth;
    coinCount.style.width = width;
    coinCount.style.height = height; // Set height to the value of the height parameter
  
    const coinIcon = document.createElement('h3');
    coinIcon.style.fontSize = fontSize;
    const coinIconSymbol = document.createElement('i');
    coinIconSymbol.classList.add('fa-solid', 'fa-coins');
    coinIcon.appendChild(coinIconSymbol);
  
    const coinValue = document.createElement('h3');
    coinValue.style.fontSize = fontSize;
    coinValue.textContent = count;
  
    coinCount.appendChild(coinIcon);
    coinCount.appendChild(coinValue);
  
    return coinCount;
  }
  
  document.querySelector('.total-coin-count').appendChild(createCoinCount(650, '140px', '0', '50px', '2rem'));
  
  document.querySelector('.timeframe-coin-count').appendChild(createCoinCount(15, '0', '100px', "35px", "1.4rem"));
  
  
