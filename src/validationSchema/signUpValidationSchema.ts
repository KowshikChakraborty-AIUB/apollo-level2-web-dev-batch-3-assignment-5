import { z } from 'zod';

// Regex for password: at least one letter, one number, one special character, 6-20 characters
// const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/;

const signUpValidationSchema = z.object({
    name: z.string()
        .min(1, 'Name is required')
        .max(100, 'Name should not be longer than 100 characters'),

    email: z.string()
        .email('Please enter a valid email address.')
        .min(1, 'Email is required.'),

    password: z.string()
        .min(1, 'Password is required.'),

    phone: z.string()
        .min(11, 'Phone number should be at least 11 characters')
        .max(15, 'Phone number should be no more than 15 characters')
        .regex(/^[0-9]+$/, 'Phone number must contain only digits'),

    address: z.string()
        .min(1, 'Address is required')
        .max(255, 'Address should not be longer than 255 characters'),
        
    role: z.enum(['user', 'admin']),

});

//.regex(passwordRegex, 'Password must be between 6-20 characters, include at least one letter, one number, and one special character.')

export default signUpValidationSchema;