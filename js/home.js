function contact() {
    const contactModal = document.querySelector(".contact-modal");
    const contact = document.querySelector("#contact");
    const closeContact = document.querySelector(".close-contact");

    contact.addEventListener("click", function(){
        contactModal.classList.add("active-contact");

    });
    closeContact.addEventListener("click", function(){
        contactModal.classList.remove("active-contact");
    });
}

contact();