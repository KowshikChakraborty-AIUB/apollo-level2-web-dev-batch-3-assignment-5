import { z } from 'zod';

// Regex for password: at least one letter, one number, one special character, 6-20 characters
// const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/;

const loginValidationSchema = z.object({
    email: z.string()
        .email('Please enter a valid email address.')
        .min(1, 'Email is required.'),

    password: z.string()
        .min(1, 'Password is required.'),
});

//.regex(passwordRegex, 'Password must be between 6-20 characters, include at least one letter, one number, and one special character.')

export default loginValidationSchema;