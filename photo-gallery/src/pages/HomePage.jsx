function HomePage() {
    return (
        <>
            <div className="bg-nature min-h-screen bg-cover bg-fixed flex flex-col justify-center p-5 md:p-10 lg:p-20">
                <div className="flex flex-col justify-start items-start max-w-md">
                    <h1 className="text-4xl md:text-6xl font-bold font-mono text-white">Nature</h1>
                    <p className="mt-4 text-base md:text-lg lg:text-xl text-white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed eaque voluptas nulla quisquam voluptatibus ratione impedit ducimus. Itaque expedita repudiandae earum nemo ratione deserunt odit consequuntur cupiditate repellendus error doloribus eaque esse animi perspiciatis totam obcaecati iure, temporibus alias iusto deleniti fugit nesciunt asperiores nostrum enim! Accusamus nobis recusandae hic?
                    </p>
                    <button class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow mt-5">
                      <div class="absolute inset-0 w-3 bg-green-600 transition-all duration-[350ms] ease-out group-hover:w-full"></div>
                      <span class="relative text-black group-hover:text-white ">Section1</span>
                    </button>
                </div>
            </div>

            <div className="bg-people min-h-screen bg-cover bg-fixed flex flex-col justify-center p-5 md:p-10 lg:p-20">
                <div className="flex flex-col justify-start items-start max-w-2xl">
                    <h1 className="text-4xl md:text-6xl text-white font-bold font-mono">Section 1</h1>
                    <p className="mt-4 text-base md:text-lg lg:text-xl text-white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed eaque voluptas nulla quisquam voluptatibus ratione impedit ducimus. Itaque expedita repudiandae earum nemo ratione deserunt odit consequuntur cupiditate repellendus error doloribus eaque esse animi perspiciatis totam obcaecati iure, temporibus alias iusto deleniti fugit nesciunt asperiores nostrum enim! Accusamus nobis recusandae hic?
                    </p>
                    <button class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow mt-5">
                      <div class="absolute inset-0 w-3 bg-red-600 transition-all duration-[350ms] ease-out group-hover:w-full"></div>
                      <span class="relative text-black group-hover:text-white">Section1</span>
                    </button>
                </div>
            </div>
            <div className="bg-food h-screen bg-cover bg-fixed flex flex-col justify-center p-5 md:p-10 lg:p-20">
                <div className="flex flex-col justify-start items-start max-w-2xl">
                    <h1 className="text-4xl md:text-6xl text-white font-bold font-mono">Section 1</h1>
                    <p className="mt-4 text-base md:text-lg lg:text-xl text-white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed eaque voluptas nulla quisquam voluptatibus ratione impedit ducimus. Itaque expedita repudiandae earum nemo ratione deserunt odit consequuntur cupiditate repellendus error doloribus eaque esse animi perspiciatis totam obcaecati iure, temporibus alias iusto deleniti fugit nesciunt asperiores nostrum enim! Accusamus nobis recusandae hic?
                    </p>
                    <button class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow mt-5">
                      <div class="absolute inset-0 w-3 bg-amber-400 transition-all duration-[350ms] ease-out group-hover:w-full"></div>
                      <span class="relative text-black group-hover:text-white">Section1</span>
                    </button>
                </div>
            </div>
            <div className="bg-shows h-screen bg-cover bg-fixed flex flex-col justify-center p-5 md:p-10 lg:p-20">
                <div className="flex flex-col justify-start items-start max-w-2xl">
                    <h1 className="text-4xl md:text-6xl text-white font-bold font-mono">Section 1</h1>
                    <p className="mt-4 text-base md:text-lg lg:text-xl text-white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed eaque voluptas nulla quisquam voluptatibus ratione impedit ducimus. Itaque expedita repudiandae earum nemo ratione deserunt odit consequuntur cupiditate repellendus error doloribus eaque esse animi perspiciatis totam obcaecati iure, temporibus alias iusto deleniti fugit nesciunt asperiores nostrum enim! Accusamus nobis recusandae hic?
                    </p>
                    <button class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow mt-5">
                      <div class="absolute inset-0 w-3 bg-cyan-400 transition-all duration-[350ms] ease-out group-hover:w-full"></div>
                      <span class="relative text-black group-hover:text-white">Section1</span>
                    </button>
                </div>
            </div>
         
        </>
    );
}

export default HomePage;
