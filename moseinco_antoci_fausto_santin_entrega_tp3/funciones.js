// funciones.js - Galería de imágenes y videos
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        // Buscar si tiene imagen
        const imagen = this.querySelector('img');
        // Buscar si tiene video  
        const video = this.querySelector('video');
        
        if (imagen) {
            // Es una IMAGEN - abrir en modal
            openModal(imagen.src, 'imagen');
        } else if (video) {
            // Es un VIDEO - abrir en modal
            const videoSrc = video.querySelector('source').src;
            openModal(videoSrc, 'video');
        }
    });
});

function openModal(src, tipo) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    
    let contenido = '';
    if (tipo === 'imagen') {
        contenido = `<img src="${src}" alt="Proyecto">`;
    } else if (tipo === 'video') {
        contenido = `<video controls><source src="${src}" type="video/mp4"></video>`;
    }
    
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            ${contenido}
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Cerrar modal
    modal.querySelector('.close').onclick = function() {
        modal.remove();
    };
    
    modal.onclick = function(evento) {
        if (evento.target === modal) {
            modal.remove();
        }
    };
}