import {useQuery} from "@tanstack/react-query";
import { api } from "../services/api.ts";

export const useHorarios = () => useQuery(
    { queryKey: ["horarios"], queryFn: api.horarios });
export const useRedes = () => useQuery(
    { queryKey: ["redes"], queryFn: api.redes });
export const useContacto = () => useQuery(
    { queryKey: ["contacto"], queryFn: api.contacto });
export const useVersiculo = () => useQuery(
    { queryKey: ["versiculo"], queryFn: api.versiculo });

