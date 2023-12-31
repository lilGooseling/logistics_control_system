import {useDispatch, useSelector} from "react-redux";
import {TStore} from "../../slices/store";
import {useEffect} from "react";
import {getAllUsersAction} from "../../controllers/UserController";
import {nextPage} from "../../slices/user";
import styles from './users.module.scss'
import UserList from "./usersList/usersList";
import UsersFilter from "./usersFilter/usersFilter";


function Users(): JSX.Element {
    const userState = useSelector((state: TStore) => state.user)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAllUsersAction());
    }, [userState.offset, userState.limit, userState.adaptiveSearch, userState.adaptiveSorting]);

    return <div className={styles.usersPage}>
        <UsersFilter/>
        <UserList/>
    </div>
}

export default Users;
