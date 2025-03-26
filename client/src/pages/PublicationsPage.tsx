import { useState } from 'react';
import { PUBLICATIONS } from '../lib/constants';

const PublicationsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [yearFilter, setYearFilter] = useState("All Years");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Filter publications based on search term and filters
  const filteredPublications = PUBLICATIONS.filter(publication => {
    const matchesSearch = 
      publication.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      publication.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      publication.author.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = categoryFilter === "All Categories" || 
      publication.tags.some(tag => tag === categoryFilter);
    
    const matchesYear = yearFilter === "All Years" || 
      publication.date.includes(yearFilter);
    
    return matchesSearch && matchesCategory && matchesYear;
  });

  return (
    <section className="container mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-4xl font-bold font-heading mb-4">STEM Publications</h1>
      <p className="text-lg text-[#6E7687] mb-12">Explore the latest research, articles, and papers in physics and related STEM fields.</p>
      
      {/* Search and Filter Bar */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-10">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow">
            <input 
              type="search" 
              placeholder="Search publications..." 
              value={searchTerm}
              onChange={handleSearch}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A56E4]"
            />
          </div>
          <div className="flex gap-3">
            <select 
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A56E4]"
            >
              <option>All Categories</option>
              <option>Physics</option>
              <option>Engineering</option>
              <option>Astrophysics</option>
              <option>Education</option>
              <option>Renewable Energy</option>
              <option>Space Exploration</option>
            </select>
            <select 
              value={yearFilter}
              onChange={(e) => setYearFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A56E4]"
            >
              <option>All Years</option>
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
              <option>2020</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Publications List */}
      <div className="grid gap-6">
        {filteredPublications.map((publication, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <img 
                  src={publication.image} 
                  alt="Journal Cover" 
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
              <div className="md:w-3/4">
                <div className="flex flex-wrap gap-2 mb-3">
                  {publication.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className={`px-3 py-1 ${
                        tag === "Physics" || tag === "Education" 
                          ? "bg-[#3A56E4]/10 text-[#3A56E4]" 
                          : "bg-[#FF9F43]/10 text-[#FF9F43]"
                      } text-sm rounded-full`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2 font-heading">{publication.title}</h3>
                <p className="text-[#6E7687] mb-3">
                  {publication.excerpt}
                </p>
                <div className="flex flex-wrap items-center text-sm text-[#6E7687] mb-4">
                  <span className="mr-4"><i className="fas fa-user mr-1"></i> {publication.author}</span>
                  <span className="mr-4"><i className="far fa-calendar mr-1"></i> Published: {publication.date}</span>
                  <span><i className="fas fa-book mr-1"></i> {publication.journal}</span>
                </div>
                <a href="#" className="text-[#3A56E4] font-medium hover:underline">Read More <i className="fas fa-arrow-right ml-1"></i></a>
              </div>
            </div>
          </div>
        ))}
        
        {filteredPublications.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-[#6E7687]">No publications found matching your search criteria.</p>
          </div>
        )}
        
        {filteredPublications.length > 0 && (
          <div className="flex justify-center mt-8">
            <button className="px-6 py-2 bg-[#3A56E4] text-white rounded-md font-medium hover:bg-[#3A56E4]/90 transition">
              Load More Publications
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PublicationsPage;
