import { useLearning } from "../../contexts/LearningContext";

const StemActivities = () => {
  const { currentModule, currentSubmodule } = useLearning();

  // Basic Scientific Method Activity (for demo purposes)
  if (currentModule?.id === 1 && currentSubmodule?.id === 1) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 font-heading">STEM Activities</h2>
        
        <div className="bg-white border rounded-lg overflow-hidden mb-8">
          <div className="flex items-center p-4 bg-[#3A56E4]/5 border-b">
            <div className="w-10 h-10 rounded-full bg-[#3A56E4]/20 flex items-center justify-center mr-3">
              <i className="fas fa-flask text-[#3A56E4]"></i>
            </div>
            <div>
              <h3 className="font-bold">Hands-On Activity</h3>
              <p className="text-sm text-[#6E7687]">Apply your knowledge to a real-world experiment</p>
            </div>
          </div>
          
          <div className="p-4">
            <h3 className="font-bold text-lg mb-3">Scientific Method in Action: Pendulum Investigation</h3>
            
            <p className="mb-4">
              In this activity, you will apply the scientific method to investigate factors that affect the period of a pendulum.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Materials Needed:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>String (about 1 meter long)</li>
                  <li>Various weights (washers, nuts, etc.)</li>
                  <li>Ruler or measuring tape</li>
                  <li>Stopwatch or timer app</li>
                  <li>Protractor</li>
                  <li>Support stand or doorway for hanging pendulum</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Procedure:</h4>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Formulate a question: Does the mass of the pendulum bob affect its period?</li>
                  <li>Research pendulum motion and the factors that might affect it.</li>
                  <li>Form a hypothesis: The mass of the pendulum bob does/does not affect the period.</li>
                  <li>Set up a pendulum with a string length of 50 cm.</li>
                  <li>Attach different masses to the end of the string.</li>
                  <li>For each mass, release the pendulum from the same angle (e.g., 15°).</li>
                  <li>Time how long it takes for 10 complete oscillations.</li>
                  <li>Divide by 10 to get the period of one oscillation.</li>
                  <li>Record your data in a table.</li>
                  <li>Analyze your results by creating a graph.</li>
                  <li>Draw conclusions about your hypothesis.</li>
                </ol>
              </div>
            </div>
            
            <div className="bg-[#FF9F43]/5 p-4 rounded-lg mb-6">
              <h4 className="font-semibold mb-2">Expected Results:</h4>
              <p>
                According to physics theory, the period of a simple pendulum is independent of its mass (assuming no significant air resistance). Your results should show that different masses with the same string length have approximately the same period.
              </p>
            </div>
            
            <div className="bg-[#3A56E4]/5 p-4 rounded-lg mb-6">
              <h4 className="font-semibold mb-2">Extension:</h4>
              <p className="mb-2">
                Once you've completed the initial investigation, you can explore how other variables affect the pendulum's period:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>How does the length of the string affect the period?</li>
                <li>Does the amplitude (angle of release) affect the period?</li>
                <li>How does the shape or size of the bob affect air resistance?</li>
              </ul>
            </div>
            
            <div className="flex justify-center mt-6">
              <button className="px-6 py-3 bg-[#3A56E4] text-white rounded-md font-medium hover:bg-[#3A56E4]/90 transition">
                Submit Your Results
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 font-heading">STEM Activities</h2>
      <p className="text-gray-500">
        STEM activities for this topic are currently under development. Please check back later for updates.
      </p>
    </div>
  );
};

export default StemActivities;
