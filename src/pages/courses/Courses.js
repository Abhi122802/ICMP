import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CourseCard from '../../components/CourseCard';

const courseList = [
  { id: '11th-commerce', name: '11th Commerce', icon: <SchoolIcon />, fullForm: '11th Grade Commerce Stream' },
  { id: '12th-commerce', name: '12th Commerce', icon: <SchoolIcon />, fullForm: '12th Grade Commerce Stream' },
  { id: 'bcom', name: 'B.Com', icon: <AccountBalanceIcon />, fullForm: 'Bachelor of Commerce' },
  { id: 'mcom', name: 'M.Com', icon: <AccountBalanceIcon />, fullForm: 'Master of Commerce' },
  { id: 'bba', name: 'BBA', icon: <BusinessCenterIcon />, fullForm: 'Bachelor of Business Administration' },
  { id: 'mba', name: 'MBA', icon: <EmojiEventsIcon />, fullForm: 'Master of Business Administration' },
  { id: 'ca-foundation', name: 'CA Foundation', icon: <SchoolIcon />, fullForm: 'Chartered Accountancy Foundation' },
  { id: 'cs-executive', name: 'CS Executive', icon: <BusinessCenterIcon />, fullForm: 'Company Secretary Executive' },
  { id: 'cma-inter', name: 'CMA Inter', icon: <AccountBalanceIcon />, fullForm: 'Cost & Management Accountant Intermediate' },
];

const iconColors = [
  "#1976d2", "#0288d1", "#00bcd4", "#26c6da", "#64b5f6", "#1565c0", "#00acc1", "#039be5", "#81d4fa"
];

const Courses = () => (
  <Box sx={{ py: 5, background: "linear-gradient(135deg, #e0f7fa 0%, #b3e5fc 100%)", minHeight: "100vh" }}>
    <Typography
      variant="h3"
      align="center"
      sx={{
        fontWeight: 800,
        color: "#1565c0",
        mb: 4,
        letterSpacing: "1px",
        fontFamily: "Montserrat, Arial, sans-serif"
      }}
    >
      Our Courses
    </Typography>
    <Grid container spacing={6} justifyContent="center">
      {courseList.map((course, idx) => (
        <Grid item xs={12} sm={6} md={4} lg={4} key={course.id}>
          <CourseCard course={course} color={iconColors[idx % iconColors.length]} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Courses;