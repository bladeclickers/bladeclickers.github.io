document.addEventListener("DOMContentLoaded", function() {
            const storedTitle = localStorage.getItem('tabTitle');
            const storedFavicon = localStorage.getItem('favicon');

            if (storedTitle) {
                document.title = storedTitle;
            }

            if (storedFavicon) {
                document.getElementById('favicon').href = storedFavicon;
            }
});
