import Link from "next/link";
import { Footer, Header } from "../../_components/marketing";
import { productDescriptions } from "@/content/products";

const products = [
  { name: "INDX", body: productDescriptions.indx },
  { name: "FLYWHEEL", body: productDescriptions.flywheel },
  { name: "ALPHA", body: productDescriptions.alpha },
] as const;

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
              <article className="product-card" key={product.name}>
                <h2>{product.name}</h2>
                <p>{product.body}</p>
                <Link className="product-card-cta" href="/contact">
                  Access {product.name}
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
