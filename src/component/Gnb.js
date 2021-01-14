import { useRouter } from "next/router";
import { Menu } from "semantic-ui-react";

function Gnb() {
  const router = useRouter();
  let activeItem;

  if (router.pathname === "/") {
    activeItem = "home";
  } else if (router.pathname === "/contact") {
    activeItem = "contact";
  } else if (router.pathname === "/about") {
    activeItem = "about";
  } else if (router.pathname === "/admin") {
    activeItem = "admin";
  } else if (router.pathname === "/chart") {
    activeItem = "chart";
  }

  function goLink(e, data) {
    if (data.name === "home") {
      router.push("/");
    } else if (data.name === "contact") {
      router.push("/contact");
    } else if (data.name === "about") {
      router.push("/about");
    } else if (data.name === "admin") {
      router.push("/admin");
    } else if (data.name === "chart") {
      router.push("/chart");
    }
  }

  return (
    <Menu inverted>
      <Menu.Item name="home" active={activeItem === "home"} onClick={goLink} />
      <Menu.Item
        name="about"
        active={activeItem === "about"}
        onClick={goLink}
      />
      <Menu.Item
        name="Contact Us"
        active={activeItem === "contact"}
        onClick={() => {
          router.push("/contact");
        }}
      />
      <Menu.Item
        name="admin"
        active={activeItem === "admin"}
        onClick={() => {
          router.push("/admin");
        }}
      />
      <Menu.Item
        name="chart"
        active={activeItem === "chart"}
        onClick={() => {
          router.push("/chart");
        }}
      />
    </Menu>
  );
}
export default Gnb;