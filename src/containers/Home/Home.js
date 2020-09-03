import React from 'react'
import Card from '../../components/UI/Card/Card'
import './Home.css';
import RecentPost from '../RecentPost/RecentPost';
import SideBar from '../../components/SideBar/SideBar';

const Home = () => {
  const galleryHeight=450;
  const galleryStyle={
    height:galleryHeight+'px',
    overflow:'hidden'
  }

  const sideBarImageHeight={
    height:galleryHeight/3+'px'
  }
    return (
        <div>
         <Card style={{marginBottom:'20px'}}>
           <div className="HomePostContainer" style={galleryStyle}>
           <section style={{width:'70%'}}>
              <div className="PopularPost">
                <img src="https://1.bp.blogspot.com/-q2G-P44QbXs/V9_PE1fnC-I/AAAAAAAAD5A/5zt-KGj_SpUZSQwI6DA5ldLYQfC3LvG8wCLcB/s1600/5.jpg" />
              </div>
            </section>
            <section style={{width:'30%'}} className="SideWrapper">
             <div style={sideBarImageHeight}>
             <img src="https://3.bp.blogspot.com/-zlQO0zfYQd8/V9_M2m9Px-I/AAAAAAAAD4o/qucehvSfM-4210-UQCaFPr6hs7NvJdLHQCPcB/s1600/2-1.jpg" />
             </div>
             <div style={sideBarImageHeight}>
             <img src="https://3.bp.blogspot.com/-5w_tj_eAKm4/V9_M2jukj4I/AAAAAAAAD4k/uP-dwlABXso1NXG63jzmsKqE0EdD2MOlgCPcB/s1600/3-1.jpg" />
             </div>
             <div style={sideBarImageHeight}>
             <img src="https://2.bp.blogspot.com/-8hLzRELoTM4/Vyc4oa1050I/AAAAAAAADVc/-vQQbmbY1owUgAb_mGNRN_X9kdpSPjLMwCLcB/s1600/asa%2B%25281%2529.jpg" />
             </div>
            </section>
           </div>
          
         </Card>
         <section className="HomeContainer">
          <RecentPost/>
          <SideBar/>               
         </section>
        </div>
    )
}

export default Home;
