const menutoggle = document.querySelector(".menutoggle");
const navigation = document.querySelector(".navigation");

menutoggle.addEventListener("click", function () {
  menutoggle.classList.toggle("active");
  navigation.classList.toggle("active");

  if (menutoggle.classList.contains("active")) {
    menutoggle.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    menutoggle.innerHTML = '<i class="fas fa-bars"></i>';
  }
});
