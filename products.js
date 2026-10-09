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
    nombre: "Sérum facial",
    precio: 69,
    categoria: "Skincare",
    descripcion: "Un favorito para tu rutina ♡",
    imagen: "",
    estado: "consultar",
    destacado: true
  },
  {
    id: 2,
    nombre: "Crema hidratante",
    precio: 75,
    categoria: "Skincare",
    descripcion: "Para completar tu rutina",
    imagen: "",
    estado: "consultar",
    destacado: true
  },
  {
    id: 3,
    nombre: "Cadena plateada",
    precio: 50,
    categoria: "Accesorios",
    descripcion: "Un detalle para combinar",
    imagen: "",
    estado: "consultar",
    destacado: true
  },
  {
    id: 4,
    nombre: "Aretes delicados",
    precio: 35,
    categoria: "Accesorios",
    descripcion: "Sencillos y bonitos",
    imagen: "",
    estado: "consultar",
    destacado: false
  },
  {
    id: 5,
    nombre: "Cosita sorpresa",
    precio: 25,
    categoria: "Otros",
    descripcion: "Un hallazgo de los lives",
    imagen: "",
    estado: "consultar",
    destacado: false
  },
  {
    id: 6,
    nombre: "Otro favorito",
    precio: 45,
    categoria: "Otros",
    descripcion: "Pregúntame por este ♡",
    imagen: "",
    estado: "pausado",
    destacado: false
  }
];
