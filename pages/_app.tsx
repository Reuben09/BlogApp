import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextComponentType, NextPageContext } from "next";
import { FunctionComponent } from "react";

const EmptyComponent = ({ children }: {
  children: React.ReactNode;
}) => <>{children}</>;

function MyApp({
  Component,
  pageProps,
}: Omit<AppProps, "Component"> & {
  Component: NextComponentType<NextPageContext, any, any> & {
    Layout?: NextComponentType<NextPageContext, any, any>;
  };
}) {
  const Layout = Component.Layout || EmptyComponent;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}


export default MyApp;
