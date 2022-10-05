import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  isCurrent?: boolean;
  number: number;
  onPageChange: (page: number) => void;
}

export function PaginationItem({
  isCurrent = false,
  number,
  onPageChange,
}: PaginationItemProps) {
  return (
    <Button
      size="sm"
      fontSize="xs"
      width={4}
      disabled={isCurrent}
      _disabled={{ bg: "green.500", cursor: "default" }}
      _hover={{ bg: "green.400" }}
      onClick={() => onPageChange(number)}
    >
      {number}
    </Button>
  );
}
