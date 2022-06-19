import { Container, Heading, SimpleGrid, useColorMode } from "@chakra-ui/react";
import { Section } from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import Layout from "../components/layouts/article";

import thumbTwitter from "../public/images/works/twitter/twitter-01.png";
import thumbBlogPost from "../public/images/works/blogpost/thumbBlogPost.jpg";
import thumbInformationSecurity from "../public/images/works/information-security/thumbInformationSecurity.png";
import thumbPortfolioLight from "../public/images/works/portfolio/portfolio-01.png";
import thumbPortfolioDark from "../public/images/works/portfolio/portfolio-02.png";

export default function Works() {
    const { colorMode } = useColorMode();
    return (
        <Layout title="Works">
            <Container>
                <Heading as="h3" fontSize={20} mb={6} variant="section-title">
                    Works
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem
                            id="twitter"
                            title="Twitter Clone"
                            thumbnail={thumbTwitter}
                        >
                            {" "}
                            A clone version of one of the most popular social
                            networking sites (Twitter).
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem
                            id="blogpost"
                            title="BlogPost"
                            thumbnail={thumbBlogPost}
                        >
                            {" "}
                            A demo website for writing your posts and view other
                            people&apos;s posts. people&apos;s posts.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem
                            id="information-security"
                            title="InformationSecurity"
                            thumbnail={thumbInformationSecurity}
                        >
                            {" "}
                            A Java application for Data-Encrypting,
                            Data-Decrypting, Hashing, Digital Signature and
                            Certification.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem
                            id="portfolio"
                            title="Portfolio"
                            thumbnail={
                                colorMode === "light"
                                    ? thumbPortfolioDark
                                    : thumbPortfolioLight
                            }
                        >
                            {" "}
                            A Portfolio site to display imformation about my
                            works, project that i have completed.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    );
}
