import { Link } from "react-router-dom";

const Header = () => {
  const Navigation = [
    { title: "Cancel", link: "/cancel" },
    { title: "Cart", link: "/cart" },
    { title: "Catagories", link: "/catagories" },
    { title: "Favorite", link: "/favorite" },
    { title: "NotFound", link: "/notfound" },
    { title: "Orders", link: "/orders" },
    { title: "Products", link: "/products" },
    { title: "Profiles", link: "/profile" },
    { title: "Success", link: "/success" },
  ];
  return (
    <div className="max-w-screen-xl h-20 mx-auto px-4 lg:px-8 flex items-center justify-between">
      <Link to={"/"}>
        <h1 className="text-3xl font-semibold ">SuperGear</h1>
      </Link>
      <div className="flex gap-x-6">
        {Navigation?.map((item) => (
          <Link
            to={item?.link}
            key={item?.title}
            className="text-lg font-bold cursor-pointer hover:text-green-600"
          >
            {item?.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
