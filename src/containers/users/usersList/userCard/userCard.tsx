import {IUser} from "../../../../interfaces/IUser";
import styles from './userCard.module.scss'

interface IUSerProps {
    user: IUser;
}


const UserCard: React.FC<IUSerProps> = ({user}) => {

    return (
        <div className={styles.singleCard}>
            <div className={styles.cardsImage}/>
            <div className={styles.cardsBody}>
                <div className={styles.cardsName}>
                    {user.lastName}
                    {user.firstName}
                    {user.middleName}
                </div>
                <div className={styles.cardsEmail}>
                    {user.email}
                </div>
                <div className={styles.cardsId}>
                    {user.id}
                </div>
            </div>
        </div>
    );
}

export default UserCard;
