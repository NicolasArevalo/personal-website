export default function toggle(){
    const titulosRAW = document.querySelectorAll('.titulo')
    const titulos = [...titulosRAW]

    const contenidoRAW = document.querySelectorAll('.contenido')
    const contenido = [...contenidoRAW]

    titulos.forEach(
        (el, i) => el.addEventListener('click', toggleShow(i))
    )
    function toggleShow(i) {
        console.log(contenido[i])
        contenido[i].classList.toggle('show')
    }
}

