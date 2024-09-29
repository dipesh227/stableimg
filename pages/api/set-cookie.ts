import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Set-Cookie", [
    `myCookie=value; SameSite=Strict; Secure; HttpOnly; Path=/`,
  ]);
  res.status(200).json({ message: "Cookie set" });
}
