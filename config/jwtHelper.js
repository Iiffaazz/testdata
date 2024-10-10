import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
    return jwt.sign(
        { email: user.email, id: user.id },
        process.env.ENCRYPTION_KEY,
        { expiresIn: '24h' } // token kadaluarsa setelah 1 jam
    );
};

export const verifyToken = (token) => {
    return jwt.verify(token, process.env.ENCRYPTION_KEY);
};
