let btnAbrirModales = document.querySelectorAll('#btn-abrir-modal');
    let modales = document.querySelectorAll('#modal');
    let btnCerrarModales = document.querySelectorAll('.btn-cerrar-modal');

    btnAbrirModales.forEach((btnAbrir, index) => {
        btnAbrir.addEventListener('click', () => {
            modales[index].showModal();
        });
    });

    btnCerrarModales.forEach((btnCerrar, index) => {
        btnCerrar.addEventListener('click', () => {
            modales[index].close(); 
        });
    });