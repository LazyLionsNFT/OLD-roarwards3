import React, {useState} from 'react';
import lion1 from '../../assets/images/lion1.png';
import NavBar from '../NavBar';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import lion2 from '../../assets/images/lion2.png';
import lion3 from '../../assets/images/lion3.png';
import lion4 from '../../assets/images/lion4.png';
import lion5 from '../../assets/images/lion5.png';

const flex = {
   display: 'flex'
  }
const container = {
    width: '86%',
    margin: '66px auto',
    color: 'white'
}

const imgdiv = {
    width: "190px",
    // margin: "10px",
    textAlign: 'center',
    margin: '0px 10px'
}

const imgcircle = {
    borderRadius: '50%',
    width: '72px', /* adjust size as needed */
    height: '72px',
    objectFit: 'cover',
    margin: '0px 10px 14px 10px'
}

const lionimg = {
    width: '180px'
}

const MyCollection = () => {
    const [key, setKey] = useState('home');

    return (
            <div style={container}>
                <div  className=''>
                    <div className='w-100 text-start'>
                        <h4 className='mb-4'>My Collection</h4>
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="mb-3"
                            >
                            <Tab eventKey="home" title="All 12">
                                <div className='d-flex flex-wrap mt-5'>
                                    <div style={imgdiv} >
                                        <img style={lionimg} src={lion2}/>
                                        <span style={{fontSize: '13px', fontWeight:'100'}}>Lazy Lions</span>
                                        <p style={{fontSize: '18px',fontWeight: '700'}} className='font-weight-bold'>#7854</p>
                                    </div>
                                    <div style={imgdiv} >
                                        <img style={lionimg} src={lion3}/>
                                        <span style={{fontSize: '13px', fontWeight:'100'}}>Lazy Lions</span>
                                        <p style={{fontSize: '18px',fontWeight: '700'}} className='font-weight-bold'>#7854</p>
                                    </div>
                                    <div style={imgdiv} >
                                        <img style={lionimg} src={lion4}/>
                                        <span style={{fontSize: '13px', fontWeight:'100'}}>Lazy Lions</span>
                                        <p style={{fontSize: '18px',fontWeight: '700'}} className='font-weight-bold'>#7854</p>
                                    </div>
                                    <div style={imgdiv} >
                                        <img style={lionimg} src={lion5}/>
                                        <span style={{fontSize: '13px', fontWeight:'100'}}>Lazy Lions</span>
                                        <p style={{fontSize: '18px',fontWeight: '700'}} className='font-weight-bold'>#7854</p>
                                    </div>
                                    <div style={imgdiv} >
                                        <img style={lionimg} src={lion4}/>
                                        <span style={{fontSize: '13px', fontWeight:'100'}}>Lazy Lions</span>
                                        <p style={{fontSize: '18px',fontWeight: '700'}} className='font-weight-bold'>#7854</p>
                                    </div>
                                    <div style={imgdiv} >
                                        <img style={lionimg} src={lion5}/>
                                        <span style={{fontSize: '13px', fontWeight:'100'}}>Lazy Lions</span>
                                        <p style={{fontSize: '18px',fontWeight: '700'}} className='font-weight-bold'>#7854</p>
                                    </div>
                                    <div style={imgdiv} >
                                        <img style={lionimg} src={lion5}/>
                                        <span style={{fontSize: '13px', fontWeight:'100'}}>Lazy Lions</span>
                                        <p style={{fontSize: '18px',fontWeight: '700'}} className='font-weight-bold'>#7854</p>
                                    </div>
                                    <div style={imgdiv} >
                                        <img style={lionimg} src={lion3}/>
                                        <span style={{fontSize: '13px', fontWeight:'100'}}>Lazy Lions</span>
                                        <p style={{fontSize: '18px',fontWeight: '700'}} className='font-weight-bold'>#7854</p>
                                    </div>
                                    <div style={imgdiv} >
                                        <img style={lionimg} src={lion2}/>
                                        <span style={{fontSize: '13px', fontWeight:'100'}}>Lazy Lions</span>
                                        <p style={{fontSize: '18px',fontWeight: '700'}} className='font-weight-bold'>#7854</p>
                                    </div>
                                    <div style={imgdiv} >
                                        <img style={lionimg} src={lion5}/>
                                        <span style={{fontSize: '13px', fontWeight:'100'}}>Lazy Lions</span>
                                        <p style={{fontSize: '18px',fontWeight: '700'}} className='font-weight-bold'>#7854</p>
                                    </div>
                                    <div style={imgdiv} >
                                        <img style={lionimg} src={lion4}/>
                                        <span style={{fontSize: '13px', fontWeight:'100'}}>Lazy Lions</span>
                                        <p style={{fontSize: '18px',fontWeight: '700'}} className='font-weight-bold'>#7854</p>
                                    </div>
                                    <div style={imgdiv} >
                                        <img style={lionimg} src={lion2}/>
                                        <span style={{fontSize: '13px', fontWeight:'100'}}>Lazy Lions</span>
                                        <p style={{fontSize: '18px',fontWeight: '700'}} className='font-weight-bold'>#7854</p>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="profile" title="Lazy Lions 3">
                                <div className='d-flex flex-wrap mt-5'>
                                    <div style={imgdiv} >
                                        <img style={lionimg} src={lion5}/>
                                        <span style={{fontSize: '13px', fontWeight:'100'}}>Lazy Lions</span>
                                        <p style={{fontSize: '18px',fontWeight: '700'}} className='font-weight-bold'>#7854</p>
                                    </div>
                                    <div style={imgdiv} >
                                        <img style={lionimg} src={lion4}/>
                                        <span style={{fontSize: '13px', fontWeight:'100'}}>Lazy Lions</span>
                                        <p style={{fontSize: '18px',fontWeight: '700'}} className='font-weight-bold'>#7854</p>
                                    </div>
                                    <div style={imgdiv} >
                                        <img style={lionimg} src={lion2}/>
                                        <span style={{fontSize: '13px', fontWeight:'100'}}>Lazy Lions</span>
                                        <p style={{fontSize: '18px',fontWeight: '700'}} className='font-weight-bold'>#7854</p>
                                    </div>
                                </div>    
                            </Tab>
                            <Tab eventKey="Clubs" title="Lazy Clubs 1"> 
                                <div style={imgdiv} >
                                        <img style={lionimg} src={lion2}/>
                                        <span style={{fontSize: '13px', fontWeight:'100'}}>Lazy Lions</span>
                                        <p style={{fontSize: '18px',fontWeight: '700'}} className='font-weight-bold'>#7854</p>
                                </div>
                            </Tab>
                            <Tab eventKey="Drinks" title="Lazy Drinks 0">
                                
                            </Tab>
                            <Tab eventKey="Bungalows" title="Lazy Lions Bungalows 0">
                                
                            </Tab>
                        </Tabs>
                  
                    </div>
                </div>
            </div>
    );
};

export default MyCollection;