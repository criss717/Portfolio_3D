import { navLinks, CV_URL } from "../constants"
import { logo, menu, close } from '../assets'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { useState} from "react"

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to={'/'}
          className="flex items-center gap-4"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt="logo" className="w-[3.5rem] h-[3.5rem] object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Criss &nbsp;<span className="sm:block hidden"> | Desarrollador Full Stack</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row items-center gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title
                  ? "text-white"
                  : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer transition-colors`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer transition-colors">
            <a 
              href={CV_URL} 
              download="CV_Cristian_Guzman.pdf"
              className="px-4 py-2 bg-tertiary rounded-xl border border-secondary/20 block"
            >
              Descargar CV
            </a>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[200px] z-10 rounded-xl`}>
            <ul className="list-none justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title
                      ? "text-white"
                      : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(link.title)
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <li className="font-poppins font-medium cursor-pointer text-[16px] text-secondary mt-2">
                <a 
                  href={CV_URL} 
                  download="CV_Cristian_Guzman.pdf"
                  className="w-full text-center px-4 py-2 bg-tertiary rounded-lg border border-secondary/20 block"
                >
                  Descargar CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar