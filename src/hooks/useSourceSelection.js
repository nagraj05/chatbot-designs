import { useContext } from "react";
import { SourceSelectionContext } from "../context/SourceSelectionContext";


export const useSourceSelection = () => useContext(SourceSelectionContext)