import styles from './usersList.module.scss'
import {useSelector} from "react-redux";
import {TStore} from "../../../slices/store";
import UserCard from "./userCard/userCard";

const UserList: React.FC = () => {

    const userState = useSelector((state: TStore) => state.user)

    return (
        <div className={styles.cardsList}>
            <ul className={styles.cardsWrap}>
                {userState.users.map(user => <UserCard user={user} key={user.id}/>)}
            </ul>

        </div>
    );
}

export default UserList;
