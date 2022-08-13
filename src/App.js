import "./App.css";

function App() {
  return (
    <div>
      <div className="flex flex-col h-full w-full absolute">
        <header className="sm:h-28 flex sm:flex-row flex-col sm:justify-between items-center">
          <img alt="Twitter Icon" src="/logo-black.png" className="h-full" />
          <div className="sm:mr-5 mt-3 flex flex-row items-center">
            <a
              href="https://twitter.com/oddfriends_club"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="ofc" src="/twitter-48.png" className="h-24" />
            </a>
            <a
              href="https://discord.com/invite/2X9UGY3qPJ"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="Discord Icon" src="/discord-new-48.png" className="h-24" />
            </a>
            <a
              href="https://www.instagram.com/oddfriends.club/"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="Instagram Icon" src="/instagram-80.png" className="h-24" />
            </a>
          </div>
        </header>

        <div className="flex flex-col justify-center items-center space-y-24 p-8 text-red-900 flex-1">
          <div className="flex flex-1 justify-between lg:w-1/2 w-full md:flex-row flex-col-reverse md:space-y-0 space-y-reverse space-y-8 space-x-0 items-center">
            <div className="text-xl">
              <ul style={{ listStyle: "inside" }} className="space-y-3">
                <li className="flex flex-row">
                  <i>
                    <img
                      alt="friends-svg"
                      src="/friends-48.png"
                      className="h-6 mr-2"
                    ></img>
                  </i>
                  Mint Price: Free + Gas
                </li>
                <li className="flex flex-row">
                  <i>
                    <img
                      alt="friends-svg"
                      src="/friends-48.png"
                      className="h-6 mr-2"
                    ></img>
                  </i>
                  Max 5 mint Per Wallet
                </li>
                <li className="flex flex-row">
                  <i>
                    <img
                      alt="friends-svg"
                      src="/friends-48.png"
                      className="h-6 mr-2"
                    ></img>
                  </i>
                  7.5% Royalties
                </li>
                <li className="flex flex-row">
                  <i>
                    <img
                      alt="friends-svg"
                      src="/friends-48.png"
                      className="h-6 mr-2"
                    ></img>
                  </i>
                  CC0
                </li>
                <li className="flex flex-row">
                  <i>
                    <img
                      alt="friends-svg"
                      src="/friends-48.png"
                      className="h-6 mr-2"
                    ></img>
                  </i>
                  Friends Driven
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center justify-between space-y-8">
              <img alt="ofc" src="/ofc.gif" className="max-w-none w-72" />
              <button className="text-3xl w-full bg-cyan-600 h-20 font-bold text-black border rounded-full">
                MINT NOW
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-row sm:justify-start justify-center">
          <img alt="5 odd friends" src="/123.png" className="h-32"></img>
        </div>

        <footer className="bg-gray-800 text-white py-4 w-full">
          <img alt="OFC LOGO WHITE" src="/logo-white.png" className="w-48 float-left" />
          <div className="flex flex-row justify-start space-x-8 mt-6 float-right mr-6">
            <a
              href="https://twitter.com/oddfriends_club"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="Twitter ICON" src="/twitter-48.png" className="h-12" />
            </a>
            <a
              href="https://discord.com/invite/2X9UGY3qPJ"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="Discord ICON" src="/discord-new-48.png" className="h-12" />
            </a>
            <a
              href="https://www.instagram.com/oddfriends.club/"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="Instagram ICON" src="/instagram-80.png" className="h-12" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
