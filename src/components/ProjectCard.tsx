import React from 'react';
import { Typography, Box, Chip, Link, IconButton, Button } from '@mui/material';
import type { Project } from '../types/Project';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import './ProjectCard.css';

function ProjectCard (props : Project) {
    return (
    <Box className="project-card-container">
        <Box className="project-card-image">
            <img src={props.imagePath} alt={props.title} />
        </Box>
        <Box className="project-card-content">
            <Box component='span' className="project-card-title">
            {(props.link && props.link.length > 1) ? (<Link variant='h6' href={props.link}>{props.title}<OpenInNewIcon/></Link>) : (<Typography variant='h6'>{props.title}</Typography>)}
            {(props.gitHubUrl && props.gitHubUrl.length > 1) ? (
                <Button 
                    variant="outlined" 
                    href={props.gitHubUrl} 
                    target="_blank"
                    size="small"
                    startIcon={<GitHubIcon />}
                >
                    Repo
                </Button>
            ) : null}
            </Box>
            <Typography variant='body2'>{props.description}</Typography>
            <Box component='span' className="project-card-technologies">{props.technologies.map(tech => <Chip label={tech} size="small" color="primary" key={tech}/>)}</Box>  
        </Box>
        
    </Box>
    );
}

export default ProjectCard