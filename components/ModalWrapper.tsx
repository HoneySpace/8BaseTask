import React, { MutableRefObject, useCallback, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom"

const ModalWrapper = ({ children, open, onClose }: { children: any, open: boolean, onClose: (e?: any) => void }) => {
  const [container, setContainer] = useState<HTMLElement>()

  useEffect(() => {
    setContainer(document.getElementById("modalPortal") as HTMLElement)
  }, [])

  const modalWrap = useRef() as MutableRefObject<HTMLDivElement>;

  const inRect = (elm: HTMLElement, mouse: globalThis.MouseEvent) => {
    return ((mouse.clientX >= elm.offsetLeft) && (mouse.clientX < elm.offsetLeft + elm.clientWidth))
      && ((mouse.clientY >= elm.offsetTop) && (mouse.clientY < elm.offsetTop + elm.clientHeight))
  }

  const memoOnClick = useCallback((e: globalThis.MouseEvent) => {
    if (!inRect(modalWrap.current, e)) {
      onClose()
    }
  }, [modalWrap])

  useEffect(() => {
    if (open) {
      window.addEventListener("click", memoOnClick)
    }
    else {
      window.removeEventListener("click", memoOnClick)
    }

    return () => {
      window.removeEventListener("click", memoOnClick)
    }

  }, [open])

  if (!open || !container)
    return null

  return ReactDOM.createPortal(
    <div className="grid h-full w-full place-items-center bg-black bg-opacity-20 pointer-events-auto fade-in">
      {React.cloneElement(children, { ref: modalWrap })}
    </div>
    , container);
}

export default ModalWrapper