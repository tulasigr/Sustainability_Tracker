const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(cors({ origin: 'http://localhost:4200', methods: ['GET', 'POST'] }));
app.use(express.json());

const DATA_FILE = 'data.json';

// ✅ GET: Fetch sustainability actions
app.get('/api/actions', (req, res) => {
    fs.readFile(DATA_FILE, (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read data' });
        }
        res.json(JSON.parse(data));
    });
});

// ✅ POST: Add new sustainability action
app.post('/api/actions', (req, res) => {
    const { action, date, points } = req.body;

    if (!action || !date || points === undefined) {
        return res.status(400).json({ error: 'Invalid request body' });
    }

    fs.readFile(DATA_FILE, (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read data' });
        }

        const actions = JSON.parse(data);
        const newAction = {
            id: actions.length ? actions[actions.length - 1].id + 1 : 1,
            action,
            date,
            points
        };

        actions.push(newAction);

        fs.writeFile(DATA_FILE, JSON.stringify(actions, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to save data' });
            }
            res.json({
                message: 'Action added successfully!',
                action: {
                    id: newAction.id,
                    action: newAction.action,
                    date: newAction.date,
                    points: newAction.points
                }
            });
        });
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
