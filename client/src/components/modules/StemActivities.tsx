import { useLearning } from "../../contexts/LearningContext";

const StemActivities = () => {
  const { currentModule, currentSubmodule } = useLearning();

  // Basic Scientific Method Activity (Introduction to Physics)
  if (currentModule?.id === 1 && currentSubmodule?.id === 1) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 font-heading">STEM Activities</h2>
        
        <div className="bg-white border rounded-lg overflow-hidden mb-8">
          <div className="flex items-center p-4 bg-primary/5 border-b">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
              <i className="fas fa-flask text-primary"></i>
            </div>
            <div>
              <h3 className="font-bold">Hands-On Activity for Engineers</h3>
              <p className="text-sm text-[#6E7687]">Apply scientific method to engineering problems</p>
            </div>
          </div>
          
          <div className="p-4">
            <h3 className="font-bold text-lg mb-3">Scientific Method in Action: Pendulum Investigation</h3>
            
            <p className="mb-4">
              In this activity, you will apply the scientific method to investigate factors that affect the period of a pendulum, a concept used in various engineering applications like seismic monitoring instruments.
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
            
            <div className="bg-secondary/5 p-4 rounded-lg mb-6">
              <h4 className="font-semibold mb-2">Expected Results:</h4>
              <p>
                According to physics theory, the period of a simple pendulum is independent of its mass (assuming no significant air resistance). Your results should show that different masses with the same string length have approximately the same period.
              </p>
            </div>
            
            <div className="bg-primary/5 p-4 rounded-lg mb-6">
              <h4 className="font-semibold mb-2">Engineering Connection:</h4>
              <p className="mb-2">
                Pendulums are used in various engineering applications:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Seismic sensors for earthquake detection</li>
                <li>Precision clocks and timing devices</li>
                <li>Structural testing for buildings and bridges</li>
                <li>Damping systems in skyscrapers to reduce vibration</li>
              </ul>
            </div>
            
            <div className="bg-primary/5 p-4 rounded-lg mb-6">
              <h4 className="font-semibold mb-2">Extension:</h4>
              <p className="mb-2">
                Once you've completed the initial investigation, explore these engineering-focused extensions:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Design a pendulum-based timing device that can measure exactly 1 second per swing</li>
                <li>Create a compound pendulum and analyze its motion compared to a simple pendulum</li>
                <li>Investigate how adding damping affects the period and amplitude over time</li>
              </ul>
            </div>
            
            <div className="flex justify-center mt-6">
              <button className="px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition">
                Submit Your Results
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Forces & Motion: Uniformly accelerated motion
  if (currentModule?.id === 2 && currentSubmodule?.id === 5) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 font-heading">STEM Activities</h2>
        
        <div className="bg-white border rounded-lg overflow-hidden mb-8">
          <div className="flex items-center p-4 bg-primary/5 border-b">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
              <i className="fas fa-car-crash text-primary"></i>
            </div>
            <div>
              <h3 className="font-bold">Engineering Design Challenge</h3>
              <p className="text-sm text-[#6E7687]">Apply acceleration concepts to a real engineering problem</p>
            </div>
          </div>
          
          <div className="p-4">
            <h3 className="font-bold text-lg mb-3">Crash Cushion Design</h3>
            
            <p className="mb-4">
              In this activity, you will design and test a crash cushion system that can safely decelerate a moving object, similar to how highway barriers and vehicle safety systems work.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Materials Needed:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Small toy car or marble (the "test vehicle")</li>
                  <li>Various cushioning materials (foam, cotton, bubble wrap, etc.)</li>
                  <li>Cardboard and tape for constructing barriers</li>
                  <li>Ramp or inclined plane (for consistent starting speed)</li>
                  <li>Measuring tape or ruler</li>
                  <li>Stopwatch</li>
                  <li>Phone with slow-motion video capability (optional)</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Engineering Challenge:</h4>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Set up a testing track with a ramp to give your "test vehicle" a consistent starting speed</li>
                  <li>Mark a "danger zone" that represents a distance in which the vehicle must come to a complete stop</li>
                  <li>Design a crash cushion system using available materials that will:
                    <ul className="list-disc pl-5 mt-1">
                      <li>Bring the vehicle to a complete stop</li>
                      <li>Minimize the maximum deceleration force (the "g-force")</li>
                      <li>Use minimal materials</li>
                    </ul>
                  </li>
                  <li>Test your design by releasing the vehicle from the ramp and observing how it interacts with your crash cushion</li>
                  <li>Measure and record:
                    <ul className="list-disc pl-5 mt-1">
                      <li>Initial velocity (can be calculated from the ramp height)</li>
                      <li>Stopping distance with your crash cushion</li>
                      <li>Approximate stopping time</li>
                    </ul>
                  </li>
                  <li>Calculate the average deceleration using a = (v - u)/t</li>
                  <li>Iterate on your design to improve performance</li>
                </ol>
              </div>
            </div>
            
            <div className="bg-secondary/5 p-4 rounded-lg mb-6">
              <h4 className="font-semibold mb-2">Physics Principles at Work:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Uniformly accelerated motion:</strong> The deceleration of the vehicle when it hits the crash cushion</li>
                <li><strong>Impulse and momentum:</strong> The change in momentum that occurs during the collision</li>
                <li><strong>Work and energy:</strong> The conversion of kinetic energy into deformation of the crash cushion</li>
                <li><strong>Newton's second law:</strong> The relationship between force, mass, and acceleration</li>
              </ul>
            </div>
            
            <div className="bg-primary/5 p-4 rounded-lg mb-6">
              <h4 className="font-semibold mb-2">Engineering Connection:</h4>
              <p className="mb-2">
                This activity replicates the work of safety engineers who design:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Highway crash barriers and impact attenuators</li>
                <li>Vehicle crumple zones and safety systems</li>
                <li>Packaging for fragile electronics and equipment</li>
                <li>Landing systems for spacecraft and drones</li>
              </ul>
            </div>
            
            <div className="flex justify-center mt-6">
              <button className="px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition">
                Submit Your Design Report
              </button>
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
        <h2 className="text-2xl font-bold mb-4 font-heading">STEM Activities</h2>
        
        <div className="bg-white border rounded-lg overflow-hidden mb-8">
          <div className="flex items-center p-4 bg-primary/5 border-b">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
              <i className="fas fa-wind text-primary"></i>
            </div>
            <div>
              <h3 className="font-bold">Renewable Energy Engineering Project</h3>
              <p className="text-sm text-[#6E7687]">Design and optimize energy conversion systems</p>
            </div>
          </div>
          
          <div className="p-4">
            <h3 className="font-bold text-lg mb-3">Wind Turbine Optimization Challenge</h3>
            
            <p className="mb-4">
              In this engineering activity, you will design, build, and test a small-scale wind turbine, focusing on maximizing energy conversion from wind to electricity.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Materials Needed:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Small DC motor (can be salvaged from an old toy)</li>
                  <li>Various materials for blades (cardboard, plastic, wood craft sticks, etc.)</li>
                  <li>Cork or bottle cap for the hub</li>
                  <li>Glue, tape, scissors, and basic crafting tools</li>
                  <li>Small LED bulb or multimeter to measure output</li>
                  <li>Fan or hair dryer as wind source</li>
                  <li>Ruler and protractor</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Engineering Challenge:</h4>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Research how wind turbines work and the principles that affect their efficiency:
                    <ul className="list-disc pl-5 mt-1">
                      <li>Number of blades</li>
                      <li>Blade shape and angle (pitch)</li>
                      <li>Blade length</li>
                      <li>Hub design</li>
                    </ul>
                  </li>
                  <li>Design your turbine blades, considering:
                    <ul className="list-disc pl-5 mt-1">
                      <li>Aerodynamic principles</li>
                      <li>Balance and stability</li>
                      <li>Structural integrity</li>
                    </ul>
                  </li>
                  <li>Construct your turbine by attaching the blades to the hub and mounting it on the motor shaft</li>
                  <li>Create a testing setup with consistent wind source at a fixed distance</li>
                  <li>Test your design and measure:
                    <ul className="list-disc pl-5 mt-1">
                      <li>Voltage output (using a multimeter)</li>
                      <li>Rotation speed (using a tachometer app or counting revolutions)</li>
                      <li>Starting wind speed (minimum required to begin rotation)</li>
                    </ul>
                  </li>
                  <li>Iterate on your design to improve performance</li>
                </ol>
              </div>
            </div>
            
            <div className="bg-secondary/5 p-4 rounded-lg mb-6">
              <h4 className="font-semibold mb-2">Physics Principles at Work:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Energy conversion:</strong> Wind energy (kinetic) to mechanical to electrical energy</li>
                <li><strong>Bernoulli's principle:</strong> Airfoil shape creates lift forces on the blade</li>
                <li><strong>Rotational dynamics:</strong> Torque and angular momentum</li>
                <li><strong>Power output:</strong> Relationship between energy production and time</li>
              </ul>
            </div>
            
            <div className="bg-primary/5 p-4 rounded-lg mb-6">
              <h4 className="font-semibold mb-2">Engineering Connection:</h4>
              <p className="mb-2">
                This activity relates directly to the work of:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Renewable energy engineers designing utility-scale wind turbines</li>
                <li>Mechanical engineers optimizing blade design and materials</li>
                <li>Electrical engineers developing power generation and transmission systems</li>
                <li>Environmental engineers assessing sustainable energy solutions</li>
              </ul>
            </div>
            
            <div className="flex justify-center mt-6">
              <button className="px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition">
                Submit Your Engineering Report
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
