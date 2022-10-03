import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error} display="flex" flexDirection="column">
      <Flex alignItems="flex-end">
        <FormLabel htmlFor={name} margin={0} w="30%">
          {label}
        </FormLabel>
        <ChakraInput
          name={name}
          id={name}
          variant="flushed"
          borderBottomColor="gray.400"
          ref={ref}
          {...rest}
        />
      </Flex>

      {!!error && (
        <FormErrorMessage alignSelf="flex-end">
          {error.message}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
