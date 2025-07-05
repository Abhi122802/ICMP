import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import AssignmentIcon from '@mui/icons-material/Assignment';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import VerifiedIcon from '@mui/icons-material/Verified';

const differences = [
    {
        title: "Regular B.Com",
        icon: <StarIcon sx={{ color: "#fff", fontSize: 28 }} />,
        color: "#38bdf8",
        gradient: "linear-gradient(135deg, #38bdf8 60%, #60a5fa 100%)"
    },
    {
        title: "Professional B.Com",
        icon: <CheckCircleIcon sx={{ color: "#fff", fontSize: 28 }} />,
        color: "#6366f1",
        gradient: "linear-gradient(135deg, #6366f1 60%, #818cf8 100%)"
    }
];

const points = [
    [
        "Focuses on general commerce subjects.",
        "Suitable for students seeking a broad understanding of commerce.",
        "Curriculum is less specialized.",
        "Ideal for those interested in careers like banking, accounting, or further studies (M.Com, MBA).",
        "Usually offered by most universities."
    ],
    [
        "Focuses on specialized subjects (e.g., B.Com (Honours), B.Com (Accounting & Finance), B.Com (Banking)).",
        "Designed for students aiming for specific professional careers.",
        "Curriculum includes industry-oriented and practical subjects.",
        "Often includes internships, projects, or professional certifications.",
        "May have higher eligibility criteria."
    ]
];

// Array of icons for each bullet point
const bulletIcons = [
    [ // Regular B.Com
        <SchoolIcon sx={{ color: "#38bdf8", fontSize: 22 }} />,
        <AssignmentIcon sx={{ color: "#38bdf8", fontSize: 22 }} />,
        <TrendingUpIcon sx={{ color: "#38bdf8", fontSize: 22 }} />,
        <WorkIcon sx={{ color: "#38bdf8", fontSize: 22 }} />,
        <VerifiedIcon sx={{ color: "#38bdf8", fontSize: 22 }} />
    ],
    [ // Professional B.Com
        <SchoolIcon sx={{ color: "#6366f1", fontSize: 22 }} />,
        <AssignmentIcon sx={{ color: "#6366f1", fontSize: 22 }} />,
        <TrendingUpIcon sx={{ color: "#6366f1", fontSize: 22 }} />,
        <WorkIcon sx={{ color: "#6366f1", fontSize: 22 }} />,
        <VerifiedIcon sx={{ color: "#6366f1", fontSize: 22 }} />
    ]
];

function BComDifference() {
    return (
        <div style={{
            fontFamily: 'Montserrat, Segoe UI, Arial, sans-serif',
            background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
            minHeight: '60vh',
            padding: '2.5rem 1rem'
        }}>
            <h2 style={{
                textAlign: 'center',
                color: '#1e293b',
                // marginBottom: '2.5rem',
                fontWeight: 800,
                letterSpacing: '1px',
                fontSize: '2.1rem'
            }}>
                Difference between Regular B.Com and Professional B.Com
            </h2>
            <div style={{
                display: 'flex',
                gap: '2.5rem',
                justifyContent: 'center',
                flexWrap: 'wrap'
            }}>
                {differences.map((type, i) => (
                    <div
                        key={type.title}
                        style={{
                            flex: '1 1 340px',
                            maxWidth: '410px',
                            background: '#fff',
                            border: 'none',
                            boxShadow: '0 6px 32px rgba(60,72,88,0.13)',
                            padding: '2.2rem 1.7rem 2rem 1.7rem',
                            borderRadius: '22px',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                            outline: 'none',
                            position: 'relative'
                        }}
                    >
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            marginBottom: '1.2rem'
                        }}>
                            <div style={{
                                background: type.gradient,
                                borderRadius: '50%',
                                width: 60,
                                height: 60,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: 10,
                                boxShadow: `0 2px 12px ${type.color}33`
                            }}>
                                {type.icon}
                            </div>
                            <h3 style={{
                                color: type.color,
                                fontWeight: 700,
                                fontSize: '1.25rem',
                                margin: 0,
                                letterSpacing: '0.5px',
                                textAlign: 'center'
                            }}>
                                {type.title}
                            </h3>
                        </div>
                        <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0
                        }}>
                            {points[i].map((point, idx) => (
                                <li key={idx} style={{
                                    marginBottom: '1.1rem',
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    fontSize: '1.05rem',
                                    color: '#334155',
                                    fontWeight: 500
                                }}>
                                    <span style={{
                                        marginRight: '0.7em',
                                        marginTop: '2px'
                                    }}>
                                        {bulletIcons[i][idx]}
                                    </span>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BComDifference;