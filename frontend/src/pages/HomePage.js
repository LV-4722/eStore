import React from "react";
import Layout from "../components/layout/Layout";
import { useAuth } from "../context/auth";

const HomePage = () => {
  const { auth } = useAuth();
  return (
    <Layout title={"Home | Ecommerce App"}>
      <h1>HomePage</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  );
};

export default HomePage;
