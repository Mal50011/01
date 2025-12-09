document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const targetId = tab.htmlFor;
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(targetId).classList.add('active');
    });
});
