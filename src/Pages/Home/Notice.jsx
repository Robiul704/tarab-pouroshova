import { FaLink } from "react-icons/fa";



const Notice = () => {
  const notices = [
    {
      "subject": "চাকুরির আবেদন ফরম",
      "publicationDate": "১১-০২-২৪",
      "link": "/path/to/pdf1"
    },
    {
      "subject": "আরবান প্রাইমারী হেলথ কেয়ার ডেলিভারী প্রজেক্ট ২য় পর্যায় নিয়োগ বিজ্ঞপ্তি",
      "publicationDate": "১১-০২-২৪",
      "link": "/path/to/pdf2"
    },
    {
      "subject": "তারাব পৌরসভায় পানি শাখায় নিয়োগ বিজ্ঞপ্তি",
      "publicationDate": "১৮-১০-২৩",
      "link": "/path/to/pdf3"
    },
    {
      "subject": "জনাব জেড এম আনোয়ার নির্বাহী প্রকৌশলী তারাব পৌরসভা এর আন্তর্জাতিক পাসপোর্ট নবায়ন করার জন্য অনাপত্তি প্রসঙ্গে",
      "publicationDate": "১৮-১০-২৩",
      "link": "/path/to/pdf4"
    },
    {
      "subject": "ফাতেমা ইসলাম এর পাসপোর্ট নবায়ন প্রসঙ্গে",
      "publicationDate": "২৫-০৬-২৩",
      "link": "/path/to/pdf5"
    },
    {
      "subject": "নাবিলা অপসরা এর পাসপোর্ট নবায়ন প্রসঙ্গে",
      "publicationDate": "২৫-০৬-২৩",
      "link": "/path/to/pdf6"
    },
    {
      "subject": "শহর সমন্বয় কমিটি সভার কার্যবিবরনী ২৫ সেপ্টেম্বর",
      "publicationDate": "২৫-০৯-২২",
      "link": "/path/to/pdf7"
    },
    {
      "subject": "শহর সমন্বয় কমিটি সভায় অংশগ্রহন সম্পর্কিত নোটিশ ১৯ সেপ্টেম্বর",
      "publicationDate": "১৯-০৯-২২",
      "link": "/path/to/pdf8"
    },
    {
      "subject": "জনাব মোঃ নজরুল ইসলাম এর আন্তর্জাতিক পাসপোর্ট নবায়ন এর অনাপত্তি পত্র",
      "publicationDate": "১৬-০২-২০২০",
      "link": "/path/to/pdf9"
    },
    {
      "subject": "শহর সমন্বয় কমিটি (টিএলসিসি)'র সভা আহবান প্রসঙ্গে",
      "publicationDate": "১৫-০৬-২৩",
      "link": "/path/to/pdf10"
    },
    {
      "subject": "শহর সমন্বয় কমিটি সভার কার্যবিবরনী ১৩ নভেম্বর",
      "publicationDate": "১৩-১১-২২",
      "link": "/path/to/pdf11"
    },
    {
      "subject": "শহর সমন্বয় কমিটি সভায় অংশগ্রহন সম্পর্কিত নোটিশ ০৭ নভেম্বর",
      "publicationDate": "০৭-১১-২২",
      "link": "/path/to/pdf12"
    },
    {
      "subject": "তারাব পৌরসভার স্যানিটেশন সংক্রান্ত নোটিশ",
      "publicationDate": "২৩-১২-২০১৯",
      "link": "/path/to/pdf13"
    },
    {
      "subject": "পৌরসভার সকল নাগরিক সুবিধা অনলাইনে পেতে Digital Paurashava.gov.bd তে নিবন্ধন করুন",
      "publicationDate": "০৬-১২-২০১৯",
      "link": "/path/to/pdf14"
    },
    {
      "subject": "তারাব পৌরসভায় স্মার্ট জাতীয় পরিচয়পত্র বিতরন সময়সূচীসূচী",
      "publicationDate": "২৭-১১-২০১৯",
      "link": "/path/to/pdf15"
    },
    {
      "subject": "পৌরসভার সকল নাগরিক সুবিধার খরচাদি",
      "publicationDate": "২৭-১১-২০১৯",
      "link": "/path/to/pdf16"
    }
  ]
  
  return (
    <div>
      <h1 className="text-base font-bold  my-2 text-cyan-600 bg-orange-400">নোটিশ</h1>
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
