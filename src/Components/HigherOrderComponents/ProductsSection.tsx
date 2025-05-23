import React from "react";

const products = [
  {
    title: "Individual CBA",
    description: `An individual CBA can be tailored to your organisation’s needs, whether that’s everything you do, or a specific activity. We take a period-in-scope, typically aligning to your financial year, where we measure your effort and your costs. We take your data as an input, substantiate outcomes based on academic research, impute dollar figure impacts, analyse the scenario using our model, and the resulting metrics and deliverables help tell your impact story – both qualitatively and quantitatively.`,
    price: "",
  },
  {
    title: "Portfolio CBAs",
    description: `For organisation’s wanting to understand how multiple projects compare and contrast, a portfolio view allows you to do so. A portfolio view allows you all of the richness of insight you gain from an individual CBA, and an additional aggregate report that investigates what drives the differences between them.`,
    price: "",
  },
  {
    title: "Multi-year CBA",
    description: `For organisation’s wanting to understand their impact year-on-year, a trend analysis enables you to investigate what levers drive your value. A multi-year CBA delivers all of the value of an individual CBA, then compares it against itself year after year. We your inputs for up to five years and deliver you a trend analysis on all of the input data and output metrics, allowing your organisation to show how its tracking, year-on-year.`,
    price: "",
  },
];

const ProductsSection = () => {
  return (
    <section
      id="products"
      className="min-h-screen flex flex-col items-center justify-center py-16 px-4 dark:invert"
    >
      <div className="max-w-xl w-full text-center mb-12">
        <h2 className="heading-text">PRODUCTS</h2>
        <p className="body-text mb-4">
          Whether you’re an organisation with a passion, or an organisation with
          a budget, we’re here to help your work show its worth.
        </p>
      </div>
      <div className="grid gap-32 w-10/12 md:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.title}
            className="rounded-xl shadow-lg p-8 flex flex-col items-start hover:shadow-2xl transition-shadow bg-gray-100"
          >
            <h3 className="subheading-text mb-4">{product.title}</h3>
            <p className="body-text">{product.description}</p>
            <span className="mt-auto text-lg font-bold text-indigo-600">
              {product.price}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
