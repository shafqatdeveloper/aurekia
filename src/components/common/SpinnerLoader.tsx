import "./SpinnerLoader.css";
interface SpinnerLoaderProps {
  className?: string;
}

const SpinnerLoader = ({ className }: SpinnerLoaderProps) => {
  return <div className={`loader ${className || ""}`}></div>;
};

export default SpinnerLoader;
