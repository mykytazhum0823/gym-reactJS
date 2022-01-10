import React from 'react';
import '../../assets/css/app.scoped.css';
import Sidebar  from './sidebar';

const CustomerLayout = ({children})=>{
    return(
        <div className='layout-default'>
            <div className="mdk-header-layout js-mdk-header-layout">
                <div
                    className="mdk-drawer-layout js-mdk-drawer-layout"
                    data-push
                    data-responsive-width="992px">
                    {children}
                    <Sidebar/> 
                </div>     
            </div>
        </div>
    );
}

export default CustomerLayout;