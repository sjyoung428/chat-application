import type { UseFormRegisterReturn } from "react-hook-form";
import * as S from "./TextInput.style";

interface InputProps {
  placeholder: string;
  register: UseFormRegisterReturn;
}
/**
 * TextInput 컴포넌트
 */
const TextInput = ({ placeholder, register }: InputProps) => {
  return <S.Input {...register} placeholder={placeholder} />;
};

export default TextInput;
