import db from "./db";

const search = async (input) => {
    db.forEach(cat => {
        const returnObject = Object.keys(cat).filter(key => {
            const cat = key === input ? key : "";
            return cat;
        });

        return returnObject;
    });
};

export default search;