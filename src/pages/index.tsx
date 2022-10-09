import { Button, Flex, Heading } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { parseCookies, setCookie } from "nookies";
import { GetServerSidePropsContext } from "next";
import Router from "next/router";
import * as yup from "yup";

import { Input } from "../../components/Input";
import { setupAPI } from "../../services/api";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

type SignInFormData = {
  userName: string;
  password: string;
};

const formSchema = yup.object({
  userName: yup.string().required("Usuário obrigatório!"),
  password: yup.string().required("Senha obrigatória!"),
});

export default function Home() {
  const { register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: yupResolver(formSchema),
  });
  const errors = formState.errors;
  const { setUser } = useContext(AuthContext);

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    try {
      const api = setupAPI();

      const { data } = await api.post("auth/login", {
        username: values.userName,
        password: values.password,
      });

      const user = {
        name: data.firstName.concat(" ", data.lastName),
        email: data.email,
        image: data.image,
      };

      setUser(user);

      setCookie(null, "dashboard.token", data.token, {
        maxAge: 60 * 60 * 24 * 30,
        path: "/", // 30 days
      });

      Router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Heading textAlign="center" size="lg">
          Sign In
        </Heading>

        <Input
          label="Usuário"
          type="text"
          {...register("userName")}
          name="userName"
          error={errors.userName}
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

export function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { "dashboard.token": token } = parseCookies(ctx);

  if (token) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
