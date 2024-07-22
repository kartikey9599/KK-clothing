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
      "https://assets.ajio.com/medias/sys_master/root/20231111/bu5e/654f9f06afa4cf41f5842e30/-1117Wx1400H-410393594-02o-MODEL.jpg",
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
      "https://assets.roche.com/f/176343/4000x2669/a11458af18/womens-health-teaser.jpg",
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
