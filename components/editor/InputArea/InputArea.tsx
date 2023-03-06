import classNames from "classnames";
import {
  ChangeEvent,
  ComponentProps,
  PropsWithChildren,
  useCallback,
  useRef,
  useState,
} from "react";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { ErrorMessage } from "../../ErrorMessage";

import s from "./InputArea.module.scss";

interface InputAreaProps extends ComponentProps<"textarea"> {
  onlyView?: JSX.Element;
  defaultText: string;
  className?: string;
  errors?: string;
}

export function InputArea({
  onlyView,
  defaultText,
  className,
  errors,
  ...inputProps
}: PropsWithChildren<InputAreaProps>): JSX.Element {
  const [editing, setEditing] = useState<boolean>(false);
  const [value, setValue] = useState<string>();

  const wrapperRef = useRef(null);

  const handleClickOutside = () => {
    setEditing(false);
  };

  useOnClickOutside(wrapperRef, handleClickOutside);

  const handleChange = useCallback((e: any) => {
    const value = e.target.value;
    inputProps?.onChange?.(value as any);
    setValue(value);
  }, []);

  if (onlyView) return onlyView;

  return (
    <>
      {editing ? (
        <>
          <textarea
            className={classNames(className)}
            value={value}
            autoFocus
            ref={wrapperRef}
            onChange={handleChange as any}
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
    </>
  );
}
