import { Button, Flex, Heading } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "../../components/Input";

type SignInFormData = {
  email: string;
  password: string;
};

const formSchema = yup.object({
  email: yup.string().required("Email obrigatório!").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória!"),
});

export default function Home() {
  const { register, handleSubmit, formState, reset } = useForm<SignInFormData>({
    resolver: yupResolver(formSchema),
  });
  const errors = formState.errors;

  const handleSubmitForm: SubmitHandler<SignInFormData> = (values) => {
    console.log(values);
    reset();
  };

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
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <Heading textAlign="center" size="lg">
          Sign In
        </Heading>

        <Input
          label="E-mail"
          type="email"
          {...register("email")}
          name="email"
          error={errors.email}
        />
        <Input
          label="Senha"
          type="password"
          {...register("password")}
          name="password"
          error={errors.password}
        />

        <Button
          type="submit"
          colorScheme="blue"
          mt={8}
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
