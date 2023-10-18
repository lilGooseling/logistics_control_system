interface avatarsData {
    middleName:string,
}


const isMale = <T extends avatarsData>(user:T):boolean =>{
    return user.middleName.slice(-1) === 'а'
}

export default isMale;