import React from 'react';
import Card from '../../components/UI/Card/Card';

const RecentPost = () => {
    return (
            <div style={{width:'70%'}}>
            <Card style={{marginBottom:'20px'}}>
              <div class="HomeImageWrapper">
                <img src="https://2.bp.blogspot.com/-ZOY5OAvnKj0/V9_M3_TVTLI/AAAAAAAAD40/UQl4rIoqgi42zaeq0yR_y1gnnchZFxupQCLcB/s1600/3-3.jpg" />
              </div> 
              <div style={{textAlign:"center"}}>
                  <span className="BlogCategory">Featured</span>
                      <h1 className="PostTitle">Fitness Mantra To Live Fit Life</h1>
                  <span className="PostedBy">posted on Aug 22,2020 by Surya</span>
                  <p className="PostParagraph">Neque Cursus Elementum Gravida Faucibus FamesPurus Convallis nascetur diam torquent sit 
                    id adipiscing in netus praesent etiam enim nec massa fusce orci nam potenti hac tortor montes placerat 
                    tortor natoque ante volutpat Class class platea hymena...</p>
                  <button>Read more</button>
              </div>     
            </Card>
            <Card style={{marginBottom:'20px'}}>
            <div class="HomeImageWrapper">
                <img src="https://1.bp.blogspot.com/-uUyRrF_pZzI/V9_OnN0WMPI/AAAAAAAAD48/GDN9pK1mnuwJvYdO4SoCJ38adB0sMzmLQCLcB/s1600/Special-1.jpg" />
              </div>      
            </Card>
           </div>         
    )
}

export default RecentPost;
