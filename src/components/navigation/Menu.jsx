import { useState, useRef, useEffect } from "react"
import styled from "styled-components"

const StyledContainerMenu = styled.div`
  position: relative;
`

const Dots = styled.img`
  cursor: pointer;
  padding: 3px;
  transition: all 0.5s;

  :hover {
    background-color: rgba(0, 0, 0, 0.15);
    border-radius: 50%;
  }
`

const StyledMenu = styled.div`
  position: absolute;
  right: 0;
  width: 200px;
  background-color: ${props => props.theme.white};
  box-shadow: 6px 15px 15px 5px rgba(0, 0, 0, 0.15);

  display: ${props => props.show ? 'block' : 'none'};
`

const StyledOption = styled.div`
  padding: 15px;
  cursor: pointer;

  :hover {
    background-color: ${props => props.theme.inputBackground};
  }
`

const Menu = ({ options = [] }) => {
  const [show, setShow] = useState(false)

  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShow(false)
      }
    }
    document.addEventListener('click', handleClickOutside, true)

    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [menuRef])

  return (
    <StyledContainerMenu>
      <Dots src="three-dots.svg" onClick={() => setShow(!show)} />
      <StyledMenu show={show} ref={menuRef} onBlur={() => setShow(false)}>
        {
          options.map((option, pos) =>
            <StyledOption 
              key={`menu-option-${pos}`}
              onClick={option.onClick}
            >
              {option.text}
            </StyledOption>
          )
        }
      </StyledMenu>
    </StyledContainerMenu>
  )
}

export default Menu