const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  item.addEventListener('click', () => {
    const answer = item.nextElementSibling;
    if (answer.classList.contains('answer')) {
      answer.classList.toggle('show');
    }
  });
});