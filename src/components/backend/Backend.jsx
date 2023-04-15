import React from 'react'
import './../../assets/backend/assets/css/app.min.css'
import './../../assets/backend/assets/css/bootstrap.min.css'
import './../../assets/backend/assets/css/icons.min.css'
import './../../assets/backend/assets/libs/jqvmap/jqvmap.min.css'


//js
//boostrap bundle
import 'bootstrap/dist/js/bootstrap.bundle'
// import simplebar js
import 'simplebar'

// import node-waves
import 'waves/dist/waves'
// import apexchart
import 'react-apexcharts/dist/react-apexcharts'

// jquery vmap

// import 'jqvmap/dist/jquery.vmap'

// jquery vmap usa

// import 'jqvmap/dist/maps/jquery.vmap.usa'

// dashboard init
import './../../assets/backend/assets/js/pages/dashboard.init.js'

// app js
import './../../assets/backend/assets/js/app.js'
import Content from './inc/Content'
import Header from './inc/Header'
import LeftSidebar from './inc/LeftSidebar'
import RightBar from './inc/RightBar'
import Dashboard from './pages/Dashboard'
export default function Backend(){
    return (
        <>
            <Header />
            <LeftSidebar />

            <Content>
                <Dashboard />
            </Content>
            <RightBar />
        </>
    )
}