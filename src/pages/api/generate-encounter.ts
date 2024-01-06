import Cors from "cors";
import { NextApiRequest, NextApiResponse } from "next";
import { generateEncounter } from "@/redux/static_data/monsters/generateEncounters";
import { runMiddleware } from "../../helpers/runAPIMiddleware";

const cors = Cors({
  methods: ["POST", "GET", "HEAD"]
});

/**
 * @swagger
 * /api/generate-encounter:
 *   get:
 *     operationId: generateEncounter
 *     title: Generate Random Encounter
 *     description: generates a random combat encounter with difficulty scaled to the party size and level
 *     parameters:
 *       - in: query
 *         name: players
 *         description: number of players in the party
 *         schema:
 *           type: integer
 *           default: 4
 *       - in: query
 *         name: level
 *         description: level of the party
 *         schema:
 *           type: integer
 *           default: 2
 *       - in: query
 *         name: difficulty
 *         description: difficulty scaling. increasing this number above 1 provides additional difficulty and below makes it easier. for example 1.5 would be quite hard and 0.5 would be very easy. Larger difficulty scales could be used if for example the party is being helped by an NPC.
 *         schema:
 *           type: number
 *           default: 1
 *     responses:
 *       200:
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Encounter'

 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  let encounter = generateEncounter({
    num_players: req.query.players || 4,
    level: req.query.level || 2,
    difficulty: req.query.difficulty || 1,
    lowVariance: true // having many unique enemy types makes the api response quite long. This limits that
  })


  res.json({ ...encounter });
}