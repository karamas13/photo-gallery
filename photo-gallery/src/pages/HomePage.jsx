import { useNavigate } from "react-router";

function HomePage() {
  const nav = useNavigate();

    return (
        <div className="min-h-screen scrollbar scrollbar-thin scrollbar-thumb-stone-950 scrollbar-track-stone-700 h-32 overflow-y-scroll" >
            <div className="lg:bg-nature md:bg-nature bg-nature2  min-h-screen bg-cover bg-fixed flex flex-col justify-center p-5 md:p-10 lg:p-20 ">
                <div className="flex flex-col justify-start items-start max-w-md">
                    <h1 className="text-4xl md:text-6xl font-bold font-mono text-white">Nature</h1>
                    <p className="mt-4 text-base md:text-lg lg:text-xl text-white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed eaque voluptas nulla quisquam voluptatibus ratione impedit ducimus. Itaque expedita repudiandae earum nemo ratione deserunt odit consequuntur cupiditate repellendus error doloribus eaque esse animi perspiciatis totam obcaecati iure, temporibus alias iusto deleniti fugit nesciunt asperiores nostrum enim! Accusamus nobis recusandae hic?
                    </p>
                    <button onClick={() => {nav('/Ecosystem')}}  class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow mt-5">
                      <div class="absolute inset-0 w-3 bg-green-600 transition-all duration-[350ms] ease-out group-hover:w-full"></div>
                      <span class="relative text-black group-hover:text-white ">Nature</span>
                    </button>
                </div>
            </div>

            <div className="lg:bg-people md:bg-people bg-individuals min-h-screen bg-cover bg-fixed flex flex-col justify-center p-5 md:p-10 lg:p-20">
                <div className="flex flex-col justify-start items-start max-w-2xl">
                    <h1 className="text-4xl md:text-6xl text-white font-bold font-mono">Individuals</h1>
                    <p className="mt-4 text-base md:text-lg lg:text-xl text-white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed eaque voluptas nulla quisquam voluptatibus ratione impedit ducimus. Itaque expedita repudiandae earum nemo ratione deserunt odit consequuntur cupiditate repellendus error doloribus eaque esse animi perspiciatis totam obcaecati iure, temporibus alias iusto deleniti fugit nesciunt asperiores nostrum enim! Accusamus nobis recusandae hic?
                    </p>
                    <button class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow mt-5">
                      <div class="absolute inset-0 w-3 bg-red-600 transition-all duration-[350ms] ease-out group-hover:w-full"></div>
                      <span class="relative text-black group-hover:text-white">Individuals</span>
                    </button>
                </div>
            </div>
            <div className="lg:bg-food md:bg-food bg-mealsnsips h-screen bg-cover bg-fixed flex flex-col justify-center p-5 md:p-10 lg:p-20">
                <div className="flex flex-col justify-start items-start max-w-2xl">
                    <h1 className="text-4xl md:text-6xl text-white font-bold font-mono">Meals n' Sips</h1>
                    <p className="mt-4 text-base md:text-lg lg:text-xl text-white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed eaque voluptas nulla quisquam voluptatibus ratione impedit ducimus. Itaque expedita repudiandae earum nemo ratione deserunt odit consequuntur cupiditate repellendus error doloribus eaque esse animi perspiciatis totam obcaecati iure, temporibus alias iusto deleniti fugit nesciunt asperiores nostrum enim! Accusamus nobis recusandae hic?
                    </p>
                    <button onClick={() => {nav('/MealsnShips')}} class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow mt-5">
                      <div class="absolute inset-0 w-3 bg-amber-400 transition-all duration-[350ms] ease-out group-hover:w-full"></div>
                      <span class="relative text-black group-hover:text-white">Meals n' Sips</span>
                    </button>
                </div>
            </div>
            <div className="lg:bg-shows md:bg-shows bg-concerts h-screen bg-cover bg-fixed flex flex-col justify-center p-5 md:p-10 lg:p-20">
                <div className="flex flex-col justify-start items-start max-w-2xl">
                    <h1 className="text-4xl md:text-6xl text-white font-bold font-mono">Concerts</h1>
                    <p className="mt-4 text-base md:text-lg lg:text-xl text-white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed eaque voluptas nulla quisquam voluptatibus ratione impedit ducimus. Itaque expedita repudiandae earum nemo ratione deserunt odit consequuntur cupiditate repellendus error doloribus eaque esse animi perspiciatis totam obcaecati iure, temporibus alias iusto deleniti fugit nesciunt asperiores nostrum enim! Accusamus nobis recusandae hic?
                    </p>
                    <button onClick={() => {nav('/Concerts')}} class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow mt-5">
                      <div class="absolute inset-0 w-3 bg-cyan-400 transition-all duration-[350ms] ease-out group-hover:w-full"></div>
                      <span class="relative text-black group-hover:text-white">Concerts</span>
                    </button>
                </div>
            </div>
         
        </div>
    );
}

export default HomePage;
