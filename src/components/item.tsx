interface Item {
    listing_id: string | number;
    state: string;
    title: string;
    currency_code: string;
    price: string;
    quantity: number;
    url: string;
    MainImage: {
      url_570xN: string;
    };
}
  
interface ItemProps {
    item: Item;
}

function fixPrice(currency: string, price: string):string {
  if (currency === 'USD') return '$' + price;
  if (currency === 'EUR') return '€' + price;
  return price + ' GBP';
}

function titleCutter(title: string): string {
  if (title.length > 50) {
    return title.slice(0, 49) + '...';
  }
  return title || "Нет заголовка";
}

function level(quantity: number) {
  if (quantity <= 10) return 'low';
  if (quantity <= 20) return 'medium';
  return 'high';
}

export default function Item({ item }: ItemProps) {
  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage.url_570xN} alt={item.title} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{titleCutter(item.title)}</p>
        <p className="item-price">
          {fixPrice(item.currency_code, item.price)}
        </p>
        <p className={`item-quantity level-${level(item.quantity)}`}>
          {item.quantity} left
        </p>
      </div>
    </div>
  );
}