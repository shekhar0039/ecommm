import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import { emphasize, styled } from '@mui/material/styles';

import LinearProgress from '@mui/material/LinearProgress';
import Slider from "react-slick";
import { MdBrandingWatermark } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import UserAvtarImgComponent from '../components/UserAvtarImg';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { FaReply } from "react-icons/fa6";



// Define StyledBreadcrumb outside the component
const StyledBreadcrumb = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  height: theme.spacing(3),
  color: (theme.vars || theme).palette.text.primary,
  fontWeight: theme.typography.fontWeightRegular,
  '&:hover, &:focus': {
    backgroundColor: emphasize(theme.palette.grey[100], 0.06),
    ...theme.applyStyles?.('dark', {
      backgroundColor: emphasize(theme.palette.grey[800], 0.06),
    }),
  },
  '&:active': {
    boxShadow: theme.shadows[1],
    backgroundColor: emphasize(theme.palette.grey[100], 0.12),
    ...theme.applyStyles?.('dark', {
      backgroundColor: emphasize(theme.palette.grey[800], 0.12),
    }),
  },
}));

const ProductDetails = () => {


  var productSliderOptions = {
    dots: false,
    infinite: true,            // must be true for autoplay
    speed: 500,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
  };

  var productSliderSmlOptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <>
      <div className="right-content w-100">
        <div className="card shadow border-0 w-100 flex-row p-4 res-col">
          <h5 className="mb-0 pl-3">Product List</h5>
          <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_ pr-3">
            <StyledBreadcrumb
              component="a"
              label="Dashboard"
              icon={<HomeIcon fontSize="small" />}
            />
            <StyledBreadcrumb label="Products" />
            <StyledBreadcrumb label="Product View" />
          </Breadcrumbs>
        </div>

        <div className='card productDetailsSection'>
          <div className='row'>
            <div className='col-md-5'>
              <div className='sliderWrapper pt-3 pb-3 pl-4 pr-3'>
                <h6 className='mb-3'>Product Gallery</h6>

                {/* Main Auto-sliding Slider */}
                <Slider {...productSliderOptions} className='sliderBig'>
                  <div className='item'>
                    <img src='https://mironcoder-hotash.netlify.app/images/product/single/01.webp' className='w-100' alt='Product 1' />
                  </div>
                  <div className='item'>
                    <img src='https://mironcoder-hotash.netlify.app/images/product/single/03.webp' className='w-100' alt='Product 2' />
                  </div>
                  <div className='item'>
                    <img src='https://mironcoder-hotash.netlify.app/images/product/single/04.webp' className='w-100' alt='Product 3' />
                  </div>
                </Slider>

                {/* Thumbnail Slider */}
                <Slider {...productSliderSmlOptions} className='sliderSml mt-3'>
                  <div className='item'>
                    <img src='https://mironcoder-hotash.netlify.app/images/product/single/01.webp' className='w-100' alt='Thumb 1' />
                  </div>
                  <div className='item'>
                    <img src='https://mironcoder-hotash.netlify.app/images/product/single/03.webp' className='w-100' alt='Thumb 2' />
                  </div>
                  <div className='item'>
                    <img src='https://mironcoder-hotash.netlify.app/images/product/single/04.webp' className='w-100' alt='Thumb 3' />
                  </div>
                  <div className='item'>
                    <img src='https://mironcoder-hotash.netlify.app/images/product/single/05.webp' className='w-100' alt='Thumb 4' />
                  </div>
                  <div className='item'>
                    <img src='https://mironcoder-hotash.netlify.app/images/product/single/05.webp' className='w-100' alt='Thumb 4' />
                  </div>
                  <div className='item'>
                    <img src='https://mironcoder-hotash.netlify.app/images/product/single/05.webp' className='w-100' alt='Thumb 4' />
                  </div>
                </Slider>
              </div>
            </div>

            <div className='col-md-7'>
              <div className=' pt-3 pb-3 pl-4 pr-3'>
                <h6 className='mb-3'>Product Details</h6>
                <h4>Formal suits for men wedding slim fit 3 piece dress business party jacket</h4>


                <div className='productInfo mt-3'>
                  <div className='row mb-2'>
                    <div className='col-sm-3 d-flex align-item-center'>
                      <span className='icon'><MdBrandingWatermark /></span>
                      <span className='name'>Brand</span>
                    </div>
                    <div className='col-sm-9'>
                      :<span>ecstasy</span>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-sm-3 d-flex align-item-center'>
                      <span className='icon'><BiSolidCategoryAlt /></span>
                      <span className='name'>category</span>
                    </div>
                    <div className='col-sm-9'>
                      <span>man's</span>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-sm-3 d-flex align-item-center'>
                      <span className='icon'><BiSolidCategoryAlt /></span>
                      <span className='name'>tags</span>
                    </div>
                    <div className='col-sm-9'>
                      <span>
                        <ul className='list list-inline tags sml'>
                          <li className='list-inline-item'>
                            <span>suite</span>
                          </li>
                          <li className='list-inline-item'>
                            <span>party</span>
                          </li>
                          <li className='list-inline-item'>
                            <span>dress</span>
                          </li>
                          <li className='list-inline-item'>
                            <span>smart</span>
                          </li>
                          <li className='list-inline-item'>
                            <span>man</span>
                          </li>
                          <li className='list-inline-item'>
                            <span>styles</span>
                          </li>
                        </ul>
                      </span>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-sm-3 d-flex align-item-center'>
                      <span className='icon'><BiSolidCategoryAlt /></span>
                      <span className='name'>color</span>
                    </div>
                    <div className='col-sm-9'>
                      :<span>
                        <ul className='list list-inline'>
                          <li className='list-inline-item'>
                            <span>red</span>
                          </li>
                          <li className='list-inline-item'>
                            <span>blue</span>
                          </li>
                          <li className='list-inline-item'>
                            <span>green</span>
                          </li>
                          <li className='list-inline-item'>
                            <span>yellow</span>
                          </li>
                          <li className='list-inline-item'>
                            <span>purple</span>
                          </li>
                        </ul>
                      </span>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-sm-3 d-flex align-item-center'>
                      <span className='icon'><BiSolidCategoryAlt /></span>
                      <span className='name'>size</span>
                    </div>
                    <div className='col-sm-9'>
                      <span>
                        <ul className='list list-inline'>
                          <li className='list-inline-item'>
                            <span>sm</span>
                          </li>
                          <li className='list-inline-item'>
                            <span>md</span>
                          </li>
                          <li className='list-inline-item'>
                            <span>lg</span>
                          </li>
                          <li className='list-inline-item'>
                            <span>xl</span>
                          </li>
                          <li className='list-inline-item'>
                            <span>xxl</span>
                          </li>

                        </ul>
                      </span>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-sm-3 d-flex align-item-center'>
                      <span className='icon'><BiSolidCategoryAlt /></span>
                      <span className='name'>price</span>
                    </div>
                    <div className='col-sm-9'>
                      <span>man's</span>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-sm-3 d-flex align-item-center'>
                      <span className='icon'><BiSolidCategoryAlt /></span>
                      <span className='name'>stock</span>
                    </div>
                    <div className='col-sm-9'>
                      <span>(68) piece</span>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-sm-3 d-flex align-item-center'>
                      <span className='icon'><BiSolidCategoryAlt /></span>
                      <span className='name'>review</span>
                    </div>
                    <div className='col-sm-9'>
                      <span>(03) review</span>
                    </div>
                  </div>




                  <div className='row'>
                    <div className='col-sm-3 d-flex align-item-center'>
                      <span className='icon'><MdBrandingWatermark /></span>
                      <span className='name'>published</span>
                    </div>
                    <div className='col-sm-9'>
                      <span>02 feb 2020</span>
                    </div>
                  </div>


                </div>
              </div>

            </div>
          </div>


          <div className='p-4'>
            <h6 className='mt-4 mb-3'>Product Description</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae reprehenderit repellendus expedita esse cupiditate quos doloremque rerum, corrupti ab illum est nihil, voluptate ex dignissimos! Sit voluptatem delectus nam, molestiae, repellendus ab sint quo aliquam debitis amet natus doloremque laudantium? Repudiandae, consequuntur, officiis quidem quo deleniti, autem non laudantium sequi error molestiae ducimus accusamus facere velit consectetur vero dolore natus nihil temporibus aspernatur quia consequatur? Consequuntur voluptate deserunt repellat tenetur debitis molestiae doloribus dicta. In rem illum dolorem atque ratione voluptates asperiores maxime doloremque laudantium magni neque ad quae quos quidem, quaerat rerum ducimus blanditiis reiciendis</p>



            <h6 className='mt-4 mb-4'>Rating Analytics</h6>

            <div className='ratingSection'>
              <div className='ratingrow  d-flex align-items-center'>
                <span className='col1'>
                  5 Star
                </span>
                <span className='col2'>
                  <div className='progress'>
                    <div className='progress-bar' style={{ width: '70%' }}></div>
                  </div>
                </span>
                <span className='col3'>(22)</span>
              </div>
              <div className='ratingrow  d-flex align-items-center'>
                <span className='col1'>
                  5 Star
                </span>
                <span className='col2'>
                  <div className='progress'>
                    <div className='progress-bar' style={{ width: '50%' }}></div>
                  </div>
                </span>
                <span className='col3'>(22)</span>
              </div>
              <div className='ratingrow  d-flex align-items-center'>
                <span className='col1'>
                  5 Star
                </span>
                <span className='col2'>
                  <div className='progress'>
                    <div className='progress-bar' style={{ width: '20%' }}></div>
                  </div>
                </span>
                <span className='col3'>(22)</span>
              </div>
              <div className='ratingrow  d-flex align-items-center'>
                <span className='col1'>
                  5 Star
                </span>
                <span className='col2'>
                  <div className='progress'>
                    <div className='progress-bar' style={{ width: '30%' }}></div>
                  </div>
                </span>
                <span className='col3'>(22)</span>
              </div>
            </div>

            <h6 className='mt-4 mb-4'>Customer Reviews</h6>

            <div className='reviewsSection'>
              <div className='reviewsRow'>
                <div className='row'>
                  <div className='col-sm-7 d-flex'>
                    <div className='d-flex  flex-column'>

                      <div className='userInfo d-flex align-items-center mb-3'>
                        <UserAvtarImgComponent img='https://mironcoder-hotash.netlify.app/images/avatar/01.webp' lg={true} />

                        <div className='info pl-3'>
                          <h3 className='reviewhead'>John Selen</h3>
                          <span>25 minute ago!</span>
                        </div>
                      </div>
                      <Rating name="read-only" value={4.5} readOnly precision={0.5} />


                    </div>
                  </div>

                  <div className='col-md-5 d-flex align-items-center'>
                    <div className='ml-auto'>
                      <Button className='btn-blue btn-lg btn-big ml-auto'><FaReply />&nbsp; Reply</Button>
                    </div>
                  </div>
                  <p className='mt-3 rewiewpera'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae? Eius harum tempora quis minima, adipisci natus quod magni omnis quas.</p>
                </div>
              </div>


              <div className='reviewsRow reply'>
                <div className='row'>
                  <div className='col-sm-7 d-flex'>
                    <div className='d-flex  flex-column'>

                      <div className='userInfo d-flex align-items-center mb-3'>
                        <UserAvtarImgComponent img='https://mironcoder-hotash.netlify.app/images/avatar/01.webp' lg={true} />

                        <div className='info pl-3'>
                          <h3 className='reviewhead'>John Selen</h3>
                          <span>25 minute ago!</span>
                        </div>
                      </div>
                      <Rating name="read-only" value={4.5} readOnly precision={0.5} />


                    </div>
                  </div>

                  <div className='col-md-5 d-flex align-items-center'>
                    <div className='ml-auto'>
                      <Button className='btn-blue btn-lg btn-big ml-auto'><FaReply />&nbsp; Reply</Button>
                    </div>
                  </div>
                  <p className='mt-3 rewiewpera'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae? Eius harum tempora quis minima, adipisci natus quod magni omnis quas.</p>
                </div>
              </div>

              <div className='reviewsRow reply'>
                <div className='row'>
                  <div className='col-sm-7 d-flex'>
                    <div className='d-flex  flex-column'>

                      <div className='userInfo d-flex align-items-center mb-3'>
                        <UserAvtarImgComponent img='https://mironcoder-hotash.netlify.app/images/avatar/01.webp' lg={true} />

                        <div className='info pl-3'>
                          <h3 className='reviewhead'>John Selen</h3>
                          <span>25 minute ago!</span>
                        </div>
                      </div>
                      <Rating name="read-only" value={4.5} readOnly precision={0.5} />


                    </div>
                  </div>

                  <div className='col-md-5 d-flex align-items-center'>
                    <div className='ml-auto'>
                      <Button className='btn-blue btn-lg btn-big ml-auto'><FaReply />&nbsp; Reply</Button>
                    </div>
                  </div>
                  <p className='mt-3 rewiewpera'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae? Eius harum tempora quis minima, adipisci natus quod magni omnis quas.</p>
                </div>
              </div>

              <div className='reviewsRow'>
                <div className='row'>
                  <div className='col-sm-7 d-flex'>
                    <div className='d-flex  flex-column'>

                      <div className='userInfo d-flex align-items-center mb-3'>
                        <UserAvtarImgComponent img='https://mironcoder-hotash.netlify.app/images/avatar/01.webp' lg={true} />

                        <div className='info pl-3'>
                          <h3 className='reviewhead'>John Selen</h3>
                          <span>25 minute ago!</span>
                        </div>
                      </div>
                      <Rating name="read-only" value={4.5} readOnly precision={0.5} />


                    </div>
                  </div>

                  <div className='col-md-5 d-flex align-items-center'>
                    <div className='ml-auto'>
                      <Button className='btn-blue btn-lg btn-big ml-auto'><FaReply />&nbsp; Reply</Button>
                    </div>
                  </div>
                  <p className='mt-3 rewiewpera'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae? Eius harum tempora quis minima, adipisci natus quod magni omnis quas.</p>
                </div>
              </div>


             <h4 className='mt-4 mb-4'>Reviews Reply Form</h4>

             <form className='reviewForm'>
              <textarea placeholder='Write here '></textarea>

              <Button className='btn-blue btn-big btn-lg w-100 mt-4'>Drop Your Replies</Button>
             </form>


            </div>




          </div>
        </div>


      </div>
    </>
  );
}


export default ProductDetails;
