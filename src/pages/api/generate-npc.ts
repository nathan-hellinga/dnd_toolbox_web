import Cors from "cors";
import { NextApiRequest, NextApiResponse } from "next";
import { generateNPC } from "@/redux/static_data/npcs/generate";
import { runMiddleware } from "../../helpers/runAPIMiddleware";
import { RaceName } from "../../redux/static_data/npcs/race";

const cors = Cors({
  methods: ["POST", "GET", "HEAD"]
});

/**
 * @swagger
 * /api/generate-npc:
 *   get:
 *     title: Generate Random NPC
 *     description: generates a random npc. The race can be defined or left blank for a random race.
 *     parameters:
 *       - in: query
 *         name: race
 *         description: if provided, the generated NPC will be this race
 *         schema:
 *           $ref: '#/components/schemas/RaceName'
 *     responses:
 *       200:
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NPC'

 */
export default async function handler(
  req: NextApiRequest & { query: { race?: RaceName } },
  res: NextApiResponse
) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  let npc = generateNPC({
    race: req.query?.race
  });


  res.json({ ...npc });
}