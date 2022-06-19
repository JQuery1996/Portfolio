import {
    Container,
    Badge,
    List,
    ListItem,
    Link,
    Code,
    useColorMode,
} from "@chakra-ui/react";
// import { ExtrnalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "components/work";
import { Paragraph } from "components/paragraph";
import Layout from "components/layouts/article";
import { ExternalLinkIcon } from "@chakra-ui/icons";
const stackArray = ["Next.JS", "Chakra UI", "Framer Motion", "ThreeJs"];

export default function Portfolio() {
    const { colorMode } = useColorMode();
    return (
        <Layout title="Portfolio">
            <Container>
                <Title>
                    Portfolio <Badge>2022</Badge>
                </Title>
                <Paragraph>
                    A Portfolio site to display imformation about my works,
                    project that i have completed.
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link
                            href="https://portfolio-ashy-iota.vercel.app/"
                            target="_blank"
                        >
                            https://portfolio-ashy-iota.vercel.app/
                            <ExternalLinkIcon mx={2} />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>
                            {stackArray.map((e) => (
                                <Code
                                    color={
                                        colorMode === "light"
                                            ? "#3d7aed"
                                            : "#ff63c3"
                                    }
                                    variant="outline"
                                    key={e}
                                    mr="8px"
                                    fontWeight="bold"
                                >
                                    {e}
                                </Code>
                            ))}
                        </span>
                    </ListItem>
                </List>
                <WorkImage
                    src="/images/works/portfolio/portfolio-01.png"
                    alt="Portfolio"
                />
                <WorkImage
                    src="/images/works/portfolio/portfolio-02.png"
                    alt="Portfolio"
                />
                <WorkImage
                    src="/images/works/portfolio/portfolio-03.png"
                    alt="Portfolio"
                />
                <WorkImage
                    src="/images/works/portfolio/portfolio-04.png"
                    alt="Portfolio"
                />
            </Container>
        </Layout>
    );
}
