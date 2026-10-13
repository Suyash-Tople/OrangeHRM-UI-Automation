import 'dotenv/config';

function required(name: string, fallback?:string): string {
    const value = process.env[name] ?? fallback;

    if(!value){
        throw new Error(`Missing environment variable: ${name}`);
    }

    return value;
}

export const env = {
    baseURL: required(
        'Base_URL',
        'https://opensource-demo-orangehrmlive.com'
    ),
    username: required('ORANGE_USERNAME'),
    password: required('ORANGE_PASSWORD')
};