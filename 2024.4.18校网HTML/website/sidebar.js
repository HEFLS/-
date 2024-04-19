document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const body = document.body;

    sidebar.addEventListener('mouseover', function() {
        body.classList.add('sidebar-open');
    });

    sidebar.addEventListener('mouseleave', function() {
        body.classList.remove('sidebar-open');
    });
});