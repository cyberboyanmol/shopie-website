export const links2 = [
  {
    link: "/men",
    icon: "fad fa-home",
    exact: true,
    text: "Men",
  },
  {
    link: "/women",
    icon: "fad fa-shopping-bag",
    text: "Women",
  },
  {
    text: "Kids",
    link: "/kids",
  },
];
export const links1 = [
  {
    link: "/shop",
    icon: "fad fa-sparkles",
    text: "Shop",
  },

  {
    text: "Arrivals",
    link: "/arrivals",
  },
  {
    link: "/sales",
    text: "Sales",
    icon: "fad fa-tags",
  },
];
export const AllRoutes = [
  {
    link: "shop",

    text: "Shop",
    breadcrumbs: {
      link: [
        { text: "Home", link: "website" },
        { text: "Shop", link: "website/shop" },
      ],
      title: "Shop",
    },
    filterby: "",
  },

  {
    text: "Arrivals",
    link: "arrivals",
    breadcrumbs: {
      link: [
        { text: "Home", link: "website" },
        { text: "New Arrivals", link: "website/arrivals" },
      ],
      title: "New Arrivals",
    },
    filterby: "arrivals",
  },
  {
    link: "sales",
    text: "Sales",

    breadcrumbs: {
      link: [
        { text: "Home", link: "website" },
        { text: "Sales", link: "website/sales" },
      ],
      title: "Sales",
    },
    filterby: "sale",
  },
  {
    link: "men",

    exact: true,
    text: "Men",
    breadcrumbs: {
      link: [
        { text: "Home", link: "website" },
        { text: "Men", link: "website/men" },
      ],
      title: "Men",
    },
    filterby: "men",
  },
  {
    link: "women",

    text: "Women",
    breadcrumbs: {
      link: [
        { text: "Home", link: "website" },
        { text: "Women", link: "website/women" },
      ],
      title: "Women",
    },
    filterby: "women",
  },
  {
    text: "Kids",
    link: "kids",
    breadcrumbs: {
      link: [
        { text: "Home", link: "website" },
        { text: "Kids", link: "website/kids" },
      ],
      title: "Kids",
    },
    filterby: "kids",
  },
];

export const Heroslide = [
  {
    subtitle: "Shop Trending T-Shirts that are now on sale!",
    title: "T-SHIRTS SALE",
    link: "sales",
    // img: "https://i.imgur.com/8GtUFvp.jpg",
    img: "https://i.imgur.com/CRHrQgs.jpg",
    // img: "https://i.imgur.com/eS10W2F.jpg",

    btntext: "Shop Now",
  },
  {
    subtitle: "Shop Women New Collection on Shopie ",
    title: "New Season",
    link: "women",
    // img: "https://i.imgur.com/eS10W2F.jpg",
    img: "https://i.imgur.com/WNqKy9Q.png",
    // position: 2,
    // class: "leftimg",
    btntext: "Shop Now",
  },
  {
    title: "New Arrivals ",
    subtitle: "Discover New Arrivals",
    link: "arrivals",
    // img: "https://i.imgur.com/CRHrQgs.jpg",
    img: "https://i.imgur.com/80EQkPj.jpg",
    // position: 3,
    // class: "center",
    btntext: "Discover Now",
  },
];
export const prices = [
  "$0-$49",
  "$50-$99",
  "$100-$149",
  "$150-$199",
  "199-300",
  "$300-$500",
];
export const allsizes = ["XS", "S", "M", "L", "XL", "XXL"];
export const allsizesstength = [
  {
    size: "XS",
    val: 1,
  },
  {
    size: "S",
    val: 2,
  },
  {
    size: "M",
    val: 3,
  },
  {
    size: "L",
    val: 4,
  },
  {
    size: "XL",
    val: 5,
  },
];
export const ratings = [5, 4, 3, 2, 1];

export const seasons = ["Fall", "Winter", "Spring", "Summer"];
export const filters = [
  "Popularity",
  "Price Low to High",
  "Price High to Low",
  "Rating",
];
export const genders = ["Women", "Men", "Kids"];

export const benefits = [
  {
    icon: "fal fa-shopping-cart",
    title: "Free Shipping",
    text: "Free Shipping on all orders over $50!",
  },
  {
    icon: "fal fa-credit-card",
    title: "Secure Payment",
    text: "Shop with Safety and Security",
  },
  {
    icon: "fal fa-wallet",
    title: "100% Satisfaction",
    text: "30 day money back guarantee",
  },
  {
    icon: "fal fa-comment",
    title: "Customer Service",
    text: "Reliable cusomer servie",
  },
];
export const FooterLink = [
  {
    title: "Shop",
    links: AllRoutes,
  },
  {
    title: "Account",
    links: [
      {
        text: "My Profile",
        link: "/profile",
      },
      {
        text: "Orders",
        link: "/orders",
      },
      {
        text: "Cart",
        link: "/cart",
      },
      {
        text: "Wishlist",
        link: "/Wishlist",
      },
    ],
  },
  {
    title: "Help",
    links: [
      {
        text: "Track Your Order",
        link: "/track",
      },
      {
        text: "Frequenlty Asked Questions",
        link: "/customerservice",
      },
      {
        text: "Shipping and Returns",
        link: "/shipping",
      },
      {
        text: "Customer Care",
        link: "/customerservice",
      },
    ],
  },
  {
    title: "Customer Policies",
    links: [
      {
        text: "About Us",
        link: "about",
      },
      {
        text: "Privacy Policy",
        link: "privacy",
      },
      {
        text: "Contact us",
        link: "contact",
      },
      {
        text: "Terms & Conditions",
        link: "terms",
      },
    ],
  },
];

export const AllColors = [
  "Burgundy",
  "Beige",
  "Black",
  "Blue",
  "Brown",
  "Gray",
  "Grey",
  "Green",
  "Red",
  "Purple",
  "Navy",
  "White",
  "Yellow",
  "orange",
];

export const colors = [
  "black",
  "red",
  "green",
  "blue",
  "orange",
  "yellow",
  "Navy",
  "gray",
  "brown",
];
export const orderstatus = [
  {
    status: "Ordered",
    percent: 0,
    icon: "fa fa-bags-shopping",
  },
  {
    status: "Received",
    percent: 18,
    icon: "fa fa-check",
  },
  {
    status: "Shipped",
    percent: 45,
    icon: "fa fa-truck",
  },
  {
    status: "In Transit",
    percent: 78,
    icon: "fa fa-truck-moving",
  },
  {
    status: "Delivered",
    percent: 100,
    icon: "fa fa-box-check",
  },
];
export const giftcardtemplates = [
  { id: "templateone", img: "https://i.imgur.com/6ikTqFA.jpg" },
  { id: "templatetwo", img: "https://i.imgur.com/4mJkU1A.jpg" },
  { id: "templatethree", img: "" },
  { id: "templatefour", img: "https://i.imgur.com/sVgWO1B.jpg" },
];

export const categories = [
  {
    categoriesName: "Women",
    subtitle: "lorem lorem lorem",
    link: "women",
    img: "https://i.imgur.com/4koGFQi.png",
    // img: "https://i.imgur.com/8GtUFvp.jpg",
    btntext: "Shop Now",
  },
  {
    categoriesName: "Men",
    subtitle: "lorem lorem lorem",
    link: "men",
    // img: "https://i.imgur.com/TYKqOHj.jpg",
    img: "https://i.imgur.com/c7ZX0bG.png",
    btntext: "Shop Now",
  },
  {
    categoriesName: "Kids",
    subtitle: "lorem lorem lorem",
    link: "kids",
    img: "https://i.imgur.com/mSDzRfg.jpg",
    img: "https://i.imgur.com/Q7AJExS.png",

    btntext: "Shop Now",
  },
];

export const FooterPayment = [
  "https://i.imgur.com/KdkYAwO.png",
  "https://i.imgur.com/HLrpUtG.png",
  "https://i.imgur.com/RTpf0g8.png",
  "https://i.imgur.com/F1vjYw5.png",
];

export const FooterConnect = [
  "https://i.imgur.com/2wWFWlJ.png",
  "https://i.imgur.com/TV0DG3D.png",
  "https://i.imgur.com/ESGE8yS.png",
  "https://i.imgur.com/unk8dM8.png",
];

export const sortoptions = [
  { text: "Recommended", order: "recommended" },
  { text: "What's New", order: "arrivals" },
  { text: "Price: Low to High", order: "cheapest" },
  { text: "Price: High to Low", order: "expensive" },
  { text: "Customer Rating", order: "rating" },
  { text: "Better Discount ", order: "sale" },
];
