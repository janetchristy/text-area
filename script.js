const textarea = document.getElementById('message');
const counter = document.getElementById('counter');
const warning = document.getElementById('warning');

const maxChars = 200;

textarea.addEventListener('input', () => {
  let currentLength = textarea.value.length;

  if (currentLength > maxChars) {
    textarea.value = textarea.value.substring(0, maxChars);
    currentLength = maxChars;
    warning.style.display = 'block';
  } else {
    warning.style.display = 'none';
  }

  counter.textContent = `${currentLength}/${maxChars} characters`;
});
