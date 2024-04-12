
import { Link } from 'react-router-dom';
import Carousel from './Carousel';

const Banner = () => {
 
  return (
  
    <div>
          <Carousel />
         <Link>
         <h1 className="text-lg mx-auto text-start hover:text-black hover:underline font-bold p-2 my-3 text-cyan-600 bg-orange-400"> তারাব পৌরসভার বার্ষিক ক্রয় পরিকল্পনা ২০২২-২০২৩</h1>
         </Link>
         <Link>
         <h1 className="text-lg hover:underline hover:text-black font-bold p-2 my-3 text-cyan-600 bg-orange-400">তারাব পৌরসভার বাজেট ২০২৩-২০২৪</h1>
         </Link>
         <Link>
         <h1 className="text-lg hover:underline hover:text-black font-bold p-2 my-3 text-cyan-600 bg-orange-400">তারাব পৌরসভার ২০২৩-২০২৪ অর্থবছরের উন্নয়ন কাজের তালিকা</h1>
         </Link>
    </div>
  );
};

export default Banner;
