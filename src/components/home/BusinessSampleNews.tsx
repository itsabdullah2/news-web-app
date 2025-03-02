import urlToSupImage from '../../assets/images/default.jpg';
import { useEffect, useState } from 'react';
import { Articles, getData } from '../../services';
import { Link } from 'react-router-dom';

const BusinessSampleNews = () => {
  const [businessNewsData, setBusinessNewsData] = useState<Articles[]>([]);
  useEffect(() => {
    getData('business', (data) => {
      if (!data) {
        console.error('No articles received from API');
        return;
      }

      setBusinessNewsData(data.slice(0, 6)); // Limit to 6 items
    });
  }, []);

  return (
    <div className="">
      <h2 className="text-2xl text-slate-700 font-bold mb-4">Business News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Render business data */}
        {businessNewsData.map((item, i) => (
          // it the id is null then it will be the index of the item
          <div
            key={item.source.id ?? i}
            className="card card-compact bg-white shadow-xl"
          >
            <figure>
              <img
                src={item.urlToImage ?? urlToSupImage}
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
      <Link
        to="/business"
        className="btn-primary btn text-white mt-6 mx-auto w-40 flex"
      >
        More news
      </Link>
    </div>
  );
};

export default BusinessSampleNews;
