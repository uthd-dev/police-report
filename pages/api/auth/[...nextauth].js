import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const opts = {
    providers: [
        Providers.Twitch({
            clientId: process.env.TWITCH_CLIENT_ID,
            clientSecret: process.env.TWITCH_CLIENT_SECRET,
        })
    ],
    database: process.env.MONGODB_URI,
}

export default (req, res) => NextAuth(req, res, options);