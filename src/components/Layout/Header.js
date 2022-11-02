// import bkgImg from '../../assets/images/bkgImg.jpg'
import HeaderCartBtn from './HeaderCartBtn';

const Header = props => {
    return (
        <>
            <header className='bg-light d-flex justify-content-between px-3 py-4 shadow-sm'>
                <h1>React Meals</h1>
                <HeaderCartBtn onShowCart={props.onShowCart} />
            </header>
            {/* <div>
                <img scr={bkgImg} alt="Health is Wealth" />
            </div> */}
        </>
    )
}
export default Header;