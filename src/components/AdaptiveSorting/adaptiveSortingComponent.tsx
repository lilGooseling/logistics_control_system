import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import styles from './sorting.module.scss';
import {IAdaptiveSortEnum} from "../../interfaces/IAdaptive";
import CN from "classnames";

interface IAdaptiveSortingComponent {
    keyName: string,
    name: string,
    sorting: IAdaptiveSortEnum | undefined,
    changeHandle: (key: string) => void;
}

const AdaptiveSortingComponent: React.FC<IAdaptiveSortingComponent> = ({keyName, name, sorting, changeHandle}) => {


    return (
        <div className={styles.wrapper} onClick={() => changeHandle(keyName)}>
            <span>{name}</span>
            <div className={CN(styles.icon, {
                [styles.desc]: sorting === IAdaptiveSortEnum.DESC,
                [styles.none]: sorting === IAdaptiveSortEnum.NONE || !sorting,
            })}>
                <ArrowDropDownIcon/>
            </div>
        </div>
    );
}

export default AdaptiveSortingComponent;