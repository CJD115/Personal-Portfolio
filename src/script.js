// Toggle hamburger menu
function toggleMenu() {
    const menuLinks = document.querySelector('.menu-links');
    menuLinks.classList.toggle('active');
}

// Close all open dialogs
function closeDialogs() {
    const dialogs = document.querySelectorAll('dialog');
    dialogs.forEach(dialog => dialog.close());
}

// Open a specific dialog
function openDialog(id) {
    closeDialogs(); // Ensure all dialogs are closed first
    document.getElementById(id).showModal();
}

// Close a specific dialog
function closeDialog(id) {
    document.getElementById(id).close();
}

// Event listeners for project buttons
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.project-btn.primary').forEach(button => {
        button.addEventListener('click', (event) => {
            const dialogId = event.target.getAttribute('data-dialog');
            openDialog(dialogId);
        });
    });

    document.querySelectorAll('.x').forEach(button => {
        button.addEventListener('click', (event) => {
            const dialog = event.target.closest('dialog');
            closeDialog(dialog.id);
        });
    });
});

