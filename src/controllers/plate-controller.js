const sinespService = require('../services/sinesp-service');

const get = async (req, res, next) => {
    try {
        const { plate } = req.params;

           const vehicle = {
                    placa: plate,
                    modelo: 'GOL 1.0',
                    marca: 'VOLKSWAGEN',
                    ano: '2014',
                    cor: 'BRANCA',
                    chassi: '9BWZZZ377VT004251'
                };
        res.status(200).send(vehicle);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    get
};
