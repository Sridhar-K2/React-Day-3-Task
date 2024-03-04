import React from 'react';

const Section = ({ addToCart, removeFromCart, cartItems }) => {
  const cardsData = [
    {
      name: 'Fancy Product',
      price: '$40.00 - $80.00',
      sale: false,
      special: false,
      stars: 5
    },
    {
      name: 'Special Item',
      price: '$18.00',
      sale: true,
      special: true,
      oldPrice: '$20.00',
      stars: 5
    },
    {
      name: 'Sale Item',
      price: '$50.00',
      sale: true,
      special: true,
      oldPrice: '$25.00',
      stars: 5
    },
    {
      name: 'Popular Item',
      price: '$40.00',
      sale: true,
      special: true,
      stars: 5
    },
    {
      name: 'Sale Item',
      price: '$50.00',
      sale: true,
      special: true,
      oldPrice: '$25.00',
    },
    {
      name: 'Fancy Product',
      price: '$120.00 - $280.00',
      sale: false,
      special: false,
    },
    {
      name: 'Special Item',
      price: '$20.00',
      sale: true,
      special: true,
      oldPrice: '$18.00',
      stars: 5
    },
    {
      name: 'Popular Item',
      price: '$40.00',
      sale: true,
      special: true,
      stars: 5
    },
  ];

  const isItemInCart = (item) => {
    return cartItems.some(cartItem => cartItem.name === item.name);
  };

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {cardsData.map((card, index) => (
            <div key={index} className="col mb-5">
              <div className="card h-100">
                {card.sale && (
                  <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>
                )}
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="Product Image" />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">{card.name}</h5>
                    {card.stars && (
                      <div className="d-flex justify-content-center small text-warning mb-2">
                        {[...Array(card.stars)].map((_, i) => (
                          <div key={i} className="bi-star-fill"></div>
                        ))}
                      </div>
                    )}
                    {card.oldPrice && <span className="text-muted text-decoration-line-through">{card.oldPrice}</span>}
                    {card.price}
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <button onClick={() => isItemInCart(card) ? removeFromCart(card) : addToCart(card)} className="btn btn-primary btn-card m-3">
                      {isItemInCart(card) ? 'Remove from Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;


