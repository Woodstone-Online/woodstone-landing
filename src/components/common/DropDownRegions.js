import React from 'react';
import '../../styles/DropDownRegions.scss';

export const DropDownRegions = ({ isOpen }) => {
    return (
        isOpen
            ? (
                <div className="drop-down-regions">
                    <div className="wrapper">
                        <div className="regions-block">
                            <div className="region">
                                <span className="region-title">Тюмень</span>
                                <span className="coming-label">Скоро</span>
                            </div>
                            <div className="region">
                                <span className="region-title">Челябинск</span>
                                <span className="coming-label">Скоро</span>
                            </div>
                            <div className="region">
                                <span className="region-title">Волгоград</span>
                                <span className="coming-label">Скоро</span>
                            </div>
                            <div className="region">
                                <span className="region-title">Омск</span>
                                <span className="coming-label">Скоро</span>
                            </div>
                            <div className="region">
                                <span className="region-title">Новосибирск</span>
                                <span className="coming-label">Скоро</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
            : null
        );
};

export default DropDownRegions;