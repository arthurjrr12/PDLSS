import { useState } from "react";
import { RESOURCE_CATEGORIES } from "../lib/constants";

const ResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Filter resources based on search term
  const filteredCategories = RESOURCE_CATEGORIES.map(category => {
    const filteredResources = category.resources.filter(resource =>
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return {
      ...category,
      resources: filteredResources
    };
  }).filter(category => category.resources.length > 0);

  return (
    <section className="container mx-auto max-w-6xl px-6 py-12">
      <div className="bg-white rounded-xl shadow-md p-8 mb-12">
        <h1 className="text-4xl font-bold font-heading mb-4">🧪 Physics Learning Resources</h1>
        <p className="text-lg mb-8">
          A curated collection of free and accessible physics tools for students, teachers, and science enthusiasts.
        </p>
        
        {/* Search Bar */}
        <div className="relative mb-12 max-w-2xl mx-auto">
          <input 
            type="search" 
            placeholder="Search resources..." 
            value={searchTerm}
            onChange={handleSearch}
            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A56E4]"
          />
          <button className="absolute right-3 top-3 text-[#3A56E4]">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
      
      {/* Resources Categories */}
      <div className="grid md:grid-cols-2 gap-8">
        {filteredCategories.map((category, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold font-heading mb-4 flex items-center">
              <i className={`${category.icon} text-[#3A56E4] mr-3`}></i>
              {category.title}
            </h2>
            <ul className="space-y-4">
              {category.resources.map((resource, resourceIndex) => (
                <li key={resourceIndex} className={resourceIndex < category.resources.length - 1 ? "pb-4 border-b" : ""}>
                  <a href={resource.url} target="_blank" rel="noopener noreferrer" className="block hover:text-[#3A56E4] transition">
                    <h3 className="font-bold text-lg">{resource.title}</h3>
                    <p className="text-[#6E7687]">{resource.description}</p>
                  </a>
                  
                  {resource.subLinks && (
                    <ul className="ml-5 mt-2 space-y-1">
                      {resource.subLinks.map((subLink, subLinkIndex) => (
                        <li key={subLinkIndex}>
                          <a href={subLink.url} target="_blank" rel="noopener noreferrer" className="text-[#3A56E4] hover:underline">
                            {subLink.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResourcesPage;
