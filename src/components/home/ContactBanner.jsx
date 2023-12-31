import './css/contactbanner.css'

const ContactBanner = () =>
{
    return (
        <div className="contact-banner">
            <hr/>
            <div className="contact-banner-icons">
                <div className="contact-banner-icon">
                    <div className="contact-banner-icon-top">
                    <span>
                        <svg width="48" height="30" viewBox="0 0 48 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0V2.72727H28.0735V23.1818H18.9773C18.3193 20.8381 16.0337 19.0909 13.298 19.0909C10.5622 19.0909 8.27659 20.8381 7.61862 23.1818H5.9102V16.3636H2.9551V25.9091H7.61862C8.27659 28.2528 10.5622 30 13.298 30C16.0337 30 18.3193 28.2528 18.9773 25.9091H31.2594C31.9174 28.2528 34.203 30 36.9388 30C39.6745 30 41.9601 28.2528 42.6181 25.9091H47.2816V14.7869L47.1893 14.5739L44.2342 6.39205L43.911 5.45455H31.0286V0H0ZM1.47755 5.45455V8.18182H14.7755V5.45455H1.47755ZM31.0286 8.18182H41.787L44.3265 15.1705V23.1818H42.6181C41.9601 20.8381 39.6745 19.0909 36.9388 19.0909C34.203 19.0909 31.9174 20.8381 31.2594 23.1818H31.0286V8.18182ZM2.9551 10.9091V13.6364H11.8204V10.9091H2.9551ZM13.298 21.8182C14.9487 21.8182 16.2531 23.022 16.2531 24.5455C16.2531 26.0689 14.9487 27.2727 13.298 27.2727C11.6473 27.2727 10.3429 26.0689 10.3429 24.5455C10.3429 23.022 11.6473 21.8182 13.298 21.8182ZM36.9388 21.8182C38.5895 21.8182 39.8939 23.022 39.8939 24.5455C39.8939 26.0689 38.5895 27.2727 36.9388 27.2727C35.2881 27.2727 33.9837 26.0689 33.9837 24.5455C33.9837 23.022 35.2881 21.8182 36.9388 21.8182Z" fill="#640E23"/>
                        </svg>
                    </span>
                        <p>Envío Gratis</p>
                    </div>
                    <p>Compras mayores a $50.000</p>
                </div>
                <div className="contact-banner-icon">
                    <div className="contact-banner-icon-top">
                    <span>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.25 18.6249C12.25 20.0799 13.375 21.2499 14.755 21.2499H17.575C18.775 21.2499 19.75 20.2299 19.75 18.9549C19.75 17.5899 19.15 17.0949 18.265 16.7799L13.75 15.2049C12.865 14.8899 12.265 14.4099 12.265 13.0299C12.265 11.7699 13.24 10.7349 14.44 10.7349H17.26C18.64 10.7349 19.765 11.9049 19.765 13.3599" stroke="#640E23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16.0001 9.25V22.75" stroke="#640E23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M31 16C31 24.28 24.28 31 16 31C7.72 31 1 24.28 1 16C1 7.72 7.72 1 16 1" stroke="#640E23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M31.0001 7V1H25.0001" stroke="#640E23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M23.4999 8.5L30.9999 1" stroke="#640E23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    </span>
                        <p>15 Días de Devolución </p>
                    </div>
                    <p>Dinero completo garantizado</p>
                </div>
                <div className="contact-banner-icon">
                    <div className="contact-banner-icon-top">
                    <span>
                        <svg width="37" height="30" viewBox="0 0 37 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 5C0 3.67392 0.475391 2.40215 1.32159 1.46447C2.16779 0.526784 3.31549 0 4.5122 0H31.5854C32.7821 0 33.9298 0.526784 34.776 1.46447C35.6222 2.40215 36.0976 3.67392 36.0976 5V25C36.0976 26.3261 35.6222 27.5979 34.776 28.5355C33.9298 29.4732 32.7821 30 31.5854 30H4.5122C3.31549 30 2.16779 29.4732 1.32159 28.5355C0.475391 27.5979 0 26.3261 0 25V5ZM4.5122 2.5C3.91384 2.5 3.33999 2.76339 2.91689 3.23223C2.49379 3.70107 2.2561 4.33696 2.2561 5V7.5H33.8415V5C33.8415 4.33696 33.6038 3.70107 33.1807 3.23223C32.7576 2.76339 32.1837 2.5 31.5854 2.5H4.5122ZM33.8415 12.5H2.2561V25C2.2561 25.663 2.49379 26.2989 2.91689 26.7678C3.33999 27.2366 3.91384 27.5 4.5122 27.5H31.5854C32.1837 27.5 32.7576 27.2366 33.1807 26.7678C33.6038 26.2989 33.8415 25.663 33.8415 25V12.5Z" fill="#640E23"/>
                            <path d="M4.51215 20C4.51215 19.337 4.74984 18.7011 5.17294 18.2322C5.59604 17.7634 6.16989 17.5 6.76824 17.5H9.02434C9.6227 17.5 10.1965 17.7634 10.6196 18.2322C11.0427 18.7011 11.2804 19.337 11.2804 20V22.5C11.2804 23.163 11.0427 23.7989 10.6196 24.2678C10.1965 24.7366 9.6227 25 9.02434 25H6.76824C6.16989 25 5.59604 24.7366 5.17294 24.2678C4.74984 23.7989 4.51215 23.163 4.51215 22.5V20Z" fill="#640E23"/>
                        </svg>
                    </span>
                        <p>Checkout Seguro</p>
                    </div>
                    <p>100% Protegido por Wompi</p>
                </div>
                <div className="contact-banner-icon">
                    <div className="contact-banner-icon-top">
                    <span>
                        <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.1291 1.73634C13.8582 0.754552 15.2149 0.754552 15.9441 1.73634L17.9374 4.42038C18.3232 4.93976 18.9169 5.21228 19.521 5.14727L22.6433 4.81126C23.7854 4.68836 24.7447 5.75133 24.6338 7.0169L24.3305 10.4767C24.2719 11.1462 24.5178 11.8041 24.9865 12.2316L27.4087 14.4404C28.2947 15.2483 28.2947 16.7517 27.4087 17.5596L24.9865 19.7684C24.5178 20.1959 24.2719 20.8538 24.3305 21.5233L24.6338 24.9831C24.7447 26.2487 23.7854 27.3117 22.6433 27.1888L19.521 26.8528C18.9169 26.7877 18.3232 27.0603 17.9374 27.5796L15.9441 30.2637C15.2149 31.2454 13.8582 31.2454 13.1291 30.2637L11.1358 27.5796C10.75 27.0603 10.1563 26.7877 9.55217 26.8528L6.42988 27.1888C5.28779 27.3117 4.32852 26.2487 4.43943 24.9831L4.74265 21.5233C4.80133 20.8538 4.55539 20.1959 4.08669 19.7684L1.66451 17.5596C0.778498 16.7517 0.778498 15.2483 1.66451 14.4404L4.08669 12.2316C4.55539 11.8041 4.80133 11.1462 4.74265 10.4767L4.43943 7.0169C4.32852 5.75133 5.28779 4.68836 6.42988 4.81126L9.55217 5.14727C10.1563 5.21228 10.75 4.93976 11.1358 4.42038L13.1291 1.73634Z" stroke="#640E23" strokeWidth="2"/>
                            <path d="M9.97949 17.0099L12.882 20.2262C13.2742 20.6608 13.9228 20.6097 14.2556 20.1181L19.0934 12.9702" stroke="#640E23" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </span>
                        <p>Garantía del 100%</p>
                    </div>
                    <p>Gran calidad de productos</p>
                </div>
            </div>
            <hr/>
        </div>
    );
}

export default ContactBanner;