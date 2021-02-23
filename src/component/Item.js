import { Button, Header } from 'semantic-ui-react';

export default function Item({ item }) {
  const { name, image_link, price, description, category, product_type } = item;
  return (
    <>
      <div>
        <div>
          <img src={image_link} alt={name} />
        </div>
        <div>
          <strong>{name}</strong>
          <strong>${price}</strong>
          <span>
            {category ? `${category}/` : ''}
            {product_type}
          </span>
          <Button color="orange">구매하기</Button>
        </div>
      </div>
      <Header as="h3">Description</Header>
      <p style={{ paddingBottom: 20, fontSize: 18 }}>{description}</p>
    </>
  );
}
