import '@/styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import Head from "next/head";
import {SWRConfig} from "swr";
import GlobalContextsProvider from "@/components/plasmic/app_codegen_demo/PlasmicGlobalContextsProvider";

const fetcher = (url:string, opts: RequestInit) => fetch(url, opts).then((res) => res.json());

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher }}>
      <PlasmicRootProvider Head={Head}>
        <GlobalContextsProvider appContextProviderProps={{
          directusUrl: "https://plasmic-test.directus.app",
          initialCurrentUser: undefined,
        }}>
          <Component {...pageProps} />
        </GlobalContextsProvider>
      </PlasmicRootProvider>
    </SWRConfig>
  );
}
