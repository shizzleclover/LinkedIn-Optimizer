document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('loading').style.display = 'block';
    setTimeout(function() {
        window.location.href = './vid/Rick Astley - Never Gonna Give You Up (Official Music Video).mp4';  
    }, 2000); 
});
