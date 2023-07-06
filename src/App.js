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
                <div className='p-calc bg-[#909FD8]'>
                    <div className='relative grid md:grid-cols-3'>
                        <Sidebar />
                        <HeroContent />
                    </div>
                </div>

                {/* Body */}
                <div className='p-calc bg-[#F5F5F5] pt-5'><Activity/></div>
                <div className='p-calc bg-[#F5F5F5] pt-5'><FlashSale/></div>
                <div className='p-calc bg-[#F5F5F5] pt-5'><LazMall/></div>
                <div className='p-calc bg-[#F5F5F5] pt-5'><Category/></div>
                <div className='p-calc bg-[#F5F5F5] pt-5'><Recommend/></div>
                <div className='flex justify-center p-calc bg-[#F5F5F5] pt-5'><button className=' border border-[#01BFA6] text-[#01BFA6]  px-20 py-3 md:px-40'>โหลดเพิ่มเติม</button></div>
                
                
                {/* footer */}
                <div className='p-calc bg-[#F5F5F5] pt-14'><Footer /></div>
                <div className='p-calc bg-[#F5F5F5] '><Footer2 /></div>
                <div className='p-calc bg-white'><Footer3 /></div>
                <div className='p-calc bg-[#F5F5F5] py-14'><Footer4 /></div>
                <div className='p-calc bg-white'><Footer5 /></div>
            </div>
        </>
    );
}

export default App;
