document.addEventListener("DOMContentLoaded", () => {
    const fotos = document.querySelectorAll('.foto');
    let indexAtual = 0;

    document.querySelector('.proxima').addEventListener('click', () => {
        fotos[indexAtual].classList.remove('ativa');
        indexAtual = (indexAtual + 1) % fotos.length;
        fotos[indexAtual].classList.add('ativa');
    });

    document.querySelector('.anterior').addEventListener('click', () => {
        fotos[indexAtual].classList.remove('ativa');
        indexAtual = (indexAtual - 1 + fotos.length) % fotos.length;
        fotos[indexAtual].classList.add('ativa');
    });
});