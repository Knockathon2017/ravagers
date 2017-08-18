export default class Index {

    constructor() { }

    pullRequest = (req, res, next) => {
        const body = req.body;
        console.log(JSON.stringify(body));

        res.status(200).json(body);

    }

}