import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        // <footer className="page-footer bg-primary text-light font-small blue pt-4 mt-5">
        //     <div className="container-fluid text-center text-md-left">
        //         <div className="row">
        //             <div className="col-md-6 mt-md-0 mt-3">
        //                 <h5 className="text-uppercase">Footer Content</h5>
        //                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, fugit magnam illo modi distinctio recusandae temporibus architecto, inventore officia, aut repudiandae nesciunt explicabo sunt sit rerum dolorum ad corrupti quia?</p>
        //             </div>

        //             <hr className="clearfix w-100 d-md-none pb-0" />

        //             <div className="col-md-3 mb-md-0 mb-3">
        //                 <h5 className="text-uppercase">Links</h5>
        //                 <ul className="list-unstyled">
        //                     <li><a className='text-white' href="#!">Link 1</a></li>
        //                     <li><a className='text-white' href="#!">Link 2</a></li>
        //                     <li><a className='text-white' href="#!">Link 3</a></li>
        //                     <li><a className='text-white' href="#!">Link 4</a></li>
        //                 </ul>
        //             </div>

        //             <div className="col-md-3 mb-md-0 mb-3">
        //                 <h5 className="text-uppercase">Links</h5>
        //                 <ul className="list-unstyled">
        //                     <li><a className='text-white' href="#!">Link 1</a></li>
        //                     <li><a className='text-white' href="#!">Link 2</a></li>
        //                     <li><a className='text-white' href="#!">Link 3</a></li>
        //                     <li><a className='text-white' href="#!">Link 4</a></li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>

        //     <div className="footer-copyright py-3 d-flex justify-content-center">
        //         <p className='me-1'>&copy; {year} Copyright:</p>
        //         <a className='text-white' href="https://mdbootstrap.com/">geniusCar.com</a>
        //     </div>

        // </footer>
        <footer className='text-center mt-5'>
            <p>&copy; {year} Copyright:</p>
        </footer>
    );
};

export default Footer;