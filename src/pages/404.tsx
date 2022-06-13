import * as React from "react";
import { Layout } from "../components/layout";
import NotFound from "../components/notfound";

const quoteStyle = {
  margin: "3rem 0",
};

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <main>
        <h2>404 Not Found</h2>
        <p>ページが見つかりません。</p>
        <div style={quoteStyle}>
          <NotFound />
        </div>
      </main>
    </Layout>
  );
};

export default NotFoundPage;
