import Link from "next/link";
import { Footer, Header } from "../../_components/marketing";

const products = ["INDX", "FLYWHEEL", "ALPHA"];

export default function ProductsPage() {
  return (
    <main className="provisional-page products-page">
      <Header active="what" />
      <section className="provisional-hero">
        <div className="provisional-shell">
          <h1 className="provisional-title">Our Products</h1>
          <p className="provisional-subtitle">Tools designed to make innovation feel effortless.</p>
        </div>
      </section>

      <section className="products-section">
        <div className="provisional-shell">
          <p className="products-intro">
            Helping you turn your best ideas into meaningful results through repeatable tools,
            frameworks, and productized innovation systems.
          </p>
          <div className="products-list">
            {products.map((product) => (
              <article className="product-card" key={product}>
                <h2>{product}</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus dolor id
                  metus auctor tincidunt. Cras et gravida dolor.
                </p>
                <Link className="product-card-cta" href="/contact">
                  Access {product}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
