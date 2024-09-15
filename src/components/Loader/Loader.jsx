import css from "./Loader.module.css";
import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
    return (
      <>
        <div className={css.loaderOverlay}>
          <RotatingLines
            visible={true}
            height="96"
            width="96"
            color="Green"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
        ;
      </>
    );
};
export default Loader;
