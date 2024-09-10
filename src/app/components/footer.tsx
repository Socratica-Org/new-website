export default function Footer() {
    return (
      <div className="bottom-0 left-0 right-0 h-fit bg-[#2A2928] p-[40px]">
        <div className="pt-[100px] sm:pt-[170px]">
          <div className="text-[#FBF8EF] grid grid-cols-4 gap-2 tracking-[-0.36px] uppercase font-dm-mono">
            <p>FOR THE LOVE OF <span className="hidden sm:inline"><br></br></span> MAKING</p>
            <div></div>
            <p>FROM WATERLOO <br></br>TO THE WORLD</p>
            <div>
              <a href="https://www.instagram.com/socratica.info/" target="_blank"><p>INSTAGRAM</p></a>
              <a href="https://twitter.com/socratica" target="_blank"><p>TWITTER</p></a>
              <a href="https://ca.linkedin.com/company/socraticainfo" target="_blank"><p>LINKEDIN</p></a>
            </div>
          </div>


        <div className="divide-y divide-[#FBF8EF] pt-[100px] sm:pt-[50px] ">
            <div></div>
            <h2 className="pt-[50px] bottom-0 left-0 right-0 text-[25vw] text-[#FBF8EF] font-tiempos font-normal tracking-[-5px] sm:tracking-[-10px] md:tracking-[-16px] text-center leading-[100%] sm:leading-[105%]">
            Socratica
            </h2>
        </div>
        </div>
      </div>
    );
  }
  