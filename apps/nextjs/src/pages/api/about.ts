import crypto from "crypto";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json({
    time: new Date(),
    id: crypto.randomUUID(),
  });
};

export default handler;
