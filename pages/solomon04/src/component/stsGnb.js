import { useRouter } from 'next/router';
import { Menu } from 'semantic-ui-react';
import SideNavBar from './sideNavBar';
import TestNavBar from './testNavBar';

function stsGnb() {
  const router = useRouter();
  let activeItem;

  function goLink(e, data) {
    if (data.name === 'solomon04') {
      router.push('/solomon04/test/ChooseType');
    } else if (data.name === 'solomon04Search') {
      router.push('/solomon04/test/func');
    }
  }

  return (
    <>
      <SideNavBar></SideNavBar>
      <TestNavBar></TestNavBar>
    </>
  );
}
export default stsGnb;
