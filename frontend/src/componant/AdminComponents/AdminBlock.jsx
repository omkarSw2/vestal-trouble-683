import React, { useEffect, useState } from 'react';
import AdminUserCard from './AdminUserCard';
import { Box, SimpleGrid } from '@chakra-ui/react';
import axios from "axios";
import AdminPagination from './AdminPagination';

const ITEMS_PER_PAGE = 5; // Number of items to display per page

const AdminBlock = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Fetch user data from the server when the component mounts
    axios.get('http://localhost:8080/userData')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  // Function to update the user's account status
  const handleBlockUser = (userId) => {
    const updatedUsers = users.map((user) =>
      user.id === userId ? { ...user, account_Status: 'Active' } : user
    );

    // Store the updated user data in local storage
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    // Update the state with the updated data
    setUsers(updatedUsers);
  };

  // Filter active users
  const activeUsers = users.filter((user) => user.account_Status === 'Suspended');

  // Calculate the total number of pages for active users
  const totalPages = Math.ceil(activeUsers.length / ITEMS_PER_PAGE);

  // Function to get the current page of user data
  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return activeUsers.slice(startIndex, endIndex);
  };

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3 style={{ padding: "10px", fontSize: "20px", width: "100%" }}>Blocked Users</h3>
      </div>
      <SimpleGrid columns={3} gap={3}>
        {getCurrentPageData().map((user, index) => (
          <Box key={index}>
            <AdminUserCard {...user} onBlockUser={() => handleBlockUser(user.id)} children={"Unblock"}/>
          </Box>
        ))}
      </SimpleGrid>
      <Box display={'flex'} justifyContent={"space-around"} >
      <AdminPagination  currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </Box>
    </main>
  );
};


export default AdminBlock;
