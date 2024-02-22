import React, { useState, useCallback, useEffect, useRef } from 'react';

export default function App() {
    const [length, setLength] = useState(8);
    const [numallowed, setNumallowed] = useState(false);
    const [char, setChar] = useState(false);
    const [password, setPassword] = useState("");

    // useRef hook          

    const passwordRef = useRef(null)

    const passwordGenerator = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwx"

        if (numallowed) { str += "0123456789" }
        if (char) { str += "!@#$%^&*_-+=[]{}~`" }
        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char)
        }
        setPassword(pass);


    }, [length, numallowed, char, setPassword])

    const copyPasswordToClipBoard = useCallback(() => {
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, 999);
        window.navigator.clipboard.writeText(password);
    }, [password])




    useEffect(() => {
        passwordGenerator()
    }, [length, numallowed, char, passwordGenerator])
    return (
        <>

            <div className='w-full max-w-md mx-auto shadow-md rounded-xl px-4 my-8 text-orange-500 bg-gray-700  text-center'>
                <h1 className=' text-xl text-center font-bold mt-8 mb-5 my-3'>Password generator </h1>
                <div className='flex shadow-md rounded-lg overflow-hidden mb-5'>
                    <input
                        type="text"
                        value={password}
                        className='outline-none w-full py-1 px-3 rounded-lg '
                        placeholder='Password'
                        ref={passwordRef} />
                    <button onClick={copyPasswordToClipBoard()}
                        className='outline-none bg-blue-700 text-white px-3 py-1 rounded-xl ml-2 '
                    >Copy</button>
                </div>
                <div className='flex text-sm gap-x-2'>
                    <div className='flex items-center gap-x-1 mb-3'>
                        <input
                            type='range'
                            min={6}
                            max={100}
                            value={length}
                            className='cursor-pointer'
                            onChange={(e) => { setLength(e.target.value) }}
                        />
                        <label>Length: {length}</label>
                    </div>
                    <div className='flex items-center gap-x-1 mb-3'>
                        <input
                            type='checkbox'
                            defaultChecked={numallowed}
                            id='numInput'
                            onChange={() => {
                                setChar((prev) => !prev);
                            }}
                        />
                        <label>Number</label>

                    </div>
                    <div className='flex items-center gap-x-1 mb-3'>
                        <input
                            type='checkbox'
                            defaultChecked={char}
                            id='numInput'
                            onChange={() => {
                                setNumallowed((prev) => !prev);
                            }}
                        />
                        <label>Character</label>

                    </div>
                </div>

            </div>
        </>
    );
}

