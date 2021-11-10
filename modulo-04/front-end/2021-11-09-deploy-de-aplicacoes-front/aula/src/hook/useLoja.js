import { useContext } from "react";

import LojaContext from "../context/LojaContext";

export default function useLoja() {
  return useContext(LojaContext);
}
