# PreEntrega2 - Curso React - E-commerce Morf.ar

## Descripción

Este proyecto es parte de la segunda pre-entrega del curso de React. Se trata de un e-commerce llamado **Morf.ar** que permite a los usuarios visualizar y seleccionar categorías de comida, ver detalles de cada producto y añadir cantidades específicas al carrito de compras. La aplicación está construida con React, Vite, y utiliza Bootstrap para los estilos.

## Funcionalidades

- Barra de navegación: Incluye el nombre de la tienda (morf.ar) y categorías clickeables que permiten filtrar los productos por tipo (Comidas, Postres, Bebidas, etc.).
- Componente CartWidget: Muestra un ícono de carrito en la barra de navegación con un número de productos hardcodeado.
- Componente ItemListContainer: Muestra una lista de productos, organizados por categorías o en general.
- Componente ItemDetailContainer: Permite ver detalles específicos de cada producto, incluyendo descripción, precio y una imagen.
- Componente ItemCount: Permite seleccionar una cantidad específica de un producto antes de agregarlo al carrito, aunque aún no está sincronizado con el estado del carrito.
- Rutas Configuradas:
- /: Muestra el catálogo completo de productos.
- /category/:categoryId: Muestra los productos filtrados por categoría.
- /item/:id: Muestra el detalle de un producto específico.

## Tecnologías Utilizadas

- React
- Vite
- Bootstrap
- CSS Modules
- React Router para la navegación entre páginas

## Instalación

1. Clona el repositorio:

   `git clone https://github.com/GimeSozzi/PreEntrega2_React_SozziGimena.git`

2. Navega a la carpeta del proyecto:

   `cd PreEntrega2_React_SozziGimena`

3. Instala las dependencias:

   `npm install`

4. Inicia el servidor de desarrollo:

   `npm run dev`

## Uso

Una vez que el servidor esté corriendo, accede a la aplicación en tu navegador en http://localhost:5173. Podrás navegar entre las categorías de productos, visualizar detalles de cada producto.

## Estructura del Proyecto

src/  
├── components/  
│ ├── Brand.jsx  
│ ├── Brand.css  
│ ├── ButtonCategory.jsx  
│ ├── ButtonCategory.css  
│ ├── CartWidget.jsx  
│ ├── CartWidget.css  
│ ├── Footer.jsx  
│ ├── Footer.css  
│ ├── Item.jsx  
│ ├── Item.css  
│ ├── ItemCount.jsx  
│ ├── ItemCount.css  
│ ├── ItemDetail.jsx  
│ ├── ItemDetail.css  
│ ├── ItemDetailContainer.jsx  
│ ├── ItemList.jsx  
│ ├── ItemList.css  
│ ├── ItemListContainer.jsx  
│ ├── ItemListContainer.css  
│ ├── NavBar.jsx  
│ ├── NavBar.css  
│ └── Cart.jsx  
│  
├── services/  
│ ├── asyncMock.js  
│ └── getItem.js  
│  
├── App.jsx  
├── main.jsx  
└── App.css

## Notas

Morf.ar es un proyecto en desarrollo. Aún falta sincronizar ItemCount con el estado del carrito y actualizar el número mostrado en CartWidget dinámicamente. Próximamente se planea agregar métodos de pago, una página completa para el carrito, y mejoras en la gestión de productos y la experiencia del usuario.
