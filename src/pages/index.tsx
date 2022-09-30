import { Button, Flex, Heading } from "@chakra-ui/react";
import { Input } from "./components/Input";

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.200"
        p={8}
        borderRadius={8}
        flexDir="column"
        gap={4}
      >
        <Heading textAlign="center" size="lg">
          Sign In
        </Heading>

        <Input name="email" label="E-mail" type="email" />
        <Input name="password" label="Senha" type="password" />

        <Button type="submit" colorScheme="blue" mt={8}>
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
