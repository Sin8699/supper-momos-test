import ChevronDownIcon from "@heroicons/react/20/solid/ChevronDownIcon";
import Head from "next/head";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { WebLayoutTopBar } from "../WebLayoutTopBar/WebLayoutTopBar";

import s from "./WebLayout.module.scss";

interface WebLayoutProps {}

export function WebLayout({ children }: PropsWithChildren<WebLayoutProps>) {
  return (
    <div className={s.wrapper}>
      <div className={s.root}>
        <Head>
          <title>Supermomos - Create Social</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <WebLayoutTopBar />

        <main className={s.main}>{children}</main>
      </div>
    </div>
  );
}
