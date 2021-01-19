import { useRouter } from "next/router";
import { Menu } from "semantic-ui-react";

function Gnb() {
  const router = useRouter();
  let activeItem;

  if (router.pathname === "/") {
    activeItem = "home";
  } else if (router.pathname === "/chart") {
    activeItem = "chart";
  } else if (router.pathname === "/about") {
    activeItem = "about";
  } else if (router.pathname === "/admin") {
    activeItem = "admin";
  } else if (router.pathname === "/solomon01") {
    activeItem = "solomon01";
  } else if (router.pathname === "/solomon02") {
    activeItem = "solomon02";
  } else if (router.pathname === "/solomon03") {
    activeItem = "solomon03";
  } else if (router.pathname === "/solomon04") {
    activeItem = "solomon04";
  }

  function goLink(e, data) {
    if (data.name === "home") {
      router.push("/");
    } else if (data.name === "chart") {
      router.push("/chart");
    } else if (data.name === "about") {
      router.push("/about");
    } else if (data.name === "admin") {
      router.push("/admin");
    } else if (data.name === "solomon01") {
      router.push("/solomon01/solomon01");
    } else if (data.name === "solomon02") {
      router.push("/solomon02/solomon02");
    } else if (data.name === "solomon03") {
      router.push("/solomon03/solomon03");
    } else if (data.name === "solomon04") {
      router.push("/solomon04/solomon04");
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
        active={activeItem === "chart"}
        onClick={() => {
          router.push("/chart");
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
        name="solomon01"
        active={activeItem === "solomon01"}
        onClick={() => {
          router.push("/solomon01/solomon01");
        }}
      />
      <Menu.Item
        name="solomon02"
        active={activeItem === "solomon02"}
        onClick={() => {
          router.push("/solomon02/solomon02");
        }}
      />
      <Menu.Item
        name="solomon03"
        active={activeItem === "solomon03"}
        onClick={() => {
          router.push("/solomon03/solomon03");
        }}
      />
      <Menu.Item
        name="solomon04"
        active={activeItem === "solomon04"}
        onClick={() => {
          router.push("/solomon04/solomon04");
        }}
      />
    </Menu>
  );
}
export default Gnb;