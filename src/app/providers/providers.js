"use client";

import { useServerInsertedHTML } from "next/navigation";
import { CssBaseline, NextUIProvider } from "@nextui-org/react";
import ReduxProvider from "./reduxprovider";



export default function Providers({ children }) {
  useServerInsertedHTML(() => {
    return <>{CssBaseline.flush()}</>;
  });

  return ( // you can have multiple client side providers wrapped, in this case I am also using NextUIProvider
    <>
      <ReduxProvider>
        <NextUIProvider>{children}</NextUIProvider>
      </ReduxProvider>
    </>
  );
}