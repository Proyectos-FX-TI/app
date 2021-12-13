const Images = [
  { image: require("../assets/banners/martillo.jpg") },
  { image: require("../assets/banners/pala.png") },
  { image: require("../assets/banners/herramienta.jpg") },
 
];

export const markers = [
  {
    id:1 ,
    user_id: 1,
    coordinate: {
      latitude: 18.863726,
      longitude: -97.104068,
    },
    title: "Martillo",
    description: "De metal",
    image: 'https://p4.wallpaperbetter.com/wallpaper/433/344/835/hands-hammer-nail-wallpaper-preview.jpg',
    price: 100,
    costo: 50,
  },
  {
    id: 2,
    user_id: 2,
    coordinate: {
      latitude: 18.863512782628483,
      longitude: -97.10848828223088,
    },
    title: "Pala",
    description: "Para tierra",
    image: 'https://www.nortonabrasives.com/sites/sga.na.com/files/styles/node__field_blog_image__full/public/blog/herramientas-e-implementos-que-debo-tener-en-casa.jpg?itok=4tpfV4gw',
    price: 300,
    costo: 50,
  },
  {
    id: 3,
    user_id: 3,
    coordinate: {
      latitude: 18.85981050020069,
      longitude: -97.110105281763,
    },
    title: "Herramienta",
    description: "Para lo que quieras",
    image: 'https://estaticos-cdn.prensaiberica.es/clip/ef72e8ba-c7cc-40a5-861b-1d7e58df420e_16-9-aspect-ratio_default_0.jpg',
    price: 500,
    costo: 50,
  },
];


export const mapStandardStyle = [
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
];

