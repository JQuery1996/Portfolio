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
import { Title, WorkImage, Meta } from "components/work";
import { Paragraph } from "components/paragraph";
import Layout from "components/layouts/article";

const stackArray = ["Next.JS v12"];
export default function BlogPost() {
    const { colorMode } = useColorMode();
    return (
        <Layout title="BlogPost">
            <Container>
                <Title>
                    BlogPost <Badge>2020</Badge>
                </Title>
                <Paragraph>
                    A demo website for writing your posts and view other
                    people's posts. people's posts.
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link
                            href="https://github.com/JQuery1996/nextjs-blog"
                            target="_blank"
                        >
                            https://github.com/JQuery1996/nextjs-blog
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        {stackArray.map((e) => (
                            <Code
                                color={
                                    colorMode === "light"
                                        ? "#3d7aed"
                                        : "#ff63c3"
                                }
                                children={e}
                                key={e}
                                mr="8px"
                                fontWeight="bold"
                            />
                        ))}
                    </ListItem>
                </List>
            </Container>
        </Layout>
    );
}
