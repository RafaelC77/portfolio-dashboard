import { Box, Button, HStack, Stack } from "@chakra-ui/react";

export function Pagination() {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      mt={8}
      justify="space-between"
      align="center"
      spacing={6}
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <HStack spacing={2}>
        <Button
          size="sm"
          fontSize="xs"
          width={4}
          disabled
          _disabled={{ bg: "gray.300", cursor: "default" }}
        >
          1
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width={4}
          _hover={{ bg: "gray.400", cursor: "default" }}
        >
          2
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width={4}
          _hover={{ bg: "gray.400", cursor: "default" }}
        >
          3
        </Button>
      </HStack>
    </Stack>
  );
}
