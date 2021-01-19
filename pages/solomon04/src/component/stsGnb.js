import { useRouter } from "next/router";
import { Menu } from "semantic-ui-react";

function stsGnb() {
  const router = useRouter();
  let activeItem;

  function goLink(e, data) {
    if (data.name === "solomon04") {
      router.push("/solomon04/test/ChooseType");
    } else if (data.name === "solomon04Search") {
      router.push("/solomon04/test/func");
    }
  }

  return (
    <Menu inverted>
      <Menu.Item name="solomon04" onClick={goLink} />
      <Menu.Item name="solomon04Search" onClick={goLink} />
    </Menu>
  );
}
export default stsGnb;