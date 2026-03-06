import React from 'react';

const GlobalReach = () => {
  const countries = [
    { name: 'Colombia', users: '2.4M', code: 'co' },
    { name: 'Indonesia', users: '3.1M', code: 'id' },
    { name: 'France', users: '1.5M', code: 'fr' },
    { name: 'Spain', users: '2.0M', code: 'es' },
    { name: 'Qatar', users: '3.0M', code: 'qa' },
    { name: 'United States', users: '3.6M', code: 'us' },
    { name: 'Croatia', users: '2.9M', code: 'hr' },
    { name: 'Portugal', users: '2.7M', code: 'pt' },
  ];

  return (
    <section className="bg-[#f5f5f5] py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded-full mb-6">
          <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
          <span className="text-xs font-medium text-gray-700">Global Reach</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
          Connecting Millions of <br />
          Patients <span className="italic font-serif font-light">Worldwide</span>
        </h2>

        {/* Subtext */}
        <p className="max-w-xl mx-auto text-gray-500 leading-relaxed mb-16 text-sm md:text-base">
          Medicare operates across countries, making healthcare more 
          accessible and bringing patients closer to trusted medical 
          professionals.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {countries.map((country, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 text-left border border-gray-50"
            >
              {/* Flag Placeholder - Using flagcdn for realistic icons */}
              <div className="mb-6">
                <img 
                  src={`https://flagcdn.com/w80/${country.code}.png`} 
                  alt={`${country.name} flag`} 
                  className="w-8 h-8 rounded-full object-cover shadow-inner border border-gray-100"
                />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {country.name}
              </h3>
              <p className="text-sm text-gray-400">
                {country.users} registered users
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;