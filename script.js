document.getElementById('updateTitleButton').addEventListener('click', function() {
    const title = document.getElementById('titleInput').value;
    document.title = title;
    localStorage.setItem('tabTitle', title);
    alert(`Tab title updated to: ${title}`);
});

document.getElementById('iconUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const favicon = document.getElementById('favicon');
            favicon.href = e.target.result;
            localStorage.setItem('favicon', e.target.result);

            const img = document.getElementById('iconPreview');
            img.src = e.target.result;
            img.style.display = 'block';
        }
        reader.readAsDataURL(file);
    }
});
