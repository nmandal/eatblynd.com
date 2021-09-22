import { table } from './utils/airtable.js';

export default async (req, res) => {
    const { name, address, email, phone, message } = req.body;
    try {
        const createdRecords = await table.create([
            { fields: { name, address, email, phone, message } },
        ]);
        const createdRecord = {
            id: createdRecords[0].id,
            fields: createdRecords[0].fields,
        };
        res.statusCode = 200;
        res.json(createdRecord);
    } catch (error) {
        console.error(error);
        res.statusCode = 500;
        res.json({ msg: 'Something went wrong' });
    }
};