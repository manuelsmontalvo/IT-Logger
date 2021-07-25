const db = require('../config/db');
const Tech = require('../modals/tech');
const Log = require('../modals/log');

const main = async () => {
    const techs = [
        {
            firstName: 'John',
            lastName: 'Doe',
        },
        {
            firstName: 'Sam',
            lastName: 'Smith',
        },
        {
            firstName: 'Sara',
            lastName: 'Wilson',
        },
        {
            firstName: 'Manuel',
            lastName: 'Montalvo',
        },
    ];
    const logs = [
        {
            tech: 'Sam Smith',
            message: 'Changed network card in server 008',
            attention: false,
            date: '2021-07-25T03:38:38.893Z',
        },
        {
            tech: 'John Doe',
            message: 'Fixed hard drive on workstation 002',
            attention: false,
            date: '2019-05-31T16:18:04.245Z',
        },
        {
            tech: 'Sara Wilson',
            message: 'Workstation 026 is up and running',
            attention: false,
            date: '2019-05-31T19:57:35.544Z',
        },
        {
            tech: 'Manuel Montalvo',
            message: 'Test Test',
            attention: true,
            date: '2020-05-31T19:57:35.544Z',
        },
    ];
    await Tech.insertMany(techs);
    console.log('Techs Created!');
    await Log.insertMany(logs);
    console.log('Logs Created!');
};
const run = async () => {
    await main();
    db.close();
};

run();
