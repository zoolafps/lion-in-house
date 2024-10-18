/* ===== CARGA L INFORMCION DE LOS PRODUCTOS ===== */
fetch('/data/products.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(products => {
        const container = document.querySelector('.products__container');
        if (!container) {
            console.error('El contenedor no se encontró');
            return;
        }
        container.innerHTML = '';
        products.forEach(product => {
            container.innerHTML += `
            <article class="products__card">
                <img src="/images/products/${product.coverImage}" alt="${product.name}" class="products__img">
                <h3 class="products__title">${product.name}</h3>
                <span class="products__price">${product.price}</span>
                <button class="products__button">
                    <i class='bx bx-shopping-bag'></i>
                </button>
            </article>
            `;
        });
    })
    .catch(error => {
        console.error('Error cargando productos:', error);
    });
