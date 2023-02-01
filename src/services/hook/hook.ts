import { useRef } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { AppDispatch, AppThunk, RootState } from "../store"


export const useAppDispatch =() => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const inputRef = useRef<HTMLInputElement>(null);

