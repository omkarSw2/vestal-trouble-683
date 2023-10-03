import React from 'react';
import { Box, Button, ButtonGroup, HStack } from '@chakra-ui/react';

const AdminPagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <HStack spacing={2} justify="center">
      {pageNumbers.map((pageNumber) => (
        <Button
          key={pageNumber}
          variant={pageNumber === currentPage ? 'solid' : 'outline'}
          colorScheme={pageNumber === currentPage ? 'blue' : 'gray'}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </Button>
      ))}
    </HStack>
  );
};

export default AdminPagination;