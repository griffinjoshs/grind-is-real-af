function createProgressBar(percentage, color) {
  const progressBar = document.createElement('div');
  progressBar.classList.add('progress');
  const progressBarInner = document.createElement('div');
  progressBarInner.classList.add('progress-bar');
  progressBarInner.style.width = '0%'; // Set initial width to 0%
  progressBarInner.style.backgroundColor = color;
  progressBar.appendChild(progressBarInner);

  // Animate the width of the progress bar
  window.requestAnimationFrame(() => {
    progressBarInner.style.width = `${percentage}%`;
  });

  return progressBar;
}

const progress = createProgressBar(30, '#05EA00');
document.getElementById('level-progress').appendChild(progress);
