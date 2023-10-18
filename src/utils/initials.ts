interface initialsData {
    firstName: string,
    middleName: string,
    lastName: string,
    id: number
}


const initials = <T extends initialsData>(user: T): string => {
    const firstName = !!user.firstName.trim() ? `${user.firstName.split('')[0]}. ` : ' ';
    const middleName = !!user.middleName.trim() ? `${user.middleName.split('')[0]}.` : '';
    const lastName = !!user.lastName.trim() ? user.lastName : 'Неизветных';
    return `${lastName} ${firstName}${middleName}`;
}

export default initials;