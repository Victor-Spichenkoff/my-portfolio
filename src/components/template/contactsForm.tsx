"use client"

import { useTheme } from 'next-themes'
import { FaGithub, FaLinkedin, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'


export const ContactForms = () => {
    return (
        <div className="flex space-x-8">
          <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaGithub size={40} />
          </a>
          <a href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaLinkedin size={40} />
          </a>
          <a href="https://wa.me/5511987296116" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaWhatsapp size={40} />
          </a>
          <a href="https://t.me/5511987296116" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaTelegramPlane size={40} />
          </a>
          <a href="mailto:seu-email@example.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <HiOutlineMail size={40} />
          </a>
        </div>
    )
}



export const ContactFormsColors = () => {
    const theme = useTheme() 
    const currentTheme = theme.theme
    console.log(currentTheme)

    return (
      <div className="flex space-x-8" id='contact-icons'>
        <a href="https://github.com/Victor-Spichenkoff" target="_blank" rel="noopener noreferrer">
          <FaGithub size={40} color={`${currentTheme == "light" ? "#000" : "#FFF"}`} /> {/* Cor oficial do GitHub */}
        </a>
        <a href="https://www.linkedin.com/in/victor-spichenkoff-santana-8314b2189/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={40} color="#0A66C2" /> {/* Cor oficial do LinkedIn */}
        </a>
        <a href="https://wa.me/5511987296116" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={40} color="#25D366" /> {/* Cor oficial do WhatsApp */}
        </a>
        <a href="https://t.me/+5511987296116" target="_blank" rel="noopener noreferrer">
          <FaTelegramPlane size={40} color="#0088CC" /> {/* Cor oficial do Telegram */}
        </a>
        <a href="mailto:victor.ss.estudos@gmail.com" target="_blank" rel="noopener noreferrer">
          <HiOutlineMail size={40} color="#D44638" /> {/* Cor oficial do Gmail */}
        </a>
      </div>
    );
  }