import React from 'react';
import './Home.css'; // Assuming you have a CSS file for styling
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import univercityLogo from '../../assets/images/LogoN.jpg'; // Replace with your logo path
import { EmojiEvents, Group, BarChart, MenuBook, Public, Business, LaptopChromebook, Money, CurrencyRupee, HouseTwoTone } from '@mui/icons-material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Walkthrough from '../../components/slider/imgslider';
import PracticalBCom from '../../components/b_com/b_com';
const features = [
    {
        icon: <img src={univercityLogo} alt="Accredited Degree" fontSize="large" color="primary" />,
        title: 'Accredited Degree',
        description: 'Punyashlok Ahilyadevi Holkar Solapur University, Solapur',
    },
    {
        icon: <Group fontSize="large" color="primary" />,
        title: 'Expert Faculty',
        description: 'Learn from CA, CS, CMA and industry professionals and experienced academicians.',
    },

    {
        icon: <BarChart fontSize="large" color="primary" />,
        title: 'On The Job Training',
        description: 'On the job training in second semester.',
    },
    {
        icon: <MenuBook fontSize="large" color="primary" />,
        title: 'Modern Curriculum',
        description: 'Industry-aligned curriculum updated regularly to meet market demands.',
    },
    {
        icon: <LaptopChromebook fontSize="large" color="primary" />,
        title: 'learning on laptop',
        description: 'Learning on laptop from 1st year.',
    },
    {
        icon: <CurrencyRupee fontSize="large" color="primary" />,
        title: 'Earnings',
        description: 'Earnings from the 2nd year.',
    },

    {
        icon: <Business fontSize="large" color="primary" />,
        title: 'Industry Connect',
        description: 'Regular industry interactions, guest lectures, and corporate partnerships.',
    },
    {
        icon: <HouseTwoTone fontSize="large" color="primary" />,
        title: 'Hostel Facility',
        description: 'Comfortable hostel accommodation for students.',
    },
];
const Home = () => {
    const [course, setCourse] = React.useState('');

    const handleCourseChange = (event) => {
        setCourse(event.target.value);
    };

    return (
        <div className="home">
            <div className="home-header">
                <h1>विद्यया वाणिज्यं, वाणिज्येन राष्ट्रविकास:</h1>
                <p>Through knowledge, commerce; through commerce, national development.</p>
            </div>

        
            <div className="home-container1 ">
                <Walkthrough />
                <div className="row">
                    <div className="home-container">
                        {/* Left Section: Text Content */}
                        <div className="home-left">
                           </div>

                        {/* Right Section: Form */}
                        <div className="home-right ">
                            <form action="" className="form-container">
                                <h2 className='title1'>Submit Your Inquiry</h2>
                                <div className="form-group">
                                    <TextField
                                        id="name"
                                        label="Name"
                                        type="text"
                                        required
                                        variant="standard"
                                        className="w-100"
                                    />
                                </div>
                                <div className="form-group">
                                    <TextField
                                        id="mobile"
                                        label="Mobile Number"
                                        type="tel"
                                        required
                                        variant="standard"
                                        className="w-100"
                                    />
                                </div>
                                <div className="form-group">
                                    <TextField
                                        id="email"
                                        label="Email"
                                        type="email"

                                        variant="standard"
                                        className="w-100"
                                    />
                                </div>
                                <div className="form-group">
                                    <TextField
                                        id="course"
                                        select
                                        label="Select Course"
                                        value={course}
                                        onChange={handleCourseChange}
                                        variant="standard"
                                        className="w-100"
                                    >
                                        <MenuItem value="bcom">B.Com</MenuItem>
                                        <MenuItem value="mcom">M.Com</MenuItem>
                                        <MenuItem value="mba">MBA</MenuItem>
                                        <MenuItem value="ca">CA</MenuItem>
                                    </TextField>
                                </div>
                                <div className="form-group">
                                    <TextField
                                        id="comment"
                                        label="Comment"
                                        multiline
                                        rows={4}
                                        variant="standard"
                                        className="w-100"
                                    />
                                </div>

                                <div className="form-group">
                                    <label className='checkbox'>
                                        <input type="checkbox" required />
                                        I agree to receive information regarding my submitted application and informational, promotional messages, calls by signing up on Professional Commerce.
                                    </label>
                                </div>
                                <div className="form-group">
                                    <Button variant="contained" color="primary" type="submit" className="submit-button">
                                        Submit
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            

            
            <PracticalBCom />


            <section className="why-section">
                <div className="container">
                    <div className="title-block">
                        <h2>Why Choose Us?</h2>
                        <p>
                            Our institution stands out with industry-relevant curriculum,  Professional and experienced faculty.
                        </p>
                    </div>
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card">
                                <div className="icon-circle">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <h2>Frequently Asked Questions</h2>
            <div className="faq-section">
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMore />}><strong>What services do you offer?</strong></AccordionSummary>
                    <AccordionDetails><p>We offer software development, consulting, and business support.</p></AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMore />}><strong>How can I contact customer support?</strong></AccordionSummary>
                    <AccordionDetails><p>Email us at support@ourwebsite.com or use our contact form.</p></AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMore />}><strong>Do you offer custom solutions?</strong></AccordionSummary>
                    <AccordionDetails><p>Yes, we tailor solutions to your unique needs.</p></AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
};

export default Home;