import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";

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

        <FormControl display="flex" alignItems="flex-end">
          <FormLabel htmlFor="email" margin={0} w="30%">
            E-mail
          </FormLabel>
          <Input
            type="email"
            id="email"
            variant="flushed"
            borderBottomColor="gray.400"
          />
        </FormControl>

        <FormControl display="flex" alignItems="flex-end">
          <FormLabel htmlFor="email" margin={0} w="30%">
            Senha
          </FormLabel>
          <Input
            type="password"
            id="email"
            variant="flushed"
            borderBottomColor="gray.400"
          />
        </FormControl>
        <Button type="submit" colorScheme="blue" mt={8}>
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
