import React from 'react';
import { Box, Typography, Avatar, Grid, Paper, Divider, List, ListItem, ListItemIcon, ListItemText, Link, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import SchoolIcon from '@mui/icons-material/School';

const staffMembers = [
    { name: 'Dr. A. Sharma', role: 'Principal', photo: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { name: 'Ms. R. Gupta', role: 'Head of Department, Science', photo: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { name: 'Mr. S. Kumar', role: 'Head of Department, Arts', photo: 'https://randomuser.me/api/portraits/men/45.jpg' },
    { name: 'Mrs. P. Singh', role: 'Student Counselor', photo: 'https://randomuser.me/api/portraits/women/46.jpg' },
    // Add more staff as needed
];

const testimonials = [
    {
        text: "The faculty here truly care about our success. The campus is vibrant and full of opportunities.",
        name: "Priya S.",
        course: "B.Com 2022",
        photo: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
        text: "I loved my time at [Your College Name]. The placement support is excellent!",
        name: "Rahul M.",
        course: "MBA 2023",
        photo: "https://randomuser.me/api/portraits/men/66.jpg"
    }
];

const About = () => (
    <Box sx={{ maxWidth: 1100, mx: 'auto', my: 4, p: { xs: 2, md: 4 } }}>
        <Paper elevation={4} sx={{ p: { xs: 2, md: 4 }, borderRadius: 4 }}>
            {/* Logo */}
            <Box sx={{ textAlign: 'center', mb: 2 }}>
                <img src="/logo.png" alt="College Logo" style={{ height: 80, marginBottom: 8 }} />
            </Box>
            {/* Title */}
            <Box sx={{ textAlign: 'center', mb: 3 }}>
                <Typography variant="h3" fontWeight={800} color="primary" gutterBottom>
                    About Us
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
                    <strong>Welcome to [Your College Name]</strong>, a premier institution dedicated to academic excellence, innovation, and holistic development. Established in [Year], our college has been at the forefront of providing quality education and fostering a vibrant learning environment.
                </Typography>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Grid container spacing={4}>
                <Grid item xs={12} md={8}>
                    <Box>
                        <Typography variant="h5" fontWeight={700} color="primary" gutterBottom>
                            Our Story
                        </Typography>
                        <Typography color="text.secondary" sx={{ mb: 2 }}>
                            [Your College Name] began with a vision to create a nurturing environment for students to grow academically and personally. Over the years, we have expanded our programs, built state-of-the-art facilities, and established a reputation for excellence in education. Our journey is marked by the achievements of our students and the dedication of our faculty and staff.
                        </Typography>

                        <Typography variant="h5" fontWeight={700} color="primary" gutterBottom>
                            Our Mission
                        </Typography>
                        <Typography color="text.secondary" sx={{ mb: 2 }}>
                            To empower students with knowledge, skills, and values that enable them to excel in their chosen fields and contribute positively to society.
                        </Typography>

                        <Typography variant="h5" fontWeight={700} color="primary" gutterBottom>
                            Our Vision
                        </Typography>
                        <Typography color="text.secondary" sx={{ mb: 2 }}>
                            To be a leading educational institution recognized for academic excellence, research, and community engagement.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: 2 }}>
                        {/* Replace with your actual college photo */}
                        <img
                            src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80"
                            alt="College"
                            style={{ width: '100%', height: 220, objectFit: 'cover' }}
                        />
                    </Box>
                </Grid>
            </Grid>

            <Divider sx={{ my: 4 }} />

            {/* Achievements Section */}
            <Typography variant="h5" fontWeight={700} color="primary" gutterBottom>
                Achievements & Awards
            </Typography>
            <List>
                <ListItem>
                    <ListItemText primary="NAAC Accredited with Grade A" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Best College Award 2023 by XYZ Foundation" />
                </ListItem>
                {/* Add more achievements as needed */}
            </List>

            <Divider sx={{ my: 4 }} />

            {/* Testimonials Section */}
            <Typography variant="h5" fontWeight={700} color="primary" gutterBottom>
                Testimonials
            </Typography>
            <Grid container spacing={2} sx={{ mb: 3 }}>
                {testimonials.map((t, idx) => (
                    <Grid item xs={12} md={6} key={idx}>
                        <Paper sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Avatar src={t.photo} alt={t.name} sx={{ width: 56, height: 56 }} />
                            <Box>
                                <Typography sx={{ fontStyle: 'italic' }}>"{t.text}"</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    - {t.name}, {t.course}
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h5" fontWeight={700} color="primary" gutterBottom>
                Our Staff
            </Typography>
            <Grid container spacing={3} sx={{ mb: 3 }}>
                {staffMembers.map((staff, idx) => (
                    <Grid item xs={12} sm={6} md={3} key={idx}>
                        <Paper elevation={2} sx={{ p: 2, textAlign: 'center', borderRadius: 3 }}>
                            <Avatar
                                src={staff.photo}
                                alt={staff.name}
                                sx={{ width: 70, height: 70, mx: 'auto', mb: 1, boxShadow: 2 }}
                            >
                                <SchoolIcon />
                            </Avatar>
                            <Typography fontWeight={700}>{staff.name}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                {staff.role}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h5" fontWeight={700} color="primary" gutterBottom>
                Why Choose Us?
            </Typography>
            <List>
                <ListItem>
                    <ListItemIcon><SchoolIcon color="primary" /></ListItemIcon>
                    <ListItemText primary="Experienced and dedicated faculty" />
                </ListItem>
                <ListItem>
                    <ListItemIcon><SchoolIcon color="primary" /></ListItemIcon>
                    <ListItemText primary="State-of-the-art infrastructure and facilities" />
                </ListItem>
                <ListItem>
                    <ListItemIcon><SchoolIcon color="primary" /></ListItemIcon>
                    <ListItemText primary="Comprehensive academic programs" />
                </ListItem>
                <ListItem>
                    <ListItemIcon><SchoolIcon color="primary" /></ListItemIcon>
                    <ListItemText primary="Vibrant campus life and extracurricular activities" />
                </ListItem>
                <ListItem>
                    <ListItemIcon><SchoolIcon color="primary" /></ListItemIcon>
                    <ListItemText primary="Strong industry connections and placement support" />
                </ListItem>
            </List>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h5" fontWeight={700} color="primary" gutterBottom>
                Our Location
            </Typography>
            <Box sx={{ mb: 3, borderRadius: 3, overflow: 'hidden', boxShadow: 2 }}>
                {/* Replace the src below with your actual Google Maps embed link */}
                <iframe
                    title="College Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019497756763!2d-122.0842496846819!3d37.42206597982545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb0b0b0b0b0b0%3A0x0!2zMzfCsDI1JzE5LjQiTiAxMjLCsDA1JzA2LjkiVw!5e0!3m2!1sen!2sin!4v1610000000000!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </Box>

            <Typography variant="h5" fontWeight={700} color="primary" gutterBottom>
                Contact Us
            </Typography>
            <List>
                <ListItem>
                    <ListItemIcon><EmailIcon color="primary" /></ListItemIcon>
                    <ListItemText primary={<Link href="mailto:info@yourcollege.edu">info@yourcollege.edu</Link>} />
                </ListItem>
                <ListItem>
                    <ListItemIcon><PhoneIcon color="primary" /></ListItemIcon>
                    <ListItemText primary="(123) 456-7890" />
                </ListItem>
                <ListItem>
                    <ListItemIcon><LocationOnIcon color="primary" /></ListItemIcon>
                    <ListItemText primary="[Your College Address Here]" />
                </ListItem>
            </List>

            <Divider sx={{ my: 4 }} />

            {/* Social Media Links */}
            <Typography variant="h5" fontWeight={700} color="primary" gutterBottom>
                Connect With Us
            </Typography>
            <Box sx={{ mb: 2 }}>
                <Link href="https://facebook.com/yourcollege" target="_blank" sx={{ mr: 2 }}>Facebook</Link>
                <Link href="https://instagram.com/yourcollege" target="_blank" sx={{ mr: 2 }}>Instagram</Link>
                <Link href="https://linkedin.com/company/yourcollege" target="_blank">LinkedIn</Link>
            </Box>

            {/* Call to Action */}
            <Box sx={{ textAlign: 'center', mt: 4 }}>
                <Button variant="contained" color="primary" size="large" href="/apply">
                    Apply Now
                </Button>
            </Box>
        </Paper>
    </Box>
);

export default About;