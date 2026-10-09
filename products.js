/*
EDITA SOLO ESTE ARCHIVO PARA CAMBIAR PRODUCTOS.
1) Copia un bloque { ... } y pégalo para añadir otro producto.
2) Cambia nombre, precio, categoría, descripción e imagen.
3) categorias permitidas: "Skincare", "Accesorios", "Otros".
4) estado: "consultar" o "pausado".
Usa una URL de foto pública en "imagen". Si no tienes foto, deja imagen: "".
*/
const CONFIG = {
  whatsapp: "51999999999", // REEMPLAZA por el número de ventas: código Perú 51 + número, sin + ni espacios
  nombre: "Naty",
  dropTitulo: "Lo que estoy mostrando esta semana",
  dropDescripcion: "Una selección de productos que han salido en los lives. Pregúntame si todavía están disponibles ♡"
};

const PRODUCTOS = [
  {
    id: 1,
    nombre: "MADECA CREAM ZERO",
    precio: 110,
    categoria: "Skincare",
    descripcion: "Un favorito para tu rutina ♡",
    imagen: "product_01.png",
    estado: "consultar",
    destacado: true
  },
  {
    id: 2,
    nombre: "PROTECTOR SOLAR ÁCIDO HIALURÓNICO",
    precio: 90,
    categoria: "Skincare",
    descripcion: "Para completar tu rutina",
    imagen: "product_02.png",
    estado: "consultar",
    destacado: true
  },
  {
    id: 3,
    nombre: "PROTECTOR SOLAR EN BARRA",
    precio: 85,
    categoria: "Skincare",
    descripcion: "Muy cómodo de usar",
    imagen: "product_03.png",
    estado: "consultar",
    destacado: true
  },
  {
    id: 4,
    nombre: "NIACINAMIDA 10%",
    precio: 95,
    categoria: "Skincare",
    descripcion: "Para tu piel más luminosa",
    imagen: "product_04.png",
    estado: "consultar",
    destacado: false
  },
  {
    id: 5,
    nombre: "SERUM ACLARADOR DE PIEL",
    precio: 105,
    categoria: "Skincare",
    descripcion: "Pregúntame por este ♡",
    imagen: "product_05.png",
    estado: "consultar",
    destacado: false
  },
  {
    id: 6,
    nombre: "PROTECTOR SOLAR ANUA",
    precio: 100,
    categoria: "Skincare",
    descripcion: "Un hallazgo de los lives",
    imagen: "product_06.png",
    estado: "consultar",
    destacado: false
  }
];
