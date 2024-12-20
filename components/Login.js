import Link from "next/link";
import styles from '../styles/Login.module.css';
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';

import { useDispatch, useSelector } from "react-redux";
import { login, logout } from '../reducers/user';

import SignUp from "./SignUp";
import SignIn from "./SignIn";

function Login() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen1, setIsModalOpen1] = useState(false);


    //MODAL DU SIGNUP
      const showModal = () => {
        setIsModalOpen(true);
      };
      const handleOk = () => {
        setIsModalOpen(false);
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };


    //MODAL DU SIGNIN  
      const showModal1 = () => {
        setIsModalOpen1(true);
      };
      const handleOk1 = () => {
        setIsModalOpen1(false);
      };
      const handleCancel1 = () => {
        setIsModalOpen1(false);
      };

    


return(
    <div className={styles.divLogin}>
        <div className={styles.divGauche}>
            <Image src="/ImageGauche.png" width="1000px" height="1000px" className={styles.imageGauche}></Image>
        </div>
        <div className={styles.divDroite}>
            <Image src="/twitter.png" alt="logo" width="60px" height="60px" className={styles.logoTwitter}/>
            <h2>See what's happening</h2>
            <h3>Join Hackatweet today.</h3>
            <Button onClick={showModal}>Sign Up</Button>
            <Modal open={isModalOpen} footer={null} onCancel={handleOk}>
                <SignUp/>
            </Modal>
            <p>Already have an account ?</p>
            <Button onClick={showModal1}>Sign In</Button>
            <Modal open={isModalOpen1} footer={null} onCancel={handleOk1} >
                <SignIn/>
            </Modal>
        </div>


    </div>
)
}

export default Login;