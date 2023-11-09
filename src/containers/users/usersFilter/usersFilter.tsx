import styles from './usersFilter.module.scss';
import {useEffect, useState} from "react";
import {IUser, IUserStore} from "../../../interfaces/IUser";
import {useDispatch, useSelector} from "react-redux";
import {setQuery, setUserSorting} from "../../../slices/user";
import {TStore} from "../../../slices/store";
import AdaptiveSortingComponent from "../../../components/AdaptiveSorting/adaptiveSortingComponent";

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

        <div className={styles.wrapper}>
            <div className={styles.filter}>
                <h1 className={styles.header}>Поиск</h1>
                <div className={styles.search}>
                    <input type="text" value={search} placeholder="поиск..." className={styles.searchBar} onChange={(e) => dispatch(setSearch(e.target.value))}/>
                </div>
            </div>
            <div className={styles.sortWrap}>
                <h2 className={styles.sort}>Сортировки:</h2>
                <div className={styles.sortItem}>
                    <AdaptiveSortingComponent keyName='id' name='Id' sorting={userState.adaptiveSorting['id']} changeHandle={(key)=>dispatch(setUserSorting(key))}/>
                    <AdaptiveSortingComponent keyName='lastName' name='ФИО' sorting={userState.adaptiveSorting['lastName']} changeHandle={(key)=>dispatch(setUserSorting(key))}/>
                    <AdaptiveSortingComponent keyName='email' name='Почтовый адресс' sorting={userState.adaptiveSorting['email']} changeHandle={(key)=>dispatch(setUserSorting(key))}/>
                </div>
            </div>
        </div>
    );
}

export default UsersFilters;
