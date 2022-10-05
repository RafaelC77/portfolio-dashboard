import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountRegisters: number;
  currentPage?: number;
  registersPerPage?: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  totalCountRegisters,
  currentPage = 1,
  registersPerPage = 10,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.ceil(totalCountRegisters / registersPerPage);

  const siblingPagesAmount = 1;

  const pagesArray = new Array(
    currentPage - 1,
    currentPage,
    currentPage + 1
  ).reduce((acc, curr) => {
    const newArray = [...acc];
    if (curr > 0 && curr <= lastPage) {
      newArray.push(curr);
    }

    return newArray;
  }, []);

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
        {currentPage > 1 + siblingPagesAmount && (
          <PaginationItem number={1} onPageChange={onPageChange} />
        )}
        {currentPage > 2 + siblingPagesAmount && <Text>...</Text>}
        {pagesArray.map((page) => {
          return (
            <PaginationItem
              key={page}
              number={page}
              isCurrent={page === currentPage}
              onPageChange={onPageChange}
            />
          );
        })}
        {currentPage < lastPage - siblingPagesAmount - 1 && <Text>...</Text>}
        {currentPage < lastPage - siblingPagesAmount && (
          <PaginationItem number={lastPage} onPageChange={onPageChange} />
        )}
      </HStack>
    </Stack>
  );
}
