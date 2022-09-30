import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  label: string;
}

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl display="flex" alignItems="flex-end">
      <FormLabel htmlFor={name} margin={0} w="30%">
        {label}
      </FormLabel>
      <ChakraInput
        name={name}
        id={name}
        variant="flushed"
        borderBottomColor="gray.400"
        {...rest}
      />
    </FormControl>
  );
}
