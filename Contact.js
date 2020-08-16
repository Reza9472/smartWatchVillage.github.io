window.addEventListener('load', () => {
  const orderNumber = document.getElementById('order');

  const radioEle = document.querySelectorAll('input[name="radio_but"]');
  radioEle.forEach(element => {
    element.addEventListener('change', () => {
      if (element.value === 'orderproblem') {
        orderNumber.style.display = 'block';
      } else {
        orderNumber.style.display = 'none';
      }
    });
  });
});
