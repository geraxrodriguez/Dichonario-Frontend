import React from 'react'
import styles from '../styles/Login.module.css'

const LoginPage = () => {
    return (
        <>
            <section class={styles.prompt}>
                <h3 className={styles.dichonarioHeader}>Dichonario</h3>
                <h1 className={styles.signInHeader}>Sign in</h1>

                <form action="/login/password" method="post">
                    <section>
                        <label for="username">Username</label>
                        <input id="username" name="username" type="text" autocomplete="username" required autofocus />
                    </section>
                    <section>
                        <label for="current-password">Password</label>
                        <input id="current-password" name="password" type="password" autocomplete="current-password" required />
                    </section>
                    <button className={styles.signInButton} type="submit">Sign in</button>
                </form>

                <hr />
                <p class="help">Don't have an account? <a href="/signup">Sign up</a></p>
            </section>
            {/* <footer class="info">
                <p>Created by <a href="https://www.jaredhanson.me">Jared Hanson</a></p>
                <p>Part of <a href="https://todomvc.com">TodoMVC</a></p>
                <p>Authentication powered by <a href="https://www.passportjs.org">Passport</a></p>
            </footer> */}
        </>
    )
}

export default LoginPage
