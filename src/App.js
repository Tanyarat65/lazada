import BranderHead from './components/BranderHead';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import HeroContent from './components/HeroContent';
import SearchBar from './components/SearchBar';
import Footer from './layout/Footer';
import Footer2 from './layout/Footer2';
import Footer3 from './layout/Footer3';
import Footer4 from './layout/Footer4';
import Footer5 from './layout/Footer5';
import Activity from './components/Activity';
import FlashSale from './components/FlashSale';
import LazMall from './components/LazMall';
import Category from './components/Category';
import Recommend from './components/Recommend';

function App() {
    return (
        <>
            <BranderHead />
            <div className='w-full'>
                <Header />
                <div className='p-calc'><SearchBar /></div>
                <div className='p-calc bg-[#909FD8]  min-w-[1188px]'>
                    <div className='relative w-[1188px]'>
                        <Sidebar />
                        <HeroContent />
                    </div>
                </div>

                {/* Body */}
                <div className='p-calc bg-[#F5F5F5] pt-5 min-w-[1188px]'><Activity/></div>
                <div className='p-calc bg-[#F5F5F5] pt-5 min-w-[1188px]'><FlashSale/></div>
                <div className='p-calc bg-[#F5F5F5] pt-5 min-w-[1188px]'><LazMall/></div>
                <div className='p-calc bg-[#F5F5F5] pt-5 min-w-[1188px]'><Category/></div>
                <div className='p-calc bg-[#F5F5F5] pt-5 min-w-[1188px]'><Recommend/></div>
                <div className='flex justify-center p-calc bg-[#F5F5F5] pt-5 min-w-[1188px]'><button className=' border border-[#01BFA6] text-[#01BFA6]  px-40 py-3'>โหลดเพิ่มเติม</button></div>
                
                
                {/* footer */}
                <div className='p-calc bg-[#F5F5F5] pt-14 min-w-[1188px]'><Footer /></div>
                <div className='p-calc bg-[#F5F5F5] min-w-[1188px]'><Footer2 /></div>
                <div className='p-calc bg-white min-w-[1188px]'><Footer3 /></div>
                <div className='p-calc bg-[#F5F5F5] py-14 min-w-[1188px]'><Footer4 /></div>
                <div className='p-calc bg-white min-w-[1188px]'><Footer5 /></div>
            </div>
        </>
    );
}

export default App;
