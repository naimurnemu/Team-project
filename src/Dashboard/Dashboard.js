import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './Dashboard.css'

const Dashboard = () => {

    const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  
  const [admin,setAdmin]=useState(false)
//   const {user,logOut}=useAuth()

//     useEffect(()=>{
//       fetch(`https://powerful-bayou-53286.herokuapp.com/checkedAdmin/${user?.email}`)
//       .then(res=>res.json())
//       .then(data=>{
//         if(data[0].role==="admin"){
//           console.log(data);
//         setAdmin(true)
//         }
        
//       })
//     },[user?.email])


    
    return (
        <div>
          <div>

          
          <div className='navbarDash d-flex justify-content-between'>
          {/* <Link to='#' className='menu-bars'> */}
          {/* </Link> */}
            <FaIcons.FaBars onClick={showSidebar} />
         <div className="d-flex gap-3 me-5">
         {/* <h6 ><Link className="text-white text-decoration-none" to="/">Home</Link></h6>
        <h6><Link to='/' className="text-white text-decoration-none" >  Logout</Link></h6> */}
         
        
         </div>
        </div>
        <nav id="dash-nav" className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbarDash-toggle'>
              {/* <Link to='#' className='menu-bars'>
              </Link> */}
                <AiIcons.AiOutlineClose />
            </li>
           
               <div className="my-5 mx-auto ">
               {!admin && <div>
                <i className="fas fa-shopping-cart text-white me-2 my-4"></i> 
                  {/* <Link  to={`/dashboard/myOrder`} className="text-decoration-none text-white  fw-bold my-4">My order</Link> */}

                    <br/>
                  <i className="fas fa-comment text-white me-2 my-4"></i>
                  {/* <Link to={`/dashboard/review`} className="text-decoration-none text-white fw-bold">Review</Link> */}
                  <br/>
                <i className="fab fa-cc-amazon-pay text-white me-2 my-4"></i> 
                {/* <Link to={`/dashboard/payment`} className="text-decoration-none text-white fw-bold my-4">Payment</Link> */}
                <br/>
                </div>}
            
             {/* {admin &&  <Admin></Admin>} */}
            
              
             <i className="fas fa-sign-in-alt me-2 text-white my-4"></i> 
             {/* <Link to="/"  className="text-decoration-none text-white p-0 border-0 fw-bold my-4">Logout</Link> */}
                  
                  </div>
            
          </ul>
        </nav>
          
        {/* <Outlet /> */}
            
            </div>
        </div>
    );
};

export default Dashboard;