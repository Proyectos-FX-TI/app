const Images = [
    { image: require("../assets/banners/martillo.jpg") },
    { image: require("../assets/banners/pala.png") },
    { image: require("../assets/banners/herramienta.jpg") },
   
];

export const markers = [
    {
      coordinate: {
        latitude: 18.863726,
        longitude: -97.104068,
      },
      title: "Martillo",
      description: "De metal",
      image: Images[0].image,
      price: 100
    },
    {
      coordinate: {
        latitude: 18.863512782628483,
        longitude: -97.10848828223088,
      },
      title: "Pala",
      description: "Para tierra",
      image: Images[1].image,
      price: 300
    },
    {
      coordinate: {
        latitude: 18.85981050020069,
        longitude: -97.110105281763,
      },
      title: "Herramienta",
      description: "Para lo que quieras",
      image: Images[2].image,
      price: 500
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

