/** ----------------------------------------
    Models
 ---------------------------------------- */

function model(model) {
    let _models = [];

    Object.defineProperty(model, '_models', {
        get: () => {
            return _models;
        },
        set: model => { 
            const index = _models.filter(item => item.model === model.id);
            if(index) _models.splice(index, 1);
            _models.push(model);
        }
    }); 
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default model;