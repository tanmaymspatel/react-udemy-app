// import bkgImg from '../../assets/images/bkgImg.jpg'
import HeaderCartBtn from './HeaderCartBtn';

const Header = () => {
    return (
        <>
            <header className='bg-light d-flex justify-content-between px-3 py-4 shadow-sm'>
                <h1>React Meals</h1>
                <HeaderCartBtn />
            </header>
            {/* <div>
                <img scr={bkgImg} alt="Health is Wealth" />
            </div> */}
        </>
    )
}
export default Header;