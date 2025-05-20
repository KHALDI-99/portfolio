<script>
document.addEventListener('DOMContentLoaded', function() {
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.style.opacity = 1;
}
});
}, { threshold: 0.1 });

sections.forEach(section => {
observer.observe(section);
});
});

// Afficher/Masquer le bouton selon la position de la page
<script>
  const backToTopBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
</script>

</script>
