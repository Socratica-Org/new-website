export default function Footer() {
  return (
    <div className="bottom-0 left-0 right-0 h-fit bg-[#2A2928] p-[40px] ">
      <div className="pt-[100px] sm:pt-[170px]">
        <div className="text-[#FBF8EF] grid grid-cols-3 sm:grid-cols-4 gap-6 tracking-[-0.36px] uppercase font-dm-mono text-[12px] sm:text-[17px]">
          <p className="sm:col-span-2">
            FOR THE LOVE OF{" "}
            <span className="hidden sm:inline">
              <br></br>
            </span>{" "}
            MAKING
          </p>
          <p>
            FROM WATERLOO <br></br>
            TO THE{" "}
            <a href="/map" className="hover:underline">
              WORLD
            </a>
          </p>
          <div>
            <a
              href="https://www.instagram.com/socratica.info/"
              target="_blank"
              className="hover:underline"
            >
              <p>INSTAGRAM</p>
            </a>
            <a
              href="https://twitter.com/socratica"
              target="_blank"
              className="hover:underline"
            >
              <p>TWITTER</p>
            </a>
            <a
              href="https://ca.linkedin.com/company/socraticainfo"
              target="_blank"
              className="hover:underline"
            >
              <p>LINKEDIN</p>
            </a>
            <a
              href="https://www.youtube.com/watch?v=ydYDqZQpim8"
              target="_blank"
              className="hover:underline"
            >
              <p>EASTER EGG</p>
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSel0ZjxRpWJDDIe-CoJjbCDcqONsMWPClIrH7csZNOIhqETHA/viewform"
              target="_blank"
              className="hover:underline"
            >
              <p>FEEDBACK JAR</p>
            </a>
            {/* <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSel0ZjxRpWJDDIe-CoJjbCDcqONsMWPClIrH7csZNOIhqETHA/viewform"
              target="_blank"
              className="hover:underline"
            >
              <p>PRIVACY POLICY</p>
            </a> */}
            <a
              href="https://socratica.notion.site/Code-of-Conduct-52fb005f7e3a452096e235995a2f92e5"
              target="_blank"
              className="hover:underline"
            >
              <p>CODE OF CONDUCT</p>
            </a>
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
