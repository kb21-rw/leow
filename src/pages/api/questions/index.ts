// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import questions from '@/data/questions.json'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.status(200).json(questions);
}
