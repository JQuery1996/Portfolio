import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    Code,
    useColorMode,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import { Paragraph } from "components/paragraph";
import Layout from "../../components/layouts/article";

const stackArray = [
    "Next.JS",
    "Typescript",
    "Firestore v9",
    "Tailwind CSS",
    "NextAuth",
    "Recoil",
];

export default function Twitter() {
    const { colorMode } = useColorMode();
    return (
        <Layout title="Twitter Clone">
            <Container>
                <Title>
                    Twitter <Badge>2021</Badge>
                </Title>
                <Paragraph>
                    A clone version of one of the most popular social networking
                    sites (Twitter).
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link
                            href="https://twitter-clone-blush-ten.vercel.app/posts/1TlZFMjETNhcr7v5GQzh"
                            target="_blank"
                        >
                            https://twitter-clone-blush-ten.vercel.app/posts/1TlZFMjETNhcr7v5GQzh{" "}
                            <ExternalLinkIcon mx="2px" />
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
                                >{e}</Code>
                            ))}
                        </span>
                    </ListItem>
                </List>
                <WorkImage
                    src="/images/works/twitter/twitter-01.png"
                    alt="Twitter"
                />
                <WorkImage
                    src="/images/works/twitter/twitter-02.png"
                    alt="Twitter"
                />
                <WorkImage
                    src="/images/works/twitter/twitter-03.png"
                    alt="Twitter"
                />
                <WorkImage
                    src="/images/works/twitter/twitter-05.webp"
                    alt="Twitter"
                />
            </Container>
        </Layout>
    );
}
