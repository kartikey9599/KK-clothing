import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.styles.scss";
const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl:
      "https://assets.wired2fish.com/uploads/2023/06/best-fishing-hats.webp",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl:
      "https://contents.mediadecathlon.com/p2292989/7f484fed676425fad63d0f1a12f10b41/p2292989.jpg?format=auto&quality=70&f=650x0",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl:
      "https://media.gq.com/photos/60d21930430ae505071c3806/16:9/w_1920,c_limit/SNEAKER_GUIDE_OPENER.jpg",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "womens",
    imageUrl:
      "https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min.jpg",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "mens",
    imageUrl:
      "https://www.mensjournal.com/.image/t_share/MTk2MTM2MDY1MjM4OTY3ODEz/mensclothingbrands1.jpg",
    route: "shop/mens",
  },
];
function Directory() {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}

export default Directory;

// "https://i.ibb.co/cvpntL1/hats.png",
