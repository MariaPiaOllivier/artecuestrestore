'use strict';

/*
 *	OLLIVIER PIA
 */

let aProductos = [
    {
        nombre: '"Cuartetera"',
        id: "1",
        imagen: 'img/1cuartetera.png',
        descripcion: `Técnica: Grafito y carbonilla`,
        medida: `Medida: 55cm x 75cm`,
        precio: 180000,
        precioPromo: 153000,
        categoria: 'caballos',
    },
    {
        nombre: '"Trillizos"',
        id: "2",
        imagen: 'img/4tres_caballos.png',
        descripcion: 'Técnica: Grafito y carbonilla',
        medida: `Medida: 50cm x 70cm`,
        precio: 200000,
        categoria: 'caballos',
    },
    {
        nombre: '"Chaparrita"',
        id: "3",
        imagen: 'img/caparrita.png',
        descripcion: 'Técnica: Grafito y carbonilla',
        medida: `Medida: 50cm x 70cm`,
        precio: 165000,
        precioPromo: 140250,
        categoria: 'polo',
    },
    {
        nombre: '"Segundo"',
        id: "4",
        imagen: 'img/don-segundo.png',
        descripcion: 'Técnica: Grafito y carbonilla',
        medida: `Medida: 40cm x 50cm`,
        precio: 140000,
        precioPromo: 119000,
        categoria: 'gauchos',
    },
    {
        nombre: '"Tradición"',
        id: "5",
        imagen: 'img/gaucho-mate.png',
        descripcion: 'Técnica: Grafito y carbonilla',
        medida: `Medida: 40cm x 50cm`,
        precio: 150000,
        categoria: 'gauchos',
    },
    {
        nombre: '"Machitos"',
        id: "6",
        imagen: 'img/machitos.png',
        descripcion: 'Técnica: Grafito y carbonilla',
        medida: `Medida: 40cm x 50cm`,
        precio: 160000,
        categoria: 'polo',
    },
    {
        nombre: '"Dolfina"',
        id: "7",
        imagen: 'img/2caballo-perfil.png',
        descripcion: 'Técnica: Grafito y carbonilla',
        medida: `Medida: 45cm x 55cm`,
        precio: 190000,
        categoria: 'caballos',
    },
    {
        nombre: '"Clón"',
        id: "8",
        imagen: 'img/3_caballo.png',
        descripcion: 'Técnica: Grafito y carbonilla',
        medida: `Medida: 35cm x 45cm`,
        precio: 178000,
        categoria: 'caballos',
    },
    {
        nombre: '"Palenque"',
        id: "9",
        imagen: 'img/7-costado.png',
        descripcion: 'Técnica: Grafito y carbonilla',
        medida: `Medida: 55cm x 65cm`,
        precio: 190000,
        categoria: 'caballos',
    },
    {
        nombre: '"Cimarrón"',
        id: "10",
        imagen: 'img/cimarron.png',
        descripcion: 'Técnica: Grafito y carbonilla',
        medida: `Medida: 45cm x 35cm`,
        precio: 160000,
        categoria: 'gauchos',
    },
    {
        nombre: '"Diálogo"',
        id: "11",
        imagen: 'img/dialogo.png',
        descripcion: 'Técnica: Grafito y carbonilla',
        medida: `Medida: 45cm x 35cm`,
        precio: 190000,
        categoria: 'polo',
    },
    {
        nombre: '"Árabe"',
        id: "12",
        imagen: 'img/trote.png',
        descripcion: 'Técnica: Grafito y carbonilla',
        medida: `Medida: 45cm x 35cm`,
        precio: 195000,
        categoria: 'caballos',
    },
];

const d = document;

let carrito = {
    idProductos: [],
    producto: [],
    cantidades: [],
    precio: [],
    total: 0
};

const galeriaArte = (prodVista) => {
    const galeria = d.getElementById('productos');

    galeria.innerHTML = '';
    prodVista.forEach(productos => {
        const divProducto = d.createElement('div');
        divProducto.className = 'producto';
        let imgArticulo = d.createElement('img');
        imgArticulo.src = productos.imagen
        let titulo = d.createElement('h3');
        titulo.textContent = productos.nombre;
        let precio = d.createElement('p');
        precio.textContent = productos.precio;
        let btnVerMas = d.createElement('button');
        btnVerMas.textContent = 'VER MAS'
        let btnAgregar = d.createElement('button');
        btnAgregar.textContent = 'AGREGAR'


        // BTN "VER MAS" ------------>


        btnVerMas.addEventListener('click', () => {
            let modalCont = d.createElement('div');
            modalCont.id = 'modalVerMas';
            modalCont.className = 'modal';

            let h2Modal = d.createElement('h2');
            h2Modal.textContent = productos.nombre;
            h2Modal.className = 'h2modal';

            let imgModal = d.createElement('img');
            imgModal.src = productos.imagen;

            let descModal = d.createElement('p');
            descModal.textContent = `${productos.descripcion}`;

            let medida = d.createElement('p');
            medida.textContent = `${productos.medida}`;

            let precioModal = d.createElement('p');
            precioModal.textContent = `Precio: $${productos.precio}`;

            let btnAgregarModal = d.createElement('button');
            btnAgregarModal.textContent = "Agregar";
            btnAgregarModal.className = 'btnAgregarModal'

            btnAgregarModal.addEventListener('click', () => {
                agregarProductoAlCarrito(productos); 
                mostrarCarrito(); 
                modalCont.remove(); 
            });

            let a = d.createElement('a');
            a.href = '#';
            a.innerHTML = '❌';
            a.addEventListener('click', () => {
                modalCont.remove();
                return false;
            });

            modalCont.append(h2Modal, imgModal, descModal, medida, precioModal, btnAgregarModal, a);
            d.body.append(modalCont);
        });


        // BTN AGREGAR -------------------->


        function agregarProductoAlCarrito(producto) {
            console.log('Producto agregado:', producto.nombre);
            let id = producto.id;
            let precio = producto.precio;
            let indiceId = carrito.idProductos.indexOf(id);

            if (indiceId != -1) {
                carrito.cantidades[indiceId]++;
                console.log(`Cantidad de ${producto.nombre}: ${carrito.cantidades[indiceId]}`);
            } else {
                carrito.idProductos.push(id);
                carrito.cantidades.push(1);
                console.log(`Nuevo producto agregado: ${producto.nombre}`);
            }

            carrito.total = parseInt(carrito.total) + precio;
            console.log('Total actualizado del carrito:', carrito.total);
            mostrarCarrito();
        }

        btnAgregar.addEventListener('click', () => {
            console.log('Producto agregado:', productos.nombre);
            agregarProductoAlCarrito(productos);
        });

        divProducto.append(titulo, imgArticulo, btnVerMas, btnAgregar);
        galeria.appendChild(divProducto);
    });

}


// PROMO Y FILTRO ----------->


function mostrarBanner(categoriaId, categoriaNombre, descuento = 15) {
    let producto = obtenerProductoPorCategoria(categoriaId);

    let publi = d.createElement('div');
    publi.className = 'modal';
    publi.id = 'banner';

    let h1 = d.createElement('h1');
    h1.innerHTML = 'Descuento relámpago!!';
    h1.className = 'h1-banner';

    let p = d.createElement('p');
    p.className = 'p-banner';
    p.innerHTML = `Te regalamos un ${descuento}% OFF con tu compra<br/> Haciendo 'click' en la imagen ya es tuyo!<br/> ¿Te lo vas a perder?`;

    let cuenta = d.createElement('h2');
    cuenta.innerHTML = '10';
    cuenta.className = 'h2cuenta';

    let img = d.createElement('img');
    img.src = `img/${categoriaNombre}.png`;

    publi.append( h1, img, p, cuenta);
    d.body.append(publi);

    img.addEventListener('click', () => {
        console.log('Cuadro promo:', producto);
        if (producto) {
            agregarAlCarrito(producto);
            alert(`🙌 Felicitaciones!! El cuadro seleccionado ya se cargó al carrito.`);
            mostrarCarrito();
            clearInterval(conteo);
            publi.remove();
        }
    });

    let conteo = setInterval(() => {
        if (cuenta.innerHTML <= 1) {
            clearInterval(conteo);
            publi.remove();
        } else {
            cuenta.innerHTML = parseInt(cuenta.innerHTML) - 1;
        }
    }, 1000);
}

function obtenerProductoPorCategoria(categoriaId) {
    for (let i = 0; i < aProductos.length; i++) {
        if (aProductos[i].categoria === categoriaId) {
            return aProductos[i];
        }
    }
    return null;
}

function agregarAlCarrito(producto) {
    let id = producto.id;
    let precio = producto.precioPromo;
    let indiceId = carrito.idProductos.indexOf(id);

    if (indiceId !== -1) {
        carrito.cantidades[indiceId]++;
    } else {
        carrito.idProductos.push(id);
        carrito.cantidades.push(1);
    }

    carrito.total = parseInt(carrito.total) + precio;
    mostrarCarrito();
}

const filtroProductos = (categoria) => {
    console.log('Filtro por categoria:', categoria);
    const prodVista = aProductos.filter(producto => producto.categoria === categoria);
    galeriaArte(prodVista);
}

let filtros = d.getElementById('filtros');

let btnCaballos = d.createElement('button');
btnCaballos.className = 'button btnFiltro';
btnCaballos.innerText = 'CABALLOS';

let btnGauchos = d.createElement('button');
btnGauchos.className = 'button btnFiltro';
btnGauchos.innerText = 'GAUCHOS';

let btnPolo = d.createElement('button');
btnPolo.className = 'button btnFiltro';
btnPolo.innerText = 'POLO';

let btnAll = d.createElement('button');
btnAll.className = 'button btnFiltro';
btnAll.innerText = 'VER TODOS';

filtros.append(btnCaballos, btnGauchos, btnPolo, btnAll);

btnCaballos.addEventListener('click', () => {
    filtroProductos('caballos');
    mostrarBanner('caballos', 'CABALLO');
});

btnGauchos.addEventListener('click', () => {
    filtroProductos('gauchos');
    mostrarBanner('gauchos', 'GAUCHOS');
});

btnPolo.addEventListener('click', () => {
    filtroProductos('polo');
    mostrarBanner('polo', 'POLO');
});

btnAll.addEventListener('click', () => {
    galeriaArte(aProductos);
});

galeriaArte(aProductos);


// CARRITO--------------------->


let divCarrito = d.querySelector('#minicarrito');
let pCarrito = divCarrito.firstElementChild;
let pPrecio = pCarrito.nextElementSibling;

const mostrarCarrito = () => {

    divCarrito.innerHTML = '';

    let totalItems = 0;
    carrito.cantidades.forEach(cantidad => {
        totalItems += cantidad;
    });

    let resumenCarrito = d.createElement('div');
    resumenCarrito.className = 'resumen-carrito';

    let tituloMiniCarrito = d.createElement('h3');
    tituloMiniCarrito.textContent = 'Mis Cuadros';
    tituloMiniCarrito.className = 'resumen-carrito';

    let resumenItems = d.createElement('p');
    resumenItems.textContent = `${totalItems} items cargados`;
    resumenItems.className = 'resumen-carrito';

    let resumenPrecio = d.createElement('p');
    resumenPrecio.textContent = `$${carrito.total} a pagar`;
    resumenPrecio.className = 'resumen-carrito';

    let btnVerCarrito = d.createElement('button');
    btnVerCarrito.textContent = 'Ver 🛒';
    btnVerCarrito.className = 'btnMiniCarrito';

    btnVerCarrito.addEventListener('click', mostrarDetalleCarrito);

    resumenCarrito.append(tituloMiniCarrito, resumenItems,  resumenPrecio, btnVerCarrito);
    divCarrito.appendChild(resumenCarrito);

    console.log('Carrito actualizado:', resumenCarrito, resumenItems, resumenPrecio);

};

const mostrarDetalleCarrito = () => {
    let divModalCarrito = d.createElement('div');
    divModalCarrito.id = 'modalCarrito';
    divModalCarrito.className = 'modal';

    let h3Titulo = d.createElement('h3');
    h3Titulo.className = 'h3Modal';
    h3Titulo.textContent = 'Detalle del carrito';

    let ulProductos = d.createElement('ul');
    carrito.idProductos.forEach((idProducto, indice) => {
        let cantidad = carrito.cantidades[indice];
        let elProducto;
        for (let producto of aProductos) {
            if (producto.id === idProducto) {
                elProducto = producto;
                break;
            }
        }
        if (elProducto) {
            let precioMostrar = elProducto.precioPromo ? elProducto.precioPromo : elProducto.precio;
            let subtotalProducto = precioMostrar * cantidad;

            let li = d.createElement('li');
            li.classList = 'listaCarrito';
            li.innerHTML = `${elProducto.nombre} <br/> Unidades: ${cantidad} <br/> Precio: $${precioMostrar} <br/>
                Subtotal: $${subtotalProducto}`;

            let btnEliminarUnidad = d.createElement('button');
            btnEliminarUnidad.textContent = '🗑️';
            btnEliminarUnidad.className = 'btn-eliminar';

            btnEliminarUnidad.addEventListener('click', () => {
                carrito.cantidades[indice]--;
                if (carrito.cantidades[indice] <= 0) {
                    carrito.idProductos.splice(indice, 1);
                    carrito.cantidades.splice(indice, 1);
                }

                carrito.total = carrito.idProductos.reduce((total, idProducto, i) => {
                    let producto = null;
                    for (let prod of aProductos) {
                        if (prod.id === idProducto) {
                            producto = prod;
                            break;
                        }
                    }

                    if (producto) {
                        let precio = producto.precioPromo ? producto.precioPromo : producto.precio;
                        return total + (precio * carrito.cantidades[i]);
                    }
                    return total;
                }, 0);

                divModalCarrito.remove();
                mostrarDetalleCarrito();
                mostrarCarrito();
            });

            li.appendChild(btnEliminarUnidad);
            ulProductos.appendChild(li);
        }
    });

    let pTotal = d.createElement('p');
    let totalConDescuento = 0;
    for (let i = 0; i < carrito.idProductos.length; i++) {
        let idProducto = carrito.idProductos[i];
        let elProducto = null;

        for (let producto of aProductos) {
            if (producto.id === idProducto) {
                elProducto = producto;
                break;
            }
        }

        if (elProducto) {
            let precioMostrar = elProducto.precioPromo ? elProducto.precioPromo : elProducto.precio;
            totalConDescuento += precioMostrar * carrito.cantidades[i];
        }
    }

    pTotal.textContent = `Total: $${totalConDescuento}`;

    let btnVaciarCarrito = d.createElement('button');
    btnVaciarCarrito.textContent = 'Vaciar carrito';
    btnVaciarCarrito.className = 'btnVaciar';
    btnVaciarCarrito.addEventListener('click', () => {
        carrito.idProductos = [];
        carrito.cantidades = [];
        carrito.total = 0;

        alert('Todos los productos han sido eliminados del carrito.');

        divModalCarrito.remove();
        mostrarCarrito(); 
        galeriaArte(aProductos); 
    });

    let btnFinalizarCompra = d.createElement('button');
    btnFinalizarCompra.textContent = 'Finalizar compra';
    btnFinalizarCompra.className = 'button';
    btnFinalizarCompra.addEventListener('click', mostrarFormularioCompra);

    let a = d.createElement('a');
    a.href = '#';
    a.innerHTML = '❌';
    a.addEventListener('click', () => {
        divModalCarrito.remove();
        return false;
    });

    let divContenido = d.createElement('div');
    divContenido.className = 'contenidoModal';
    divContenido.append(ulProductos, pTotal);

    divModalCarrito.append(a, h3Titulo, divContenido, btnVaciarCarrito, btnFinalizarCompra);
    d.body.appendChild(divModalCarrito);
};


// FORMULARIO FINALIZAR COMPRA----------->


const mostrarFormularioCompra = () => {
    let divFormularioCompra = d.createElement('div');
    divFormularioCompra.id = 'formularioCompra';
    divFormularioCompra.className = 'modal';

    let btnCerrar = d.createElement('button');
    btnCerrar.textContent = '❌';
    btnCerrar.className = 'cerrar-modal';
    btnCerrar.addEventListener('click', () => {
        divFormularioCompra.remove();
    });

    let h3Formulario = d.createElement('h3');
    h3Formulario.textContent = 'Formulario de compra';

    let contenedorForm = d.createElement('div');
    contenedorForm.className = 'contenedorForm'

    let form = d.createElement('form');
    form.method = 'post';
    form.enctype = 'multipart/form-data';

    let labelNombre = d.createElement('label');
    labelNombre.textContent = 'Nombre completo:';
    let inputNombre = d.createElement('input');
    inputNombre.type = 'text';
    inputNombre.required = true;

    let labelTel = d.createElement('label');
    labelTel.textContent = 'Teléfono de contacto:';
    let inputTel = d.createElement('input');
    inputTel.type = 'tel';
    inputTel.required = true;

    let labelEmail = d.createElement('label');
    labelEmail.textContent = 'Correo electrónico:';
    let inputEmail = d.createElement('input');
    inputEmail.type = 'email';
    inputEmail.required = true;

    let labelCalle = d.createElement('label');
    labelCalle.textContent = 'Calle:';
    let inputCalle = d.createElement('input');
    inputCalle.type = 'text';
    inputCalle.required = true;

    let labelNumero = d.createElement('label');
    labelNumero.textContent = 'Número:';
    let inputNumero = d.createElement('input');
    inputNumero.type = 'number';
    inputNumero.required = true;

    let labelCodigoPostal = d.createElement('label');
    labelCodigoPostal.textContent = 'Código Postal:';
    let inputCodigoPostal = d.createElement('input');
    inputCodigoPostal.type = 'text';
    inputCodigoPostal.required = true;

    let labelProvincia = d.createElement('label');
    labelProvincia.textContent = 'Provincia:';
    let inputProvincia = d.createElement('input');
    inputProvincia.type = 'text';
    inputProvincia.required = true;

    let labelPago = d.createElement('label');
    labelPago.textContent = 'Método de pago:';

    let opcionesPago = ['Transferencia', 'Mercado Pago', 'Tarjeta de crédito', 'Tarjeta de débito'];
    let divOpcionesPago = d.createElement('div');
    divOpcionesPago.className = 'opciones-pago';

    opcionesPago.forEach(opcion => {
        let inputPago = d.createElement('input');
        inputPago.type = 'radio';
        inputPago.name = 'metodoPago';
        inputPago.value = opcion;
        inputPago.required = true;

        let labelOpcion = d.createElement('label');
        labelOpcion.textContent = opcion;
        labelOpcion.prepend(inputPago);

        divOpcionesPago.appendChild(labelOpcion);
    });

    let btnEnviar = d.createElement('button');
    btnEnviar.type = 'submit';
    btnEnviar.textContent = 'Confirmar Compra';

    let btnVolver = d.createElement('button');
    btnVolver.type = 'button';
    btnVolver.textContent = 'Volver al carrito';
    btnVolver.addEventListener('click', () => {
        divFormularioCompra.remove();
        mostrarCarrito();
    });

    form.append(labelNombre, inputNombre, labelTel, inputTel, labelEmail, inputEmail, labelCalle, inputCalle,
        labelNumero, inputNumero, labelCodigoPostal, inputCodigoPostal, labelProvincia, inputProvincia, labelPago, divOpcionesPago, btnEnviar, btnVolver);
    contenedorForm.append(form)
    divFormularioCompra.append(btnCerrar, h3Formulario, contenedorForm);

    d.body.appendChild(divFormularioCompra);

    btnEnviar.addEventListener('click', () => {
        if (!form.metodoPago.value) {
            alert("Por favor, selecciona un método de pago.");
            return;
        }

        confirmarCompra(inputNombre.value, inputEmail.value, form.metodoPago.value);
    });
    
};

const confirmarCompra = (nombre, email) => {
    alert(`¡Gracias por tu compra, ${nombre}!\n\nEn breve te enviaremos un mail a:\n${email}\npara finalizar tu solicitud!`);

    carrito.idProductos = [];
    carrito.cantidades = [];
    carrito.total = 0;

    let divFormularioCompra = d.getElementById('formularioCompra');
    if (divFormularioCompra) {
        divFormularioCompra.remove();
    }

    mostrarCarrito();
    mostrarDetalleCarrito();
};


let logo = d.querySelector('.logo');

logo.addEventListener('click', () => {
    galeriaArte(aProductos);
});

galeriaArte(aProductos);


function slider() {
    let mensaje = document.createElement('p');
    mensaje.innerText = '🚚 HACEMOS ENVÍOS A TODO EL PAÍS!! - 📣 10% OFF PAGANDO CON TRANSFERENCIA!! - 💳 3 Y 6 CUOTAS SIN INTERÉS!!';
    mensaje.style.whiteSpace = 'nowrap';
    mensaje.style.position = 'absolute';
    mensaje.style.left = '100%'; 
    let slider = document.querySelector('.slider');
    slider.appendChild(mensaje);
    let posX = slider.offsetWidth; 

    setInterval(() => {
        posX -= 2; 
        mensaje.style.left = posX + 'px';

        if (posX <= -mensaje.offsetWidth) { 
            posX = slider.offsetWidth;
        }
    }, 18); 
}

slider();

