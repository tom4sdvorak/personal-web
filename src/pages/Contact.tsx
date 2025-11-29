import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Contact.css';
import { Button, Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { useState } from 'react';
import Rectangle from '../components/Rectangle';

type FormErrorMap = Record<string, string | undefined>;
function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');    
    
    const [formErrors, setFormErrors] = useState<FormErrorMap>({
        name: undefined,
        email: undefined,
        message: undefined,
    });

    function handleMessage(e: React.FormEvent): void {
        e.preventDefault();
        const errors : FormErrorMap = validateMessage(name, email, message);
        setFormErrors(errors);
        const isValid = Object.values(errors).every(error => error === undefined);
        if (isValid) {
            console.log("Sending message: ", name, email, message);
            setName('');
            setEmail('');
            setMessage('');
            setFormErrors({ name: undefined, email: undefined, message: undefined });
        }
    }

    function validateMessage(name: string, email: string, message: string): FormErrorMap {
        const errors: FormErrorMap = {};
        const nameValid = name.length > 0;
        if (!nameValid) {
            errors.name = 'Name is required.';
        }
        else{
            errors.name = undefined;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailValid = emailRegex.test(email);
        if (!emailValid) {
            errors.email = 'Email is invalid.';
        }
        else{
            errors.email = undefined;
        }
        const messageValid = message.length > 0;
        if (!messageValid) {
            errors.message = 'Message is required.';
        }
        else{
            errors.message = undefined;
        }
        return errors;
    }

  return (
    <Rectangle className="contact-page">
        <Typography variant="h3">Contact</Typography>
        <Divider variant="middle" />
        <Box className="contact-container">
            <Box className="contact-info">
                <List dense={true} sx={{ placeSelf: 'center' }}>
                    <ListItem>
                        <ListItemIcon>
                        <EmailIcon color="primary" fontSize="large"/>
                        </ListItemIcon>
                        <ListItemText primary="tom4s.dvorak@gmail.com"/>
                    </ListItem>
                </List>
                <Box className="contact-subtitle-container">
                    <Typography variant='overline' className="contact-subtitle">You can also find me on:</Typography>
                        <span>
                        <IconButton 
                            aria-label="LinkedIn Profile" 
                            component="a"
                            size="large"
                            href="https://www.linkedin.com/in/tomas-dvorak-69798824b/" 
                            target="_blank" // Opens in a new tab
                            color="primary"
                            >
                                <LinkedInIcon color="primary" fontSize="large" />
                            </IconButton>
                            <IconButton 
                            aria-label="GitHub Profile" 
                            component="a"
                            size="large"
                            href="https://github.com/tom4sdvorak" 
                            target="_blank" // Opens in a new tab
                            color="primary"
                            >
                                <GitHubIcon color="primary" fontSize="large" />
                            </IconButton>
                        </span>
                </Box>
            </Box>
            <Box component="form" className="contact-form" onSubmit={handleMessage}>
                <TextField name="input-name" label="Your Name" variant="filled" fullWidth
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    error={formErrors.name !== undefined}
                    helperText={formErrors.name || ' '}
                />
                <TextField name="input-email" label="Your E-mail" variant="filled" fullWidth
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    error={formErrors.email !== undefined}
                    helperText={formErrors.email || ' '}
                />
                <TextField name="input-message" label="Your Message" multiline rows={4} variant="filled" fullWidth
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    error={formErrors.message !== undefined}
                    helperText={formErrors.message || ' '}
                    />
                <Button variant="contained" startIcon={<SendIcon />} type="submit" fullWidth>
                Send
                </Button>
            </Box>
        </Box>
    </Rectangle>
  );
}
export default ContactPage;