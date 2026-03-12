    onload = () => {
        document.body.classList.remove("container");
        
        // Reproducir cuando el usuario toque CUALQUIER parte de la pantalla
        document.body.addEventListener('touchstart', function reproducir() {
            const audio = document.getElementById('miCancion');
            audio.play()
                .then(() => {
                    console.log('Audio reproduciendo');
                })
                .catch(error => {
                    console.log('Error al reproducir:', error);
                });
            // Remover el evento después del primer toque
            document.body.removeEventListener('touchstart', reproducir);
        }, { once: true });
    };
