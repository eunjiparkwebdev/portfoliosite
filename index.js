$("video").prop("volume", 0.6);

$(function () {
  $('[data-toggle="popover"]').popover();
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");

  form.addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault(); // Get form data using FormData API

    const formData = new FormData(form); // Convert FormData to an object

    const data = Object.fromEntries(formData); // Now you can use the 'data' object to access form values
    console.log(data);
    const firstName = data.firstName;

    ModalWindow.openModal({
      title: "Thanks " + firstName + " !",
      content: "You signed up for my newsletter :)",
    });

    //clearing up the input
    document.querySelector("input[name=firstName]").value = "";
    document.querySelector("input[name=lastName]").value = "";
    document.querySelector("input[name=emailAddress]").value = "";
  });
});

const ModalWindow = {
  init() {
    document.body.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal__close")) {
        this.closeModal(e.target);
      }
    });
  },

  getHtmlTemplate(modalOptions) {
    return `
  <div class="modal__overlay">
    <div class="modal__window">
      <div class="modal__titlebar">
        <span class="modal__title">${modalOptions.title}</span>
        <button class="modal__close material-symbols-outlined">close</button>
      </div>
      <div class="modal__content">
        ${modalOptions.content}
      </div>
    </div>
  </div>
    `;
  },

  //default pop up content unless otherwise designed
  openModal(modalOptions = {}) {
    modalOptions = Object.assign(
      {
        title: "Modal Title",
        content: "Modal Content",
      },
      //this below is a part "unless otherwise designed"
      modalOptions
    );

    const modalTemplate = this.getHtmlTemplate(modalOptions);
    document.body.insertAdjacentHTML("afterbegin", modalTemplate);
  },

  closeModal(closeButton) {
    const modalOverlay = closeButton.parentElement.parentElement.parentElement;
    document.body.removeChild(modalOverlay);
  },
};

document.addEventListener("DOMContentLoaded", () => ModalWindow.init());
