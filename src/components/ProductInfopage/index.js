import {Component} from 'react'
import Header from '../Header'
import ReactPopUp from '../Reactpopup'
import './index.css'

class ProductInfo extends Component{
  render(){
    return (
      <div className='desk-home'>
        <Header/>
        <div className='desk-main'>
          <div >
          <div className='product-display'>
            <img src="https://res.cloudinary.com/dfdpixkle/image/upload/v1756668675/Button_-_Previous_slide_SVG_kmyoqi.png" alt='previous-icon'/>
            <img src='https://res.cloudinary.com/dfdpixkle/image/upload/v1756668997/Background_ejngbt.svg' alt='product' className='product'/>
            <img src='https://res.cloudinary.com/dfdpixkle/image/upload/v1756668629/Button_-_Next_slide_SVG_yh4kpb.png' alt='next-icon'/>
          </div>
          <div className='product-info'>
            <img src='https://res.cloudinary.com/dfdpixkle/image/upload/v1756670197/Item_Link_x20wtx.png' alt='img1' className='p-img'/>
            <img src='https://res.cloudinary.com/dfdpixkle/image/upload/v1756670160/Item_Link_wvsi39.png' alt="img2" className='p-img'/>
            <img src="https://res.cloudinary.com/dfdpixkle/image/upload/v1756670117/Item_Link_dllcdx.png" alt='img3' className='p-img3'/>
            <img src='https://res.cloudinary.com/dfdpixkle/image/upload/v1756670095/Item_Link_se3mwl.png' alt='img4' className='p-img'/>
            <img src='https://res.cloudinary.com/dfdpixkle/image/upload/v1756670072/Item_Link_ju8ylq.png' alt='img5' className='p-img'/>
            <img src='https://res.cloudinary.com/dfdpixkle/image/upload/v1756670046/Item_Link_mscqyo.png' alt='img6' className='p-img'/>
            <img src='https://res.cloudinary.com/dfdpixkle/image/upload/v1756670010/Item_Link_zdrkez.png' alt='img7' className='p-img'/>
          </div>
          </div>
          <div className='second'>
            <div>
              <h1 className='desk-heading'>Manuka Honey <br/>UMF<sup>TM</sup> <span className='desk-sub'>24+</span> <br/>MGO <span className='desk-sub-heading'>1122+</span></h1>
            </div>
            <ReactPopUp/>
            <div>
              <div className='desk-head'>
                <p className='para'>The Optimiser</p>
                <div className='rating'>
                  <img src="https://res.cloudinary.com/dfdpixkle/image/upload/v1756694282/Container_svvfde.png" alt='rating'/>
                  <p className='r-para'>825 REVIEWS</p>
                </div>
              </div>
              <p className='desc-para'>For those times in life when quality comes first. This pure UMF™ 24+ Manuka
                  Honey is powerfully active, sourced from wild and rugged locations around
                  Aotearoa New Zealand and great for almost all uses. It has a full, delicious
                  flavour and your body will love you for it.
              </p>
              <div className='certificata-container'>
                <img src="https://res.cloudinary.com/dfdpixkle/image/upload/v1756695316/certifications_ynoyzl.png" alt='c'/>
                <img src='https://res.cloudinary.com/dfdpixkle/image/upload/v1756695299/certifications_k9txdw.png' alt='c'/>
                <img src="https://res.cloudinary.com/dfdpixkle/image/upload/v1756695278/certifications_b2t0nv.png" alt='c'/>
                <img src='https://res.cloudinary.com/dfdpixkle/image/upload/v1756695252/certifications_ecs7qh.png' alt='c'/>
                <img src='https://res.cloudinary.com/dfdpixkle/image/upload/v1756695236/certifications_enapmo.png' alt='c'/>
                <img src='https://res.cloudinary.com/dfdpixkle/image/upload/v1756695218/certifications_xcrgch.png' alt='c'/>
              </div>
              <div className='select-container'>
                <div>
                <p className='s-para'>Size (Select One)</p>
                <p className='v-para'>Variant: 125g | 4.4oz</p>
                </div>
                <div>
                <img src='https://res.cloudinary.com/dfdpixkle/image/upload/v1756695974/Label_Label_paints_nqfnpu.png' alt='v'/>
                <img src='https://res.cloudinary.com/dfdpixkle/image/upload/v1756696037/Label_Label_paints_kwrct2.png' alt='v'/>
                <img src='https://res.cloudinary.com/dfdpixkle/image/upload/v1756696057/Label_Label_paints_w0bqw5.png' alt='v'/>
                <img src='https://res.cloudinary.com/dfdpixkle/image/upload/v1756696080/Label_Label_paints_lvz5jy.png' alt='v'/>
                <img src='https://res.cloudinary.com/dfdpixkle/image/upload/v1756696098/Label_Label_paints_bayr6t.png' alt='v'/>
                <img src='https://res.cloudinary.com/dfdpixkle/image/upload/v1756696130/Label_Label_paints_vdorol.png' alt='v'/>
                <img src='https://res.cloudinary.com/dfdpixkle/image/upload/v1756696150/Label_Label_paints_csc6ri.png' alt='v'/>
                </div>
              </div>
              <p className='s-para'>PAYMENT OPTIONS (SELECT ONE)</p>
              <div className='payment-container'>
                <div className='btn-container'>
                <button type='button' className='p-btn'>One-time Purchase $55.88 USD</button>
                <button type='button' className='s-btn'>Subscribe & save 20% $44.70 USD</button>
                </div>
                <div className='container'>
                  <img src='https://res.cloudinary.com/dfdpixkle/image/upload/v1756698132/SVG_kw9m8e.png' alt='reload'/>
                <p>What is a Subscription?</p>
                </div>
              </div>
              <p className='s-para'>select quantity</p>
              <div className='quan-container'>
                <div className='q-button'>
                  <button type='button' className='q-btn'>-</button>
                  <p className='quantity'>1</p>
                  <button type='button' className='q-btn'>+</button>
                </div>
                <button type='button' className='cart-btn'>Add to cart</button>
              </div>
              <img src='https://res.cloudinary.com/dfdpixkle/image/upload/v1756699750/Frame_1484578587_z0d22q.png' alt='p' className='pay'/>
              <div>
                <div>
                <img src='https://res.cloudinary.com/dfdpixkle/image/upload/v1756700063/Colourclub_Logo_s11p7c.png' alt='logo'/>
                <p className='end-para'>Colourclub members earn up to <span className='number'>56</span> reward points when buy this item. Sign up or log in</p>
                </div>
                <div className='delivery-details'>
                  <div>
                  <p>Delivery</p>
                  <p>FREE DELIVERY ON ORDERS OVER $30</p>
                  </div>
                  <div className='estimated'>
                    <p>ESTIMATED DELIVERY DATE:<br/> Jun 9 - Jun 13 to</p>
                  </div>
                </div>
                <hr/>
                <div>
                  <p>After Pay <br/> or 4 interest-free payments of $13.97 with <img src='https://res.cloudinary.com/dfdpixkle/image/upload/v1756701264/Button_-_Afterpay_logo_-_Opens_a_dialog_SVG_hmonbo.png' alt='btn'/><img src='https://res.cloudinary.com/dfdpixkle/image/upload/v1756688357/SVG_n4or1z.png' alt='info'/></p>
                </div>
                <img src='https://res.cloudinary.com/dfdpixkle/image/upload/v1756701448/HorizontalBorder_yntib8.png' alt='info' className='info'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductInfo