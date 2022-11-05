import { baseImgUrl } from "../../api/api";
import './../../assets/MoviesPage-sec1.css'
const Section1 = ({ src, alt, title, des, tag }) => {
    return (
        <section className="mt-8">
            <img className="sec1-img object-cover relative" src={`${baseImgUrl}/w1280${src}`} alt={alt} />
            <div className="grandient-maker absolute top-8"></div>
            <div className="absolute top-20 left-10 text-5xl font-black text-white">
                {title}
            </div>
            <div className="absolute w-full bottom-10 flex justify-around">
                <div className=" w-full flex justify-around items-center p-10">
                    <div className="w-full">
                        <button className="w-1/2 movies-page-btn">
                            watch
                        </button>
                        <button className="w-1/2 movies-page-btn mt-4">
                            watch
                        </button>
                        <button className="w-1/2 movies-page-btn mt-4">
                            watch
                        </button>
                    </div>
                    <div className="text-white w-full">
                        {des}
                    </div>
                    <div className="text-white w-full text-center font-bold">
                        {tag}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section1;
