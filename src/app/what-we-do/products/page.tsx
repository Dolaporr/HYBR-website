import { Footer, Header } from "../../_components/marketing";
import { productDescriptions } from "@/content/products";
import { ProductWaitlistForm } from "@/components/ProductWaitlistForm";
import { AlphaAccessForm } from "@/components/LeadCaptureForms";

const products = [
  { key: "indx", name: "INDX", body: productDescriptions.indx },
  { key: "flywheel", name: "FLYWHEEL", body: productDescriptions.flywheel },
  { key: "alpha", name: "ALPHA", body: productDescriptions.alpha },
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
                <div className="product-card-action">
                  {product.key === "alpha" ? (
                    <AlphaAccessForm />
                  ) : (
                    <ProductWaitlistForm product={product.key} />
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
