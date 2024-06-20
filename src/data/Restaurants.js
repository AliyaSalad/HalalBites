import HalalStatus from "./HalalStatus";
import Certifications from "./Certifications";
import Alcohol from "./Alcohol";

const restaurants = [
  {
    RestaurantId: 1,
    RestaurantName: "Wingstop",
    RestaurantImage:
      "https://www.tastingtable.com/img/gallery/every-wingstop-flavor-ranked-worst-to-best/intro-1687882750.jpg",

    RestaurantAddress: " 105 Clarence St, Kingston upon Thames KT1 1QL",
    RestaurantTelephone: " 020 3815 9538",
    RestaurantMenu: "https://www.wingstop.co.uk/menu",
    Intro:
      "Wingstop is the ultimate experience for iconic wing flavours to enjoy with family and friends. Crispy chicken tenders available in any of our 10 house flavours.",
    HalalStatus: "Fully Halal",
    Certifications: "HFA",
    Alcohol: "Alcohol Free",
  },
  {
    RestaurantId: 2,
    RestaurantName: "Chilli cha cha",
    RestaurantImage:
      "https://tb-static.uber.com/prod/image-proc/processed_images/61f675fe27b32afcec023c7008a8b800/c73ecc27d2a9eaa735b1ee95304ba588.jpeg",
    RestaurantAddress: "6 Surbiton Rd, Kingston upon Thames KT1 2HT",
    RestaurantTelephone: "020 8547 3724",
    RestaurantMenu: "Pending",
    Intro: "Pakistani Street Food",
    HalalStatus: "Fully Halal",
    Certifications: "HMC",
    Alcohol: "Alcohol Free",
  },
  {
    RestaurantId: 3,
    RestaurantName: "Lebanese Express",
    RestaurantImage:
      "https://tb-static.uber.com/prod/image-proc/processed_images/ff91b938eff625e2a196abb1e9e8ef2f/f6deb0afc24fee6f4bd31a35e6bcbd47.jpeg",
    RestaurantAddress: "47 Surbiton Rd, Kingston upon Thames KT1 2HG",
    RestaurantTelephone: "07445 550538",
    RestaurantMenu:
      "https://media-cdn.tripadvisor.com/media/photo-s/11/84/55/7c/menu.jpg",
    Intro:
      "Delicious fresh homemade Lebanese food! Friendly and efficient service. Great value for money. Highly recommended!",
    HalalStatus: "Fully Halal",
    Certifications: "HFA",
    Alcohol: "Alcohol Free",
  },
  // {
  //   RestaurantId: 4,
  //   RestaurantName: "Nandos",
  //   RestaurantImage:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY7vJ497jap2o5EEiNtR8XCGowu6781Go54Q&s",
  //   RestaurantAddress:
  //   RestaurantTelephone:
  //   RestaurantMenu:
  //   Intro:
  //   HalalStatus:
  //   Certifications:
  //   Alcohol:
  // },
];
export default restaurants;
