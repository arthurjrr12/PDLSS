import { useLearning } from "../../contexts/LearningContext";

const ConceptSummary = () => {
  const { currentModule, currentSubmodule } = useLearning();

  // Basic Scientific Method content (for demo purposes)
  if (currentModule?.id === 1 && currentSubmodule?.id === 1) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 font-heading">Basic Scientific Method</h2>
        
        <div className="mb-6">
          <p className="mb-4">
            The scientific method is a systematic approach to investigating phenomena, acquiring new knowledge, and correcting and integrating previous knowledge. It involves making observations, formulating hypotheses, conducting experiments, analyzing data, and drawing conclusions.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h3 className="font-bold mb-2">Key Steps of the Scientific Method:</h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>Ask a Question:</strong> Identify a phenomenon or problem to investigate.</li>
              <li><strong>Research:</strong> Gather information about the topic from existing sources.</li>
              <li><strong>Form a Hypothesis:</strong> Develop a testable explanation or prediction.</li>
              <li><strong>Test with an Experiment:</strong> Design and conduct an experiment to test the hypothesis.</li>
              <li><strong>Analyze Data:</strong> Collect and examine the results of the experiment.</li>
              <li><strong>Draw Conclusions:</strong> Determine if the data supports or refutes the hypothesis.</li>
              <li><strong>Report Results:</strong> Communicate findings to the scientific community.</li>
            </ol>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-3 font-heading">Important Concepts</h3>
          
          <div className="space-y-4">
            <div className="bg-[#3A56E4]/5 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Variables</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Independent Variable:</strong> The factor you change in an experiment.</li>
                <li><strong>Dependent Variable:</strong> The factor you measure in an experiment.</li>
                <li><strong>Control Variables:</strong> Factors kept constant during the experiment.</li>
              </ul>
            </div>
            
            <div className="bg-[#3A56E4]/5 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Scientific Theories and Laws</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Scientific Theory:</strong> A well-substantiated explanation of some aspect of the natural world that is supported by a vast body of evidence.</li>
                <li><strong>Scientific Law:</strong> A statement based on repeated experiments or observations that describes or predicts a range of natural phenomena.</li>
              </ul>
            </div>
            
            <div className="bg-[#3A56E4]/5 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Observations vs. Inferences</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Observation:</strong> Information gathered through the senses or measuring instruments.</li>
                <li><strong>Inference:</strong> An interpretation or explanation based on observations.</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-3 font-heading">Application in Physics</h3>
          <p className="mb-3">
            In physics, the scientific method is used to investigate natural phenomena, develop models of physical systems, and discover the fundamental laws governing the universe. For example:
          </p>
          
          <div className="bg-[#FF9F43]/5 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Example: Investigating the Law of Reflection</h4>
            <ol className="list-decimal pl-5 space-y-1">
              <li><strong>Question:</strong> Does the angle of incidence equal the angle of reflection for a light beam?</li>
              <li><strong>Research:</strong> Study existing literature on reflection of light.</li>
              <li><strong>Hypothesis:</strong> The angle of incidence equals the angle of reflection.</li>
              <li><strong>Experiment:</strong> Set up a light source, mirror, and protractor to measure angles.</li>
              <li><strong>Analysis:</strong> Compare measured angles of incidence and reflection.</li>
              <li><strong>Conclusion:</strong> Determine if the data supports the hypothesis.</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 font-heading">
        {currentSubmodule?.title}
      </h2>
      <p className="text-gray-500">
        Content for this topic is currently under development. Please check back later for updates.
      </p>
    </div>
  );
};

export default ConceptSummary;
