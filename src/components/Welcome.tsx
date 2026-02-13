import gif from "../assets/gif/welcome.gif";

interface WelcomeProps {
  onNext: () => void;
}

const Welcome = ({ onNext }: WelcomeProps) => {
  return (
    <div className="flex flex-col items-center gap-8 p-4 text-center">
      <img src={gif} alt="Welcome" className="w-1/2" />
      <h1 className="text-4xl text-primary font-bold">Welcome My Love</h1>
      <p className="text-lg max-w-2xl text-primary font-bold">
        I've prepared something special for you, something i have been tweaking around with.
        I picked up coding becasue i saw a video of a girly doing this for her bf and i wanted to make 
        it for you becuase you are my girl, i would never make this for a man...anyhooo i hope you like this little something
        i made, its a bit sappy but it's my way of showing that i love you even though i dont say it often 🤍✨
      </p>
      <button
        onClick={onNext}
        className="px-6 py-2 rounded-lg transition-all bg-primary text-primary-content hover:bg-primary-focus"
      >
        Begin Journey
      </button>
    </div>
  );
};

export default Welcome;
