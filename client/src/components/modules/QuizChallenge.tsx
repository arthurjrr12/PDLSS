import { useLearning } from "../../contexts/LearningContext";

const QuizChallenge = () => {
  const { 
    currentQuestions, 
    currentQuestionIndex,
    quizInProgress,
    showResults,
    score,
    selectAnswer
  } = useLearning();

  if (!currentQuestions.length) {
    return <div>No questions available</div>;
  }

  return (
    <div className="p-6">
      {!showResults ? (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold font-heading">Quiz Challenge</h2>
            <div className="text-sm text-[#6E7687]">
              Question {currentQuestionIndex + 1} of {currentQuestions.length}
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h3 className="font-bold text-lg mb-4">{currentQuestions[currentQuestionIndex].question}</h3>
            
            <div className="space-y-3">
              {currentQuestions[currentQuestionIndex].options.map((option, index) => {
                const isSelected = currentQuestions[currentQuestionIndex].selectedAnswer === index;
                const isCorrect = isSelected && index === currentQuestions[currentQuestionIndex].correctAnswer;
                const isIncorrect = isSelected && index !== currentQuestions[currentQuestionIndex].correctAnswer;
                
                let optionClass = "p-4 border rounded-lg cursor-pointer transition";
                
                if (isSelected) optionClass += " selected";
                if (isCorrect) optionClass += " correct bg-[#28C76F]/10 border-[#28C76F]";
                else if (isIncorrect) optionClass += " incorrect bg-[#EA5455]/10 border-[#EA5455]";
                else if (isSelected) optionClass += " bg-[#3A56E4]/20 border-[#3A56E4]";
                
                return (
                  <div 
                    key={index}
                    onClick={() => quizInProgress && selectAnswer(index)}
                    className={optionClass}
                  >
                    <div className="flex items-start">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-3 mt-0.5 ${
                        isSelected ? 'border-[#3A56E4] bg-[#3A56E4]/10' : 'border-gray-300'
                      }`}>
                        {isSelected && (
                          <div className="w-3 h-3 rounded-full bg-[#3A56E4]"></div>
                        )}
                      </div>
                      <div>{option}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2 w-48">
                <div 
                  className="bg-[#3A56E4] h-2 rounded-full" 
                  style={{ width: `${(currentQuestionIndex / currentQuestions.length) * 100}%` }}
                ></div>
              </div>
              <span className="ml-3 text-sm text-[#6E7687]">
                {Math.round((currentQuestionIndex / currentQuestions.length) * 100)}% complete
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="text-center mb-8">
            {score >= 3 ? (
              <div className="achievement">
                <div className="w-24 h-24 bg-[#28C76F]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-check-circle text-4xl text-[#28C76F]"></i>
                </div>
                <h2 className="text-2xl font-bold font-heading mb-2">Congratulations!</h2>
                <p className="text-lg mb-2">You passed the quiz challenge!</p>
                <p className="text-[#6E7687]">You got {score} out of {currentQuestions.length} questions correct.</p>
              </div>
            ) : (
              <div>
                <div className="w-24 h-24 bg-[#EA5455]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-exclamation-circle text-4xl text-[#EA5455]"></i>
                </div>
                <h2 className="text-2xl font-bold font-heading mb-2">Keep practicing!</h2>
                <p className="text-lg mb-2">You need to review and retake the quiz.</p>
                <p className="text-[#6E7687]">You got {score} out of {currentQuestions.length} questions correct.</p>
              </div>
            )}
          </div>
          
          <div className="space-y-4">
            {currentQuestions.map((question, qIndex) => (
              <div key={qIndex} className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold mb-3">{question.question}</h3>
                
                <div className="space-y-2 mb-3">
                  {question.options.map((option, oIndex) => {
                    let optionClass = "p-3 border rounded-lg";
                    
                    if (oIndex === question.correctAnswer) {
                      optionClass += " bg-[#28C76F]/10 border-[#28C76F]";
                    } else if (question.selectedAnswer === oIndex && oIndex !== question.correctAnswer) {
                      optionClass += " bg-[#EA5455]/10 border-[#EA5455]";
                    } else {
                      optionClass += " border-gray-200";
                    }
                    
                    return (
                      <div key={oIndex} className={optionClass}>
                        <div className="flex items-start">
                          <div>{option}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                {question.selectedAnswer !== question.correctAnswer && (
                  <div className="text-sm text-[#EA5455]">
                    <i className="fas fa-info-circle mr-1"></i> The correct answer is: {question.options[question.correctAnswer]}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex justify-center">
            {score >= 3 ? (
              <button 
                onClick={() => window.location.reload()} // This is a placeholder; in a real app, we'd use a function from the learning context
                className="px-6 py-3 bg-[#28C76F] text-white rounded-md font-medium hover:bg-[#28C76F]/90 transition"
              >
                Continue to Next Topic
              </button>
            ) : (
              <button 
                onClick={() => window.location.reload()} // This is a placeholder; in a real app, we'd use a function from the learning context
                className="px-6 py-3 bg-[#3A56E4] text-white rounded-md font-medium hover:bg-[#3A56E4]/90 transition"
              >
                Retake Quiz
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizChallenge;
