import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu } from '../menu/Menu';
import cls from './mobileMenu.module.scss';


export const MobileMenu = () => {
    const path = useLocation()
    const mobileMenu = useRef(null);
    const [isOpenDropMenu, setIsOpenDropMenu] = useState(false);
    
    const toggleMenu = () => {
        setIsOpenDropMenu(prev => !prev);
        document.body.classList.toggle('stop-scroll')
    };

    useEffect(() => {
        setIsOpenDropMenu(false)
        document.body.classList.remove('stop-scroll')
    }, [path])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (mobileMenu.current && !mobileMenu.current.contains(event.target)) {
                setIsOpenDropMenu(false);
                document.body.classList.remove('stop-scroll')
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <nav className={cls.mobileMenu} ref={mobileMenu}>
            <div className={cls.mobileMenu__inner}>
                <div className={`${cls.mobileMenu__burger} ${isOpenDropMenu ? `${cls.open}` : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={`${cls.mobileMenu__dropMenu} ${isOpenDropMenu ? `${cls.open}` : ''}`}>
                    <Menu />
                </div>
            </div>
        </nav>
    );
};

