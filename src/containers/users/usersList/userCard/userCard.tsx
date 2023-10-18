import {IUser} from "../../../../interfaces/IUser";
import styles from './userCard.module.scss'
import initials from "../../../../utils/initials";
import isMale from "../../../../utils/isMale";
import  CN from "classnames";

interface IUSerProps {
    user: IUser;
}


const UserCard: React.FC<IUSerProps> = ({user}) => {



    return (
        <div className={styles.singleCard}>
            <div className={CN(styles.cardsImage, {
                [styles.isMale]: isMale(user)
            })}/>
            <div className={styles.cardsBody}>
                <div className={styles.cardsName}>
                    {initials(user)}
                </div>
                <div className={styles.cardsEmail}>
                    {user.email}
                </div>
                <hr className={styles.cardsLine}/>
                <div className={styles.cardsId}>
                    ID: {user.id}
                </div>
            </div>
        </div>
    );
}

export default UserCard;
