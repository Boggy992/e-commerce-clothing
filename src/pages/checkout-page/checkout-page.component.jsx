import './checkout-page.style.scss';

import CheckoutDirectory from '../../components/checkout-directory/checkout-directory.component';

const CheckoutPage = () => {
    return (
        <div className='checkout-page'>
            <div className='wrap'>
                <CheckoutDirectory />
            </div>
        </div>
    )
} 

export default CheckoutPage