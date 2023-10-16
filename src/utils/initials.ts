interface initialsData {
    firstName: string,
    middleName:string,
    lastName: string
}


const initials = <T extends initialsData>(user:T):string =>{
 return `${user.lastName} ${user.firstName.split('')[0]}.${user.middleName.split('')[0]}.`
}

export default initials;