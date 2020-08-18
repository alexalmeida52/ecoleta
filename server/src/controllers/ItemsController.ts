import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
    async index(req: Request, res: Response) {
        const items = await knex('items').select('*');

        const serializedItems = items.map(item => {
            return {   
                id: item.id,
                title: item.title, 
                image_url: `http://localhost:3333/uploads/${item.image}`
            }
        });

        return res.json(serializedItems);
    }

    async show(req: Request, res: Response) {
        const { id } = req.params;

        const item = await knex('items').where('id', id).select('*');

        if(!item) return res.status(400).json({ message: "Item not found"});

        return res.json(item);
    }
};

export default ItemsController;