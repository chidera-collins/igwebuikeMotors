import React,  { useState } from 'react'
import Button from '../../Reusuable Folder/Button'
import { motion } from "framer-motion";
import { CiSearch } from "react-icons/ci";


function HomeComponent1() {
  const [carType, setCarType] = useState("new");

  return (
    <div>
    <div className="min-h-[100vh] p-[20px] landingp">
        <div className="min-h-[inherit] flex flex-col lg:flex lg:flex-row items-center">
          {/* Left Side Text */}
          <motion.div 
          initial={{ opacity: 0, x:-10 }}
          whileInView={{ opacity: 1, x:0 }}
        transition={{delay:1, duration:2}}
        viewport={{ once: true }}
          className="h-[400px] mt-[30px] w-[100%] lg:w-[60%] capitalize flex flex-col leading-[40px] justify-center text-start items-center font-bold p-[20px]">
            <h1 className="text-[1.6rem] lg:text-[2rem] text-[white]">
              Unleash the road: discover your perfect{" "}
              <span className="text-text underline">cars</span> ride today
            </h1>
            <h2 className="lg:text-[2rem] text-start text-[white]">
              buy and <span className="text-text">drive</span>
            </h2>
          </motion.div>

          {/* Right Side Form */}          
          <div className="bg-[white] w-full lg:w-[30%] h-[340px] p-[20px] border-box">
            <div className="w-[100%] h-[280px] p-2">
              <form action="" onSubmit={(e) => e.preventDefault()}>
                {/* Buttons to Select Car Type */}
                <div className="flex justify-center gap-3">
                  <Button
                    className={`h-[40px] w-[100px] rounded-sm text-white cursor-pointer ${
                      carType === "new" ? "bg-text": " bg-[#E2DFD0]"
                    }`}
                    label="New Car"
                    onClick={() => setCarType("new")}
                  />
                  <Button
                    className={`h-[40px] w-[100px] rounded-sm text-white cursor-pointer ${
                      carType === "used" ? "bg-text":"bg-[#E2DFD0]" 
                    }`}
                    label="Used Car"
                    onClick={() => setCarType("used")}
                  />
                </div>

                {/* Transitioned Form */}
                <motion.div
                  key={carType} // Ensures re-rendering on type change
                  initial={{ opacity: 0, y: 20 }} // Start with lower opacity & slight downward position
                  animate={{ opacity: 1, y: 0 }} // Animate to full opacity & normal position
                  exit={{ opacity: 0, y: -20 }} // Exit with fade-out and slight upward movement
                  transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth animation
                >
                  <select className="w-full mt-2 bg-[#E2DFD0] h-[30px] overflow-scroll  ">
                    <option value="" className="capitalize">Car Make</option>
                    <option value="Bmw">BMW</option>
                    <option value="Lexus">Lexus</option>
                    <option value="Mercedes">Mercedes</option>
                    <option value="Honda">Honda</option>
                  </select>

                  <select className="w-full mt-4 bg-[#E2DFD0] h-[30px] ">
                    <option value="">Car Model</option>
                    <option value="115">115</option>
                    <option value="151">151</option>
                    <option value="152">152</option>
                    <option value="156">156</option>
                  </select>

                  <select className="w-full mt-4 bg-[#E2DFD0] h-[30px]">
                    <option value="price">Price</option>
                    <option value="22000">22,000$</option>
                    <option value="20000">20,000$</option>
                    <option value="15000">15,000$</option>
                  </select>

                  <select className="w-full mt-4 bg-[#E2DFD0] h-[30px] border-[black] ">
                    <option value="">Location</option>
                    <option value="Lagos">Lagos</option>
                    <option value="Abuja">Abuja</option>
                    <option value="Port-Harcourt">Port-Harcourt</option>
                    <option value="Benin">Benin</option>
                    <option value="Asaba">Asaba</option>
                  </select>
                </motion.div>

                {/* Search Button */}
                <div className="relative h-[40px] w-full mt-4 overflow-hidden bg-text rounded group cursor-pointer">

                    <div className="absolute inset-0 z-30 flex items-center gap-1 justify-center pointer-events-none">
                        <span className="text-white font-semibold text-[1rem]"><CiSearch/></span>
                        <span className="text-white font-semibold text-[1rem]">  Search</span>
                    </div>

                  
                    <Button
                        type="submit"
                        className="absolute top-[-100%] w-full h-full bg-mybg z-20 transition-all duration-1000 ease-in-out group-hover:top-0"
                    />

                    <Button
                        type="submit"
                        className="absolute top-[100%] w-full h-full bg-mybg z-10 transition-all duration-1000 ease-in-out group-hover:top-0"
                    />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeComponent1