// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import questions from '@/data/questions.json'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query;

  const question = questions.find((question) => question?.question_number === Number(id));

  if (!question) {
    return res.status(404).json({ message: `Question with id ${id} not found` });
  }
  res.status(200).json(question);
}
