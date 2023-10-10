import {useDispatch, useSelector} from "react-redux";
import {TStore} from "../../slices/store";
import {useEffect} from "react";
import {getAllUsersAction} from "../../controllers/UserController";
import {nextPage} from "../../slices/user";
import styles from './users.module.scss'


function Users(): JSX.Element {
    const userState = useSelector((state: TStore) => state.user)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsersAction());
    }, [userState.offset, userState.limit, userState.query]);

    return (
        <div className={styles.cardsList}>
            <ul className={styles.cardsWrap}>
                {userState.users.map(user => <div key={user.id}>
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

                </div>)}
            </ul>

            <div onClick={() => {
                dispatch(nextPage());
            }}>ЗАГРУЗИ ЕСЧО
            </div>
        </div>
    );
}

export default Users;
