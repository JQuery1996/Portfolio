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
import { Title, Meta } from "components/work";
import { Paragraph } from "components/paragraph";
import Layout from "components/layouts/article";

const stackArray = ["Java", "Java Socket", "Threads", "MySQL"];

export default function InformationSecurity() {
    const { colorMode } = useColorMode();
    return (
        <Layout title="Information Security">
            <Container>
                <Title>
                    Information Security <Badge>2019</Badge>
                </Title>
                <Paragraph>
                    A Java application for Data-Encrypting, Data-Decrypting,
                    Hashing, Digital Signature and Certification.
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Source Code</Meta>
                        <Link
                            href="https://github.com/JQuery1996/Information-Security-Project"
                            target="_blank"
                        >
                            https://github.com/JQuery1996/Information-Security-Project{" "}
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Window / Linux / MacOS</span>
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
            </Container>
        </Layout>
    );
}
