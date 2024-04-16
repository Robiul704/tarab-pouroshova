import { Link } from "react-router-dom";


const ShebaSomuho = () => {
    const sheba=[
        {
          "id": 1,
          "title": "Development Project",
          "image": "  https://i.ibb.co/4dMyqy8/S-Development-1.jpg",
          "link":'https://www.tarabopaurashava.com/document/tender/tender2023-2024.pdf'
         
        },
        {
          "id": 2,
          "title": "Budget",
          "image": "https://i.ibb.co/YfP0nrJ/S-Budget.jpg",
          "link":'https://www.tarabopaurashava.com/document/budget/budget_report.pdf'
        },
        {
          "id": 3,
          "title": "APP",
          "image": "https://i.ibb.co/JtGJXs2/S-APP.jpg",
          "link":'/'
        },
        {
          "id": 4,
          "title": "Holding Tax",
          "image": "https://i.ibb.co/PYJs05v/S-Holding-Tax.jpg",
          "link":'/'
        },
        {
          "id": 5,
          "title": "Health",
          "image": " https://i.ibb.co/G2zs8Vn/S-Health.jpg",
          "link":'https://www.tarabopaurashava.com/document/department_information/health_department.pdf'
        },
        {
          "id": 6,
          "title": "Town Planning",
          "image": " https://i.ibb.co/02rRngD/S-Town-Planning.jpg",
          "link":'/'
        },
        {
          "id": 7,
          "title": "Electrical",
          "image": "https://i.ibb.co/pxtTBjF/S-mechanical-electrical.jpg",
          "link":'https://www.tarabopaurashava.com/document/department_information/electrical_department.pdf'
        },
        {
          "id": 8,
          "title": "Conservancy",
          "image": "https://i.ibb.co/hfSsrBz/S-Conservancy.jpg",
          "link":'/'
        },
        {
          "id": 9,
          "title": "Water Supply",
          "image": "https://i.ibb.co/mNjtWFH/S-Water-Supply.jpg",
          "link":'/'
        },
        {
          "id": 10,
          "title": "Mechanical",
          "image": "https://i.ibb.co/zh34gRr/S-Mechanical.jpg",
          "link":'/'
        },
        {
          "id": 11,
          "title": "E-GP",
          "image": "https://i.ibb.co/CJnJP4n/S-EGP.jpg",
          "link":'/'
        },
        {
          "id": 12,
          "title": "Trade License",
          "image": "https://i.ibb.co/z4MfyKw/S-Trade-License.jpg",
          "link":'/'
        },
        {
          "id": 13,
          "title": "Birth verify",
          "image": "https://i.ibb.co/CwbHd3w/S-bris.jpg",
          "link":'https://everify.bdris.gov.bd'
        },
        {
          "id": 14,
          "title": "COV-19 Vaccine",
          "image": " https://i.ibb.co/ct1rR6H/S-Vaccine.jpg",
          "link":'https://surokkha.gov.bd/'
        }
      ]
      
    return (
        <div>
            <h1 className="text-base font-bold p-2 text-cyan-600 bg-orange-400 my-2">সেবাসমূহ</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-2">
                {
                    sheba.map(s=><Link to={s.link} key={s.id}> 
                    <div className="border border-black p-3" >
                        <h1 className="text-black font-base">{s.title}</h1>
                        <img src={s.image} alt="" />
                        </div>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default ShebaSomuho;