import Item from './item';
interface Props {
  items: [];
}

export default function Listing({ items }: Props) {
  return (
    <div className="item-list">
      {items.map(item => (
        <Item key={item.listing_id} item={item} />
      ))}
    </div>
  );
}