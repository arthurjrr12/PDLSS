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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b980ff]"
            />
          </div>
          <div className="flex gap-3">
            <select 
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b980ff]"
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
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b980ff]"
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
      
      {/* Publications Under Development Message */}
      <div className="bg-white rounded-xl shadow-md p-12 text-center">
        <div className="flex flex-col items-center justify-center">
          <div className="text-[#b980ff] mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-4 font-heading">Content for this topic is currently under development</h3>
          <p className="text-[#6E7687] text-lg mb-6">
            Please check back later for updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PublicationsPage;
