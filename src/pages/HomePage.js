import React from "react";
import Counter from "../components/Counter";
import Layout from "../components/UI/Layout";

export default () => {
  return (
    <>
      <Layout>
        <section>
          <Counter />
        </section>
      </Layout>
    </>
  );
};
