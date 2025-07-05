import React from 'react';
import { Card, CardContent, Typography, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ course, color }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/courses/${course.id}`);
  };

  return (
    <Card
      onClick={handleCardClick}
      sx={{
        borderRadius: 4,
        boxShadow: "0 6px 24px rgba(21,101,192,0.10)",
        transition: "transform 0.2s, box-shadow 0.2s",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
        border: "1px solid #e0e0e0",
        background: "#fff",
        width: "100%",
        minWidth: "350px",
        cursor: "pointer",
        "&:hover": {
          transform: "translateY(-8px) scale(1.03)",
          boxShadow: "0 12px 32px rgba(21,101,192,0.18)"
        },
        '@media (max-width:900px)': {
          minWidth: "90%",
        },
        '@media (max-width:600px)': {
          minWidth: "100%",
          padding: 1,
        }
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 4,
          px: 2,
          '@media (max-width:600px)': {
            py: 2,
            px: 1,
          }
        }}
      >
        <Avatar
          sx={{
            bgcolor: color,
            width: 72,
            height: 72,
            mb: 2,
            boxShadow: "0 2px 12px rgba(21,101,192,0.10)",
            '@media (max-width:600px)': {
              width: 56,
              height: 56,
            }
          }}
        >
          {course.icon}
        </Avatar>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: "#1976d2",
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" }
          }}
        >
          {course.name}
        </Typography>
        {course.fullForm && (
          <Typography
            variant="body2"
            sx={{
              color: "#607d8b",
              mt: 1,
              textAlign: "center",
              fontSize: { xs: "0.85rem", sm: "0.95rem" }
            }}
          >
            {course.fullForm}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default CourseCard;