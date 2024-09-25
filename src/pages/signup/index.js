"use client";
import React, { FormEvent, useState } from 'react';
import { Button, Form, Input, InputNumber, message, Select, Upload, UploadProps } from 'antd';
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import loginimage from '../../../assets/logimg-Photoroom.png';
import styles from '../../components/styles.module.css';

const index = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false); // To show loading while logging in
    const [password, setpassword] = useState('');
    const [megerr, setmsgerr] = useState('Please input your Confirm password!')
    // var errormsg = "Please input your Confirm password!"
    const handleEmail = (values) => {
        setpassword(values.target.value)
        // console.log('values.target.value: ', document.getElementById("pass").innerHTML );
    }

    const confirmpass = (e) => {
        const confirmp = e.target.value
        const splitpass = password.split('')
        if (confirmp === password) {
            setmsgerr('Correct Inputs')
            // var errormsg = "Correct Inputs"
        } else {
            // var errormsg = "Please enter correct values"
            console.log(megerr, 'megerr');
            setmsgerr('Please enter correct values')

        }
    }

    // Function that handles form submission
    const onFinish = (values) => {
        console.log('Success:', values);
        setLoading(true); // Set loading state to true

        // Simulate an API call for login
        setTimeout(() => {
            // After login success, redirect to the dashboard
            router.push('/dashboard');
        }, 1000); // Simulate a delay for demonstration
    };
    const handleLogin = () => {
        router.push('/login');
    }
    // Function that handles form submission failure
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <div className={styles.loginContainer}>

                <div>
                    <Image
                        src={loginimage}
                        width={200}
                        height={200}
                        alt="Picture of the author"
                    />

                </div>

                <div className={styles.card}>
                    <div className={styles.formstyle}>
                        <div className='text-black font-bold text-lg'>Sign Up</div>
                        <Form
                            name="basic"
                            layout="vertical"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="User Name"
                                name="UserName"
                                rules={[{ required: true, message: 'Please input your User Name!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Phone Number"
                                name="PhoneNumber"
                                rules={[{ required: true, message: 'Please input your Phone Number!' }]}
                            >
                                <InputNumber style={{ width: '100%' }} />
                            </Form.Item>
                            <Form.Item
                                label="Email"
                                name="Email"
                                rules={[{ required: true, message: 'Please input your Email!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                onChange={handleEmail}
                                id="pass"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item
                                label="Confirm Password"
                                name="Confirm password"
                                onChange={confirmpass}
                                rules={[{ required: true, message: 'Please input your confirm password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item>
                                <Button loading={loading} type="primary" className={styles.submitBtn} htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>

                            <div className='text-center font-bold text-md'>
                                <h1 onClick={handleLogin} className='hover:text-blue-700 cursor-pointer'>Back to Login</h1>
                            </div>
                        </Form>
                    </div>



                    {/* <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className={styles.submitBtn}>Submit</button>
                    </form> */}
                </div>

                <div className='text-black absolute bottom-1 w-full flex justify-around'>
                    <div className='text-lg font-semibold'>
                        <h1>© 2024, made with
                            by
                            Creative Tim
                            for a better web.</h1>
                    </div>
                    <div className='grid grid-cols-3 gap-2 text-center text-lg'>
                        <h2 className='hover:text-blue-700 cursor-pointer font-semibold'>Ponnaiya's cag</h2>
                        <h2 className='hover:text-blue-700 cursor-pointer font-semibold'>Help</h2>
                        <h2 className='hover:text-blue-700 cursor-pointer font-semibold'>Tutorial</h2>
                    </div>

                </div>
            </div>
        </>
    )
}

export default index