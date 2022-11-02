import bkgImg from '../../assets/images/bkgImg.jpg'
import HeaderCartBtn from './HeaderCartBtn';

const Header = props => {
    return (
        <div className='h-100 d-flex flex-column'>
            <header className='bg-light d-flex justify-content-between px-3 py-4 shadow-sm'>
                <h1>React Meals</h1>
                <HeaderCartBtn />
            </header>
            <div className='flex-grow-1'>
                <img scr={bkgImg} alt="Health is Wealth" />
            </div>
        </div>
    )
}
export default Header;