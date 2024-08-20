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
  
// interface ItemProps {
//     item: Items;
// }

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

function level(quantity: number):string {
  if (quantity <= 10) return 'low';
  if (quantity <= 20) return 'medium';
  return 'high';
}

export default function Item( {listing_id, url, MainImage, title, currency_code, price, quantity}: Items) {
  return (
    <div className="item" key={listing_id}>
      <div className="item-image">
        <a href={url}>
        {MainImage && MainImage.url_570xN ? (
                  <img src={MainImage.url_570xN} alt={title} />
                ) : (
                  <></>
                )}
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{titleCutter(title || '')}</p>
        <p className="item-price">
          {fixPrice(currency_code || '', price || '0')}
        </p>
        <p className={`item-quantity level-${level(quantity || 0)}`}>
          {quantity || 0} left
        </p>
      </div>
    </div>
  );
}