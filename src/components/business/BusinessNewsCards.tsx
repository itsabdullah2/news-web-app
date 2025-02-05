import urlToSupImage from '../../assets/images/default.jpg';
import { useEffect, useState } from 'react';
import { Articles, getData } from '../../services';
import { Link } from 'react-router-dom';

const BusinessNewsCards = () => {
  const [businessNewsData, setBusinessNewsData] = useState<Articles[]>([]);
  useEffect(() => {
    getData('business', setBusinessNewsData);
  }, []);

  return (
    <div className="pb-20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl text-slate-700 font-bold mb-4">
          Business News
        </h2>
        <input
          type="search"
          id="business-search"
          placeholder="Search..."
          className="focus:outline-none text-slate-700 rounded-xl focus:placeholder:opacity-0 placeholder:duration-300 hover:placeholder:text-slate-900 border border-slate-700 py-3 px-2 w-[250px] bg-transparent"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Render sports data */}
        {businessNewsData.map((item, i) => (
          // it the id is null then it will be the index of the item
          <div key={i} className="card card-compact bg-white shadow-xl">
            <figure>
              <img
                src={item.urlToImage || urlToSupImage}
                alt={item.title}
                loading="lazy"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.description}</p>
              <div className="card-actions justify-end">
                <Link to={item.url} className="btn btn-primary text-white">
                  More Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessNewsCards;
