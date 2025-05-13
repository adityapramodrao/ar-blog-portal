import React, { useState } from "react";
import {Eye, EyeOff} from "lucide-react"

export const PasswordInp = ({value, onChange, placeholder}) => {
    const [isShowpass, setIsshowpass] = useState(false)
    const toggleshowPass = () => {
        setIsshowpass(!isShowpass)
    }
    return (
        <>
          <div className="flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3">
              <input
                value={value}
                placeholder={placeholder || "Password"}
                onChange={onChange}
                type={isShowpass ? "text" : "password"}
                className="w-full text-sm bg-transparent py-3 mr-3 rounded outline-none"
                
               />
              { isShowpass ?
                <Eye 
                    size={22} 
                    className="text-primary cursor-pointer" 
                    onClick={() => toggleshowPass()}
                /> :
                <EyeOff 
                    size={22} 
                    className="text-primary cursor-pointer" 
                    onClick={() => toggleshowPass()}
                />
              }

          </div>
        </>
    )
}

export default PasswordInp;


