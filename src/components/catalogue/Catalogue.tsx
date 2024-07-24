import { useState, useEffect, FC, useRef } from "react";
import css from "./Catalog.module.css";
import chairSvg from '../../svg/chair.svg';
import bedSvg from '../../svg/bed.svg';
import tableSvg from '../../svg/table.svg'
import sofaSvg from '../../svg/sofa.svg';
import mirrroSvg from '../../svg/mirror.svg';
import lampSvg from '../../svg/lamp.svg';
import wardrobeSvg from '../../svg/wardrobe.svg';

export const Catalogue: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const catalogueRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (evt: MouseEvent) => {
        if (catalogueRef.current && !catalogueRef.current.contains(evt.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div ref={catalogueRef} className={`${css.catalogue} ${isOpen ? css.open : ""}`} onClick={toggleMenu}>
            <div className={css.catalogue_content}>
                <span>
                    <i className={`${css.catalogue_icon} ${isOpen ? css.open : ""}`}></i>
                    Catalogue
                </span>
            </div>
            <div className={`${css.dropdown_menu} ${isOpen ? css.open : ""}`}>
                <ul>
                    <li className={css.catalogue_item}>Chair
                        <img src={chairSvg} alt="chair" className={css.catalogue_img} />
                    </li>
                    <li className={css.catalogue_item}>Bed
                        <img src={bedSvg} alt="bed" className={css.catalogue_img} />
                    </li>
                    <li className={css.catalogue_item}>Sofa
                        <img src={sofaSvg} alt="sofa" className={css.catalogue_img} />
                    </li>
                    <li className={css.catalogue_item}>Table
                        <img src={tableSvg} alt="table" className={css.catalogue_img} />
                    </li>
                    <li className={css.catalogue_item}>Wardrobe
                        <img src={wardrobeSvg} alt="wardrobe" className={css.catalogue_img} />
                    </li>
                    <li className={css.catalogue_item}>Lamp
                        <img src={lampSvg} alt="lamp" className={css.catalogue_img} />
                    </li>
                    <li className={css.catalogue_item}>Mirror
                        <img src={mirrroSvg} alt="mirror" className={css.catalogue_img} />
                    </li>
                </ul>
            </div>
        </div>
    );
};