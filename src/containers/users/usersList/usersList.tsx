import styles from './usersList.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";
import {TStore} from "../../../slices/store";
import UserCard from "./userCard/userCard";
import {nextPage, setLoading} from "../../../slices/user";

const UserList: React.FC = () => {
    const dispatch = useDispatch();
    const userState = useSelector((state: TStore) => state.user)



    const onScroll = async (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const {scrollTop, scrollHeight, clientHeight} = e.currentTarget;
        const isNearBottom = scrollTop + clientHeight >= scrollHeight - 500;

        if (isNearBottom && !userState.loading) {
            if (userState.users.length < userState.count) {
                dispatch(setLoading(true));
                await dispatch(nextPage());
            }
        }
    }


    return (
        <div className={styles.cardsList} onScroll={onScroll}>
            <ul className={styles.cardsWrap}>
                {userState.users.map(user => <UserCard user={user} key={user.id}/>)}
            </ul>

        </div>
    );
}

export default UserList;
