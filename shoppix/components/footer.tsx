

function Footer() {

    return (
        <footer className="bg-[var(--foreground)] text-white">
          <div className=" flex flex-col justify-center items-center gap-10 py-6">
            <div className="text-center">
              <h3 className=" font-semibold uppercase text-lg pb-2">Help</h3>
              <ul className="*:pb-2 text-sm">
                <li>
                  <span>+234-(0)-801-234-5678</span>
                </li>
                <li>
                  <span>+234-(0)-801-234-5678 (Text)</span>
                </li>
                <li>
                  <span>help@shoppix.com</span>
                </li>
                <li>
                  <span>FAQ/Contact Us</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className=" font-semibold uppercase text-lg pb-2">Shop</h3>
              <ul className="*:pb-2 text-sm">
                <li className="flex justify-center items-center gap-1 hover:gap-2 transition-all duration-200 ease-in-out">
                  <span>
                    Men's Clothing
                  </span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </span>
                </li>
                <li className="flex justify-center items-center gap-1 hover:gap-2 transition-all duration-200 ease-in-out">
                  <span>
                    Women's Clothing
                  </span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>                
                  </span>
                </li>
                <li className="flex justify-center items-center gap-1 hover:gap-2 transition-all duration-200 ease-in-out">
                  <span>
                    Accessories
                  </span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>                  
                  </span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className=" font-semibold uppercase text-lg pb-2">Company</h3>
              <ul className="*:pb-2 text-sm">
                <li><span>About Us</span></li>
                <li><span>Our Story</span></li>
                <li><span>Terms of Use</span></li>
                <li><span>Privacy Policy</span></li>
                
              </ul>
            </div>
          </div>
          <div className=""></div>
          <div className=""></div>
        </footer>
    )
}

export default Footer
