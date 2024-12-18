import Link from "next/link";
import styles from '../styles/Login.module.css';
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';

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
        <Image src="/twitter.png" alt="logo" width="60px" height="60px" className={styles.logoTwitter}/>
        <h2>See what's happening</h2>
        <h3>Join Hackatweet today.</h3>
        <Button onClick={showModal}>Sign Up</Button>
        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <SignUp/>
        </Modal>
        <p>Already have an account ?</p>
        <Button onClick={showModal1}>Sign In</Button>
        <Modal open={isModalOpen1} onOk={handleOk1} onCancel={handleCancel1}>
            <SignIn/>
        </Modal>

    </div>
)
}

export default Login;