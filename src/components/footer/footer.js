import React from "react";
import { Box, Container, Grid, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import logo from "../../assets/images/logo.png"; // Adjust path if needed

const Footer = () => (
  <Box
    sx={{
      background: "linear-gradient(135deg, #e0f7fa 0%, #b3e5fc 60%, #81d4fa 100%)",
      color: "#0d223a",
      pt: 6,
      pb: 3,
      mt: 8,
      borderTopLeftRadius: 32,
      borderTopRightRadius: 32,
      boxShadow: "0 -8px 32px rgba(33, 150, 243, 0.10)",
    }}
  >
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Box mb={2} display="flex" alignItems="center">
            <img
              src={logo}
              alt="Iceberg Edutech Logo"
              style={{
                height: 56,
                borderRadius: 12,
                background: "#fff",
                padding: 6,
                boxShadow: "0 2px 12px rgba(33,150,243,0.10)",
                marginRight: 12,
              }}
            />
            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
                letterSpacing: "1px",
                color: "#1976d2",
                fontFamily: "Montserrat, Arial, sans-serif",
              }}
            >
              Professional Commerce
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ color: "#1976d2", mb: 2 }}>
            Dedicated to providing quality education resources and support.
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom sx={{ color: "#1565c0", fontWeight: 700 }}>
            Quick Links
          </Typography>
          <Box>
            <Link href="/about" color="#0d223a" underline="hover" display="block" sx={{ mb: 1 }}>
              About
            </Link>
            <Link href="/courses" color="#0d223a" underline="hover" display="block" sx={{ mb: 1 }}>
              Courses
            </Link>
            <Link href="/contact" color="#0d223a" underline="hover" display="block" sx={{ mb: 1 }}>
              Contact
            </Link>
            <Link href="/faq" color="#0d223a" underline="hover" display="block">
              FAQ
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom sx={{ color: "#1565c0", fontWeight: 700 }}>
            Contact
          </Typography>
          <Box display="flex" alignItems="center" mb={1}>
            <EmailIcon sx={{ mr: 1, color: "#1976d2" }} fontSize="small" />
            <Typography variant="body2">info@icebergedutech.com</Typography>
          </Box>
          <Box display="flex" alignItems="center" mb={1}>
            <PhoneIcon sx={{ mr: 1, color: "#1976d2" }} fontSize="small" />
            <Typography variant="body2">+1 234 567 8901</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <LocationOnIcon sx={{ mr: 1, color: "#1976d2" }} fontSize="small" />
            <Typography variant="body2">123 Main St, City, Country</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom sx={{ color: "#1565c0", fontWeight: 700 }}>
            Follow Us
          </Typography>
          <Box>
            <IconButton
              component="a"
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#fff",
                background: "linear-gradient(135deg, #1976d2 60%, #64b5f6 100%)",
                mr: 1,
                "&:hover": { background: "#1976d2" },
              }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#fff",
                background: "linear-gradient(135deg, #1976d2 60%, #64b5f6 100%)",
                mr: 1,
                "&:hover": { background: "#1976d2" },
              }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#fff",
                background: "linear-gradient(135deg, #1976d2 60%, #64b5f6 100%)",
                "&:hover": { background: "#1976d2" },
              }}
            >
              <InstagramIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
      <Box
        textAlign="center"
        pt={4}
        fontSize={14}
        color="#1976d2"
        fontWeight={600}
        letterSpacing="1px"
        sx={{ opacity: 0.85 }}
      >
        &copy; {new Date().getFullYear()} Iceberg Edutech. All rights reserved.
      </Box>
    </Container>
  </Box>
);

export default Footer;