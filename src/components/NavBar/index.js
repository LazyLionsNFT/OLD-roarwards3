import { Button } from 'bootstrap';
import React, {useState} from 'react';
import logo from '../../assets/images/logo.png'
import pencil from '../../assets/images/icons/pencil.png'
import share from '../../assets/images/icons/share.png'
import { NavLink } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import ConnectionModal from '../ConnectionModal/index'

const navbar = {
    backgroundColor: 'transparent',
    border: 'none',
    boxShadow: 'none',
    display: 'flex',
    color: 'white',
    paddingTop: '15px',
    fontSize: '16px'
  }
  
  const navbar_ul = {
    listStyle: 'none',
    display: 'flex',
    marginTop: 'unset',
    padding: '30px 0px',
    marginBottom: '0px',
    alignItems: 'center'
  }
  
  const navbarRight = {
    marginRight: '110px'
  }

  const marginRight = {
    marginRight: '30px'
  }

  const rightContent = {
    width: '90%',
    marginLeft: 'auto',
    color: '#fff'
}

const buttonstyle = {
    border: '1px solid #FAFAFA',
    borderRadius: '5px',
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    marginRight: '10px'
}

const NavBar = (props) => {
    const [show, setShow] = useState(false);

    return (
        <div className='flex-row justify-content-center' style={navbar}>
            <div className='w-50'>
                <img className='mt-3' src={logo}/>
            </div>
            <div className='w-50'>
                <div style={rightContent}>
                    <ul style={navbar_ul}>
                        <li style={marginRight}>
                            <NavLink
                                to="/"
                                style={{color: 'white', textDecoration: 'none'}}>
                                ROARwards
                            </NavLink>
                        </li>
                        <li style={marginRight}>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">
                                Member
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown></li>
                        <li style={marginRight}>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">
                                More
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown></li>
                        <li style={navbarRight}>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">
                                Buy
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown></li>

                            <button onClick={() => setShow(true)} className='ml-5' style={buttonstyle}>
                                <img src={pencil} alt="icon" />
                            </button>
                            <button style={buttonstyle}>
                                <img src={share} alt="icon" />
                            </button>
                    </ul>
                </div>
            </div>

            <ConnectionModal userInfo={props.userInfo} open={show} close={() => setShow(false)}/>
        </div>
    );
};

export default NavBar;