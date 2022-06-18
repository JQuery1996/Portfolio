import NextLink from "next/link";
import { Heading, Box, Image, Link, Badge } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export function Title({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <NextLink href="/works">
        <Link>Works</Link>
      </NextLink>
      <span>
        &nbsp;
        <ChevronRightIcon />
        &nbsp;
      </span>
      <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
        {children}
      </Heading>
    </Box>
  );
}

export function WorkImage({ src, alt }: { src: string; alt: string }) {
  return <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />;
}

export function Meta({ children }: { children: React.ReactNode }) {
  return (
    <Badge colorScheme="green" mr={2}>
      {children}
    </Badge>
  );
}
