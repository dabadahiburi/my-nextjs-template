import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';
import bcrypt from 'bcryptjs';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, password, name } = req.body;

    try {
      const hashedPassword = bcrypt.hashSync(password, 10);
      const newUser = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          name,
        },
      });
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: 'User registration failed' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default handler;
