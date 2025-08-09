import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Container,
  Typography,
  Paper,
  Box,
  Tabs,
  Tab,
  Alert,
  Snackbar
} from '@mui/material';
import { SmartFormBuilder } from 'mui-smart-form-builder';

// Mock API function for autocomplete
const fetchSkills = async (searchTerm: string) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const allSkills = [
    'JavaScript', 'TypeScript', 'React', 'Angular', 'Vue.js',
    'Node.js', 'Python', 'Java', 'C#', 'PHP',
    'HTML', 'CSS', 'SASS', 'Docker', 'Kubernetes',
    'AWS', 'Azure', 'Google Cloud', 'MongoDB', 'PostgreSQL'
  ];
  
  return allSkills
    .filter(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    .map(skill => ({ label: skill, value: skill }));
};

const fetchCountries = async (searchTerm: string) => {
  await new Promise(resolve => setTimeout(resolve, 200));
  
  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Germany', 'France',
    'Spain', 'Italy', 'Japan', 'Australia', 'Brazil', 'India', 'China'
  ];
  
  return countries
    .filter(country => country.toLowerCase().includes(searchTerm.toLowerCase()))
    .map(country => ({ label: country, value: country }));
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel({ children, value, index }: TabPanelProps) {
  return (
    <div hidden={value !== index}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function App() {
  const [tabValue, setTabValue] = useState(0);
  const [snackbar, setSnackbar] = useState({ open: false, message: '' });

  // Basic Form
  const basicFormik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      age: 0,
      bio: '',
      newsletter: false
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      phone: Yup.string().required('Phone is required'),
      age: Yup.number().min(18, 'Must be at least 18').required('Age is required')
    }),
    onSubmit: (values) => {
      setSnackbar({ open: true, message: `Basic form submitted: ${JSON.stringify(values, null, 2)}` });
    }
  });

  // Advanced Form
  const advancedFormik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
      gender: '',
      interests: [],
      country: '',
      skills: [],
      birthDate: null,
      workStartTime: null,
      lastLogin: null,
      notifications: true,
      experience: 5,
      resume: null,
      agreement: false
    },
    validationSchema: Yup.object({
      username: Yup.string().min(3, 'Minimum 3 characters').required('Username is required'),
      password: Yup.string().min(6, 'Minimum 6 characters').required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Confirm password is required'),
      gender: Yup.string().required('Gender is required'),
      interests: Yup.array().min(1, 'Select at least one interest'),
      country: Yup.string().required('Country is required'),
      agreement: Yup.boolean().oneOf([true], 'You must accept the agreement')
    }),
    onSubmit: (values) => {
      setSnackbar({ open: true, message: `Advanced form submitted: ${JSON.stringify(values, null, 2)}` });
    }
  });

  const basicFields = [
    {
      name: 'firstName',
      label: 'First Name',
      type: 'text' as const,
      required: true,
      grid: { xs: 12, md: 6 },
      muiProps: { fullWidth: true }
    },
    {
      name: 'lastName',
      label: 'Last Name',
      type: 'text' as const,
      required: true,
      grid: { xs: 12, md: 6 },
      muiProps: { fullWidth: true }
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'text' as const,
      placeholder: 'Enter your email',
      required: true,
      grid: { xs: 12, md: 6 },
      muiProps: { fullWidth: true }
    },
    {
      name: 'phone',
      label: 'Phone Number',
      type: 'text' as const,
      placeholder: '+1 (555) 123-4567',
      required: true,
      grid: { xs: 12, md: 6 },
      muiProps: { fullWidth: true }
    },
    {
      name: 'age',
      label: 'Age',
      type: 'number' as const,
      min: 18,
      max: 120,
      required: true,
      grid: { xs: 12, md: 6 },
      muiProps: { fullWidth: true }
    },
    {
      type: 'empty' as const,
      grid: { xs: 12, md: 6 }
    },
    {
      name: 'bio',
      label: 'Bio',
      type: 'textarea' as const,
      placeholder: 'Tell us about yourself...',
      grid: { xs: 12 },
      muiProps: { fullWidth: true }
    },
    {
      name: 'newsletter',
      label: 'Subscribe to newsletter',
      type: 'checkbox' as const,
      grid: { xs: 12 }
    }
  ];

  const advancedFields = [
    {
      name: 'username',
      label: 'Username',
      type: 'text' as const,
      required: true,
      grid: { xs: 12, md: 6 },
      muiProps: { fullWidth: true }
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password' as const,
      required: true,
      grid: { xs: 12, md: 6 },
      muiProps: { fullWidth: true }
    },
    {
      name: 'confirmPassword',
      label: 'Confirm Password',
      type: 'password' as const,
      required: true,
      grid: { xs: 12, md: 6 },
      muiProps: { fullWidth: true }
    },
    {
      name: 'gender',
      label: 'Gender',
      type: 'radio' as const,
      options: [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' }
      ],
      required: true,
      grid: { xs: 12, md: 6 }
    },
    {
      name: 'interests',
      label: 'Interests',
      type: 'multiCheckbox' as const,
      options: [
        { label: 'Technology', value: 'tech' },
        { label: 'Sports', value: 'sports' },
        { label: 'Music', value: 'music' },
        { label: 'Travel', value: 'travel' },
        { label: 'Reading', value: 'reading' }
      ],
      required: true,
      grid: { xs: 12, md: 6 }
    },
    {
      name: 'country',
      label: 'Country',
      type: 'autocomplete' as const,
      onSearch: fetchCountries,
      freeSolo: false,
      required: true,
      grid: { xs: 12, md: 6 },
      muiProps: { fullWidth: true }
    },
    {
      name: 'skills',
      label: 'Skills',
      type: 'autocomplete' as const,
      onSearch: fetchSkills,
      freeSolo: true,
      multiple: true,
      grid: { xs: 12, md: 6 },
      muiProps: { fullWidth: true }
    },
    {
      name: 'birthDate',
      label: 'Birth Date',
      type: 'date' as const,
      grid: { xs: 12, md: 4 },
      muiProps: { fullWidth: true }
    },
    {
      name: 'workStartTime',
      label: 'Work Start Time',
      type: 'time' as const,
      grid: { xs: 12, md: 4 },
      muiProps: { fullWidth: true }
    },
    {
      name: 'lastLogin',
      label: 'Last Login',
      type: 'dateTime' as const,
      grid: { xs: 12, md: 4 },
      muiProps: { fullWidth: true }
    },
    {
      name: 'notifications',
      label: 'Enable notifications',
      type: 'switch' as const,
      grid: { xs: 12, md: 6 }
    },
    {
      name: 'experience',
      label: 'Years of Experience',
      type: 'slider' as const,
      min: 0,
      max: 20,
      marks: true,
      grid: { xs: 12, md: 6 }
    },
    {
      name: 'resume',
      label: 'Upload Resume',
      type: 'file' as const,
      accept: '.pdf,.doc,.docx',
      grid: { xs: 12 },
      muiProps: { fullWidth: true }
    },
    {
      name: 'agreement',
      label: 'I agree to the terms and conditions',
      type: 'checkbox' as const,
      required: true,
      grid: { xs: 12 }
    }
  ];

  const basicButtons = [
    {
      label: 'Reset',
      variant: 'outlined' as const,
      onClick: (formik: any) => formik.resetForm()
    },
    {
      label: 'Submit',
      variant: 'contained' as const,
      type: 'submit' as const
    }
  ];

  const advancedButtons = [
    {
      label: 'Clear All',
      variant: 'outlined' as const,
      color: 'secondary' as const,
      onClick: (formik: any) => formik.resetForm()
    },
    {
      label: 'Save Draft',
      variant: 'outlined' as const,
      onClick: () => {
        setSnackbar({ open: true, message: 'Draft saved!' });
      }
    },
    {
      label: 'Submit Application',
      variant: 'contained' as const,
      type: 'submit' as const,
      color: 'primary' as const
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        MUI Smart Form Builder Demo
      </Typography>
      
      <Typography variant="subtitle1" align="center" color="text.secondary" paragraph>
        A powerful React component for building dynamic forms with Material-UI and Formik
      </Typography>

      <Paper sx={{ mt: 4 }}>
        <Tabs 
          value={tabValue} 
          onChange={(_, newValue) => setTabValue(newValue)}
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab label="Basic Form" />
          <Tab label="Advanced Form" />
        </Tabs>

        <TabPanel value={tabValue} index={0}>
          <Typography variant="h5" gutterBottom>
            Basic Contact Form
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            A simple form demonstrating basic field types: text, number, textarea, and checkbox.
          </Typography>
          
          <SmartFormBuilder
            formik={basicFormik}
            title=""
            fields={basicFields}
            buttons={basicButtons}
            gridSpacing={3}
            sx={{ mt: 3 }}
          />
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <Typography variant="h5" gutterBottom>
            Advanced User Registration
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            A comprehensive form showcasing all field types including autocomplete with async search,
            date/time pickers, sliders, file uploads, and more.
          </Typography>
          
          <SmartFormBuilder
            formik={advancedFormik}
            title=""
            fields={advancedFields}
            buttons={advancedButtons}
            gridSpacing={3}
            sx={{ mt: 3 }}
          />
        </TabPanel>
      </Paper>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert 
          onClose={() => setSnackbar({ ...snackbar, open: false })} 
          severity="success"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default App;
