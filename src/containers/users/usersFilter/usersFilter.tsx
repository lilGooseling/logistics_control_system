import styles from './usersFilter.module.scss';
import {useEffect, useState} from "react";
import {IUser, IUserStore} from "../../../interfaces/IUser";
import {useDispatch, useSelector} from "react-redux";
import {setQuery} from "../../../slices/user";
import {TStore} from "../../../slices/store";

const UsersFilters: React.FC = () => {
    const dispatch = useDispatch();
    const userState = useSelector((state: TStore) => state.user)
    const [search, setSearch] = useState("");

    useEffect(()=>{
        realSetSearch();
    },[search]);

    const realSetSearch = () => {
        dispatch(setQuery(search));
    }


    return (
        <div className={styles.filter}>
            <h1 className={styles.header}>Поиск</h1>
            <div className={styles.search}>
                <input type="text" value={search} placeholder="поиск..." className={styles.searchBar} onChange={(e) => dispatch(setSearch(e.target.value))}/>
            </div>
        </div>
    );
}

export default UsersFilters;
