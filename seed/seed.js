const db = require('../db/connection');
const Log = require('../modals/log');
const Tech = require('../modals/tech');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
    const tech1 = new Tech({ firstName: 'John', lastName: 'Doe', logs: [] });
    const tech2 = new Tech({ firstName: 'Sam', lastName: 'Smith', logs: [] });
    const tech3 = new Tech({ firstName: 'Sara', lastName: 'Wilson', logs: [] });

    const logs = [
        {
            message: 'Changed network card in server 007',
            attention: false,
            tech: tech2,
        },
        {
            message: 'Fixed hard drive on workstation 002',
            attention: false,
            tech: tech1,
        },
        {
            message: '1122 wireless down',
            attention: true,
            tech: tech3,
        },
        {
            message: 'Workstation 026 is up and running',
            attention: false,
            tech: tech3,
        },
    ];

    await Log.insertMany(logs);
    console.log('Created Logs!');

    tech1.logs = await Log.find({ tech: tech1 });
    await tech1.save();
    tech2.logs = await Log.find({ tech: tech2 });
    await tech2.save();
    tech3.logs = await Log.find({ tech: tech3 });
    await tech3.save();
};

const run = async () => {
    await main();
    db.close();
};

run();
