import Head from "next/head";
import dynamic from "next/dynamic";
import { Navbar } from "../navbar";
import { Box, Container } from "@chakra-ui/react";
import VoxelDogLoader from "../voxel-dog-loader";
import { Router } from "next/router";

const LazyVoxelDog = dynamic(() => import("../voxel-dog"), {
  ssr: false,
  loading: () => <VoxelDogLoader />,
});

const Main = ({
  children,
  router,
}: {
  children: React.ReactNode;
  router: Router;
}) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Kinan's homepage" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <meta property="og:site_name" content="Kinan Assad" />
        <meta name="og:title" content="Kinan Assad" />
        <title>Kinan Assad - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />
        {children}
      </Container>
    </Box>
  );
};

export default Main;
