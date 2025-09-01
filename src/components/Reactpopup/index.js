import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import './index.css'

const ReactPopUp = () => (
 <div className="popup-container">
   <Popup
     trigger={
       <button type="button" className="trigger-button">
        <img src="https://res.cloudinary.com/dfdpixkle/image/upload/v1756688357/SVG_n4or1z.png" alt='info'/>
        What is UMF and MGO?
       </button>
     }
     position="bottom left"
     contentStyle={{
    width: "500px",
    height: "473px",
    borderRadius: "10px",
    padding: "20px",
    zIndex: 9999,
  }}
   >
     <div className='umf'>
        <p className='desk-para-normal'><span className='desk-para-umf'>UMF</span> is the strength and purity rating of Manuka honey.</p>
        <img src='https://res.cloudinary.com/dfdpixkle/image/upload/v1756692315/Frame_1484578524_qgiifu.png' alt='bar'/>
        <p className='desk-para-normal'>The higher the number, the greater the potency and rarity of Manuka honey.</p>
     </div>
     <div className='mgo'>
        <p className='desk-para-normal'><span className='desk-para-umf'>MGO</span> is the key natural compound that gives Manuka honey its special antibacterial strength.</p>
        <img src='https://res.cloudinary.com/dfdpixkle/image/upload/v1756693238/Frame_1484578524_dth7bp.png' alt='bar-icon'/>
        <p className='desk-para-normal'>The higher the number, the higher the antibacterial properties in the honey.</p>
     </div>
     
        <button type='button' className='desk-btn' >Close</button>

   </Popup>
 </div>
)
export default ReactPopUp