import classNames from "classnames";
import {
  ChangeEvent,
  ChangeEventHandler,
  ComponentProps,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useRef,
  useState,
} from "react";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { ErrorMessage } from "../../ErrorMessage";
import { InputView } from "../InputView";

import s from "./InputText.module.scss";

interface InputTextProps extends ComponentProps<"input"> {
  onlyView?: boolean | ((v: unknown) => ReactNode);
  defaultText: string;
  className?: string;
  errors?: string;
}

export function InputText({
  onlyView,
  defaultText,
  className,
  errors,
  ...inputProps
}: PropsWithChildren<InputTextProps>): JSX.Element {
  const [editing, setEditing] = useState<boolean>(false);
  const [value, setValue] = useState<string>();

  const wrapperRef = useRef(null);

  const handleClickOutside = () => {
    setEditing(false);
  };

  useOnClickOutside(wrapperRef, handleClickOutside);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    inputProps?.onChange?.(value as any);
    setValue(value);
  }, []);

  if (onlyView) return <InputView onlyView={onlyView} value={value} />;

  return (
    <div>
      {editing ? (
        <>
          <input
            className={classNames(className)}
            value={value}
            autoFocus
            ref={wrapperRef}
            onChange={handleChange}
          />
        </>
      ) : (
        <div
          className={classNames(className)}
          onClick={() => setEditing((prev) => !prev)}
        >
          {value || defaultText}
        </div>
      )}
      {<ErrorMessage errors={errors} />}
    </div>
  );
}
