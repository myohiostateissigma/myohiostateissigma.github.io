document.getElementById('scareButton').addEventListener('click', function() {
    var jumpscare = document.getElementById('jumpscare');
    var screamSound = document.getElementById('screamSound');
    
    jumpscare.classList.remove('hidden');
    jumpscare.style.visibility = 'visible'; // Ensure the element becomes visible
    screamSound.play();
});
