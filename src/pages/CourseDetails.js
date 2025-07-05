import React from 'react';
import { useParams } from 'react-router-dom';
import {
    Box,
    Typography,
    Paper,
    Divider,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Button,
    Grid,
    Chip,
    Stack,
    Avatar,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const courseData = {
    '11th-commerce': {
        name: '11th Commerce',
        icon: <SchoolIcon sx={{ color: '#fff', fontSize: 36 }} />,
        avatarColor: '#1976d2',
        description:
            'The 11th Commerce stream introduces students to the basics of business, economics, and accountancy, laying the foundation for future studies in commerce and management.',
        duration: '1 Year',
        eligibility: 'Passed 10th Grade from a recognized board.',
        admission: [
            'Fill out the online application form.',
            'Submit required documents (10th marksheet, ID proof).',
            'Attend counseling session.',
            'Pay admission fees to confirm your seat.',
        ],
        syllabus: [
            { subject: 'Accountancy', topics: 'Introduction, Basic Concepts, Journal Entries' },
            { subject: 'Business Studies', topics: 'Nature of Business, Forms of Business, Management' },
            { subject: 'Economics', topics: 'Microeconomics, Macroeconomics, Statistics' },
            { subject: 'Mathematics', topics: 'Sets, Relations, Functions, Calculus' },
            { subject: 'English', topics: 'Grammar, Comprehension, Writing Skills' },
        ],
        faqs: [
            {
                q: 'What subjects are covered in 11th Commerce?',
                a: 'Subjects include Accountancy, Business Studies, Economics, Mathematics, and English.',
            },
            {
                q: 'Is Mathematics compulsory?',
                a: 'Mathematics is optional but recommended for students interested in finance or economics.',
            },
        ],
    },
    '12th-commerce': {
        name: '12th Commerce',
        icon: <SchoolIcon sx={{ color: '#fff', fontSize: 36 }} />,
        avatarColor: '#1565c0',
        description:
            '12th Commerce builds on the foundation of 11th Commerce, preparing students for higher education in commerce, management, and professional courses.',
        duration: '1 Year',
        eligibility: 'Passed 11th Commerce from a recognized board.',
        admission: [
            'Complete the registration form.',
            'Submit 11th marksheet and ID proof.',
            'Attend orientation session.',
            'Pay the course fees.',
        ],
        syllabus: [
            { subject: 'Accountancy', topics: 'Partnership, Company Accounts, Analysis of Financial Statements' },
            { subject: 'Business Studies', topics: 'Principles of Management, Business Environment, Marketing' },
            { subject: 'Economics', topics: 'Indian Economy, National Income, Money and Banking' },
            { subject: 'Mathematics', topics: 'Probability, Linear Programming, Calculus' },
            { subject: 'English', topics: 'Literature, Writing Skills, Comprehension' },
        ],
        faqs: [
            {
                q: 'Can I prepare for CA after 12th Commerce?',
                a: 'Yes, you can enroll in CA Foundation after completing 12th Commerce.',
            },
            {
                q: 'Is Business Mathematics important?',
                a: 'It is useful for students planning to pursue finance or economics.',
            },
        ],
    },
    'bcom': {
        name: 'B.Com',
        icon: <AccountBalanceIcon sx={{ color: '#fff', fontSize: 36 }} />,
        avatarColor: '#0288d1',
        description:
            'Bachelor of Commerce (B.Com) is a 3-year undergraduate program focusing on commerce, accounting, economics, and business law.',
        duration: '3 Years',
        eligibility: 'Passed 12th Commerce or equivalent.',
        admission: [
            'Apply online or visit the campus.',
            'Submit 12th marksheet and other documents.',
            'Clear entrance test (if applicable).',
            'Pay the first semester fees.',
        ],
        syllabus: [
            { subject: 'Financial Accounting', topics: 'Accounting Principles, Final Accounts, Depreciation' },
            { subject: 'Business Law', topics: 'Contract Act, Sale of Goods Act, Company Law' },
            { subject: 'Economics', topics: 'Microeconomics, Macroeconomics, Indian Economy' },
            { subject: 'Business Mathematics', topics: 'Matrices, Calculus, Statistics' },
            { subject: 'Corporate Accounting', topics: 'Share Capital, Debentures, Final Accounts of Companies' },
        ],
        faqs: [
            {
                q: 'Can I pursue CA along with B.Com?',
                a: 'Yes, many students prepare for CA exams while pursuing B.Com.',
            },
            {
                q: 'Are internships available?',
                a: 'Yes, internships are encouraged during the course.',
            },
        ],
    },
    'mcom': {
        name: 'M.Com',
        icon: <AccountBalanceIcon sx={{ color: '#fff', fontSize: 36 }} />,
        avatarColor: '#00bcd4',
        description:
            'Master of Commerce (M.Com) is a postgraduate degree focusing on advanced topics in commerce, accounting, economics, and management.',
        duration: '2 Years',
        eligibility: 'Passed B.Com or equivalent undergraduate degree.',
        admission: [
            'Fill out the M.Com application form.',
            'Submit B.Com marksheet and other required documents.',
            'Appear for entrance exam (if required).',
            'Pay the admission fees.',
        ],
        syllabus: [
            { subject: 'Advanced Accounting', topics: 'Accounting Standards, Corporate Accounting, Taxation' },
            { subject: 'Financial Management', topics: 'Capital Structure, Working Capital, Dividend Policy' },
            { subject: 'Business Environment', topics: 'Economic Environment, Policy Framework' },
            { subject: 'Research Methodology', topics: 'Data Collection, Analysis, Report Writing' },
            { subject: 'Electives', topics: 'Banking, Insurance, International Business' },
        ],
        faqs: [
            {
                q: 'Is M.Com necessary for teaching?',
                a: 'M.Com is preferred for teaching positions in colleges and universities.',
            },
            {
                q: 'Can I do PhD after M.Com?',
                a: 'Yes, you can pursue a PhD in Commerce or related fields after M.Com.',
            },
        ],
    },
    'bba': {
        name: 'BBA',
        icon: <BusinessCenterIcon sx={{ color: '#fff', fontSize: 36 }} />,
        avatarColor: '#26c6da',
        description:
            'Bachelor of Business Administration (BBA) is a 3-year undergraduate program that provides a foundation in business management and administration.',
        duration: '3 Years',
        eligibility: 'Passed 12th grade from a recognized board.',
        admission: [
            'Apply through the online portal.',
            'Submit 12th marksheet and ID proof.',
            'Clear entrance exam/interview (if required).',
            'Pay the first semester fees.',
        ],
        syllabus: [
            { subject: 'Principles of Management', topics: 'Planning, Organizing, Leading, Controlling' },
            { subject: 'Marketing Management', topics: 'Market Analysis, Consumer Behavior, Branding' },
            { subject: 'Financial Accounting', topics: 'Bookkeeping, Final Accounts, Budgeting' },
            { subject: 'Human Resource Management', topics: 'Recruitment, Training, Performance Appraisal' },
            { subject: 'Business Communication', topics: 'Verbal, Non-verbal, Written Communication' },
        ],
        faqs: [
            {
                q: 'Is BBA good for MBA aspirants?',
                a: 'Yes, BBA provides a strong foundation for MBA studies.',
            },
            {
                q: 'Are internships part of BBA?',
                a: 'Most BBA programs include internships as part of the curriculum.',
            },
        ],
    },
    'mba': {
        name: 'MBA',
        icon: <EmojiEventsIcon sx={{ color: '#fff', fontSize: 36 }} />,
        avatarColor: '#64b5f6',
        description:
            'Master of Business Administration (MBA) is a prestigious postgraduate program focusing on business management, leadership, and entrepreneurship.',
        duration: '2 Years',
        eligibility: 'Graduation in any discipline from a recognized university.',
        admission: [
            'Register for MBA entrance exams (CAT, MAT, etc.).',
            'Apply to MBA colleges.',
            'Clear group discussion and personal interview.',
            'Pay the admission fees.',
        ],
        syllabus: [
            { subject: 'Organizational Behavior', topics: 'Motivation, Leadership, Teamwork' },
            { subject: 'Marketing Management', topics: 'Market Research, Branding, Digital Marketing' },
            { subject: 'Financial Management', topics: 'Investment, Risk Analysis, Portfolio Management' },
            { subject: 'Operations Management', topics: 'Supply Chain, Quality Control, Project Management' },
            { subject: 'Strategic Management', topics: 'Business Strategy, Mergers & Acquisitions' },
        ],
        faqs: [
            {
                q: 'What are the specializations in MBA?',
                a: 'Specializations include Finance, Marketing, HR, Operations, IT, and more.',
            },
            {
                q: 'Is work experience required for MBA?',
                a: 'Some colleges require work experience, but many accept fresh graduates.',
            },
        ],
    },
    'ca-foundation': {
        name: 'CA Foundation',
        icon: <SchoolIcon sx={{ color: '#fff', fontSize: 36 }} />,
        avatarColor: '#1565c0',
        description:
            'CA Foundation is the entry-level exam for the Chartered Accountancy course in India, covering accounting, law, economics, and mathematics.',
        duration: '6 Months',
        eligibility: 'Passed 12th grade from a recognized board.',
        admission: [
            'Register with ICAI for CA Foundation.',
            'Submit required documents and fees.',
            'Prepare and appear for the exam.',
        ],
        syllabus: [
            { subject: 'Principles and Practice of Accounting', topics: 'Accounting Process, Bank Reconciliation, Depreciation' },
            { subject: 'Business Laws', topics: 'Indian Contract Act, Sale of Goods Act, Partnership Act' },
            { subject: 'Business Mathematics', topics: 'Ratio, Proportion, Indices, Equations' },
            { subject: 'Business Economics', topics: 'Demand, Supply, Market Structures' },
        ],
        faqs: [
            {
                q: 'Can I register for CA Foundation after 12th?',
                a: 'Yes, registration is open after passing 12th.',
            },
            {
                q: 'Is coaching necessary?',
                a: 'Coaching is helpful but not mandatory.',
            },
        ],
    },
    'cs-executive': {
        name: 'CS Executive',
        icon: <BusinessCenterIcon sx={{ color: '#fff', fontSize: 36 }} />,
        avatarColor: '#00acc1',
        description:
            'CS Executive is the second stage of the Company Secretary course, focusing on company law, tax law, and business management.',
        duration: '1 Year',
        eligibility: 'Passed CS Foundation or graduation in any discipline.',
        admission: [
            'Register with ICSI for CS Executive.',
            'Submit required documents and fees.',
            'Prepare and appear for the exam.',
        ],
        syllabus: [
            { subject: 'Company Law', topics: 'Incorporation, Share Capital, Meetings' },
            { subject: 'Tax Laws', topics: 'Income Tax, GST, Customs' },
            { subject: 'Economic and Commercial Laws', topics: 'Competition Act, FEMA, SEBI' },
            { subject: 'Securities Laws', topics: 'Stock Exchange, Listing, Insider Trading' },
        ],
        faqs: [
            {
                q: 'Can I do CS Executive after graduation?',
                a: 'Yes, graduates can directly register for CS Executive.',
            },
            {
                q: 'How many modules are there?',
                a: 'There are two modules in CS Executive.',
            },
        ],
    },
    'cma-inter': {
        name: 'CMA Inter',
        icon: <AccountBalanceIcon sx={{ color: '#fff', fontSize: 36 }} />,
        avatarColor: '#039be5',
        description:
            'CMA Inter is the intermediate level of the Cost and Management Accountancy course, focusing on cost accounting, financial management, and indirect taxation.',
        duration: '1 Year',
        eligibility: 'Passed CMA Foundation or graduation in any discipline.',
        admission: [
            'Register with ICMAI for CMA Inter.',
            'Submit required documents and fees.',
            'Prepare and appear for the exam.',
        ],
        syllabus: [
            { subject: 'Cost Accounting', topics: 'Material, Labour, Overheads, Cost Sheet' },
            { subject: 'Financial Management', topics: 'Capital Budgeting, Working Capital, Leverages' },
            { subject: 'Direct and Indirect Taxation', topics: 'Income Tax, GST, Customs' },
            { subject: 'Company Accounts', topics: 'Share Capital, Debentures, Final Accounts' },
        ],
        faqs: [
            {
                q: 'Can I do CMA Inter after graduation?',
                a: 'Yes, graduates can directly register for CMA Inter.',
            },
            {
                q: 'Is there any exemption for commerce graduates?',
                a: 'Some papers may be exempted for commerce graduates.',
            },
        ],
    },
};

const defaultCourse = {
    name: 'Course Not Found',
    icon: <EmojiEventsIcon sx={{ color: '#fff', fontSize: 36 }} />,
    avatarColor: '#bdbdbd',
    description: 'Sorry, we could not find details for this course.',
    duration: '-',
    eligibility: '-',
    admission: [],
    syllabus: [],
    faqs: [],
};

const SectionHeader = ({ children }) => (
    <Typography
        variant="h6"
        sx={{
            color: '#1565c0',
            mb: 1.5,
            mt: 3,
            fontWeight: 700,
            letterSpacing: 0.5,
            textTransform: 'uppercase',
            fontSize: '1.05rem',
        }}
    >
        {children}
    </Typography>
);

const CourseDetails = () => {
    const { id } = useParams();
    const course = courseData[id] || defaultCourse;

    return (
        <Box
            sx={{
                maxWidth: '1900px',
                mx: 'auto',
                my: 5,
                p: { xs: 1, sm: 2 },
                background: 'linear-gradient(135deg, #e3f2fd 0%, #fff 100%)',
                minHeight: '100vh',
            }}
        >
            <Paper
                elevation={6}
                sx={{
                    p: { xs: 2, sm: 4 },
                    borderRadius: 5,
                    background: 'linear-gradient(135deg, #fff 60%, #e3f2fd 100%)',
                }}
            >
                <Grid container spacing={3} alignItems="center">
                    <Grid item>
                        <Avatar
                            sx={{
                                bgcolor: course.avatarColor,
                                width: 72,
                                height: 72,
                                boxShadow: '0 4px 16px rgba(25, 118, 210, 0.15)',
                            }}
                        >
                            {course.icon}
                        </Avatar>
                    </Grid>
                    <Grid item xs>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 800,
                                color: course.avatarColor,
                                letterSpacing: 1,
                                mb: 1,
                                fontFamily: 'Montserrat, Arial, sans-serif',
                            }}
                        >
                            {course.name}
                        </Typography>
                        <Stack direction="row" spacing={1} flexWrap="wrap">
                            <Chip
                                label={`Duration: ${course.duration}`}
                                color="primary"
                                variant="outlined"
                                sx={{ fontWeight: 600 }}
                            />
                            <Chip
                                label={`Eligibility: ${course.eligibility}`}
                                color="info"
                                variant="outlined"
                                sx={{ fontWeight: 600 }}
                            />
                        </Stack>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 3 }} />

                <Typography
                    variant="body1"
                    sx={{
                        mb: 3,
                        color: '#37474f',
                        fontSize: '1.13rem',
                        lineHeight: 1.7,
                        fontWeight: 500,
                    }}
                >
                    {course.description}
                </Typography>

                <SectionHeader>Admission Process</SectionHeader>
                <Box sx={{ mb: 3 }}>
                    {course.admission.length > 0 ? (
                        <ol style={{ paddingLeft: 20, margin: 0 }}>
                            {course.admission.map((step, idx) => (
                                <li key={idx} style={{ marginBottom: 8, color: '#37474f', fontSize: '1.05rem' }}>
                                    {step}
                                </li>
                            ))}
                        </ol>
                    ) : (
                        <Typography sx={{ color: '#bdbdbd' }}>Admission details not available.</Typography>
                    )}
                </Box>

                <SectionHeader>Syllabus</SectionHeader>
                <Box sx={{ mb: 3 }}>
                    {course.syllabus && course.syllabus.length > 0 ? (
                        <TableContainer component={Paper} sx={{ boxShadow: 'none', mb: 2 }}>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ fontWeight: 700, color: '#1565c0' }}>Subject</TableCell>
                                        <TableCell sx={{ fontWeight: 700, color: '#1565c0' }}>Topics</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {course.syllabus.map((row, idx) => (
                                        <TableRow key={idx}>
                                            <TableCell>{row.subject}</TableCell>
                                            <TableCell>{row.topics}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    ) : (
                        <Typography sx={{ color: '#bdbdbd' }}>Syllabus not available.</Typography>
                    )}
                </Box>

                <SectionHeader>Frequently Asked Questions</SectionHeader>
                <Box sx={{ mb: 3 }}>
                    {course.faqs.length > 0 ? (
                        course.faqs.map((faq, idx) => (
                            <Accordion key={idx} sx={{ mb: 1, borderRadius: 2, boxShadow: 'none', border: '1px solid #e3e3e3' }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography sx={{ fontWeight: 600, color: '#1976d2' }}>{faq.q}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ color: '#37474f' }}>{faq.a}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))
                    ) : (
                        <Typography sx={{ color: '#bdbdbd' }}>No FAQs available for this course.</Typography>
                    )}
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box sx={{ textAlign: 'center', mt: 2 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        sx={{
                            px: 5,
                            py: 1.5,
                            borderRadius: 3,
                            fontWeight: 700,
                            fontSize: '1.1rem',
                            boxShadow: '0 4px 16px rgba(25, 118, 210, 0.12)',
                            textTransform: 'none',
                            letterSpacing: 1,
                        }}
                    >
                        Apply Now
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default CourseDetails;