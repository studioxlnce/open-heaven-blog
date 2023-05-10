import type { NextApiRequest, NextApiResponse } from "next";

export default function preview(req: NextApiRequest, res: NextApiResponse) {
    console.log("👀: Hola");
    res.setPreviewData({});
    res.writeHead(307, {Location: "/"});
    console.log("👀: Hola");
    res.end();
};