import type { NextApiRequest, NextApiResponse } from "next";

export default function exit(req: NextApiRequest, res: NextApiResponse) {
    console.log("😭: Hola");
    res.clearPreviewData();
    res.writeHead(307, {Location: "/"});
    console.log("😭: Hola");
    res.end();
};