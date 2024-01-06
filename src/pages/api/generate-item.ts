import Cors from "cors";
import { NextApiRequest, NextApiResponse } from "next";
import { generateRandomItem } from "@/redux/static_data/items/generate";
import { runMiddleware } from "../../helpers/runAPIMiddleware";

const cors = Cors({
  methods: ["POST", "GET", "HEAD"]
});

const clearModFormatting = (item) => {
  for (let i = 0; i < item.mods.length; i++) {
    item.mods[i] = item.mods[i].replaceAll('{', '')
    item.mods[i] = item.mods[i].replaceAll('}', '')
  }
}

/**
 * @swagger
 * /api/generate-item:
 *   get:
 *     operationId: generateItem
 *     title: Generate Random Item
 *     description: generates a random magical item from a base item type (weapons, armour, jewellery, misc).
 *     parameters:
 *       - in: query
 *         name: rarity
 *         description: determines how many mods are applied to an item, in general standard items should have 1 - 2 with exceptionally rare items having 3.
 *         schema:
 *           type: integer
 *       - in: query
 *         name: format
 *         description: enable field formatting. Mods can wrap certain text in "{", "}" to facilitate highlighting keywords such as the damage type or dice used.
 *         schema:
 *           type: boolean
 *           default: false
 *     responses:
 *       200:
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  let item = generateRandomItem({rarity: req.query?.rarity || 1});
  if(req.query?.format !== 'true'){
    clearModFormatting(item)
  }

  res.json({ ...item });
}