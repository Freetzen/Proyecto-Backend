const selectDB = process.env.DBELECTION

export const getManagerMessage = async() =>{
    const modelMenssage = selectDB === 1 ?await import('./MongoDB/models/Message') : await import('./Postgresql/models/Message')
    return modelMenssage
}

export const getManagerProducts = async() =>{
    const modelProduct = selectDB === 1 ?await import('./MongoDB/models/Product') : await import('./Postgresql/models/Product')
    return modelProduct
}