/*
EDITA SOLO ESTE ARCHIVO PARA CAMBIAR PRODUCTOS.
1) Copia un bloque { ... } y pégalo para añadir otro producto.
2) Cambia nombre, precio, categoría, descripción e imagen.
3) categorias permitidas: "Skincare", "Accesorios", "Otros".
4) estado: "consultar" o "pausado".
Usa una URL de foto pública en "imagen". Si no tienes foto, deja imagen: "".
*/
const CONFIG = {
  whatsapp: "51922244961", // REEMPLAZA por el número de ventas: código Perú 51 + número, sin + ni espacios
  nombre: "Naty",
  dropTitulo: "Lo que estoy mostrando esta semana",
  dropDescripcion: "Una selección de productos que han salido en los lives. Pregúntame si todavía están disponibles ♡"
};

const PRODUCTOS = [
  {
    id: 1,
    nombre: "Centella Air Fit",
    precio: 95,
    categoria: "Skincare",
    descripcion: "Protector Solar 50 ml ♡",
    imagen: "product_01.png",
    estado: "consultar",
    destacado: true
  },
  {
    id: 2,
    nombre: "Centella Ácido Hyalurónico",
    precio: 150,
    categoria: "Skincare",
    descripcion: "Protector Solar 100 ml",
    imagen: "product_02.png",
    estado: "consultar",
    destacado: true
  },
  {
    id: 3,
    nombre: "Protector en barra",
    precio: 85,
    categoria: "Skincare",
    descripcion: "Beauty of Joseon 18 gr.",
    imagen: "product_03.png",
    estado: "consultar",
    destacado: true
  },
  {
    id: 4,
    nombre: "Centella Niacinamide 10 Boosting Shot",
    precio: 95,
    categoria: "Skincare",
    descripcion: "SKIN1004 - Ampolla Facial 30 ml",
    imagen: "product_04.png",
    estado: "consultar",
    destacado: false
  },
  {
    id: 5,
    nombre: "Sérum Facial aclarador de piel",
    precio: 105,
    categoria: "Skincare",
    descripcion: "Beauty of Joseon 60 ml",
    imagen: "product_05.png",
    estado: "consultar",
    destacado: false
  },
  {
    id: 6,
    nombre: "Protector Solar Heartleaf Silky",
    precio: 100,
    categoria: "Skincare",
    descripcion: "ANUA 50 ml",
    imagen: "product_06.png",
    estado: "consultar",
    destacado: false
  }
];
