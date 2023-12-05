


    document.querySelector("#login").addEventListener("click",() => {
        // se reproduce mensaje
    const mensaje = new SpeechSynthesisUtterance();
    mensaje.text = "yendo a barra login";           
    speechSynthesis.speak(mensaje);
    });


    document.querySelector("#contact").addEventListener("click",() => {
            // se reproduce mensaje
    const mensaje = new SpeechSynthesisUtterance();
    mensaje.text = "yendo a barra contacto";           
    speechSynthesis.speak(mensaje);
    })

    document.querySelector("#carrito").addEventListener("click",() => {
            // se reproduce mensaje
    const mensaje = new SpeechSynthesisUtterance();
    mensaje.text = "yendo al carrito";           
    speechSynthesis.speak(mensaje);
    })


