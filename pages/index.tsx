import NextLink from "next/link";
import {
    Link,
    Container,
    Box,
    Heading,
    Image,
    useColorModeValue,
    Button,
    List,
    ListItem,
    SimpleGrid,
    Icon,
} from "@chakra-ui/react";

import { Section } from "../components/section";
import { Paragraph } from "../components/paragraph";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "../components/bio";
import Layout from "../components/layouts/article";
import { GridItem } from "../components/grid-item";
import {
    IoLogoTwitter,
    IoLogoGoogle,
    IoLogoGithub,
    IoLogoFacebook,
    IoLogoJavascript,
} from "react-icons/io5";

export default function Page() {
    return (
        <Layout title="Home Page">
            <Container>
                <Box
                    borderRadius="lg"
                    bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
                    mb={6}
                    p={3}
                    textAlign="center"
                >
                    Hello, I&apos;m a full-stack developer based in Syria!
                </Box>
                <Box display={{ md: "flex" }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Kinan Bassam Assad
                        </Heading>
                        <p>
                            Digital Craftsman ( Artist / Developer / Designer )
                        </p>
                    </Box>
                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        textAlign="center"
                    >
                        <Image
                            borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            maxW="100px"
                            display="inline-block"
                            borderRadius="full"
                            src="/images/kinan.jpg"
                            alt="Profile Image"
                        />
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>
                        <strong>Kinan</strong> is a freelance and a full-stack
                        developer with a passion for building digital
                        services/stuff he wants. He has a knack for all things
                        launching products, from planning and designing all the
                        way to solving real-life problems with code. When not
                        online, he loves Watching Animes.Currently, he is living
                        of of his own product called{" "}
                        <NextLink
                            href="/works/profolio"
                            passHref
                            scroll={false}
                        >
                            <Link color="purple" fontWeight="bold">
                                Porfolio
                            </Link>
                        </NextLink>
                    </Paragraph>
                    <Box textAlign="center" my={4}>
                        <NextLink href="/works">
                            <Button
                                rightIcon={<ChevronRightIcon />}
                                colorScheme="teal"
                            >
                                My Profolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>1996</BioYear>
                        Born in Damasucs, Syria.
                    </BioSection>
                    <BioSection>
                        <BioYear>2019</BioYear>
                        Graduation from the Faculty of Informatics Engineering,
                        Departement of Software and Information Systems,
                        Damasucs University.
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        State Master&apos;s degree in Software Engineering and
                        Inforamtion Systems, University of Damascus.
                    </BioSection>
                    <BioSection>
                        <BioYear>2017 to present</BioYear>
                        Works as a Freelancer
                    </BioSection>
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        I ♥
                    </Heading>
                    <Paragraph>
                        Art, Music, Dancing, Machine Learning,{" "}
                        <Link
                            href="https://leetcode.com/K_B_A/"
                            target="_blank"
                        >
                            Solve Programming Problems
                        </Link>
                        , Hacking , Building WebSites.
                    </Paragraph>
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        On the web
                    </Heading>
                    <List>
                        <ListItem>
                            <Link
                                href="https://github.com/JQuery1996"
                                target="_blank"
                            >
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<Icon as={IoLogoGithub} />}
                                >
                                    @JQuery1996
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link
                                href="https://facebook.com/kinan.assad.1"
                                target="_blank"
                            >
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<Icon as={IoLogoFacebook} />}
                                >
                                    @Kinan.Assad
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link
                                href="https://mail.google.com/mail/u/?authuser=kinan.bassam.assad@gmail.com"
                                target="_blank"
                            >
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<Icon as={IoLogoGoogle} />}
                                >
                                    kinan.bassam.assad@gmail.com
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link
                                href="https://leetcode.com/K_B_A/"
                                target="_blank"
                            >
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<Icon as={IoLogoJavascript} />}
                                >
                                    Leetcode
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>
    );
}
