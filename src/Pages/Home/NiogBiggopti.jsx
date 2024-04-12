import { FaLink } from "react-icons/fa";



const Notice = () => {
  const notices =[
    {
      "subject": "তারাব পৌরসভার পানি শাখায় বিভিন্ন পদে নিয়োগ বিজ্ঞপ্তি",
      "publicationDate": "০৮-০৬-২০২৩",
      "link": "/path/to/pdf1"
    },
    {
      "subject": "তারাব পৌরসভার নিয়োগ বিজ্ঞপ্তি",
      "publicationDate": "০২-০৭-২০২০",
      "link": "/path/to/pdf2"
    },
    {
      "subject": "আরবান প্রাইমারী হেলথ কেয়ার ২য় পর্যায়ে তারাব পৌরসভায় পুনঃ নিয়োগ বিজ্ঞপ্তি",
      "publicationDate": "২৭-০৮-২০২০",
      "link": "/path/to/pdf3"
    }
  ]
  
  
  
  return (
    <div>
      <h1 className="text-base font-bold p-2 my-2 text-cyan-600 bg-orange-400">নিয়োগ বিজ্ঞপ্তি</h1>
      <div className="overflow-hidden">
        <table className="table border border-black text-black">
          <thead className='text-black'>
            <tr>
              <th>বিষয়বস্তু</th>
              <th>প্রকাশের তারিখ</th>
              <th>ডাউনলোড</th>
            </tr>
          </thead>
          <tbody>
            {notices.map((notice, index) => (
              <tr key={index}>
                <td>{notice.subject}</td>
                <td className='border border-black'>{notice.publicationDate}</td>
                <td><a href={notice.link}><FaLink className='text-blue text-3xl text-center'></FaLink></a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Notice;
