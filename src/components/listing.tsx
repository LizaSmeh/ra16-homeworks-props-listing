import Item from './item';

interface Items {
  listing_id: number;
  title?: string;
  currency_code?: string;
  price?: string;
  quantity?: number;
  url?: string;
  MainImage?: {
    url_570xN: string;
  };
}
interface Props {
  items: Items[];
}

export default function Listing({ items }: Props) {
  return (
    <div className="item-list">
      {items.map(item => (
        <Item key={item.listing_id} {...item} />
      ))}
    </div>
  );
}