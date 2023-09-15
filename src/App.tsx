import quiz from "./assets/images/undraw_adventure_4hum 1.svg";
import { MainContainer } from "./components/MainContainer";
import { QuizProvider } from "./context/QuizProvider";

const App = () => {
  return (
    <main className="min-h-screen font-poppins flex justify-center items-center flex-col bg-[url('./assets/images/background.png')] bg-cover bg-fixed sm:w-[100%]">
      <div className="flex flex-row xl:w-[23%] lg:w-[35%] justify-between items-center sm:w-[60%] z-50 -translate-y-3">
        <h1 className="text-white font-bold xl:text-4xl text-left xl:w-[100%] lg:w-[50%] lg:text-2xl md:w-[50%] sm:w-[50%] translate-y-6">
          COUNTRY QUIZ
        </h1>
        <img
          src={quiz}
          alt="quiz_icon"
          className="lg:w-[150px] xl:w-[165px]  translate-y-11 translate-x-10"
        />
      </div>
      <div className="rounded-3xl bg-white w-[464px] py-10 px-10 ">
        <QuizProvider>
          <MainContainer />
        </QuizProvider>
      </div>
    </main>
  );
};

export default App;
