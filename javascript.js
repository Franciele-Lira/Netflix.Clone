alert('Olá bem-vindo(a)! Está página é apenas para um portfólio.')


function toggleVideo() { /* Funções do trailer */
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('video');
    trailer.classList.toggle('active');

    video.currentTime = 0;
    video.pause();
}


