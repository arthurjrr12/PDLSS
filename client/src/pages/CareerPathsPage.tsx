import { CAREER_PATHS } from "../lib/constants";
import CareerPathCard from "../components/elements/CareerPathCard";
import { useLearning } from "../contexts/LearningContext";

const CareerPathsPage = () => {
  const { selectCareerPath } = useLearning();

  return (
    <section className="container mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-4xl font-bold font-heading mb-4">Career Paths</h1>
      <p className="text-lg text-[#6E7687] mb-12">Choose a career path to access physics content tailored to your professional goals.</p>
      
      <div className="grid md:grid-cols-3 gap-8">
        {CAREER_PATHS.map((path) => (
          <CareerPathCard
            key={path.id}
            id={path.id}
            title={path.title}
            description={path.description}
            features={path.features}
            imageSrc={path.imageSrc}
            onSelect={selectCareerPath}
          />
        ))}
      </div>
    </section>
  );
};

export default CareerPathsPage;
