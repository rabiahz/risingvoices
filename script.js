//leave top code alone
document.addEventListener("DOMContentLoaded", function () {
    
    
    // Handler when the DOM is fully loaded
    const modal = document.querySelector("#my-modal");
    const closeBtn = document.querySelector('.close');

    // Events
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', outsideClick);

    // Open
    function openModal() {
        modal.style.display = 'block';
    }

    // Close
    function closeModal() {
        modal.style.display = 'none';
    }

    // Close If Outside Click
    function outsideClick(e) {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    }

});