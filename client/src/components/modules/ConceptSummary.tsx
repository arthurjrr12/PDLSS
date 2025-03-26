import { useLearning } from "../../contexts/LearningContext";

const ConceptSummary = () => {
  const { currentModule, currentSubmodule } = useLearning();

  // Basic Scientific Method content (Introduction to Physics module)
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
            <div className="bg-primary/5 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Variables</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Independent Variable:</strong> The factor you change in an experiment.</li>
                <li><strong>Dependent Variable:</strong> The factor you measure in an experiment.</li>
                <li><strong>Control Variables:</strong> Factors kept constant during the experiment.</li>
              </ul>
            </div>
            
            <div className="bg-primary/5 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Scientific Theories and Laws</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Scientific Theory:</strong> A well-substantiated explanation of some aspect of the natural world that is supported by a vast body of evidence.</li>
                <li><strong>Scientific Law:</strong> A statement based on repeated experiments or observations that describes or predicts a range of natural phenomena.</li>
              </ul>
            </div>
            
            <div className="bg-primary/5 p-4 rounded-lg">
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
          
          <div className="bg-secondary/5 p-4 rounded-lg">
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
  
  // Forces & Motion: Uniformly accelerated motion
  if (currentModule?.id === 2 && currentSubmodule?.id === 5) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 font-heading">Uniformly Accelerated Motion</h2>
        
        <div className="mb-6">
          <p className="mb-4">
            Uniformly accelerated motion occurs when an object's velocity changes at a constant rate. This type of motion is fundamental to understanding how objects move under constant forces.
          </p>
          
          <div className="bg-primary/5 p-4 rounded-lg mb-4">
            <h3 className="font-bold mb-2">Key Equations for Uniformly Accelerated Motion:</h3>
            <div className="space-y-3 p-2">
              <div className="p-2 border-l-4 border-primary">
                <p className="font-mono">v = u + at</p>
                <p className="text-sm text-gray-600">Final velocity equals initial velocity plus acceleration multiplied by time</p>
              </div>
              
              <div className="p-2 border-l-4 border-primary">
                <p className="font-mono">s = ut + (1/2)at²</p>
                <p className="text-sm text-gray-600">Displacement equals initial velocity multiplied by time plus half of acceleration multiplied by time squared</p>
              </div>
              
              <div className="p-2 border-l-4 border-primary">
                <p className="font-mono">v² = u² + 2as</p>
                <p className="text-sm text-gray-600">Square of final velocity equals square of initial velocity plus twice the product of acceleration and displacement</p>
              </div>
              
              <div className="p-2 border-l-4 border-primary">
                <p className="font-mono">s = ((u + v)/2) × t</p>
                <p className="text-sm text-gray-600">Displacement equals average velocity multiplied by time</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-3 font-heading">Important Concepts</h3>
          
          <div className="space-y-4">
            <div className="bg-primary/5 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Acceleration</h4>
              <p className="mb-2">Acceleration is the rate of change of velocity with respect to time. In uniformly accelerated motion, acceleration is constant.</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Units: m/s²</li>
                <li>Formula: a = (v - u) / t</li>
                <li>Positive acceleration: object speeds up</li>
                <li>Negative acceleration: object slows down</li>
              </ul>
            </div>
            
            <div className="bg-primary/5 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Velocity-Time Graphs</h4>
              <p className="mb-2">For uniformly accelerated motion, the velocity-time graph is a straight line with constant slope.</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Slope of the line represents acceleration</li>
                <li>Area under the line represents displacement</li>
              </ul>
            </div>
            
            <div className="bg-primary/5 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Free Fall</h4>
              <p className="mb-2">Free fall is a special case of uniformly accelerated motion where objects fall under the influence of gravity only.</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Acceleration due to gravity (g) ≈ 9.8 m/s² (on Earth)</li>
                <li>Air resistance is neglected</li>
                <li>All objects fall with the same acceleration regardless of mass</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-3 font-heading">Application in Engineering</h3>
          <p className="mb-3">
            Understanding uniformly accelerated motion is crucial for engineers when designing vehicles, elevators, or any system where controlled acceleration is required.
          </p>
          
          <div className="bg-secondary/5 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Example: Calculating Stopping Distance</h4>
            <p className="mb-2">A car traveling at 30 m/s (approximately 108 km/h) applies brakes, causing a uniform deceleration of 6 m/s². What distance will the car travel before stopping?</p>
            
            <div className="p-3 bg-white rounded border">
              <p className="font-semibold">Solution:</p>
              <p>Using the formula v² = u² + 2as with v = 0 (final velocity is zero):</p>
              <p>0 = (30 m/s)² + 2 × (-6 m/s²) × s</p>
              <p>s = (30 m/s)² / (2 × 6 m/s²) = 75 meters</p>
              <p className="mt-2">The car will travel 75 meters before coming to a stop.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Energy, Work and Power
  if (currentModule?.id === 3 && currentSubmodule?.id === 9) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 font-heading">Potential and Kinetic Energies</h2>
        
        <div className="mb-6">
          <p className="mb-4">
            Energy is the capacity to do work. In physics, energy exists in many forms, with potential and kinetic energies being two of the most fundamental types that describe the energy of objects in motion and at rest.
          </p>
          
          <div className="bg-primary/5 p-4 rounded-lg mb-4">
            <h3 className="font-bold mb-2">Key Equations:</h3>
            <div className="space-y-3 p-2">
              <div className="p-2 border-l-4 border-primary">
                <p className="font-mono">KE = (1/2)mv²</p>
                <p className="text-sm text-gray-600">Kinetic energy equals half the mass multiplied by velocity squared</p>
              </div>
              
              <div className="p-2 border-l-4 border-primary">
                <p className="font-mono">PE = mgh</p>
                <p className="text-sm text-gray-600">Gravitational potential energy equals mass multiplied by gravitational acceleration multiplied by height</p>
              </div>
              
              <div className="p-2 border-l-4 border-primary">
                <p className="font-mono">PE = (1/2)kx²</p>
                <p className="text-sm text-gray-600">Elastic potential energy equals half the spring constant multiplied by displacement squared</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-3 font-heading">Types of Energy</h3>
          
          <div className="space-y-4">
            <div className="bg-primary/5 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Kinetic Energy</h4>
              <p className="mb-2">Kinetic energy is the energy possessed by an object due to its motion.</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Units: Joules (J)</li>
                <li>Depends on both mass and velocity</li>
                <li>Always positive (or zero)</li>
                <li>Quadruples when velocity doubles</li>
              </ul>
            </div>
            
            <div className="bg-primary/5 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Gravitational Potential Energy</h4>
              <p className="mb-2">Gravitational potential energy is the energy stored in an object due to its position in a gravitational field.</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Units: Joules (J)</li>
                <li>Depends on mass, height, and gravitational field strength</li>
                <li>Reference point (h = 0) can be chosen arbitrarily</li>
                <li>Increases linearly with height</li>
              </ul>
            </div>
            
            <div className="bg-primary/5 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Elastic Potential Energy</h4>
              <p className="mb-2">Elastic potential energy is stored in elastic materials when they are stretched or compressed.</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Units: Joules (J)</li>
                <li>Depends on spring constant and displacement</li>
                <li>Increases with the square of displacement</li>
                <li>Follows Hooke's Law for ideal springs</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-3 font-heading">Application in Engineering</h3>
          <p className="mb-3">
            Understanding energy principles is essential for engineers designing systems that convert or conserve energy.
          </p>
          
          <div className="bg-secondary/5 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Example: Calculating the Kinetic Energy of a Vehicle</h4>
            <p className="mb-2">A 1500 kg car travels at a speed of 25 m/s. What is its kinetic energy?</p>
            
            <div className="p-3 bg-white rounded border">
              <p className="font-semibold">Solution:</p>
              <p>Using the formula KE = (1/2)mv²:</p>
              <p>KE = (1/2) × 1500 kg × (25 m/s)²</p>
              <p>KE = (1/2) × 1500 kg × 625 m²/s²</p>
              <p>KE = 468,750 Joules or approximately 469 kJ</p>
            </div>
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
