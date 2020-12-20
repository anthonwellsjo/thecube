import { useContext } from "react";
import { PageContext } from "../context/pageContexts";

const Toggle = (page, setPage) => {
  if (mobileMenuMounted) {
    setPage(prev => ({ ...prev, transitionMobileMenu: false, speedBackDrop: "300ms", delayBackDrop: 1, transitionBackDrop: false, }));
    set(index => ({ marginBottom: "8px", marginTop: index == 0 ? "5px" : "0", height: "4px", borderRadius: "10px", backgroundColor: "black" }));
    setTimeout(() => {
      setPage(prev => ({ ...prev, mountMobileMenu: false, mountBackDrop: false, }));
    }, 305);
  }
  if (!mobileMenuMounted) {
    setPage(prev => ({ ...prev, speedBackDrop: "250ms", delayBackDrop: 1, mountMobileMenu: true, transitionMobileMenu: true, transitionBackDrop: true, mountBackDrop: true }));
    set(index => ({ marginBottom: "0", marginTop: index == 0 ? "0" : "5px", height: "12px", borderRadius: "0", backgroundColor: "darkgrey" }));
  }
}

export function useToggleMobileMenu() {
  const [page, setPage] = useContext(PageContext);
  return Toggle(page, setPage);
}


