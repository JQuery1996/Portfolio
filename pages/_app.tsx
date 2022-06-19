import { ChakraProvider } from "@chakra-ui/react";

import Layout from "../components/layouts/main";
import type { AppProps } from "next/app";
import theme from "../lib/theme";
import Fonts from "../components/fonts";
import { AnimatePresence } from "framer-motion";

if (typeof window !== "undefined") {
    window.history.scrollRestoration = "manual";
}

export default function Website({ Component, pageProps, router }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout router={router}>
                <AnimatePresence
                    exitBeforeEnter
                    initial={true}
                    onExitComplete={() => {
                        if (typeof window !== "undefined") {
                            window.scrollTo({ top: 0 });
                        }
                    }}
                >
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    );
}
