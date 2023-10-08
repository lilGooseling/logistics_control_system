import {FormError}                             from "../../interfaces/IAuth";
import {useState}                              from "react";
import {useDispatch, useSelector}              from "react-redux";
import {login}                                 from "../../controllers/Auth";
import Loader                                  from "../../components/Loader";
import {TStore}                                        from "../../slices/store";
import {Button, IconButton, InputAdornment, TextField} from "@material-ui/core";
import generateFormError                               from "../../utils/formError";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import styles from './login.module.scss'


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<FormError[]>();
    const [showPass, setShowPass] = useState(false);
    const { loading, message } = useSelector((state: TStore) => state.auth);
    const dispatch = useDispatch();

    const onLoginHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        if (email && password) {
            let errors = await dispatch(login(email, password)) as unknown as FormError[];

            if (errors) {
                setErrors(errors);
            }
        }
    }
    return <div className={styles.wrapper}>
        <div>
            <Loader loading={loading} content='Входим в систему'/>

            <div className={styles.image}/>

            {/*<p >
            Войти в систему
        </p>*/}
        </div>

        <div>
            <form className={styles.form} onSubmit={onLoginHandler}>

                {/*<p className={styles.mail}>
                    Почта
                </p>*/}
                <TextField className={styles.email}
                           id='email'
                           label ='E-mail'
                           onChange={(event) => setEmail(event.target.value)}
                           value={email}
                           type='email'
                           disabled={loading}
                           {...generateFormError('email', errors)}

                />

                {/*<p className={styles.password}>
                    Пароль
                </p>
*/}
                <TextField className={styles.pass}
                           id='password'
                           label='Пароль'
                           onChange={(event) => setPassword(event.target.value)}
                           value={password}
                           type={showPass ? 'text' : 'password'}
                           disabled={loading}
                           size='medium'
                           {...generateFormError('password', errors)}
                           InputProps={{
                               endAdornment: (
                                   <InputAdornment position="end">
                                       <IconButton
                                           aria-label="toggle password visibility"
                                           onClick={() => setShowPass(!showPass)}
                                       >
                                           {showPass ? <Visibility/> : <VisibilityOff/>}
                                       </IconButton>
                                   </InputAdornment>
                               )
                           }}
                />

                <p className={styles.question}>
                    Забыли пароль?
                </p>

                <Button className={styles.button}
                        color="primary"
                        variant="contained"
                        size="large"
                        disabled={!email || !password}
                        type='submit'
                >
                    Войти
                </Button>
            </form>
        </div>

    </div>

}

export default Login;
