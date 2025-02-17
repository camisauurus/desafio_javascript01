precio = 400000 // precio base
cantidad = 0 // Cantidad inicial

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio
cantidadProducto = document.querySelector(".cantidad")
valorTotal = document.querySelector(".valor-total")

precioInicial = precio;

function actualizarValor() {
    cantidadProducto.innerHTML = cantidad;
    valorTotal.innerHTML = precioInicial * cantidad;
}

function incrementar() {
    cantidad++;
    actualizarValor();
}

function disminuir() {
    cantidad--;
    actualizarValor();
}

actualizarValor();