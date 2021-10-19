import NextHead from "next/head";
import { FC } from "react";
import type { IHead } from "./types";

const Head: FC<IHead> = ({ title, description, children }) => {
  return (
    <NextHead>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content={description} />
      <title>{title}</title>
      {children}
    </NextHead>
  );
};

export default Head;
