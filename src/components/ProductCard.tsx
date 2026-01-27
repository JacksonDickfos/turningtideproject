import type { Product } from "@/content/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card">
      <div className="cardBody">
        <div className="stack">
          <div>
            <h3 className="h3">{product.title}</h3>
            {product.subtitle ? (
              <p className="muted" style={{ marginTop: 6 }}>
                {product.subtitle}
              </p>
            ) : null}
          </div>

          <p>{product.description}</p>

          <dl className="meta">
            <div className="metaRow">
              <dt>Format</dt>
              <dd>{product.format}</dd>
            </div>
            <div className="metaRow">
              <dt>Price</dt>
              <dd>{product.price}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="cardFooter">
        <a className="button" href={product.purchaseUrl}>
          Buy now
        </a>
        <span className="muted" style={{ fontSize: 14 }}>
          Instant digital delivery
        </span>
      </div>
    </article>
  );
}
