import { Button, Header } from "semantic-ui-react";

export default function Item({ item }) {
  const {
    name,
    image_link,
    price,
    description,
    updated_at,
    category,
    product_type,
    product_link,
  } = item;
  return (
    <>
      <div>
        <div>
          <img src={image_link} alt={name} />
        </div>
        <div >
          <strong >{name}</strong>
          <strong >${price}</strong>
          <span >
            {category ? `${category}/` : ""}
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