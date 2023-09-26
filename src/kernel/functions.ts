import bcryptjs from 'bcryptjs';

export const hash = async (password: string) => {
    return await new Promise<string>((resolve, reject) => {
        bcryptjs.hash(password, 10, (error, hash) => {
            if(error) reject(error);
            resolve(hash);
        });
    });
};

export const compare = async (password: string, hashedPassword: string): Promise<boolean> => {
    return await new Promise((resolve, reject) => {
        bcryptjs.compare(password, hashedPassword, (error, hash) => {
            if(error) reject(error);
            resolve(hash);
        });
    });
};