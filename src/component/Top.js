import { Header } from 'semantic-ui-react';
import Gnb from './Gnb';
import ImageSliders from './ImageSliders';

function Top() {
  return (
    <div>
      <ImageSliders />
      <Header as="h1">ggova HomePage</Header>
      <Gnb />
    </div>
  );
}

export default Top;
