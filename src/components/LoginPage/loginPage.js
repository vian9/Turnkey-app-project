import React from "react";
import Image from "next/image";
import styles from "./login.module.css";
import LogImg from "./a.png";
import Link from "next/link";

function Login() {
  return (
    <>
    <div className={styles.page}>
    <div className={styles.section}>
        <div className={styles.contentBx}>
            <div className={styles.formBx}>
                          <div className={styles.logo}>
                              <Image className={styles.image} alt="" src={LogImg} />
                          </div>

                          <h2 className={styles.aa}>Dashboard Kit</h2>
                          <h2 className={styles.ab}>Log In to Dashboard Kit</h2>
                          <h2 className={styles.ac}>Enter your email and password below</h2>
            
              <form>
                <div className={styles.inputBx}>
                  <span>Email</span>
                  <input
                    className={styles.input}
                    type="email"
                    name="Email Address"
                    placeholder="Email"
                    required
                  />
                </div>
                <p>
                  <Link href="/" passHref>
                    <span className={styles.forgot}>Forgot Password?</span>
                  </Link>
                </p>
                <div className={styles.inputBx}>
                  <span>Password</span>
                  <input
                    className={styles.input}
                    type="password"
                    name="Password"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className={styles.inputt}>
                  <botton
                    className={styles.sub}
                    type="submit"
                    value="Log in"
                    name=""
                  >
                    Login
                  </botton>
                </div>
                <div className={styles.end}>
                                  Don't have an account?
                                  <h2 className={styles.si} >Sign Up</h2>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;